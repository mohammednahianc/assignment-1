

class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        console.log(`Current balance: $${this.balance}`);
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount(1004586, 'Mohammed Nahian Chowdhury', 5000);
const account2 = new BankAccount(1888500, 'Shakib Al Hasan', 8000);


account1.displayAccountInfo();
account1.deposit(2000);
account1.withdraw(7500);
account1.getBalance();


account2.displayAccountInfo();
account2.deposit(5000);
account2.withdraw(2500); 
account2.getBalance();

