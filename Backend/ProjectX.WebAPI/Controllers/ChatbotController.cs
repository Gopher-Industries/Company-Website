using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectX.WebAPI.Models.Rest;
using ProjectX.WebAPI.Services;
using ProjectX.WebAPI.Swagger;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.Filters;

namespace ProjectX.WebAPI.Controllers
{
    [Route("api/v1/chatbot")]
    [ApiController]
    [Authorize]
    [SwaggerTag(description: "<h3>Medi Chatbot Endpoint</h3>")]
    public class ChatbotController : ControllerBase
    {

        private readonly IDatabaseService database;
        private readonly IDialogFlowService botService;

        public ChatbotController(IDatabaseService database, IDialogFlowService BotService)
        {
            this.database = database;
            botService = BotService;
        }

        /// <summary>
        /// Users can send messages to our medi chatbot through this endpoint
        /// </summary>
        /// <returns></returns>
        [HttpPost("send")]
        [AllowAnonymous]
        [SwaggerResponse(StatusCodes.Status202Accepted, description: "The user was registered successfully", typeof(LoginResponse))]
        [SwaggerResponse(StatusCodes.Status401Unauthorized, description: "The user already exists within the service", typeof(LoginResponseFail))]
        [SwaggerResponseExample(StatusCodes.Status202Accepted, typeof(AuthenticationExamples))]
        public async Task<ObjectResult> Send([FromBody] ChatbotMessage Message)
        {

            //var User = await database.GetUser(new FindUserRequest { Username = Request.Username }).ConfigureAwait(false);

            Message.UserId = "7967625";

            await botService.SendMessage(Message);


            return Ok(value: "We did it cheif");

        }
    }
}
