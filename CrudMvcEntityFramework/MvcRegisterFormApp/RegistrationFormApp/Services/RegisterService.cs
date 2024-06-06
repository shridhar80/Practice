using Microsoft.EntityFrameworkCore;
using Microsoft.Win32;
using RegistrationFormApp.DataContext;
using RegistrationFormApp.Models;

namespace RegistrationFormApp.Services
{
    public class RegisterService : IRegisterService
    {
       
       
        public bool Add(RegisterForm register)
        {
            bool status = false;
           using( DbContextRegisterForm _dbContext = new DbContextRegisterForm())
            {
                _dbContext.RegisterForms.Add(register);
                _dbContext.SaveChanges();
                status = true;
            }
            return status;


        }

        public List<RegisterForm> GetAll()
        {
            using (DbContextRegisterForm _dbContext = new DbContextRegisterForm())
            {
                return _dbContext.RegisterForms.ToList();
            }
            
        }
    }
}
