using CrudStudents.Models.Entity;
using Microsoft.EntityFrameworkCore;

namespace CrudStudents.Data
{
    public class ApplicationDbContext : DbContext
    {
        /*public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }*/
        //ctor shortcut to create constructor
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) 
        {
            
        }

        public DbSet<Student> Students { get; set; }
    }
}
