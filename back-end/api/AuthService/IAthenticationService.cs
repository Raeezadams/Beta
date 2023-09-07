using System;
using api.Models;
using SmartAutoSpares.Outcomes.Results;

namespace api.AuthService
{
	public interface IAthenticationService
	{
        IOutcome<UserModel> signup(UserModel user);
        IOutcome<Entities.User> login(UserModel user);
        List<Entities.User> getUserInfo();

    }
}

