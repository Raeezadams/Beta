using System;
using api.Models;

namespace api.AuthService
{
	public interface IAthenticationService
	{
		UserModel signup(UserModel user);
		List<Entities.User> getUserInfo();

    }
}

