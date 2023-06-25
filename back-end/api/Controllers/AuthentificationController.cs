using api.AuthService;
using api.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class AuthentificationController : ControllerBase
{

    private readonly ILogger<AuthentificationController> _logger;
    private readonly IAthenticationService _athenticationService;


    public AuthentificationController(ILogger<AuthentificationController> logger, IAthenticationService athenticationService)
    {
        _logger = logger;
        _athenticationService = athenticationService;
    }

    [HttpPost("signup")]
    public User Post(User user)
    {
        return _athenticationService.signup(user);
    }
}


