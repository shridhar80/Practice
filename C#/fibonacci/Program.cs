// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int n1 = 0;
 int n2 = 1;
 Console.WriteLine("Enter Number : ");
 int number=int.Parse(Console.ReadLine());
 Console.Write(n1+" "+n2+" ");
 for (int i = 2; i<number; i++)
{
    int n3 = n1 + n2;
    Console.Write(n3 + " ");
    n1= n2;
    n2= n3;
}