namespace MathLib
{
    public class Complex
    {
        public int Real { get; set; }
        public int Imag { get; set; }   
        public Complex() {
            this.Real = 0;
            this.Imag = 0;
        }

        public Complex(int real, int imag)
        {
            this.Real = real;
            this.Imag = imag;
        }

        public static Complex operator +(Complex a, Complex b)
        {
            Complex result = new Complex();
            result.Real = a.Real + b.Real;
            result.Imag = a.Imag + b.Imag;
            return result;
        }

        public static Complex operator -(Complex a, Complex b)
        {
            Complex result = new Complex();
            result.Real = a.Real - b.Real;
            result.Imag = a.Imag - b.Imag;
            return result;
        }

        public static Complex operator *(Complex a, Complex b)
        {
            Complex result = new Complex();
            result.Real = a.Real * b.Real;
            result.Imag = a.Imag * b.Imag;
            return result;
        }

        public static Complex operator /(Complex a, Complex b)
        {
            Complex result = new Complex();
            result.Real = a.Real / b.Real;
            result.Imag = a.Imag / b.Imag;
            return result;
        }
    }
}
