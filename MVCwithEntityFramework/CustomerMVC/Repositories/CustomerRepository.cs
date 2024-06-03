using CustomerMVC.DbContexts;
using CustomerMVC.Entities;

namespace CustomerMVC.Repositories
{
    public class CustomerRepository
    {
        private CustomerContext _customerContext;

        public CustomerRepository(CustomerContext customerContext)
        {
            _customerContext = customerContext;
        }

        public List<Customer> GetAll()
        {
            var customers= _customerContext.Customer.ToList();
            return customers;
        }
    }
}
