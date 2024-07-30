namespace HR
{
   public  class Employee
    {

        //Private data member
        private int id;

        //Normal property which encapsulates private varialbe through get and set block
        public int Id { 
            get { return this.id; }
            set { this.id = value;} 
        }
        public string Name { get; set; }
        public double BasicSalary { get; set; }


    
        //Compile Time Polymorpshism
        //static Polymorphsim :Method overloading
        public Employee()
        {
            this.Id = 12;
            this.Name = "Raj";
            this.BasicSalary = 15000;
        }
        public Employee(int id, string name, double bsal)
        {
            this.Id = id;
            this.Name = name;
            this.BasicSalary = bsal;
        }

        public virtual double ComputePay()
        {
            return this.BasicSalary;
        }
    }
}
