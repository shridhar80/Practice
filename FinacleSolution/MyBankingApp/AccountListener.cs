using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyBankingApp.AccountMgmt
{
    public class AccountListener
    {
        public AccountListener() { }

        public void Tax(object? sender,  EventArgs e) {

            Console.WriteLine("You have to pay tax 12.5% of your balance ....");
        }
    }
}
