// See https://aka.ms/new-console-template for more information
using MyDelegateBankingApp;

Console.WriteLine("Hello, World!");

Account acct= new Account(50000);
AccountListener listener = new AccountListener();
EventArgs e = new EventArgs();
listener.ActivateAccount(acct, e);

Console.WriteLine("_____________________________________________________________");

DelegateHandler masterHandler = new DelegateHandler(listener.SendMail);
masterHandler(acct, e);

DelegateHandler d1= new DelegateHandler(listener.SendNotification);
DelegateHandler d2 = new DelegateHandler(listener.SendMessage);

Console.WriteLine("_____________________________________________________________");
Console.WriteLine("After attaching other agent to master.......");

//registration, attaching, Add handler,plug
masterHandler += d1;
masterHandler += d2;
masterHandler(acct, e);

Console.WriteLine("_____________________________________________________________");
Console.WriteLine("After detaching other agent to master.......");

//registration, attaching, Add handler,plug
masterHandler -= d1;
masterHandler(acct, e);


Console.WriteLine("****************************************************");
Mathematics mathematics = new Mathematics();
ArithmaticOperaiton MasterMath = new ArithmaticOperaiton(mathematics.Add);
ArithmaticOperaiton math1= new ArithmaticOperaiton(mathematics.Subract);
ArithmaticOperaiton math2 = new ArithmaticOperaiton(mathematics.Multiply);

MasterMath += math1;
MasterMath += math2;
MasterMath += mathematics.Divide;

int result = MasterMath(8,2);