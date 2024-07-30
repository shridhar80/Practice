using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphicsLib
{
    public  class Rectangle: Shape
    {
        public Rectangle() { }
        public new virtual  void  Draw()
        {
            Console.WriteLine("Rectangel Draw method implementation");
        }
    }
}
