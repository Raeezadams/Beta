using api.AuthService;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using SmartAutoSpares.Outcomes;
using SmartAutoSpares.Outcomes.Results;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthentificationController : ControllerBase
{

    private readonly ILogger<AuthentificationController> _logger;
    private readonly IAthenticationService _athenticationService;
    private readonly IHandler _handler;


    public AuthentificationController(ILogger<AuthentificationController> logger, IAthenticationService athenticationService, IHandler handler)
    {
        _logger = logger;
        _athenticationService = athenticationService;
        _handler = handler;
    }

    
    [HttpGet]
    public List<Entities.User> GetUsers()
    {
        return _athenticationService.getUserInfo();
    }
    



    [HttpPost("signup")]
    public ActionResult<IOutcome<UserModel>> Post(UserModel user)
    {
        return _handler.HandleOutcome(_athenticationService.signup(user));
    }
}



