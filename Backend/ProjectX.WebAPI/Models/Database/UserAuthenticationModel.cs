using Google.Cloud.Firestore;

namespace ProjectX.WebAPI.Models.Database
{

    /// <summary>
    /// A model for how we're going to store authentication data about users
    /// </summary>
    [FirestoreData]
    public class UserAuthenticationModel
    {

        [FirestoreProperty]
        public string HashedPassword { get; set; }

        [FirestoreProperty]
        public string Salt { get; set; }

        [FirestoreProperty]
        public string Pepper { get; set; }

    }
}
