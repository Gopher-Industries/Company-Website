using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectX.WebAPI.Services;
using System.Security.Claims;

namespace ProjectX.WebAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/v1/auth")]
    public class AuthenticationController : ControllerBase
    {

        private readonly ITokenService tokenService;
        private readonly INoSqlDatabaseService database;
        private readonly IPasswordEncryptionService passwordService;

        public AuthenticationController(ITokenService TokenService, 
                              INoSqlDatabaseService Database,
                              IPasswordEncryptionService PasswordService)
        {
            tokenService = TokenService;
            database = Database;
            passwordService = PasswordService;
        }

        /// <summary>
        /// This is where users can login to their account
        /// </summary>
        /// <param name="userId"></param>
        /// <returns>A JWT Token used for authentication for all API services. Bearer token schema.</returns>
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<string> Login([FromQuery] string Username, [FromQuery] string Password)
        {

            var UserAuth = await database.GetUserAuthentication(Username).ConfigureAwait(false);
            return passwordService.MatchingPassword(Password, UserAuth) ? 
                tokenService.BuildToken(await database.GetUser(Username).ConfigureAwait(false)) : String.Empty;

        }

        [HttpPost("validate")]
        public async Task<string> Validate()
        {
            var x = this.User.Identities;
            var user = this.User.Claims.Where(x => x.Type == ClaimTypes.NameIdentifier).First();
            return $"Your user id is: { user.Value}";
        }

    }
}
