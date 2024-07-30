using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ComparisionApp
{

    //Third party compare logic

    public class PersonAgeComparer : IComparer<Person>
    {
        public int Compare(Person x, Person y)
        {
            // Compare by age
            return x.Age.CompareTo(y.Age);
        }
    }

}


/*
 
Usage Context: 
IComparable is implemented by a class to define its own natural ordering. 
IComparer is implemented in a separate class to define comparison logic for instances of another class.

Method Signature:
IComparable has CompareTo method directly on the object being compared. 
IComparer has Compare method that takes two objects as parameters.

Flexibility: 
IComparer allows for multiple different comparison strategies for the same class, 
while IComparable defines a single natural ordering.




When to Use Which

Use IComparable:

    When you want instances of your class to have a natural ordering.
    When you control the class implementation and want to define how instances compare to each other.

Use IComparer:
    
    When you want to provide multiple different ways of sorting instances of a class.
    When you don't have control over the class implementation (e.g., it's a framework class or third-party library) but need to sort instances based on different criteria.



 */