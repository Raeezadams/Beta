using System;
using api.Models;

namespace api.AuthService
{
	public interface IAthenticationService
	{
		User signup(User user);
	}
}

