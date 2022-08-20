using Google.Cloud.Dialogflow.V2;
using ProjectX.WebAPI.Models.Rest;
using System.Text.Json;

namespace ProjectX.WebAPI.Services
{
    public interface IDialogFlowService
    {
        public Task SendMessage(ChatbotMessage Message);
    }

    public class DialogFlowService : IDialogFlowService
    {

        private readonly SessionsClient Agent;
        private readonly string ProjectId;

        public DialogFlowService()
        {

            var config = new ConfigurationBuilder()
                            .AddJsonFile(Path.Combine("Credentials", "dialogflow-access.json"))
                            .Build();

            this.ProjectId = config["project_id"];

            this.Agent = this.InitializeDialogflowConnection().ConfigureAwait(false).GetAwaiter().GetResult();

        }

        private async Task<SessionsClient> InitializeDialogflowConnection()
        {

            var Builder = new SessionsClientBuilder();
            Builder.CredentialsPath = Path.Combine("Credentials", "dialogflow-access.json");

            return await Builder.BuildAsync().ConfigureAwait(false);

        }

        public async Task SendMessage(ChatbotMessage Message)
        {

            throw new NotImplementedException();

            var Payload = new DetectIntentRequest()
            {
                Session = $"projects/{this.ProjectId}/agent/sessions/{Message.Session}",
                QueryInput = new QueryInput()
                {
                    Text = new TextInput()
                    {
                        Text = Message.Message,
                        LanguageCode = "en-US",
                    }
                },
                QueryParams = new QueryParameters()
                {
                    Payload = new Google.Protobuf.WellKnownTypes.Struct()
                    {
                           
                    }
                }
            };

            Payload.QueryParams.Payload.Fields.Add("Patient_ID", new Google.Protobuf.WellKnownTypes.Value()
            {
                NumberValue = int.Parse(Message.UserId),
            });

            var Result = await this.Agent.DetectIntentAsync(Payload).ConfigureAwait(false);

            var Result2 = await this.Agent.DetectIntentAsync(new DetectIntentRequest()
            {
                Session = $"projects/{this.ProjectId}/agent/sessions/{Message.Session}",
                QueryInput = new QueryInput()
                {
                    Text = new TextInput()
                    {
                        Text = "My Id is " + Message.UserId,
                        LanguageCode = "en-US",
                    }
                },
            });

            var j1 = JsonSerializer.Serialize(Result);
            var j2 = JsonSerializer.Serialize(Result2);

            // Check if the Patient_ID field is empty, meaning this is a new session. Then fill the 

            Console.WriteLine(String.Join(',', Result.QueryResult.Parameters.Fields.ToArray()));

        }

    }

}
