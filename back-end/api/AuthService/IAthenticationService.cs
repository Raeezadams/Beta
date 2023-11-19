using System;
using api.Models;
using SmartService.Outcomes.Results;

namespace api.AuthService
{
	public interface IAthenticationService
	{
        IOutcome<UserModel> signup(UserModel user);
        IOutcome<Entities.User> login(UserModel user);
        List<Entities.User> getUserInfo();

    }
}

