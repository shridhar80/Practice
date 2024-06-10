using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace RegistrationFormApp.Models
{

    public class RegisterForm
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Qualification { get; set; }
        public string Gender { get; set; }
       // public string Languages { get; set; }
        public string City { get; set; }
        
        [NotMapped]
        public List<SelectListItem> Languages { get; set; }

        public RegisterForm()
        {
            Languages = new List<SelectListItem>();
        }
    }
}
