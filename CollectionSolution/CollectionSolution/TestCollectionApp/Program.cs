
using TestCollectionApp;

int count = 45;
Boolean status = false;
double amount = 56.6;


Person prn=new Person();

prn.Name = "Rajiv";
prn.Age = 23;


//Property Initializer Syntax
Person prn2 = new Person { Name = "Sahil", Age = 22 };

int[] marks = { 45, 65, 78, 46, 67 };
foreach( int mark in marks)
{
    Console.WriteLine(mark);
}

Array.Sort(marks);

for(int i = 0; i < marks.Length; i++)
{
    Console.WriteLine(marks[i]);
}


double[] prices = { 45.6, 76.56, 7.89, 45.7 };
Array.Sort(prices);

foreach( double price in prices)
{
    Console.WriteLine(price);
}

Person[] people =
{
    new Person { Name = "Sahil", Age = 67, Rank=76 },
    new Person { Name = "Karan", Age = 24,Rank=45 },
    new Person { Name = "Sarita", Age = 35,Rank=4 },
    new Person { Name = "Manisha", Age = 26,Rank=43 }
};

foreach (Person person in people)
{
    Console.WriteLine(person.Name + " "+ person.Age + " "+ person.Rank);
}


//Array.Sort(people);
Array.Sort(people, new PersonAgeComparer());

Console.WriteLine("After sorting all people");
foreach (Person person in people)
{
    Console.WriteLine(person.Name + " " + person.Age + " " + person.Rank);
}
