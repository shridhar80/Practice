// See https://aka.ms/new-console-template for more information
using EntityFrameworkExample;
using EntityFrameworkExample.DbContexts;
using EntityFrameworkExample.Entities;

Console.WriteLine("Hello, World!");


var context = new HrContext();
/*var newEmp = new Employees { Id = 53, FirstName = "devdatta", LastName="padikal", Contact="8798424176", Email="devpad@gmail.com"    };
context.employees.Add(newEmp);
context.SaveChanges();*/

var emp = context.employees.ToList();
foreach(var employee in emp)
{
    Console.WriteLine($"{employee.Id} {employee.FirstName} {employee.LastName} {employee.Email} {employee.Contact}");
}

var empUpdate = context.employees.FirstOrDefault(emp => emp.Id == 2);
if( empUpdate != null)
{
    empUpdate.FirstName = "Rinku";
    empUpdate.LastName = "Singh";
    empUpdate.Email = "Rinkusingh@gmail.com";
    empUpdate.Contact = "8597403548";
    context.SaveChanges();
}


var deleteEmp = context.employees.FirstOrDefault(emp => emp.Id == 53);
if( deleteEmp != null)
{
    context.employees.Remove(deleteEmp);
    context.SaveChanges();
}

EmployeeRepository repo = new EmployeeRepository(context);
var employees = repo.GetAll();
foreach(var employee in employees)
{
    Console.WriteLine($"{employee.Id} {employee.FirstName} {employee.LastName} {employee.Email} {employee.Contact}");
}