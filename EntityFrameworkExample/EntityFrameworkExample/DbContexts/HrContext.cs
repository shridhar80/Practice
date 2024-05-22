using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EntityFrameworkExample.Entities;
using Microsoft.EntityFrameworkCore;

namespace EntityFrameworkExample.DbContexts
{
    public class HrContext:DbContext
    {
        public DbSet<Employees> employees { get; set; }
        public string connectionString = @"Data Source=DESKTOP-DQ7GI4K;Initial Catalog=assessmentDB;Integrated Security=True;Connect Timeout=30;Encrypt=False";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
