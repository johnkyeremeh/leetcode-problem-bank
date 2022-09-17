//Transactions Types: Transfer, Deposit, Withdraw
// Bank Object 
    // Number of accounts (1...n)
    // Balance -  [[10, 100, 20, 50, 30]]
    // Valid transaction? - 
        //If number if is part of number of accounst
        // Amount <= Account balance 
        


class Bank{
    constructor(balance){
        this.balance = balance
        Bank.all.push(this)
    }

    static all = []

    static deposit(account, amount){
        let accountIndex = account - 1


        console.log(`Deposit selected for account ${account} for ${amount}`)
    
        if (Bank.all.findIndex(account => account.index === accountIndex) != -1){
            console.log("Data found...Here is your current balance: $", Bank.all[accountIndex].balance )
            Bank.all[accountIndex].balance += amount
            console.log("New Balance: $", Bank.all[accountIndex].balance )
            return true 
        } else {
            console.log("Bank data could not be found")
            return false 
        }
    }

    static withdraw(account, amount){
        let accountIndex = account - 1
        console.log(`Withdrawal selected for account ${account} for ${amount}`)

        // if (Bank.all.findIndex(account => account.index === -1)){
        //     console.log(`it is invalid because account ${account} does not exist.`)
        //     return false
        // }

        if (Bank.all.findIndex(account => account.index === accountIndex) != -1 ){
            console.log("Data found...Here is your current balance:", Bank.all[accountIndex].balance )
            if (Bank.all[accountIndex].balance >= amount){
                Bank.all[accountIndex].balance -= amount
                console.log("New Balance:", Bank.all[accountIndex].balance )
                return true 
            } else {
            console.log("Insufficient funds")
            }
        } else {
            console.log("Bank data could not be found")
            return false 
        }
     
    }

    static transfer(accountSender, accountReceiver, amount){
        let AccOneindex = accountSender - 1
        let AccTwoindex = accountReceiver - 1

        console.log(`Transfer selected for between ${accountSender} & ${accountReceiver} for ${amount}`)


        if ((Bank.all.findIndex(account => account.index === AccOneindex) != -1 ) && (Bank.all.findIndex(account => account.index === AccTwoindex) != -1 )){
            console.log("Data found...Here is your current balances:", Bank.all)
            if (Bank.all[AccOneindex].balance >= amount){
                Bank.all[AccOneindex].balance -= amount
                Bank.all[AccTwoindex].balance += amount
                console.log("New Balance:", Bank.all)
                return true 
            } else {
                console.log("no changes", false)
                return false 
            }
        }
        
    }

    static createAccounts(balance){
        //create new bank accounts for each balance
       let newAccounts = balance.map(bank => new Bank(bank))

       //add index attribute to object
       for (let i = 0; i< newAccounts.length; i++){
            newAccounts[i].index = i 
       }
    }


}



console.log("Accounts not created", Bank.all)
Bank.createAccounts([ 10, 100, 20, 50, 30 ])
console.log("Accounts created", Bank.all)
console.log(Bank.withdraw(3,10))
// console.log(Bank.transfer(5, 1, 20))
// console.log(Bank.deposit(5, 20))
// console.log(Bank.transfer(3, 4, 15))
// console.log(Bank.withdraw(10, 50))
console.log(Bank.all)
