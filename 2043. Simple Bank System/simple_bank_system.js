//Transactions Type: Transfer, Deposit, Withdraw
//Number of Accounts: N accounts (1...N)
//Initial Balance: Every account starts of with same balance
// Valid Transaction? 
    //Account Number between 1...N 
    //Amount Withdrawn is <= balance of account
    //Amount Transferred is <= balance of account




class Bank{
    constructor(balance){
        this.balance = balance
        Bank.all.push(this) 
    }

    static all = []


    static transfer(account1, account2, amount){

        let AccOneindex = account1 - 1
        let AccTwoindex = account2 - 1

        console.log("Acccount 1 Index", AccOneindex )
        console.log("Acccount 2 Index", AccTwoindex )
        console.log("AC 1: Bank.all.includes(accountIndex", Bank.all.findIndex(account => account.index === AccOneindex))
        console.log("AC 2: Bank.all.includes(accountIndex", Bank.all.findIndex(account => account.index === AccTwoindex))
        // //returns true of the transactions are sucessful and false otherswise

        if ((Bank.all.findIndex(account => account.index === AccOneindex) != -1) && (Bank.all.findIndex(account => account.index === AccTwoindex) != -1 )){
            console.log("Accountd found")
           if (Bank.all[AccOneindex].balance >= amount){
            console.log("Transfer allowed: Old balance", Bank.all)
            Bank.all[AccOneindex].balance -= amount
            Bank.all[AccTwoindex].balance += amount
            console.log("here's the updated balances", Bank.all)
            return true 
           } else {
            console.log("no changes", Bank.all)

            return false 
           }
        }
    }

    static deposit(account, amount){
       //returns true of the transactions are sucessful and false otherswise
       let accountIndex = account - 1

       console.log("Acccount Index", accountIndex )
       console.log("Bank.all.includes(accountIndex", Bank.all.findIndex(account => account.index === accountIndex))
       // //returns true of the transactions are sucessful and false otherswise

       if (Bank.all.findIndex(account => account.index === accountIndex)){
           console.log("Account found")
           Bank.all[accountIndex].balance += amount
           console.log("here's the new balance", Bank.all[accountIndex].balance)
           console.log("Updated balances", Bank.all)
           return true 
        } else {
            console.log("no changes", Bank.all)

            return false 
        }
    }

    static withdraw(account, amount){
        console.log("withdrawal processing")
        //returns true of the transactions are sucessful and false otherswise
        let accountIndex = account - 1

        console.log("Acccount Index", accountIndex )
        console.log("Bank.all find index", Bank.all.findIndex(account => account.index === accountIndex))

    
        if (Bank.all.findIndex(account => account.index === accountIndex)){
            console.log("Account found")
           if (Bank.all[accountIndex].balance >= amount){
            console.log("Withtrawal allowed: Old balance:", Bank.all[accountIndex].balance)
            Bank.all[accountIndex].balance -= amount
            console.log("here's the new balance", Bank.all[accountIndex].balance)
            return true
           } else {
            console.log("no changes", Bank.all)

            return false 
            }
        }

    }

    static createAccounts(balance){
        return balance.map(bank => new Bank(bank)).forEach((item, index)=> item.index = index)
    }


}


console.log("Accounts not created", Bank.all)
Bank.createAccounts([ 10, 100, 20, 50, 30 ])
console.log("Accounts created", Bank.all)
console.log(Bank.withdraw(3,10))
console.log(Bank.transfer(5, 1, 20))
// console.log(Bank.deposit(5, 20))
// console.log(Bank.transfer(3, 4, 15))
// console.log(Bank.withdraw(10, 50))
// console.log(new Bank(99))
// console.log(Bank.all)


