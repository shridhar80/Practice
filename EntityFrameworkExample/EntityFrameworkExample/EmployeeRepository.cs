using EntityFrameworkExample.DbContexts;
using EntityFrameworkExample.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityFrameworkExample
{
    public class EmployeeRepository
    {
        private HrContext _hrContext;
        public EmployeeRepository(HrContext hrContext)
        {
            _hrContext=hrContext;
        }

        public List<Employees> GetAll()
        {
            var employees = _hrContext.employees.ToList();
            return employees;
        }   

        public bool Insert(Employees employees)
        {
            bool status= false;
            _hrContext.employees.Add(employees);
            _hrContext.SaveChanges();
            status= true;
            return status;
        }

        public bool Update(Employees employees)
        {

            bool status= false;
            var updateEmp= _hrContext.employees.FirstOrDefault(em => em.Id==employees.Id);
            if (updateEmp != null)
            {
                updateEmp.FirstName = "ruturaj";
                updateEmp.LastName = "gayakwad";
                _hrContext.SaveChanges();
            }
            status= true;
            return status ;
        }

        public bool Delete(Employees employees)
        {
            bool status= false;
            var deleteEmp = _hrContext.employees.FirstOrDefault(emp=> emp.Id==employees.Id);
            if(deleteEmp != null)
            {
                _hrContext.employees.Remove(deleteEmp);
                _hrContext.SaveChanges();
            }
            status= true;   
            return status ;
        }
    }
}
