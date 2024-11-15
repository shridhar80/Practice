// See https://aka.ms/new-console-template for more information
using OopsImplementation;

Console.WriteLine("Hello, World!");

Vehicle vehicle1 = new Vehicle();
vehicle1.start();

Vehicle vehicle = new Car();
vehicle.start();

Car c = new Car();
c.Model = "ev";
c.stop();

Car car = new Car("Red", 100, "xuv");
Console.WriteLine(car.Model);
car.stop();

