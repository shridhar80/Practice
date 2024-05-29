using Microsoft.AspNetCore.Mvc;

namespace BlogerMVCApp.Controllers
{
    public class AuthController1 : Controller
    {
        public IActionResult LogIn()
        {
            return View();
        }
        public IActionResult Register()
        {
            return View();
        }
        public IActionResult ForgetPassword() 
        {
            return View();
        }
    }
}
