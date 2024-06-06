using Microsoft.AspNetCore.Mvc;
using RegistrationFormApp.Models;
using RegistrationFormApp.Services;

namespace RegistrationFormApp.Controllers
{
    public class RegisterFormsController : Controller
    {
        private IRegisterService _registerService;
   
        public RegisterFormsController(IRegisterService registerService)
        {
            _registerService = registerService;
        }
        public IActionResult Index()
        {
            List<RegisterForm> forms = _registerService.GetAll();
            ViewData["list"]=forms;
            return View();
        }
        [HttpGet]
        public IActionResult Insert()
        {
           
            return View();
        }
        [HttpPost]
        public IActionResult Insert(RegisterForm formdata)
        {
           // bool status= _registerService.Add(formdata);
            return RedirectToAction("Index");
        }
    }
}
