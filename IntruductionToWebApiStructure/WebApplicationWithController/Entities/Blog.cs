using Microsoft.Extensions.Hosting;

namespace WebApplicationWithController.Entities
{
    public class Blog
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public List<Posts> Posts { get; set; }
    }
}
