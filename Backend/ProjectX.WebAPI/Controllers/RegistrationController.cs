using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectX.WebAPI.Models.Rest;
using ProjectX.WebAPI.Services;
using Swashbuckle.AspNetCore.Annotations;

namespace ProjectX.WebAPI.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("api/v1/registration")]
    [SwaggerTag(description: "<h3>User registration management endpoint</h3>")]
    public class RegistrationController : ControllerBase
    {
        private readonly IDatabaseService databaseService;
        private readonly IEmailConfirmationService emailConfirmationService;
        private readonly IAuthenticationService authService;

        public RegistrationController(IDatabaseService DatabaseService, 
                                      IEmailConfirmationService EmailConfirmationService,
                                      IAuthenticationService AuthenticationService)
        {
            databaseService = DatabaseService;
            emailConfirmationService = EmailConfirmationService;
            authService = AuthenticationService;
        }

        /// <summary>
        /// This is where users can register their account
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost("register")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status409Conflict)]
        [SwaggerOperation(summary: "Register a user by parsing a request to this endpoint")]
        [SwaggerResponse(StatusCodes.Status201Created, description: "The user was registered successfully")]
        [SwaggerResponse(StatusCodes.Status409Conflict, description: "The user already exists within the service")]
        public async Task<ObjectResult> Register([FromBody] CreateUserRequest Request)
        {

            // Ensure that the user doesn't already exist

            if (await this.databaseService.GetUser(new FindUserRequest { Username = Request.Username }) != null)
                return StatusCode(StatusCodes.Status409Conflict, value: "User already exists.");

            var Auth = authService.GenerateAuthenticationModel(Request.Password);

            var CreatedUser = await this.databaseService.CreateUser(Request, Auth).ConfigureAwait(false);

            // Queue the sending of the confirmation email, but just return OK without waiting for sendgrid to respond.
            _ = emailConfirmationService.SendConfirmationEmail(CreatedUser).ConfigureAwait(false);

            return StatusCode(StatusCodes.Status201Created, value: "Created user successfully!");

        }

        /// <summary>
        /// This is where callbacks come to validate the email address.
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet("validate")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [SwaggerOperation(summary: "Validate a users email by parsing their UserId to this endpoint")]
        [SwaggerResponse(StatusCodes.Status202Accepted, description: "The user had their email verified successfully.")]
        [SwaggerResponse(StatusCodes.Status400BadRequest, description: "The user Id does not exist.")]
        public async Task<StatusCodeResult> ValidateEmail([FromQuery] string UserId)
        {

            // Try and validate the user email, and if it fails, return BadRequest
            return await this.databaseService.ValidateUserEmail(UserId)
                                             .ConfigureAwait(false) 
                                             ? StatusCode(StatusCodes.Status202Accepted) : BadRequest();

        }

    }
}
