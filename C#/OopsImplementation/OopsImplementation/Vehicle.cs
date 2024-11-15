using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OopsImplementation
{
    public class Vehicle:IVehicle
    {
        private string _color;
        private int _speed;

        public string Color
        {
            get { return _color; }
            set { _color = value; }
        }

        public int Speed
        {
            get { return _speed; }
            set { _speed = value; }
        }
        public Vehicle()
        {
            
        }
        protected Vehicle(string col, int spe)
        {
            this._color = col;  
            this._speed = spe;
            
        }
        public virtual void start()
        {
            Console.WriteLine("start from vehicle");
        }

        public virtual void stop()
        {
            Console.WriteLine("stop from vehicle");
        }
    }
}
