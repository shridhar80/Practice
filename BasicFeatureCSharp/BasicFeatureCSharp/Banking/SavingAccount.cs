using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banking
{
    public class SavingAccount : Account
    {
        public DateTime  CreatedOn { get; set; }
        public SavingAccount(string holder,double initialBalance, double interest, DateTime date)
                :base(holder,initialBalance)
        {
                this.CreatedOn=date;

        }
        //each and every method declared abstract in it's parent 
        //have to be ovrrided

        public override void Deposit(double amount)
        {
            this.Balance += amount;
            
        }

        public override void Withdraw(double amount)
        {
            this.Balance -= amount;

        }
    }
}
