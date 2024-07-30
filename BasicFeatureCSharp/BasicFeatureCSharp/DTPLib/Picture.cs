using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace DTPLib
{
    //Multiple interface Inheritance

    //C# does not allow multiple implmentation inheritance

    public  class Picture:IPrintable,IDrawable
    {
        public Picture() { }
        public Picture(string name) { }

        //each and every method have to be implmented in concrete class

        public void Draw()
        {
            Console.WriteLine("Drawing piciture on screen");
        }

        public void Print()
        {
            Console.WriteLine("Printing piciture on Inkjet printer");
        }
    }
}