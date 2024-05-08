using Transflower.MsSqlConsole.Entity;

namespace Transflower.MsSqlConsole.Repositories.IEmployee;

public interface IEmployeeRepository
{
    public Task<List<Employees>> GetAll();

}