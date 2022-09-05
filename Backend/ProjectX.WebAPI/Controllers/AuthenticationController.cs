using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectX.WebAPI.Models;
using ProjectX.WebAPI.Models.RestRequests.Request;
using ProjectX.WebAPI.Models.RestRequests.Response;
using ProjectX.WebAPI.Services;
using ProjectX.WebAPI.Swagger;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.Filters;

namespace ProjectX.WebAPI.Controllers
{
    [ApiController]
    [Authorize]
    [Route("api/v1/auth")]
    [SwaggerTag(description: "<h3>Authentication Management Endpoint</h3>")]
    public class AuthenticationController : ControllerBase
    {

        private readonly ITokenService tokenService;
        private readonly IDatabaseService database;
        private readonly IAuthenticationService authService;

        public AuthenticationController(ITokenService TokenService, 
                                        IDatabaseService Database,
                                        IAuthenticationService AuthService)
        {
            tokenService = TokenService;
            database = Database;
            authService = AuthService;
        }

        /// <summary>
        /// This is where users can login to their account
        /// </summary>
        /// <returns></returns>
        [HttpPost("login")]
        [AllowAnonymous]
        [SwaggerResponse(StatusCodes.Status202Accepted, description: "The user was registered successfully", typeof(LoginResponse))]
        [SwaggerResponse(StatusCodes.Status401Unauthorized, description: "Login credentials failed")]
        [SwaggerResponseExample(StatusCodes.Status202Accepted, typeof(AuthenticationExamples))]
        public async Task<ObjectResult> Login([FromBody] LoginRequest Request)
        {

            var User = await database.GetUser(new FindUserRequest { Username = Request.Username }).ConfigureAwait(false);

            if (User is null)
                return Unauthorized(value: "Username or password was wrong.");

            var UserAuth = await database.GetUserAuthentication(User).ConfigureAwait(false);

            if (authService.MatchingPassword(Request.Password, UserAuth) == false)
                return Unauthorized(value: "Username or password was wrong.");

            var RefreshToken = tokenService.BuildRefreshToken(User);

            // Continue without waiting to update the refresh token in the database.
            _ = this.database.UpdateRefreshToken(User, RefreshToken).ConfigureAwait(false);

            return Accepted(value: new LoginResponse
            {
                AccessToken = tokenService.BuildAccessToken(User).SignedJWT,
                RefreshToken = RefreshToken.SignedJWT
            });
            
        }

        /// <summary>
        /// This is where users can use their refresh tokens to generate a new access token
        /// </summary>
        /// <returns>A JWT Token used for authentication for all API services. Bearer token schema.</returns>
        [HttpPost("refresh")]
        [AllowAnonymous]
        [SwaggerResponse(StatusCodes.Status200OK, description: "The authentication refresh was successful!", typeof(LoginResponse))]
        [SwaggerResponse(StatusCodes.Status401Unauthorized, description: "The refresh token was invalid or has been revoked.")]
        [SwaggerResponseExample(StatusCodes.Status200OK, typeof(AuthenticationExamples))]
        public async Task<ObjectResult> Refresh([FromBody] RefreshAccessTokenRequest Request)
        {

            //
            // Because we use a different JWT secret to sign refresh tokens, we have to manually validate it.
            // Ew.
            // Not too much work doe.

            var InputRefreshToken = tokenService.ReadRefreshToken(Request.RefreshToken);

            var NewRefreshToken = tokenService.BuildRefreshToken(InputRefreshToken);

            var User = await database.GetUser(new FindUserRequest { UserId = InputRefreshToken.UserId }).ConfigureAwait(false);
            var UserAuth = await database.GetUserAuthentication(User).ConfigureAwait(false);

            //
            // Lets check if the JWT signatures match the database
            var DatabaseRefreshTokenEntry = await this.database.GetRefreshToken(User, InputRefreshToken.TokenId).ConfigureAwait(false);
            if (DatabaseRefreshTokenEntry is null)
                return Unauthorized(value: "Refresh token invalid.");

            if (DatabaseRefreshTokenEntry.Secret != InputRefreshToken.Secret)
                return Unauthorized(value: "Refresh token invalid.");

            _ = this.database.UpdateRefreshToken(User, NewRefreshToken).ConfigureAwait(false);

            return Accepted(value: new LoginResponse
            {
                AccessToken = tokenService.BuildAccessToken(NewRefreshToken).SignedJWT,
                RefreshToken = NewRefreshToken.SignedJWT
            });

        }

        /// <summary>
        /// An endpoint to validate the JWT token.
        /// </summary>
        /// <returns></returns>
        [HttpPost("validate")]
        [SwaggerResponse(StatusCodes.Status200OK, description: "The JWT token in use is valid and accepted by the server")]
        [SwaggerResponse(StatusCodes.Status401Unauthorized, description: "Failed to validate your token.")]
        public async Task<ObjectResult> Validate()
        {
            // Just list their claims, debug code really.
            return Ok(value: $"Here are your valid claims: \n{string.Join('\n', this.User.Claims.Select(x => $"\"{ x.Type }\": \"{ x.Value }\"").ToList())}");
        }

    }
}
