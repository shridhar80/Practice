using CookiesApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace CookiesApp.Controllers
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
            return View();
        }

        public IActionResult Createcookies()
        {
            string key = "KeyCookie";
            string value = "Shridhar";
            CookieOptions options = new CookieOptions();
            options.Expires = DateTime.Now.AddMinutes(10);
            Response.Cookies.Append(key, value, options);
            return View();
        }

        public IActionResult DisplayCookies()
        {
            string key = "xyz";
            var CookieValue= Request.Cookies[key];
            ViewBag.CookieValue = CookieValue;
            return View();
        }

        public IActionResult ReadQueryString(int productId)
        {
            int prodId= productId;
            ViewBag.product = productId;
            return View();
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
