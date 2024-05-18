using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDelegateBankingApp
{
    public class AccountListener
    {
        public AccountListener() { }
        public void ActivateAccount(object? o, EventArgs e)
        {
            Console.WriteLine("Your account is activated.. enjoy banking...");
        }
        public void DeactivateAccount(object? o, EventArgs e)
        {
            Console.WriteLine("Your account is deactivated due to insufficient balance...");
        }

        public void SendMail(object? o, EventArgs e)
        {
            Console.WriteLine(" email is send to your resistered email Id...");
        }
        public void SendMessage(object? o, EventArgs e)
        {
            Console.WriteLine(" message is send to your resistered number...");
        }
        public void SendNotification(object? o, EventArgs e)
        {
            Console.WriteLine(" notification is send to your whatsApp number...");
        }
    }
}
