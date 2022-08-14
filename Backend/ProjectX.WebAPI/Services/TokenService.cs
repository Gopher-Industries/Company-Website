using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProjectX.WebAPI.Models;
using ProjectX.WebAPI.Models.Database;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ProjectX.WebAPI.Services
{

    public interface ITokenService
    {

        public string BuildToken(UserModel User);

    }

    public class TokenService : ITokenService
    {

        private const double EXPIRY_DURATION_MINUTES = 120;

        private readonly IOptions<ApplicationHostSettings> hostSettings;
        private readonly IOptions<ApplicationIdentitySettings> appIdentitySettings;

        public TokenService(IOptions<ApplicationHostSettings> hostSettings,
                            IOptions<ApplicationIdentitySettings> appIdentitySettings)
        {
            this.hostSettings = hostSettings;
            this.appIdentitySettings = appIdentitySettings;
        }

        public string BuildToken(UserModel User)
        {
            var claims = new[] {
                new Claim(ClaimTypes.Name, User.Username),
                new Claim(ClaimTypes.Role, "Default Role"),
                new Claim(ClaimTypes.NameIdentifier, User.UserId)
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(appIdentitySettings.Value.JWTSecret));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);
            var tokenDescriptor = new JwtSecurityToken(hostSettings.Value.ExternalUrl, hostSettings.Value.ExternalUrl, claims,
                expires: DateTime.Now.AddMinutes(EXPIRY_DURATION_MINUTES), signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(tokenDescriptor);
        }

    }
}
