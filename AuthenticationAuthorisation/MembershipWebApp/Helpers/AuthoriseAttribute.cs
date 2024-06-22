using MembershipWebApp.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace MembershipWebApp.Helpers
{
    public class AuthoriseAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
           var user = (User)context.HttpContext.Items["User"];
            if (user == null) 
            { 
                context.Result = new JsonResult(new {message = "Unauthorize" }) { StatusCode=StatusCodes.Status401Unauthorized};
            }
        }
    }
}
