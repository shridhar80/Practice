using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsImplementation
{
    public class Car:Vehicle
    {
        public string Model { get; set;  }
        public Car()
        {
            
        }
        public Car(string color,int speed, string model)
        {
            Color = color;
            Speed = speed;  
            Model = model;
        }

        public override void start()
        {
            Console.WriteLine("start from car");
        }

        public override void stop()
        {
            Console.WriteLine("stop from car");
        }
    }
}
