using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using Microsoft.Extensions.Caching.Memory;
using ProjectX.WebAPI.Models.Database.Authentication;
using ProjectX.WebAPI.Models.Database.Timeline;
using ProjectX.WebAPI.Models.RestRequests.Request;
using ProjectX.WebAPI.Models.RestRequests.Response;
using System.Runtime.Serialization.Formatters.Binary;
using static Google.Rpc.Context.AttributeContext.Types;

namespace ProjectX.WebAPI.Services
{
    public interface IDatabaseService
    {

        /// <summary>
        /// Create a user in the database using the <see cref="CreateUserRequest"/> 
        /// and a corresponding <see cref="UserAuthenticationModel"/>
        /// </summary>
        /// <param name="User">Information relating to the user to create</param>
        /// <param name="Authentication">Authentication information relating to the user, like their password, etc</param>
        /// <returns>The user created in the database</returns>
        public Task<UserModel> CreateUser(CreateUserRequest User, UserAuthenticationModel Authentication);

        /// <summary>
        /// Finds a single user based on some query parameters in <see cref="FindUserRequest"/>
        /// </summary>
        /// <param name="Request">The query parameters to search for the user</param>
        /// <returns></returns>
        public Task<UserModel?> GetUser(FindUserRequest Request);

        /// <summary>
        /// Get the authentication information of a user
        /// </summary>
        /// <param name="User"></param>
        /// <returns></returns>
        public Task<UserAuthenticationModel> GetUserAuthentication(UserModel User);

        /// <summary>
        /// Validates all refresh tokens against the user. AKA clear out old tokens.
        /// </summary>
        /// <param name="User">The user that the refresh tokens belongs to</param>
        /// <returns>Invalid refresh tokens</returns>
        public Task<IReadOnlyList<RefreshTokenDatabaseEntry>> ValidateUserRefreshTokens(UserModel User);

        /// <summary>
        /// Retrieves a refresh token for a user 
        /// </summary>
        /// <param name="User">The user that the refresh token belongs to</param>
        /// <param name="TokenId">The token id to search the database for</param>
        /// <returns></returns>
        public Task<RefreshTokenDatabaseEntry?> GetRefreshToken(UserModel User, string TokenId);

        /// <summary>
        /// Update a refresh token for a user 
        /// </summary>
        /// <param name="User">The user that the refresh token belongs to</param>
        /// <param name="NewRefreshToken">The refresh token to update</param>
        /// <returns></returns>
        public Task<bool> UpdateRefreshToken(UserModel User, RefreshToken NewRefreshToken);

        /// <summary>
        /// Update the field 'ValidEmail' to be true for the user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        public Task<bool> VerifyUserEmail(string UserId);

        /// <summary>
        /// Get a list of timelines
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        public Task<List<CompanyTeamRestModel>> GetTimeline(TimelineRequest Request);

    }



    /// <summary>
    /// Provides access to the firestore database.
    /// </summary>
    public class FirestoreDatabase : IDatabaseService
    {

        private readonly FirestoreDb Database;
        private readonly IMemoryCache cache;
        private readonly ITokenService tokenService;
        private readonly MemoryCacheEntryOptions _userModelCacheOptions = new MemoryCacheEntryOptions()
        {
            Size = 500, // I did some very basic investigation and found UserModel's usually ~272 bytes in memory. 500 is buffer.
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(60)
        };
        private readonly MemoryCacheEntryOptions _userAuthModelCacheOptions = new MemoryCacheEntryOptions()
        {
            Size = 400, // I did some very basic investigation and found UserModel's usually ~350 bytes in memory. 400 is buffer.
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(6)
        };
        private readonly MemoryCacheEntryOptions _userModelCopyCacheOptions = new MemoryCacheEntryOptions()
        {
            Size = 0, // We store copies pointing to the same block of memory so all good size is 0
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(60)
        };
        private readonly MemoryCacheEntryOptions _timelineCache = new MemoryCacheEntryOptions()
        {
            Size = 500, // I did some very basic investigation and found UserModel's usually ~200 bytes in memory. 500 is buffer.
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(60)
        };

        public FirestoreDatabase(IMemoryCache Cache, ITokenService TokenService)
        {
            Database = InitializeDatabaseConnection().ConfigureAwait(false).GetAwaiter().GetResult();
            cache = Cache;
            tokenService = TokenService;
        }

