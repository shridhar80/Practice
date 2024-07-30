using GraphicsLib;
using HR;

using Banking;

using DTPLib;
using MathLib;
SalesEmployee salesEmployee = new SalesEmployee(34, "Chitra", 5600, 5000);
Employee employee = new Employee();


//employee is a variable of type Employee class
//salesEmployee is a variable of type SalesEmployee class

//base class refernce is pointing to derived class reference pointing to it's object

employee = salesEmployee;

double salary= employee.ComputePay();

//Polymorpshism:
//it is a mecahnism of invokding method of the class belong to the object created \
//even though it is pointed by base class refernece variable


Shape theShape=new Shape();
theShape.Draw();

//Shadowing
Shape shape = new Circle();
shape.Draw();


//Ploymorpshism example
Rectangle rect = new Square();
rect.Draw();


Shape shape2 = rect;
shape2.Draw();

//We can not create instance(object) of abstract class

//Account theAcct123 = new Account("Chirag",56000);

Account act543=new SalaryAccount("Sarika", 98000);
act543.Deposit(56000);

double balance = act543.Balance;
Console.WriteLine("Balance = {0}", balance);


IDrawable drawable = new Picture("hamara bajaj");
drawable.Draw();

IPrintable printer = new Picture("Tata Sons");
printer.Print();


//Operator overloading
//What are examples of operators in programming language ?
// Arithmatic operators :  + , - , / , * 
// logical operators

int num1 = 34;
int num2 = 56;

int result=num1 + num2;
Console.WriteLine( "Result = {0}", result);

double num3 = 56.7;
double num4 = 45.7;
double result2= num3 + num4;
Console.WriteLine("Result = {0}", result2);

Complex c1 = new Complex(45, 23);
Complex c2 = new Complex(23, 56);

Complex c3 = c1 + c2;
Complex c4 = c2 - c1;
Complex c5 = c1 / c2;
Complex c6 = c1 * c2;
















Console.ReadLine();
