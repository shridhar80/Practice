using CustomerMVC.Entities;
using Microsoft.EntityFrameworkCore;

namespace CustomerMVC.DbContexts
{
    public class CustomerContext:DbContext
    {
        public DbSet<Customer> Customer {  get; set; }

        public string connectinString = @"Data Source=DESKTOP-DQ7GI4K;Initial Catalog=EntityFrameworkExample;Integrated Security=True;Connect Timeout=30;Encrypt=False";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectinString);
        }
    }
}
