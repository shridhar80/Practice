using CrudMvcEntity.Models;

namespace CrudMvcEntity.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomerService(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public void Delete(int id)
        {
            _customerRepository.Delete(id);
        }

        public List<Customer> GetAll()
        {
           return _customerRepository.GetAll();
        }

        public Customer GetById(int id)
        {
            return _customerRepository.GetById(id);
        }

        public void Insert(Customer customer)
        {
           _customerRepository.Insert(customer);
        }

        public void Update(Customer customer)
        {
            _customerRepository.Update(customer);
        }
    }
}
