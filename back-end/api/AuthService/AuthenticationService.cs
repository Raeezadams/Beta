using System;
using api.Context;
using api.Models;
using SmartService.Outcomes.Results;

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

        public IOutcome<UserModel> signup(UserModel user)
        {
            var users = getUserInfo();

            if (users.Any(u => u.EmailAddress == user.Email || u.PhoneNumber == user.PhoneNumber))
            {
                return new Failure<UserModel>("User already exsists");
            }


            _aPIDbContext.Add(new Entities.User()
            {
                EmailAddress = user.Email,
                Password = user.Password,
                PhoneNumber = user.PhoneNumber,
                UserName = user.UserName

            });

            _aPIDbContext.SaveChanges();





            return new Success<UserModel>(user);
        }
        public IOutcome<Entities.User> login(UserModel user)
        {
            var dbUsers = getUserInfo();
            var dbUser = dbUsers.SingleOrDefault(dbUser => dbUser.Password == user.Password && dbUser.PhoneNumber == user.PhoneNumber);

            if (dbUser == null)
            {
                return new Failure<Entities.User>("User does not exsists");
            }

            return new Success<Entities.User>(dbUser);
        } 
    }
}
 
  