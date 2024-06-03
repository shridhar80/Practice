using CrudUsingMvc.Models;

namespace CrudUsingMvc.Services
{
    public interface IProductService
    {
        List<Product> GetAll();
        Product GetById(int id);
        public void Insert(Product product);
        public void Update(Product product);
        public void Remove(int id);
    }
}
