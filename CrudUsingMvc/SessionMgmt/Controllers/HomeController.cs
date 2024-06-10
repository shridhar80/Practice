using Microsoft.AspNetCore.Mvc;
using SessionMgmt.Models;
using System.Diagnostics;


namespace SessionMgmt.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            HttpContext.Session.SetString("KeyName","ValueName");
            return View();
        }

        public IActionResult Privacy()
        {
            
            if (HttpContext.Session.GetString("KeyName") != null)
            {
                ViewBag.Data = HttpContext.Session.GetString("KeyName").ToString();

            }
            return View();
        }
        public IActionResult About()
        {

            if (HttpContext.Session.GetString("KeyName") != null)
            {
                ViewBag.Data = HttpContext.Session.GetString("KeyName").ToString();

            }
            return View();
        }
        public IActionResult LogOut()
        {

            if (HttpContext.Session.GetString("KeyName") != null)
            {
                HttpContext.Session.Remove("KeyName");

            }
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
