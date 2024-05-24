using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationWithController.Entities;

namespace WebApplicationWithController.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Products> Get()
        {
            var products = new List<Products>
            {
                new Products { Id = 1, Name = "Product 1", Price = 10.99m },
                new Products { Id = 2, Name = "Product 2", Price = 19.99m },
                new Products { Id = 3, Name = "Product 3", Price = 29.99m }
            };
            return products;
        }
    }
}
