using WebApplicationForCrudOperatin.Entities;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();



var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

List<Customer> customers = new List<Customer> {new Customer { Id=1, Address="kolhapur", Name="shridhar"},
                                                   new Customer { Id=2, Address="pune", Name="rahul"},
                                                   new Customer { Id=3, Address="mumbai", Name="rohit"}
                                                  };

app.MapGet("/api/customers", () =>
{
    /*List<Customer> customers = new List<Customer> {new Customer { Id=1, Address="kolhapur", Name="shridhar"},
                                                   new Customer { Id=2, Address="pune", Name="rahul"},
                                                   new Customer { Id=3, Address="mumbai", Name="rohit"}
                                                  };*/
    return customers;
});
app.MapGet("/api/customer/{id}", (int id) => {
    int index = customers.FindIndex(s => s.Id == id);
    if (index < 0)
    {
        return Results.NotFound();
    }
   
    return Results.Ok(customers[index]);
});

app.MapPost("/api/addnew", (Customer customer) =>
{
    Console.WriteLine("in post methode");
   // customer = new Customer { Id = 6, Address = "Kolkata", Name = "Mithun" };
    customers.Add(customer);
    
    return customers;
    
});

app.MapPut("/api/update/{id}", (int id, Customer customer) => { 
    int index = customers.FindIndex(s=> s.Id == id);
    if(index < 0)
    {
        return Results.NotFound();
    }
    customers[index] = customer;
    return Results.Ok();
});

app.MapDelete("/api/customer/{id}", (int id) => {
    int count = customers.RemoveAll(s=> s.Id == id);
    if (count>0) 
    { 
        return Results.Ok();
    }
    return Results.NotFound();
});



app.Run();


