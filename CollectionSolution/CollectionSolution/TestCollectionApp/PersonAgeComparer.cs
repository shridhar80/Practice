using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestCollectionApp
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
