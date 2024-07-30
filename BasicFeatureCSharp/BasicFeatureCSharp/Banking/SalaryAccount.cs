using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Banking
{
    public  class SalaryAccount:Account
    {
        public  double InterestRate { get; set; }

        public SalaryAccount():base("Ravi",6700) {
            this.InterestRate = 0;
        }

        public SalaryAccount(string holder, double initialAmount) 
               : base(holder, initialAmount)
        {
            this.InterestRate = 0;
        }



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
