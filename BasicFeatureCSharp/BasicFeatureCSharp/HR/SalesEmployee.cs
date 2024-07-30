using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HR
{
    public  class SalesEmployee:Employee
    {
        //Auto Property
        public double Incentive { get; set; }


        //Member Initialized List
        public SalesEmployee():base(){
            this.Incentive = 500;
        }
        public SalesEmployee(int id, string name,double bsal, double incentive)
            :base(id, name, bsal)
        {
            this.Incentive = incentive;
        }

        //Method overriding
        public override double ComputePay()
        {
            return base.ComputePay() +   Incentive;
        }
    }
}
