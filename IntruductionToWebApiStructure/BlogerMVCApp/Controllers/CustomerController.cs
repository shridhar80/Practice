using BlogerMVCApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace BlogerMVCApp.Controllers
{
    public class CustomerController : Controller
    {
        List<Customer> customers= new List<Customer>();
        
        public IActionResult GetAllCustomers()
        {
            customers.Add(new Customer() { Id = 1, Name = "Ram", Address="Raygad",Contact="8604560741" });
            customers.Add(new Customer() { Id = 2, Name = "Sham", Address = "Shimala", Contact = "8745607491" });
            return View(customers);
        }
        public IActionResult AddNewCustomer()
        {
            return View();
        }
        public IActionResult RemoveCustomers()
        {
            return View();
        }
    }
}
