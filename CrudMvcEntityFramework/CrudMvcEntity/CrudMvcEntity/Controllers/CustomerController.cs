using CrudMvcEntity.DbContexts;
using CrudMvcEntity.Models;
using CrudMvcEntity.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


namespace CrudMvcEntity.Controllers
{
    public class CustomerController : Controller
    {
       // CustomerContext customerContext;
        private ICustomerService _customerService;
        private ICustomerRepository _customerRepository;
        public IActionResult Index()
        {

            using (CustomerContext context = new CustomerContext())
            {
                _customerRepository = new CustomerRepository(context);
                _customerService = new CustomerService(_customerRepository);
                
               List<Customer> list = _customerService.GetAll();
                ViewData["allCustomers"] = list;
            }
            return View();
        }

        public IActionResult Details(int id)
        {
            using(CustomerContext context = new CustomerContext())
            {
                _customerRepository = new CustomerRepository(context);
                _customerService = new CustomerService(_customerRepository);

                var customer = _customerService.GetById(id);
                ViewData["customer"]= customer;
            }
            return View();
        }

        public IActionResult Delete(int id)
        {
            using(CustomerContext context = new CustomerContext())
            {
                _customerRepository = new CustomerRepository(context);
                _customerService = new CustomerService(_customerRepository);
                _customerService.Delete(id);
                return RedirectToAction("Index");

            }
        }

        public IActionResult Insert()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Insert(Customer customer)
        {
            using (CustomerContext context = new CustomerContext())
            {
                _customerRepository = new CustomerRepository(context);
                _customerService = new CustomerService(_customerRepository);
                _customerService.Insert(customer);
                return RedirectToAction("Index");

            }
        }
        [HttpGet]
        public IActionResult Edit(int id)
        {
            using (CustomerContext context = new CustomerContext())
            {
                _customerRepository = new CustomerRepository(context);
                _customerService= new CustomerService(_customerRepository);
                var customer = _customerService.GetById(id);
                return View(customer);
            }
          
        }
        [HttpPost]
        public IActionResult Edit(Customer customer)
        {
            using (CustomerContext context = new CustomerContext())
            {
                _customerRepository = new CustomerRepository(context);
                _customerService = new CustomerService(_customerRepository);
                _customerService.Update(customer);
                return RedirectToAction("Index");

            }
        }
    }
}
