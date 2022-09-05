using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectX.WebAPI.Models.Database.Authentication;
using ProjectX.WebAPI.Models.RestRequests.Request;
using ProjectX.WebAPI.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectX.WebAPI.Controllers
{
    [Route("api/users")]
    [ApiController]
    [Authorize]
    public class UsersController : ControllerBase
    {

        private readonly IDatabaseService database;
        private readonly IAuthenticationService authService;
        private readonly ITokenService tokenService;

        public UsersController(IDatabaseService Database, 
                               IAuthenticationService AuthService,
                               ITokenService TokenService)
        {
            database = Database;
            authService = AuthService;
            tokenService = TokenService;
        }

        /// <summary>
        /// Retrieve information regarding a user
        /// </summary>
        /// <param name="UserId"></param>
        /// <returns></returns>
        [HttpGet("{UserId}", Name = "Get User")]
        public async Task<ObjectResult> GetUser([FromQuery] string UserId)
        {
            
            var AccessToken = this.tokenService.ReadAccessToken(this.HttpContext.User);

            // If they try and access someone elses account as a standard user
            if (AccessToken.UserId != UserId && AccessToken.Role != UserRole.Admin)
                return Unauthorized(value: "You are not an admin user and therefore cannot access other peoples accounts.");

            var UserAcc = await this.database.GetUser(new FindUserRequest { UserId = UserId }).ConfigureAwait(false);

            return UserAcc is null ? 
                   Ok(UserAcc) : 
                   NotFound($"User was not found: '{ UserId }'");

        }

    }
}