        /// <summary>
        /// Create the initial connection to the database.
        /// </summary>
        /// <returns>A constructed <see cref="FirestoreDb"/> class to access firestore through</returns>
        private async Task<FirestoreDb> InitializeDatabaseConnection()
        {

            //
            // To change any of the authentication / login in database setup,
            // please refer to this to change the project that this connects to.
            // https://cloud.google.com/docs/authentication/production
            //

            // Retrieve the credentials from the JSON file
            var CredentialsJson = File.ReadAllText(Path.Combine("Credentials", "prototypeprojectx-access.json"));
            var builder = new FirestoreClientBuilder { JsonCredentials = CredentialsJson };

            // Connect to the firestore database
            return await FirestoreDb.CreateAsync(projectId: "prototypeprojectx", client: builder.Build()).ConfigureAwait(false);

        }

        public async Task<UserModel> CreateUser(CreateUserRequest Request, UserAuthenticationModel Authentication)
        {

            var NewUser = new UserModel(
            
                UserId: Guid.NewGuid().ToString(),
                Username: Request.Username,
                DateOfBirth: Request.DateOfBirth,
                Email: Request.Email,
                Organisation: Request.OrganisationName
            );

            await this.Database.Collection("Users").Document(NewUser.UserId).CreateAsync(NewUser).ConfigureAwait(false);
            await this.Database.Collection("UsersAuthentication").Document(NewUser.UserId).CreateAsync(Authentication).ConfigureAwait(false);

            // Insert user into cache
            cache.Set(NewUser.UserId, NewUser, _userModelCacheOptions);
            cache.Set(NewUser.Username, NewUser, _userModelCacheOptions);
            cache.Set(NewUser.UserId + "-Auth", Authentication);

            return NewUser;

        }

        /// <summary>
        /// Find a user based on search criteria
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        public async Task<UserModel?> GetUser(FindUserRequest Request)
        {

            UserModel? user;

            //
            // Find based on the UserId
            if (Request.UserId != null)
            {
                if (cache.TryGetValue(Request.UserId, out user))
                    return user;

                user = (await Database.Collection("Users")
                                      .Document(Request.UserId)
                                      .GetSnapshotAsync().ConfigureAwait(false))?
                                      .ConvertTo<UserModel>();

                if (user == null)
                    return null;

                // Cache the user for later
                cache.Set(user.UserId, user, _userModelCacheOptions);
                cache.Set(user.Username, user, _userModelCopyCacheOptions);

            }

            //
            // Find based on the Username
            else if (Request.Username != null)
            {

                if (cache.TryGetValue(Request.Username, out user))
                    return user;

                user = (await Database.Collection("Users")
                                  .WhereEqualTo("Username", Request.Username)
                                  .Limit(1)
                                  .GetSnapshotAsync().ConfigureAwait(false))
                                  .FirstOrDefault()?
                                  .ConvertTo<UserModel>();

                if (user == null)
                    return null;

                // Cache the user for later
                cache.Set(user.UserId, user, _userModelCacheOptions);
                cache.Set(user.Username, user, _userModelCopyCacheOptions);
            }

            //
            // Find based on the Email
            else
            {

                user = (await Database.Collection("Users")
                                  .WhereEqualTo("Email", Request.Email)
                                  .Limit(1)
                                  .GetSnapshotAsync().ConfigureAwait(false))
                                  .FirstOrDefault()?
                                  .ConvertTo<UserModel>();

                if (user == null)
                    return null;

                // Cache the user for later
                cache.Set(user.UserId, user, _userModelCacheOptions);
                cache.Set(user.Username, user, _userModelCopyCacheOptions);

            }

            return user;

        }

        public async Task<UserAuthenticationModel> GetUserAuthentication(UserModel User)
        {

            //
            // Check if we have the auth cached
            if (cache.TryGetValue(User.UserId + "-Auth", out UserAuthenticationModel UserAuth))
                return UserAuth;

            // Retrieve the users authentication from the database
            UserAuth = (await Database.Collection("UsersAuthentication")
                                      .Document(User.UserId)
                                      .GetSnapshotAsync()
                                      .ConfigureAwait(false))
                                      .ConvertTo<UserAuthenticationModel>();

            cache.Set(User.UserId + "-Auth", UserAuth, _userAuthModelCacheOptions);

            return UserAuth;

        }

        public async Task<RefreshTokenDatabaseEntry?> GetRefreshToken(UserModel User, string TokenId)
        {

            // Instruct database to delete any docs that aren't valid
            await this.ValidateUserRefreshTokens(User).ConfigureAwait(false);

            //
            // Find the refresh token and return it
            return (await Database.Collection("UsersAuthentication")
                                  .Document(User.UserId)
                                  .Collection("RefreshTokens")
                                  .Document(TokenId)
                                  .GetSnapshotAsync()
                                  .ConfigureAwait(false))?
                                  .ConvertTo<RefreshTokenDatabaseEntry?>();

        }

