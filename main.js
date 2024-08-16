#! /usr/bin/env node
// CLI based ATM with uses of typescript Node.js & inquirer
import inquirer from "inquirer";
//initialize user balance and pin code
let myBlanace = 10000; //dollar
let myPin = 1234;
// print welcome message
console.log("Welcome to AGB - ATM machine");
let answer = await inquirer.prompt([
    {
        name: "userPin",
        message: "Kindly Enter your PIN code:",
        type: "number",
    },
]);
if (answer.userPin === myPin) {
    console.log("your pin code is correct! Login successfully.");
    console.log(`current balance is ${myBlanace}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select an opetion.",
            type: "list",
            choices: ["withdraw amount", "check balance", "fast cash"],
        },
    ]);
    if (operationAns.operation === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount to withdraw:",
                type: "number",
            },
        ]);
        if (amountAns.amount > myBlanace) {
            console.log("insufficient Balance");
        }
        else {
            myBlanace -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`"your remaining balance is:" ${myBlanace}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`"your  current account balance is:"  ${myBlanace}`);
    }
    else if (operationAns.operation === "fast cash") {
        let fastAmount = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Select your amount you want to withdraw",
                type: "list",
                choices: ["10000", "20000", "30000", "40000"],
            },
        ]);
        if (myBlanace >= fastAmount.fastcash) {
            myBlanace -= fastAmount.fastcash;
            console.log("Sucessfully withdraw");
            console.log(`Your remaining balance is: ${myBlanace}`);
        }
        else
            fastAmount.fastcash > myBlanace;
        {
            console.log("insufficient Balance");
        }
    }
}
else {
    console.log("PIN is Incorrect.Try again!!!");
}
