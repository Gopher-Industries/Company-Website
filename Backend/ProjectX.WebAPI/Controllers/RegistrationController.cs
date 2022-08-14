using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectX.WebAPI.Models.Database;
using ProjectX.WebAPI.Services;

namespace ProjectX.WebAPI.Controllers
{
    [ApiController]
    [AllowAnonymous]
    [Route("api/v1/registration")]
    public class RegistrationController : ControllerBase
    {
        private readonly INoSqlDatabaseService databaseService;
        private readonly IEmailConfirmationService emailConfirmationService;
        private readonly IPasswordEncryptionService passwordEncryptionService;

        public RegistrationController(INoSqlDatabaseService DatabaseService, 
                                      IEmailConfirmationService EmailConfirmationService,
                                      IPasswordEncryptionService PasswordEncryptionService)
        {
            databaseService = DatabaseService;
            emailConfirmationService = EmailConfirmationService;
            passwordEncryptionService = PasswordEncryptionService;
        }

        /// <summary>
        /// This is where users can register their account
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<StatusCodeResult> Register([FromBody] CreateUserRequest Request)
        {

            var Auth = passwordEncryptionService.EncryptPassword(Request.Password);

            var CreatedUser = await this.databaseService.CreateUser(Request, Auth).ConfigureAwait(false);

            // Queue the sending of the confirmation email, but just return OK without waiting for sendgrid to respond.
            //_ = emailConfirmationService.SendConfirmationEmail(CreatedUser).ConfigureAwait(false);

            return Ok();

        }

        /// <summary>
        /// This is where callbacks come to validate the email address.
        /// We use the UserId because the users don't actually know their ID at this stage.
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [HttpGet("validate")]
        [AllowAnonymous]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<StatusCodeResult> ValidateEmail([FromQuery] string UserId)
        {

            // Try and validate the user email, and if it fails, return BadRequest
            return await this.databaseService.ValidateUserEmail(UserId)
                                             .ConfigureAwait(false) 
                                             ? Ok() : BadRequest();

        }

    }
}
