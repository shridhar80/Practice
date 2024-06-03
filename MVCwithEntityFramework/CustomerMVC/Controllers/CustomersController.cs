using CustomerMVC.DbContexts;
using CustomerMVC.Entities;
using CustomerMVC.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CustomerMVC.Controllers
{
    public class CustomersController : Controller
    {
        public IActionResult Index()
        {
            using (CustomerContext context = new CustomerContext())
            {
                CustomerRepository repo = new CustomerRepository(context);
                List<Customer> list = repo.GetAll();
                ViewData["allCustomers"] = list;
            }
            return View();
        }
    }
}
