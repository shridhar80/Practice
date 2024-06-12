namespace PartialViewExample.Models
{
    public class CompanyData
    { 
        public string Name { get; set; }
        public string Description { get; set; }
        public string FinancialYear { get; set; }
        public List<int> YearlyData { get; set; }   
    }
}
