using System;
using api.Context;
using api.Models;

namespace api.AuthService
{
	public class AuthenticationService : IAthenticationService
	{
		private readonly APIDbContext _aPIDbContext;
        public AuthenticationService(APIDbContext aPIDbContext)
		{
			_aPIDbContext = aPIDbContext;

        }
		
		public List<Entities.User> getUserInfo()
		{

			return _aPIDbContext.Users.ToList();
		}

        public UserModel signup(UserModel user)
        {

            return user;
        }

    }
}
 
  