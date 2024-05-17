// See https://aka.ms/new-console-template for more information
using MyBankingApp;
using MyBankingApp.Account;
using MyBankingApp.AccountMgmt;

Console.WriteLine("welcome to my banking app....");

BankAccount bankAccount= new BankAccount(500000);
/*
bankAccount.Diposit(100000);
Console.WriteLine(bankAccount.Balance);

bankAccount.Withdraw(1000);
Console.WriteLine(bankAccount.Balance);*/
AccountListener accountListener= new AccountListener();

SBIBank sbi= new SBIBank();

sbi.PerformBankingOperations(bankAccount, accountListener);
