using Microsoft.EntityFrameworkCore;
using MvcRegisterFormApp.DataContext;
using MvcRegisterFormApp.Models;

namespace MvcRegisterFormApp.Services
{
    public class RegisterService : IRegisterService
    {
       
        private DbContextRegisterForm _dbContext;
      
        
        public RegisterService(DbContextRegisterForm dbContext) 
        {    
            _dbContext = dbContext;
        }
        public bool Add(RegisterForm form)
        {
            bool status = false;
            _dbContext.RegisterForms.Add(form);
            _dbContext.SaveChanges();
            status = true;
            return status;


        }

        public List<RegisterForm> GetAll()
        {
           return _dbContext.RegisterForms.ToList();
        }
    }
}
