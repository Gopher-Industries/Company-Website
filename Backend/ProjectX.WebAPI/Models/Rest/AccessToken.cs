namespace ProjectX.WebAPI.Models.Rest
{
    public record AccessToken
    {

        public string UserId { get; init; }

        public string Username { get; init; }

        public UserRole Role { get; init; }

        public string SignedJWT { get; init; }

    }
}
