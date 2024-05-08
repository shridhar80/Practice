
using MySql.Data.MySqlClient;
using Transflower.MsSqlConsole.Entity;
using Transflower.MsSqlConsole.Repositories.IEmployee;

namespace Transflower.MySqlConsole.Repositories;

public class EmployeeRepositoryMySql : IEmployeeRepository
{
    public EmployeeRepositoryMySql(){

    }
    private string connectionString = @"server=localhost;port=3306;user=root;password=password;database=assessmentdb";
    public async Task<List<Employees>> GetAll(){
        await Task.Delay(100);
        List<Employees> employees= new List<Employees>();
        MySqlConnection connection = new MySqlConnection(connectionString);
        string query = "select * from employees";
        MySqlCommand command = new MySqlCommand(query, connection);
        try{
                connection.Open();
                MySqlDataReader reader = command.ExecuteReader();
                while (reader.Read())
                {
                    int id = int.Parse(reader["id"].ToString());
                    string firstName = reader["firstname"].ToString();
                    string lastname = reader["lastname"].ToString();
                    string email = reader["email"].ToString();
                    string contact = reader["contact"].ToString();

                    Employees emp = new Employees();
                    emp.Id= id;
                    emp.FirstName= firstName;
                    emp.LastName=lastname;
                    emp.Contact=contact;
                    emp.Email=email;

                    employees.Add(emp);
                    }
                    reader.Close();
        }
        catch(Exception ex)
        {
                Console.WriteLine(ex.Message);
        }
        finally{
                connection.Close();
        }
        return employees;
    }
}