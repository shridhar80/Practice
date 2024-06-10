using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using StateManagementApp.Models;

namespace StateManagementApp.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult LogIn()
        {
            Claim claim = new Claim()
            {
                Email = "",
                Password = ""
            };
            return View(claim);
        }
        [HttpPost]
        public IActionResult LogIn(Claim claim)
        {
            if(claim.Email=="shridhar@gmail.com" && claim.Password=="transflower")
            {
                return RedirectToAction("index", "customers");
            }
            return View(claim);
        }

        public IActionResult Register()
        {
            Customer cust = new Customer();
            cust.OrgList = PopulateOrgs();

            return View(cust);
        }

        public IActionResult Register(Customer customer, string[] organizations)
        {
            customer.OrgList = PopulateOrgs();
            foreach(SelectListItem item in customer.OrgList)
            {
                if(item != null)
                {
                    if(organizations.Contains(item.Value))
                    {
                        item.Selected=true;
                    }
                }
            }
            return RedirectToAction("index");
        }

        public static List<SelectListItem> PopulateOrgs()
        {
            List<SelectListItem> items = new List<SelectListItem>();
            items.Add(new SelectListItem { Text = "CDAC", Value = "CDAC", Selected = false });
            items.Add(new SelectListItem { Text = "IBM", Value = "IBM", Selected = false });
            items.Add(new SelectListItem { Text = "SEED", Value = "SEED", Selected = false });
            items.Add(new SelectListItem { Text = "Microsoft", Value = "Microsoft", Selected = false });
            items.Add(new SelectListItem { Text = "Google", Value = "Google", Selected = false });
            return items;
        }
    }
}
