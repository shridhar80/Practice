using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComparisionApp
{
    public class Person : IComparable<Person>
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public int CompareTo(Person other)
        {
            // Compare by age as an example
            return this.Age.CompareTo(other.Age);
        }
    }

}


/*
 
IComparable is used when you want to enable objects of a class to be compared to each other.
This interface defines a method CompareTo(object obj) 
(or CompareTo(T other) in the generic version) that determines 
the natural ordering of instances of the class.

 */