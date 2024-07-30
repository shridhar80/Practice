namespace Banking
{
    public abstract   class Account
    {
        public double Balance { get; set; }
        public string Holder { get; set; }

        public Account(string holder, double initialamount)
        {
            Holder = holder;
            Balance = initialamount;
        }

        //abstract methods do not have implmentation defined in class

        //abstract class enforces method overriding in their child classes
        public abstract void Deposit(double amount);
        public abstract void Withdraw(double amount); 

        public void DeductBankingCharges(double amount)
        {
            this.Balance -=amount;
        }

    }
}
