using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationWithController.Entities;

namespace WebApplicationWithController.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        [HttpGet]
        public List<Blog> Get()
        {
            List<Blog> blogs = new List<Blog>
            {
                new Blog{Title="Travelling", Description="nusta firne..." ,
                          Posts= new List<Posts>
                                 { 
                                      new Posts{ Title="North East", Author="Traveller",           Content="Breath taking", DatePublished= DateTime.UtcNow },
                                      new Posts{ Title="Kashmir", Author="Traveller1",           Content="Amazing", DatePublished= new DateTime(2015, 12, 31) }

                                }

                         }
            }; 
            return blogs;
        }
    }
}
