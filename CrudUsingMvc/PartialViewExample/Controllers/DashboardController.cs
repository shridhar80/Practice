using Microsoft.AspNetCore.Mvc;

namespace PartialViewExample.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
