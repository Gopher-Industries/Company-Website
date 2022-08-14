namespace ProjectX.WebAPI.Models.Database
{
    public record CreateUserRequest
    {

        public string UserName { get; init; }

        public string Password { get; init; }

        public string Email { get; init; }

        public DateTime DateOfBirth { get; init; }

    }
}
