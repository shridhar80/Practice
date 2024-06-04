using CrudMvcEntity.DbContexts;
using CrudMvcEntity.Models;

namespace CrudMvcEntity.Services
{
    public class CustomerRepository : ICustomerRepository
    {
        private CustomerContext _customerContext;
        public CustomerRepository(CustomerContext customerContext)
        {
            _customerContext = customerContext;
        }
        public void Delete(int id)
        {
            var customer = _customerContext.Customer.FirstOrDefault(x => x.Id == id);
            if (customer != null)
            {
                _customerContext.Customer.Remove(customer);
                _customerContext.SaveChanges();
            }
        }

        public List<Customer> GetAll()
        {
            var customers = _customerContext.Customer.ToList();
            return customers;
          
        }

        public Customer GetById(int id)
        {
            var customer = _customerContext.Customer.FirstOrDefault(x => x.Id == id);
            Console.WriteLine(customer.Name);
            return customer;
        }

        public void Insert(Customer customer)
        {
           _customerContext.Add(customer);
            _customerContext.SaveChanges();
        }

        public void Update(Customer customer)
        {
            _customerContext.Update(customer);
            _customerContext.SaveChanges();
        }
    }
}
