using ClonningApp;

Employee original = new Employee();
original.Age = 10;
original.Name = "Rajiv";

//assigning address of object to another variable
//Shallow Copy
//Employee clone = original;


//deep copy
Employee clone = (Employee)original.Clone();

// Output original and cloned object properties
Console.WriteLine("Original:");
Console.WriteLine($"Number: {original.Age}, Text: {original.Name}");

Console.WriteLine("Clone:");
Console.WriteLine($"Number: {clone.Age}, Text: {clone.Name}");

// Modify the cloned object to demonstrate shallow copy behavior
clone.Age = 20;
clone.Name = "Shantaram";

Console.WriteLine("After modifying clone:");
Console.WriteLine($"Original Number: {original.Age}, Original Text: {original.Name}");
Console.WriteLine($"Modified Clone Number: {clone.Age}, Modified Clone Text: {clone.Name}");


/*
 

Limitations of ICloneable

Shallow Copy: ICloneable performs a shallow copy, meaning that only the object itself and
its value-type fields are duplicated. 
Reference-type fields are copied by reference, so changes to those fields in the clone will affect the original and
vice versa.

Type Casting: 
The Clone() method returns an object, so you need to cast it to the appropriate type when using it.

Alternatives to ICloneable
For scenarios where a deep copy (including duplicating reference-type fields) or more control over 
the cloning process is required, 
alternatives such as copy constructors, custom clone methods, 
or serialization techniques (like JSON or XML serialization) may be more appropriate.

 */
