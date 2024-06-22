using MembershipWebApp.Entities;
using MembershipWebApp.Helpers;
using MembershipWebApp.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MembershipWebApp.Services
{
    public class UserService : IUserService
    {
        private List<User> _users = new List<User>
        {
            new User {Id=1, FirstName="shridhar", LastName="Patil", Password="abcde", UserName="shridhar" },
            new User {Id=2, FirstName="Ram", LastName="Raman", Password="ram123", UserName="ram" }, 
            new User {Id=3, FirstName="sham", LastName="sundar", Password="sham123", UserName="sham" },
            new User {Id=4, FirstName="Arjun", LastName="Agnihotri", Password="arjun123", UserName="arjun" }
        };

        private readonly AppSettings _appSetting;

        public UserService(IOptions<AppSettings> appSetting)
        {
            _appSetting=appSetting.Value;
        }
        public AuthenticateResponse Authenticate(AuthenticateRequest request)
        {
            var user = _users.SingleOrDefault(x => x.UserName == request.UserName && x.Password==request.Password);

            if (user == null)  return null;

            var token = generateJwtToken(user);

            return new AuthenticateResponse(user, token);


        }

        public IEnumerable<User> GetAll()
        {
            return _users;
        }

        public User GetById(int id)
        {
            return _users.First(x => x.Id == id);
        }

        private string generateJwtToken(User user)
        {
            var tokenhandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSetting.Secret);
            var tokendiscripter = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.Id.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(5),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenhandler.CreateToken(tokendiscripter);
            return tokenhandler.WriteToken(token);

        }
    }
}
