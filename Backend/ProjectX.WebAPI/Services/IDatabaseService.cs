using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using Microsoft.Extensions.Caching.Memory;
using ProjectX.WebAPI.Models;
using ProjectX.WebAPI.Models.Database;
using ProjectX.WebAPI.Models.Rest;

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
        /// Get the authentication information of a user using query parameters to find the user
        /// </summary>
        /// <param name="Request"></param>
        /// <returns></returns>
        public Task<UserAuthenticationModel> GetUserAuthentication(FindUserRequest Request);

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
        /// <param name="NewRefreshToken">The refresh token to update</param>
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
        public Task<bool> ValidateUserEmail(string UserId);

    }



    /// <summary>
    /// Provides access to the firestore database.
    /// </summary>
    public class FirestoreDatabase : IDatabaseService
    {

        private readonly FirestoreDb Database;
        private readonly IMemoryCache cache;
        private readonly ITokenService tokenService;
        private readonly MemoryCacheEntryOptions _defaultUserModelCacheOptions = new MemoryCacheEntryOptions()
        {
            Size = 500, // I did some very basic investigation and found UserModel's usually ~224 bytes in memory. 500 is buffer.
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
        };
        private readonly MemoryCacheEntryOptions _defaultUserModelCopyCacheOptions = new MemoryCacheEntryOptions()
        {
            Size = 0, // We store copies pointing to the same block of memory so all good size is 0
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
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

            // Connect to the 
            return await FirestoreDb.CreateAsync(projectId: "prototypeprojectx", client: builder.Build()).ConfigureAwait(false);

        }

        public async Task<UserModel> CreateUser(CreateUserRequest Request, UserAuthenticationModel Authentication)
        {

            var NewUser = new UserModel()
            {
                UserId = Guid.NewGuid().ToString(),
                Username = Request.Username,
                DateOfBirth = Request.DateOfBirth,
                Created = DateTime.UtcNow,
                Email = Request.Email,
            };

            await this.Database.Collection("Users").Document(NewUser.UserId).CreateAsync(NewUser).ConfigureAwait(false);
            await this.Database.Collection("UsersAuthentication").Document(NewUser.UserId).CreateAsync(Authentication).ConfigureAwait(false);

            // Insert into cache
            cache.Set(NewUser.UserId, NewUser, _defaultUserModelCacheOptions);
            cache.Set(NewUser.Username, NewUser, _defaultUserModelCacheOptions);

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
                cache.Set(user.UserId, user, _defaultUserModelCacheOptions);
                cache.Set(user.Username, user, _defaultUserModelCopyCacheOptions);

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
                cache.Set(user.UserId, user, _defaultUserModelCacheOptions);
                cache.Set(user.Username, user, _defaultUserModelCopyCacheOptions);
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
                cache.Set(user.UserId, user, _defaultUserModelCacheOptions);
                cache.Set(user.Username, user, _defaultUserModelCopyCacheOptions);

            }

            return user;

        }

        public async Task<UserAuthenticationModel> GetUserAuthentication(UserModel User)
        {

            // Retrieve the users authentication from the database
            return (await Database.Collection("UsersAuthentication")
                                  .Document(User.UserId)
                                  .GetSnapshotAsync()
                                  .ConfigureAwait(false))
                                  .ConvertTo<UserAuthenticationModel>();

        }

        public async Task<UserAuthenticationModel> GetUserAuthentication(FindUserRequest UserQuery)
        {

            var User = await this.GetUser(UserQuery).ConfigureAwait(false);

            // Retrieve the users authentication from the database
            return (await Database.Collection("UsersAuthentication")
                                  .Document(User.UserId)
                                  .GetSnapshotAsync()
                                  .ConfigureAwait(false))
                                  .ConvertTo<UserAuthenticationModel>();

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

        public async Task<bool> ValidateUserEmail(string UserId)
        {

            // Update cached value of user
            var User = cache.Get<UserModel>(UserId);

            if (await Database.Collection("Users").Document(UserId).UpdateAsync("EmailVerified", true) != null)
                return User.EmailVerified = true;

            return false;

        }


    }
}
