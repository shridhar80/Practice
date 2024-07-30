using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestCollectionApp
{

    //Type safe interface IComparable 
    //Self Comparision with another object
    public  class Person:IComparable<Person>
    {
        public int Age { get; set; }
        public string Name { get; set; }
        public int Rank { get; set; }

        public int CompareTo(Person? other)
        {
            // Compare by age as an example
            return this.Rank.CompareTo(other.Rank);
        }
    }
}
