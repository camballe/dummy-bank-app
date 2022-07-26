const bankBalance = document.getElementById('balance');
const withdrawAmount = document.getElementById('withdraw-amount');
const withdrawBtn = document.getElementById('withdrawBtn');
const depositAmount = document.getElementById('deposit-amount');
const depositBtn = document.getElementById('depositBtn');
const message = document.getElementById('message');

class Bank {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        bankBalance.innerText = (this.balance += amount).toFixed(2);
        message.style.color = 'green';
        message.innerText = `✅ You deposited KES ${amount.toFixed(2)} into your bank account.`;
    
        return;
    }

    withdraw(amount) {
        if(this.balance < amount) {
            message.style.color = 'red';
            message.innerText = `❌ You have insufficient balance!`; 
            
            return;
        } else {
            bankBalance.innerText = (this.balance -= amount).toFixed(2);
            message.style.color = 'green';
            message.innerText = `✅ You withdrew KES ${amount.toFixed(2)} from your bank account.`;

            return;
        }
       
    }

}

const operateBank = () => {
    const myBank = new Bank(Number(bankBalance.innerText));
    withdrawBtn.onclick = () => {
        myBank.withdraw(Number(withdrawAmount.value));
        withdrawAmount.value = '';
    };
    depositBtn.onclick = () => {
        myBank.deposit(Number(depositAmount.value));
        depositAmount.value = '';
    };

    withdrawAmount.onclick = () => {
        message.innerText = '';
    };

    depositAmount.onclick = () => {
        message.innerText = '';
    };
};

operateBank();



