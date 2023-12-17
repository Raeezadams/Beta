using System;
namespace api.Entities
{
    public class User
    {
        public int id { get; set; }
        public string UserName { get; set; }

        public string EmailAddress { get; set; }
        public int PhoneNumber { get; set; }
        public string Password {get; set;}

        public bool IsAdmin { get; set;}

       
    }
}

