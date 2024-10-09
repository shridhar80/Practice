// See https://aka.ms/new-console-template for more information
Console.WriteLine("Enter Number : ");

 
            long num = Convert.ToInt64(Console.ReadLine());
            bool isPrime = true;
            if (num <= 1) isPrime = false; // remember 0 and 1 are not prime, the first ptime number is 2
            for (int j = 2; j * j <= num; j++) // if num is divisible by another sqrt(firstnum) <= n , then not a prime
            {
                if (num % j == 0)
                {
                    isPrime = false;
                    break; // break the look when we found the answer
                }
            }
            if (isPrime) Console.WriteLine("Prime");
            else Console.WriteLine("Not prime");
        