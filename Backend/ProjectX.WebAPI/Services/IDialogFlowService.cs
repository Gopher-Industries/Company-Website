using Google.Cloud.Dialogflow.V2;
using ProjectX.WebAPI.Models.Rest;
using System.Text.Json;
using SessionsClient = Google.Cloud.Dialogflow.V2.SessionsClient;
using ContextsClient = Google.Cloud.Dialogflow.V2.ContextsClient;
using AgentClient = Google.Cloud.Dialogflow.V2.AgentsClient;
using Microsoft.Extensions.Caching.Memory;
using static Google.Cloud.Dialogflow.V2.Contexts;

namespace ProjectX.WebAPI.Services
{
    public interface IDialogFlowService
    {
        public Task SendMessage(ChatbotMessage Message);
    }

    public class DialogFlowService : IDialogFlowService
    {

        /// <summary>
        /// A way to store conversations with users for 24 hours. 
        /// I havent entirely worked it out yet.
        /// </summary>
        private readonly ConversationsClient ConversationAgent;

        /// <summary>
        /// The client we use to actually talk to the chatbot
        /// </summary>
        private readonly SessionsClient SessionAgent;

        /// <summary>
        /// Helps us inject parameters into the conversation. See here on how to use:
        /// https://cloud.google.com/dialogflow/es/docs/contexts-manage#api
        /// </summary>
        private readonly ContextsClient ContextAgent;

        /// <summary>
        /// The Id of the google project
        /// </summary>
        private readonly string ProjectId;

        /// <summary>
        /// The cache we use to store data so that we don't need to hit google cloud all the time
        /// </summary>
        private readonly IMemoryCache Cache;

        private readonly MemoryCacheEntryOptions _sessionCacheOptions = new MemoryCacheEntryOptions()
        {
            Size = 500, 
            AbsoluteExpirationRelativeToNow = TimeSpan.FromMinutes(30) // Sessions last for 30 minutes in google cloud.
        };

        public DialogFlowService(IMemoryCache Cache)
        {

            this.Cache = Cache;

            var config = new ConfigurationBuilder()
                            .AddJsonFile(Path.Combine("Credentials", "dialogflow-access.json"))
                            .Build();

            this.ProjectId = config["project_id"];

            (this.ConversationAgent, this.SessionAgent, this.ContextAgent) = this.InitializeDialogflowConnection().ConfigureAwait(false).GetAwaiter().GetResult();
            
        }

        /// <summary>
        /// Builds the three dialogflow endpoint clients 
        /// </summary>
        /// <returns></returns>
        private async Task<(ConversationsClient, SessionsClient, ContextsClient)> InitializeDialogflowConnection()
        {

            var ConversationClient = new ConversationsClientBuilder()
            {
                CredentialsPath = Path.Combine("Credentials", "dialogflow-access.json"),
                Endpoint = "australia-southeast1-dialogflow.googleapis.com:443"
            }.BuildAsync();

            var SessionClient = new SessionsClientBuilder
            {
                CredentialsPath = Path.Combine("Credentials", "dialogflow-access.json"),
                Endpoint = "australia-southeast1-dialogflow.googleapis.com:443"
            }.BuildAsync();

            var ContextClient = new ContextsClientBuilder
            {
                CredentialsPath = Path.Combine("Credentials", "dialogflow-access.json"),
                Endpoint = "australia-southeast1-dialogflow.googleapis.com:443"
            }.BuildAsync();

            Task.WaitAll(new Task[] { ConversationClient, SessionClient, ContextClient });

            return (await ConversationClient, await SessionClient, await ContextClient);

        }

        private async Task<Context?> GetSessionContext(string Session)
        {
            
            //
            // Check if the session has been cached
            if (this.Cache.TryGetValue(Session, out Context LocalContext))
                return LocalContext;

            try
            {

                //
                // See if the session exists in google cloud

                var ServerContext = await this.ContextAgent.GetContextAsync(
                $"projects/{this.ProjectId}/locations/australia-southeast1/agent/sessions/{Session}/contexts/4928d617-8d8d-491f-80a4-36dc7226446f_id_dialog_context")
                .ConfigureAwait(false);

                this.Cache.Set(Session, ServerContext, _sessionCacheOptions);

                return ServerContext;

            }
            catch
            {
                return null;
            }

        }


        public async Task SendMessage(ChatbotMessage Message)
        {

            //
            // Find the session and check if it has been initiated before
            //

            var Context = await this.GetSessionContext(Message.Session).ConfigureAwait(false);

            //
            // We always initiate the conversation with saying "ID: u689198n986hf9u" 
            //

            if (Context is null)
            {
                var HeaderPayload = new DetectIntentRequest()
                {
                    Session = $"projects/{this.ProjectId}/locations/australia-southeast1/agent/sessions/{Message.Session}",
                    QueryInput = new QueryInput()
                    {
                        Text = new TextInput()
                        {
                            Text = "My name is " + Message.UserId,
                            LanguageCode = "en-US",
                        }
                    }
                };

                // Send off the first message as an identifying message
                // to tell dialogflow who they're dealing with.
                var CreateConversation = await this.SessionAgent.DetectIntentAsync(HeaderPayload).ConfigureAwait(false);

                this.Cache.Set(Message.Session, CreateConversation.QueryResult.OutputContexts.First(), _sessionCacheOptions);

                //foreach (var context in c.QueryResult.OutputContexts)
                //    this.

                Console.WriteLine(CreateConversation.QueryResult.FulfillmentText);

            }

            var Payload = new DetectIntentRequest()
            {
                Session = $"projects/{this.ProjectId}/locations/australia-southeast1/agent/sessions/{Message.Session}",
                QueryInput = new QueryInput()
                {
                    Text = new TextInput()
                    {
                        Text = Message.Message,
                        LanguageCode = "en-US",
                    }
                }
            };

            //Payload.QueryParams.Payload.Fields.Add(new Dictionary<string, Google.Protobuf.WellKnownTypes.Value>()
            //{
            //    { 
            //        "User_name", 
            //        new Google.Protobuf.WellKnownTypes.Value()
            //        {
            //            StringValue = Message.UserId
            //        }
            //    }
            //});

            //Payload.QueryParams.Contexts.Add(new Context()
            //{
            //    Name = $"projects/appointment-scheduler-med-gbwq/locations/australia-southeast1/agent/sessions/{Message.Session}/contexts/pain_assesment_dialog_params_user_name",
            //    LifespanCount = 2,
            //    Parameters = new Google.Protobuf.WellKnownTypes.Struct()
            //    {

            //    }
            //});

            //Payload.QueryParams.Contexts.First().Parameters.Fields.Add(new Dictionary<string, Google.Protobuf.WellKnownTypes.Value>()
            //{
            //    {
            //        "User_name",
            //        new Google.Protobuf.WellKnownTypes.Value()
            //        {
            //            StringValue = Message.UserId
            //        }
            //    }
            //});

            var Result = await this.SessionAgent.DetectIntentAsync(Payload).ConfigureAwait(false);

            var j1 = JsonSerializer.Serialize(Result);

            // Check if the Patient_ID field is empty, meaning this is a new session. Then fill the 

            Console.WriteLine(String.Join(',', Result.QueryResult.Parameters.Fields.ToArray()));

        }

    }

}
