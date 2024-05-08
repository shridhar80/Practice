// See https://aka.ms/new-console-template for more information
using Transflower.MsSqlConsole.EmpController;
using Transflower.MsSqlConsole.Entity;
using Transflower.MsSqlConsole.Repositories;

using Transflower.MySqlConsole.Repositories;

using Transflower.MsSqlConsole.Repositories.IEmployee;
using Transflower.MsSqlConsole.Services;
using Transflower.MsSqlConsole.Services.IEmployee;

Console.WriteLine("Hello, World!");


//IEmployeeRepository repository = new EmployeeRepositoryMSSql();
IEmployeeRepository repository = new EmployeeRepositoryMySql();
IEmployeeService service = new EmployeeService(repository);
EmployeeController controller = new EmployeeController(service);
List<Employees> employees = await controller.GetAllEmployees();

foreach(Employees emp in employees)
{
    Console.WriteLine(emp.Id+" "+emp.FirstName+" "+emp.LastName+" "+emp.Email+" "+emp.Contact);
}
