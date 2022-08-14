using Google.Cloud.Firestore;

namespace ProjectX.WebAPI.Models.Database
{

    /// <summary>
    /// Model of the user document in the Firestore database.
    /// </summary>
    [FirestoreData]
    public class UserModel
    {

        [FirestoreProperty]
        public string UserId { get; set; }

        [FirestoreProperty]
        public string Username { get; set; }

        [FirestoreProperty]
        public string Email { get; set; }

        [FirestoreProperty]
        public bool EmailVerified { get; set; }

        [FirestoreProperty]
        public DateTime Created { get; set; }

        [FirestoreProperty]
        public DateTime DateOfBirth { get; set; }

        /// <summary>
        /// Calculate the users age from their date of birth
        /// </summary>
        public TimeSpan Age => DateTime.Now - DateOfBirth;

    }
}
