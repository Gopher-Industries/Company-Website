using Google.LongRunning;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using ProjectX.WebAPI.Models.Database;
using System.Security.Cryptography;
using System.Text;

namespace ProjectX.WebAPI.Services
{

    public interface IAuthenticationService
    {

        public UserAuthenticationModel GenerateAuthenticationModel(string PlainTextPassword);

        public bool MatchingPassword(string PlainTextPassword, UserAuthenticationModel? AuthModel);

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

    }

}
