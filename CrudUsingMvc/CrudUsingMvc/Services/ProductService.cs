using CrudUsingMvc.Models;

namespace CrudUsingMvc.Services
{
    public class ProductService : IProductService
    {
       
        List<Product> products;
        public ProductService() 
        { 
            products = new List<Product>();
            products.Add(new Product { Id = 1, Name = "Car", Price = 1000000 });
            products.Add(new Product { Id = 2, Name = "Laptop", Price = 100000 });
            products.Add(new Product { Id = 3, Name = "Mobile", Price = 1500000 });
            products.Add(new Product { Id = 4, Name = "Headphone", Price = 5000 });
        }
        public List<Product> GetAll()
        {
           return products;
        }

        public Product GetById(int id)
        {
            // return (Product)products[id];
            return products.Find(p => p.Id == id);

        }

        public void Insert(Product product)
        {
           
            products.Add (product);
        }

        public void Update(Product product)
        {
            var existingProduct = products.FirstOrDefault(p => p.Id == product.Id);
            if (existingProduct != null)
            {
                products[products.IndexOf (existingProduct)] = product;

            }
        }
        public void Remove(int id)
        {
            var existingProduct = products.FirstOrDefault(p => p.Id == id);
            if (existingProduct != null)
            {
                products.Remove(existingProduct);
            }
        }
    }
}
