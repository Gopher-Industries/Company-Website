using Google.LongRunning;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Identity;
using ProjectX.WebAPI.Models.Database;
using System.Security.Cryptography;
using System.Text;

namespace ProjectX.WebAPI.Services
{

    public interface IPasswordEncryptionService
    {

        public UserAuthenticationModel EncryptPassword(string PlainTextPassword);

        public bool MatchingPassword(string PlainTextPassword, UserAuthenticationModel AuthModel);

    }

    public class BCryptPasswordEncryptionService : IPasswordEncryptionService
    {
        
        public UserAuthenticationModel EncryptPassword(string PlainTextPassword)
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
                hashType: BCrypt.Net.HashType.SHA384);

            return UserAuth;
            
        }

        public bool MatchingPassword(string PlainTextPassword, UserAuthenticationModel AuthModel)
        {

            return BCrypt.Net.BCrypt.Verify(
                text: AuthModel.Salt + PlainTextPassword + AuthModel.Pepper,
                hash: AuthModel.HashedPassword,
                enhancedEntropy: true,
                hashType: BCrypt.Net.HashType.SHA384);

        }

    }

}
