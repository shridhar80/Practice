using Transflower.MsSqlConsole.Entity;
using Transflower.MsSqlConsole.Services.IEmployee;

namespace Transflower.MsSqlConsole.EmpController;
public class EmployeeController
{
    private IEmployeeService _empService;
    public EmployeeController(IEmployeeService employeeService)
    {
        _empService = employeeService;
    }

    public async Task<List<Employees>> GetAllEmployees()
    {
        return await _empService.GetAll();
    }
}