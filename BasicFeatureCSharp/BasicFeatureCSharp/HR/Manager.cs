using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HR
{

    //once class is declared sealed , you can not derive another child class from existing class
    public sealed class Manager:SalesEmployee
    {
        public double Bonus { get;set; }

        //Constructor Chaining
        public Manager():this(45, "Sameer", 12000, 5000, 70000) { }
        public Manager(int id, string name, double bsal, double incentive,double bonus):base(id, name, bsal,incentive) {
         
            Bonus = bonus;
        }


        //Runtime Polymorphism
        //Method overriding
        public override double ComputePay()
        {
            return base.ComputePay() + Bonus;
        }
    }
}
