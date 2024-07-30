using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GraphicsLib
{
    public  class Square : Rectangle
    {
        public Square() { }
        public override void Draw()
        {
            Console.WriteLine("Square Draw Implementation is invoked...");
            base.Draw();
        }
    }
}
