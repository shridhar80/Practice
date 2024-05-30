using Microsoft.AspNetCore.Mvc;
using TFLECommerce_May2024.Models;

namespace TFLECommerce_May2024.Controllers
{
    public class CustomersController : Controller
    {
        public IActionResult Index()
        {
            List<Customer> customers = new List<Customer>();
            customers.Add(new Customer { Id = 1, Name = "Ram", Email = "ram@gmail.com", Phone = "8596120452" });
            customers.Add(new Customer { Id = 2, Name = "Sham", Email = "Sham@gmail.com", Phone = "75103649520" });
            return View(customers);
        }
    }
}
