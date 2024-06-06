using RegistrationFormApp.Models;

namespace RegistrationFormApp.Services
{
    public interface IRegisterService
    {
        public List<RegisterForm> GetAll();
        public bool Add(RegisterForm form);
    }
}
