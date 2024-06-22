using MembershipWebApp.Entities;
using MembershipWebApp.Models;

namespace MembershipWebApp.Services
{
    public interface IUserService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest request);
        IEnumerable<User> GetAll();

        User GetById(int id);
    }
}
