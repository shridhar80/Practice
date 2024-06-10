using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
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
            RegisterForm form = new RegisterForm();
            form.Languages = PopulateLanguage();
           
            return View(form);
        }
      
        [HttpPost]
        public IActionResult Insert(RegisterForm formdata, string[] languages)
        {
            formdata.Languages = PopulateLanguage();
            foreach(SelectListItem item in formdata.Languages)
            {
                if (item != null)
                {
                    if (languages.Contains(item.Value))
                    {
                        item.Selected = true;
                    }
                }
            }
            bool status= _registerService.Add(formdata);
            return RedirectToAction("Index");
        }

        public static List<SelectListItem> PopulateLanguage()
        {
            List<SelectListItem> items = new List<SelectListItem>();
            items.Add(new SelectListItem { Text = "Marathi", Value = "Marathi", Selected = false });
            items.Add(new SelectListItem { Text = "English", Value = "English", Selected = false });
            items.Add(new SelectListItem { Text = "Hindi", Value = "Hindi", Selected = false });
           
            return items;
        }
    }
}
