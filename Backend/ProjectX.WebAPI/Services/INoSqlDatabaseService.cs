using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Google.Cloud.Firestore.V1;
using Microsoft.Extensions.Caching.Memory;
using ProjectX.WebAPI.Models.Database;
using System.Diagnostics;
using System.Threading.Channels;
using static Google.Cloud.Firestore.V1.StructuredQuery.Types;

namespace ProjectX.WebAPI.Services
{
    public interface INoSqlDatabaseService
    {

        public Task<UserModel> CreateUser(CreateUserRequest Request, UserAuthenticationModel Authentication);

        public Task<UserModel> GetUser(string Username);

        public Task<UserAuthenticationModel> GetUserAuthentication(string Username);

        public Task<bool> ValidateUserEmail(string UserId);

    }

    

    /// <summary>
    /// Provides access to the firestore database.
    /// </summary>
    public class FirestoreDatabase : INoSqlDatabaseService
    {

        private readonly FirestoreDb Database;
        private readonly IMemoryCache cache;
        private readonly MemoryCacheEntryOptions _defaultEntryOptions = new MemoryCacheEntryOptions()
        {
            Size = 4000,
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(5)
        };

        public FirestoreDatabase(IMemoryCache Cache)
        {
            Database = InitializeDatabaseConnection().ConfigureAwait(false).GetAwaiter().GetResult();
            cache = Cache;
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
            var CredentialsJson = File.ReadAllText("Credentials\\prototypeprojectx-access.json");
            var builder = new FirestoreClientBuilder { JsonCredentials = CredentialsJson };

            // Connect to the 
            return await FirestoreDb.CreateAsync(projectId: "prototypeprojectx", client: builder.Build()).ConfigureAwait(false);

        }

        public async Task<UserModel> CreateUser(CreateUserRequest Request, UserAuthenticationModel Authentication)
        {

            var NewUser = new UserModel()
            {
                UserId = Guid.NewGuid().ToString(),
                Username = Request.UserName,
                DateOfBirth = Request.DateOfBirth,
                Created = DateTime.UtcNow,
                Email = Request.Email,
            };

            await this.Database.Collection("Users").Document(NewUser.UserId).CreateAsync(NewUser).ConfigureAwait(false);
            await this.Database.Collection("UsersAuthentication").Document(NewUser.UserId).CreateAsync(Authentication).ConfigureAwait(false);

            // Insert into cache
            cache.Set(NewUser.UserId, NewUser, _defaultEntryOptions);
            cache.Set(NewUser.Username, NewUser, _defaultEntryOptions);

            return NewUser;

        }

        public async Task<UserModel> GetUser(string Username)
        {

            if (cache.TryGetValue(Username, out UserModel user))
                return user;

            user = (await Database.Collection("Users")
                                  .WhereEqualTo("Username", Username)
                                  .Limit(1)
                                  .GetSnapshotAsync().ConfigureAwait(false))
                                  .First()
                                  .ConvertTo<UserModel>();

            // Cache the user for later
            cache.Set(user.UserId, user, _defaultEntryOptions);
            cache.Set(user.Username, user, _defaultEntryOptions);

            return user;

        }

        public async Task<UserAuthenticationModel> GetUserAuthentication(string Username)
        {

            var User = await this.GetUser(Username).ConfigureAwait(false);

            // Retrieve the users authentication from the database
            return (await Database.Collection("UsersAuthentication")
                                  .Document(User.UserId)
                                  .GetSnapshotAsync()
                                  .ConfigureAwait(false))
                                  .ConvertTo<UserAuthenticationModel>();

        }

        public async Task<bool> ValidateUserEmail(string UserId)
        {

            //
            // TODO: This is quite slow (60ms to find an entry thats indexed and then update it??? Wow GCP is slow.)
            // Something we can do is instead pass through the document id so we dont have to search through the
            // entire database.

            //var Document = (await Database.Collection("Users")
            //                                  .Select("UserId")
            //                                  .WhereEqualTo("UserId", UserId)
            //                                  .Limit(1)
            //                                  .GetSnapshotAsync().ConfigureAwait(false))
            //                                  .First();

            // FIX: We just name the documents the same as the UserId. Lmao. Ez.

            // Invalidate cache for user
            var User = cache.Get<UserModel>(UserId);
            cache.Remove(UserId);
            cache.Remove(User.Username);

            return await Database.Collection("Users").Document(UserId).UpdateAsync("EmailVerified", true) != null;

        }

        
    }
}
