﻿using Google.Cloud.Firestore;
using System.Linq;
using System.Text.Json;

namespace ProjectX.WebAPI.Models.Database
{

    /// <summary>
    /// A model for how we're going to store authentication data about users
    /// </summary>
    [FirestoreData]
    public class UserAuthenticationModel
    {

        [FirestoreProperty]
        public string Version { get; set; } = "0.0.1";

        [FirestoreProperty]
        public string HashedPassword { get; set; }

        [FirestoreProperty]
        public string Salt { get; set; }

        [FirestoreProperty]
        public string Pepper { get; set; }

    }
}
