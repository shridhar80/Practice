/*for(int i=5; i >= 1; i--)
{
    for(int j=0; j<i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
Console.WriteLine("-----------------------------------------");
for (int i = 1; i <= 5; i++)
{
    for (int j = 0; j < i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}
Console.WriteLine("-----------------------------------------");*/

int a = 1, spaces, k = 6, i = 0, j = 0;
spaces = k - 1;
for (i = 1; i < k*2; i++)
{
    for (j = 1; j <= spaces; j++)
    { Console.Write(" "); }
    for (j = 1; j < a * 2; j++)
    {
        Console.Write('*');
    }
    Console.WriteLine("");
    if (i < k)
    {
        spaces--; a++;
    }
    else
    {
        spaces++; a--;
    }
}

