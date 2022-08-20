namespace ProjectX.WebAPI.Models.Rest
{
    public record CreateUserRequest
    {

        /// <summary>
        /// The username of the person
        /// </summary>
        /// <example>Nat</example>
        public string Username { get; init; }

        /// <summary>
        /// The user's plain text password
        /// </summary>
        public string Password { get; init; }

        /// <summary>
        /// The email to register under
        /// </summary>
        /// <example></example>
        public string Email { get; init; }

        public DateTime DateOfBirth { get; init; }

    }
}
