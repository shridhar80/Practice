using MembershipWebApp.Models;
using MembershipWebApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Net.Smtp;
using System.Net.Mail;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace MembershipWebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : ControllerBase
    {
        public IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;
        }
        [HttpPost("authenticate")]
        public IActionResult Authenticate( AuthenticateRequest model)
        { 
            var response = _userService.Authenticate(model);
            if (response == null)
            {
                return BadRequest(new {message = "username or password is incorrect"});
            }
            return Ok(response);
        }

        [Authorize]
        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetAll();
            return Ok(users);
        }
        [HttpPost]
        public ActionResult SendMessage()
        {
            MimeMessage message = new MimeMessage();
            MailboxAddress from = new MailboxAddress("Admin", "admin@example.com");
            message.From.Add(from);
            MailboxAddress to = new MailboxAddress("User", "user@example.com");
            message.To.Add(to);

            message.Subject = "this is email subject ";
            BodyBuilder builder = new BodyBuilder();
            builder.HtmlBody = "<h1>Hello World!</h1>";
            builder.TextBody = "Hello World!";
            message.Body = builder.ToMessageBody();

           SmtpClient smtpClient = new SmtpClient();
            smtpClient.Connect ("smtp.gmail.com", 586, true);
            smtpClient.Authenticate("shridhar.patil@gmail.com", "password");
            smtpClient.Send(message);
            smtpClient.Disconnect(true);
            smtpClient.Dispose();

            return Ok();
        }
    }
}
