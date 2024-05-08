
using Transflower.MsSqlConsole.Entity;
using Transflower.MsSqlConsole.Repositories.IEmployee;
using Transflower.MsSqlConsole.Services.IEmployee;

namespace Transflower.MsSqlConsole.Services;
public class EmployeeService : IEmployeeService
{
    private readonly IEmployeeRepository _employeeRepo;

    public EmployeeService(IEmployeeRepository repository){
        _employeeRepo = repository;
    }

    public async Task<List<Employees>> GetAll()
    {
        return await _employeeRepo.GetAll();
    }
}