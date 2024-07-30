// Syntax: elementType[,] arrayName = new elementType[rowCount, columnCount];

int[,] matrix = new int[3, 4]; // Example: a 3x4 matrix (3 rows, 4 columns)

//Accessing element
matrix[0, 0] = 1; // Sets the element at row 0, column 0 to 1
int value = matrix[1, 2]; // Retrieves the element at row 1, column 2


//Iterate Two Dimensional Array

for (int i = 0; i < matrix.GetLength(0); i++) // Loop through rows
{
    for (int j = 0; j < matrix.GetLength(1); j++) // Loop through columns
    {
        Console.Write(matrix[i, j] + " ");
    }
    Console.WriteLine(); // Move to the next row
}


//Initialization with values
int[,] matrix2 = { { 1, 2, 3 },
                  { 4, 5, 6 },
                  { 7, 8, 9 } };

//Change element
matrix[1, 1] = 10; // Change the value at row 1, column 1 to 10

//Finding Dimensions

int rows = matrix.GetLength(0); // Get the number of rows (returns 3 in this case)
int columns = matrix.GetLength(1); // Get the number of columns (returns 3 in this case)


//calculating the sum of all elements in a matrix:

int[,] matrix3 = { { 1, 2, 3 },
                  { 4, 5, 6 },
                  { 7, 8, 9 } };

int sum = 0;
int matrix3rows = matrix3.GetLength(0);
int matrixcolumns = matrix3.GetLength(1);

for (int i = 0; i < matrix3rows; i++)
{
    for (int j = 0; j < matrixcolumns; j++)
    {
        sum += matrix3[i, j];
    }
}

Console.WriteLine("Sum of all elements in the matrix: " + sum);

 


/*
 
Two-dimensional arrays in C# are powerful constructs for organizing and
manipulating data in a grid format. 
They allow you to work with structured data efficiently, 
perform matrix operations, and 
handle multi-dimensional data representation. 

Understanding their syntax, operations, and usage scenarios is crucial for 
developing applications that require matrix-like data structures.
 */

Console.ReadLine(); 