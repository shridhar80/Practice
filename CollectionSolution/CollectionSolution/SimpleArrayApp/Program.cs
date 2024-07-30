// Creating and initializing an array
int[] numbers = { 1, 2, 3, 4, 5 };

// Accessing elements using index
int firstElement = numbers[0]; // Accesses the first element (1)
int lastElement = numbers[numbers.Length - 1]; // Accesses the last element (5)

// Modifying elements
numbers[2] = 30; // Changes the third element to 30

// Using Array methods
Array.Sort(numbers); // Sorts the array

// Iterating through the array
foreach (int num in numbers)
{
    Console.WriteLine(num);
}
