using CrudUsingMvc.Models;
using CrudUsingMvc.Services;
using Microsoft.AspNetCore.Mvc;

namespace CrudUsingMvc.Controllers
{
    public class ProductsController : Controller
    {
        IProductService _productService;
        public ProductsController(IProductService productService) { 
        _productService = productService;
        }
        public IActionResult Index()
        {
            List<Product> products = _productService.GetAll();
            ViewData["products"]=products;
            return View();
        }
       
        public IActionResult Insert()
        {
             return View();

        }
        [HttpPost]
        public IActionResult Insert(Product product)
        {
            _productService.Insert(product);
            return RedirectToAction("Index");
        }
        public IActionResult Details(int id)
        {
            Product product = _productService.GetById(id);
            ViewData["id"] = product.Id;
            ViewData["name"] = product.Name;
            ViewData["price"] = product.Price;
            return View();
        }
        public IActionResult Update(int id)
        {
          
                Product product = _productService.GetById(id);
                return View(product);
            
           
        }
        [HttpPost]
        public IActionResult Update(Product product)
        {
            _productService.Update(product);
            return RedirectToAction("Index");
        }
        public IActionResult Remove(int id)
        {
            _productService.Remove(id);
            return RedirectToAction("Index");
        }
    }
}
