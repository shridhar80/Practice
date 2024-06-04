using CrudMvcEntity.Models;

namespace CrudMvcEntity.Services
{
    public interface ICustomerRepository
    {
        List<Customer> GetAll();
        Customer GetById(int id);
        public void Insert(Customer customer);
        public void Update(Customer customer);
        public void Delete(int id);
    }
}
