using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyBankingApp.Account
{
    public class BankAccount
    {
        public double Balance { get; set; }
        public event EventHandler<EventArgs> taxable;

        public BankAccount(double amount)
        {
            Balance = amount;
        }

        public void Diposit(double amount)
        {
            double newBalance = Balance + amount;
            if(newBalance > 550000)
            {
                EventArgs eventArgs = new EventArgs();
                taxable(this, eventArgs);
            }
            Balance = newBalance;
        }

        public void Withdraw(double amount)
        {
            Balance -= amount;
        }
    }
}
