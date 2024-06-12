using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;

namespace CacheMemoryEx.Controllers
{
    public class ProductController : Controller
    {
        [OutputCache]
        public IActionResult Index()
        {
            List<string> products = new List<string>();
            products.Add("laptop");
            products.Add("Mobile");
            products.Add("iPad");
            return Json(products);
        }
    }
}
