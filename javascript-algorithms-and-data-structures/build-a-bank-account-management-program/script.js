class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount) {
    if (amount > 0) {
      const transaction = {
        type: "deposit",
        amount: amount
      }
      this.transactions.push(transaction);
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return `Deposit amount must be greater than zero.`;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      const transaction = {
        type: "withdraw",
        amount: amount
      }
      this.transactions.push(transaction);
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    } else {
      return "Insufficient balance or invalid amount."
    }
  }
  checkBalance() {
    return `Current balance: $${this.balance}`;   
  }
  listAllDeposits() {
    const amounts = this.transactions
    .filter((amount) => amount.type === "deposit")
    .map((amount) => amount.amount);
    return `Deposits: ${amounts}`;
  }
  listAllWithdrawals() {
    const amounts = this.transactions
    .filter((amount) => amount.type === "withdraw")
    .map((amount) => amount.amount);
    return `Withdrawals: ${amounts}`;
  }
}
const myAccount = new BankAccount();
myAccount.deposit(500);
myAccount.deposit(4.99);
myAccount.deposit(1500);
myAccount.withdraw(200);
myAccount.deposit(34.99);
myAccount.withdraw(20);
console.log(myAccount.checkBalance());
