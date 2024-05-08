using System.Data;
using Microsoft.Data.SqlClient;
using Transflower.MsSqlConsole.Entity;
using Transflower.MsSqlConsole.Repositories.IEmployee;

namespace Transflower.MsSqlConsole.Repositories;

public class EmployeeRepositoryMSSql : IEmployeeRepository
{
    public EmployeeRepositoryMSSql(){

    }
    private string connectionString = @"Data Source=DESKTOP-DQ7GI4K;Initial Catalog=assessmentDB;Integrated Security=True;Connect Timeout=30;Encrypt=False";
    public async Task<List<Employees>> GetAll(){
        await Task.Delay(100);
        List<Employees> employees= new List<Employees>();
        IDbConnection connection = new SqlConnection(connectionString);
        string query = "select * from employees";
        IDbCommand command = new SqlCommand(query, connection as SqlConnection);
        try{
                connection.Open();
                IDataReader reader = command.ExecuteReader();
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