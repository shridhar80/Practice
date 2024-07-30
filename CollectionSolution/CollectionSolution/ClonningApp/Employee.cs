using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClonningApp
{
    public  class Employee : ICloneable
    {
        public int Age { get; set; }
        public string Name { get; set; }

        public object Clone()
        {

            //There are important methods belong to Object class
            //ToString()
            //GetType
            //MemberwiseClone
            //GetHashCode
            //Equals
            return this.MemberwiseClone();
        }
    }
}