        public async Task<IReadOnlyList<RefreshTokenDatabaseEntry>> ValidateUserRefreshTokens(UserModel User)
        {

            // Instruct database to delete any docs that aren't valid
            var ExpieredDocs = (await Database.Collection("UsersAuthentication")
                                              .Document(User.UserId)
                                              .Collection("RefreshTokens")
                                              .WhereLessThanOrEqualTo("ValidUntil", DateTime.UtcNow)
                                              .GetSnapshotAsync()
                                              .ConfigureAwait(false));

            // Wait while all deletes happen
            Task.WaitAll(ExpieredDocs.Select(x => x.Reference.DeleteAsync()).ToArray());

            // Return all the deleted tokens
            return ExpieredDocs.Select(x => x.ConvertTo<RefreshTokenDatabaseEntry>()).ToList();

        }

        public async Task<bool> UpdateRefreshToken(UserModel User, RefreshToken RefreshToken)
        {

            // Because google is smart, it sees through our polymorphism and sees that the RefreshTokenDatabaseEntry
            // is actually RefreshToken. Therefore, we just shallow copy the data over to a real instance
            // of RefreshTokenDatabaseEntry lol

            var DbEntry = new RefreshTokenDatabaseEntry
            {
                Secret = RefreshToken.Secret,
                TokenId = RefreshToken.TokenId,
                ValidUntil = RefreshToken.ValidUntil
            };

            return (await Database.Collection("UsersAuthentication")
                                       .Document(User.UserId)
                                       .Collection("RefreshTokens")
                                       .Document(RefreshToken.TokenId)
                                       .SetAsync(DbEntry)
                                       .ConfigureAwait(false)) != null;

        }

        public async Task<bool> VerifyUserEmail(string UserId)
        {

            // Update cached value of user
            var User = cache.Get<UserModel>(UserId);

            if (await Database.Collection("Users").Document(UserId).UpdateAsync("EmailVerified", true) != null)
                return User.EmailVerified = true;

            return false;

        }

        public async Task<List<CompanyTeamRestModel>> GetTimeline(TimelineRequest Request)
        {

            var Teams = new List<CompanyTeamRestModel>();

            var FilteredTeamNames = Request.TeamName?
                                           .Split(',')
                                           .Select(x => x.Trim());

            var FilteredStudentIds = Request.StudentId?
                                            .Split(',')
                                            .Select(x => x.Trim());

            List<TeamStudent>? StudentQuery = null;

            if (Request.StudentId is not null)
            {

                StudentQuery = (await this.Database.Collection("Timeline")
                                                   .Document("Collections")
                                                   .Collection("Students")
                                                   .WhereIn(FieldPath.DocumentId, FilteredStudentIds)
                                                   .GetSnapshotAsync().ConfigureAwait(false))
                                                   .Select(x => x.ConvertTo<TeamStudent>()).ToList();

                // Filter the team names by the teams that the students belong to
                if (FilteredTeamNames is not null)
                {
                    FilteredTeamNames = StudentQuery.SelectMany(x =>
                                                        x.TeamId.Split(',').Select(id => id.Trim()))
                                                    .Distinct()
                                                    .Where(x => FilteredTeamNames is null || FilteredTeamNames.Contains(x)).ToList();

                    if (FilteredTeamNames.Any() is false)
                        return Teams;

                }

            }

            var TeamQuery = this.Database.Collection("Timeline")
                                         .Document("Collections")
                                         .Collection("Teams")
                                         .WhereEqualTo(nameof(CompanyTeam.Trimester), Request.Trimester)
                                         as Query;

            

            // No filter on Team Name. Return all teams.
            if (FilteredTeamNames is not null)
            {
                // Select only teams with specific team names
                TeamQuery = TeamQuery.WhereIn(nameof(CompanyTeam.TeamName), FilteredTeamNames);
            }

            Teams = (await TeamQuery.GetSnapshotAsync().ConfigureAwait(false))
                                .Select(x => x.ConvertTo<CompanyTeamRestModel>())
                                .ToList();

            StudentQuery ??= (await this.Database.Collection("Timeline")
                                                 .Document("Collections")
                                                 .Collection("Students")
                                                 .WhereIn(nameof(TeamStudent.TeamId), Teams.Select(x => x.TeamId))
                                                 .GetSnapshotAsync().ConfigureAwait(false))
                                                 .Select(x => x.ConvertTo<TeamStudent>()).ToList();

            foreach (var Team in Teams)
                Team.Students = StudentQuery.Where(x => x.TeamId == Team.TeamId).ToList();

            return Teams;

        }


    }
}
