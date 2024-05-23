// See https://aka.ms/new-console-template for more information
using EntityFrameworkNMultipleTables.DbContexts;
using EntityFrameworkNMultipleTables.Repositories;

Console.WriteLine("Hello, World!");

var context = new BlogContext();

BlogRepository repository = new BlogRepository(context);
repository.AddNew();
repository.ShowAll();


