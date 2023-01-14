using Mekashron.Data.Interfaces;
using Mekashron.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace MekashronTask.API.Controllers
{
    [Route("auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginModel model)
        {
            var customerModel = _authService.GetCustomer(model);
            if (customerModel == null)
            {
                return BadRequest(new { message = "Error" });
            }

            return Ok(new { customer = customerModel });
        }
    }
}
