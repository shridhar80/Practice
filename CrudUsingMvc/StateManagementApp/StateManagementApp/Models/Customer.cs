using Microsoft.AspNetCore.Mvc.Rendering;

namespace StateManagementApp.Models
{
    public class Customer
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public List<SelectListItem> OrgList { get; set; }
        public Customer() {
            OrgList = new List<SelectListItem>();
        }
    }
}
