using MyBankingApp.AccountMgmt;
using MyBankingApp.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyBankingApp
{
    public class SBIBank
    {
        public SBIBank() { }

        public void PerformBankingOperations(BankAccount bankAccount, AccountListener accountListener)
        {
            bankAccount.taxable += accountListener.Tax;

          //  Console.WriteLine(bankAccount.Balance);

            bankAccount.Diposit(200000);

            Console.WriteLine(bankAccount.Balance);

            bankAccount.Withdraw(300000);
            Console.WriteLine(bankAccount.Balance);



        }
    }
}
