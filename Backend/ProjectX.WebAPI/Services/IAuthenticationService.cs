using Google.LongRunning;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using ProjectX.WebAPI.Models;
using ProjectX.WebAPI.Models.Database;
using System.Security.Cryptography;
using System.Text;

namespace ProjectX.WebAPI.Services
{

    public interface IAuthenticationService
    {

        /// <summary>
        /// Creates an authentication model using a plain text password.
        /// </summary>
        /// <param name="PlainTextPassword"></param>
        /// <returns></returns>
        public UserAuthenticationModel GenerateAuthenticationModel(string PlainTextPassword);

        /// <summary>
        /// Checks whether a given password matches against our saved authentication model
        /// </summary>
        /// <param name="PlainTextPassword"></param>
        /// <param name="AuthModel"></param>
        /// <returns></returns>
        public bool MatchingPassword(string PlainTextPassword, UserAuthenticationModel? AuthModel);

        /// <summary>
        /// Check if the user has the minimum authorization level 
        /// in order to do things like access an api service
        /// </summary>
        /// <param name="AuthModel"></param>
        /// <param name="MinimumAuthorization"></param>
        /// <returns></returns>
        public bool HasPermission(UserAuthenticationModel AuthModel, UserRole MinimumAuthorization);

    }

    public class BCryptAuthenticationService : IAuthenticationService
    {

        private readonly ITokenService tokenService;

        public BCryptAuthenticationService(ITokenService TokenService)
        {
            tokenService = TokenService;
        }

        public UserAuthenticationModel GenerateAuthenticationModel(string PlainTextPassword)
        {

            var UserAuth = new UserAuthenticationModel()
            {
                Salt = Encoding.ASCII.GetString(RandomNumberGenerator.GetBytes(20)),
                Pepper = Encoding.ASCII.GetString(RandomNumberGenerator.GetBytes(20))
            };

            UserAuth.HashedPassword = BCrypt.Net.BCrypt.HashPassword(
                inputKey: UserAuth.Salt + PlainTextPassword + UserAuth.Pepper, 
                salt: BCrypt.Net.BCrypt.GenerateSalt(workFactor: 10), // Work factor: Between 1 and 31
                enhancedEntropy: true, 
                hashType: BCrypt.Net.HashType.SHA512);

            return UserAuth;
            
        }

        public bool MatchingPassword(string PlainTextPassword, UserAuthenticationModel? AuthModel)
        {

            if (AuthModel == null)
                return false;

            return BCrypt.Net.BCrypt.Verify(
                text: AuthModel.Salt + PlainTextPassword + AuthModel.Pepper,
                hash: AuthModel.HashedPassword,
                enhancedEntropy: true,
                hashType: BCrypt.Net.HashType.SHA512);

        }

        public bool HasPermission(UserAuthenticationModel AuthModel, UserRole MinimumAuthorization)
        {

            if (MinimumAuthorization == UserRole.User)
                return true;

            if (MinimumAuthorization == UserRole.Caregiver)
                return AuthModel.Role != UserRole.User;

            if (MinimumAuthorization == UserRole.Admin)
                return AuthModel.Role == UserRole.Admin;

            throw new NotImplementedException("An error with reading permissions has occured.");

        }

    }

}
