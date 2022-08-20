namespace ProjectX.WebAPI.Models.Rest
{
    public record ChatbotMessage
    {

        /// <summary>
        /// The message to send to our chatbot
        /// </summary>
        /// <example>I hurt myself running!</example>
        public string Message { get; set; }

        /// <summary>
        /// The Id of the session this conversation relates to. Leave blank for new sessions.
        /// </summary>
        /// <example>478b7219-78c0-42b4-83f7-4973020d72df</example>
        public string Session { get; set; }

        /// <summary>
        /// The user's Id that the message is coming from.
        /// </summary>
        internal string UserId { get; set; }

    }
}
