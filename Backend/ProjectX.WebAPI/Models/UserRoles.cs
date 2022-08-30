namespace ProjectX.WebAPI.Models
{
    public struct UserRole
    {

        #region Defined Roles

        /// <summary>
        /// The highest clearance role
        /// </summary>
        public static UserRole Admin { get; } = "Admin";

        /// <summary>
        /// A role with semi-clearance over a user
        /// </summary>
        public static UserRole Caregiver { get; } = "Caregiver";

        /// <summary>
        /// A role that can only manage itself
        /// </summary>
        public static UserRole User { get; } = "User";

        #endregion

        #region Constructor

        private UserRole(string RoleValue)
        {
            _roleValue = RoleValue;
        }

        #endregion

        #region Properties

        private readonly string _roleValue;

        #endregion

        #region Conversion Operators

        public static implicit operator string(UserRole Role) => Role._roleValue;

        public static implicit operator UserRole(string Role) => Role switch
        {
            var _ when string.Equals(Role, Admin, StringComparison.OrdinalIgnoreCase) => Admin,
            var _ when string.Equals(Role, Caregiver, StringComparison.OrdinalIgnoreCase) => Caregiver,
            var _ when string.Equals(Role, User, StringComparison.OrdinalIgnoreCase) => User,
            _ => throw new ArgumentException(null, nameof(Role)),
        };

        public override string ToString() => _roleValue;

        #endregion

    }
}
