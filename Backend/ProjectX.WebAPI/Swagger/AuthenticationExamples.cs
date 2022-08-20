using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Filters;

namespace ProjectX.WebAPI.Swagger
{
    public class AuthenticationExamples : IExamplesProvider<ObjectResult>
    {
        public ObjectResult GetExamples()
        {
            return new OkObjectResult(value: "hehe");
        }
    }
}
