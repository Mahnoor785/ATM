import inquirer from "inquirer";

let myBalance = 10000; // Initial balance
myBalance = 6000;
console.log(myBalance)
let myPin =1234;
 // PIN number
 let pinAnswer = await inquirer.prompt(
    [
        {
            ame: "pin",
            message: "Enter your PIN:",
            type: "number",
        }

    ]
    
 );
 let myPin

async function main() {
    console.log("Welcome to the ATM!");

    // Ask for PIN
    const pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your PIN:",
            type: "password", // Hide input for PIN
             // Mask character for input
        }
    ]);

    // Check PIN
    if (parseInt(pinAnswer.pin) === myPin) {
        console.log("correct pin code!!!")
    
    } else {
        console.log("Incorrect PIN. Please try again.");
    }
}

let operationsAns = await inquirer.prompt(
    [
        {
            name: "choice",
            message: "Choose an option:",
            type: "list",
            choices: ["Check Balance", "Withdraw", "Exit"]
        }
    ]

);
    
console.log("operationAns");

if(operationAns.operation === "withdraw"){
    let amountAns =await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount",
                type:"number",

            }
        ]
    );
    myBalance-= amountAns.amount;

    console.log("your remaining balance is:"+ myBalance)
} else if(operationsAns.operation === "check balance"){
    console.log("your balance is: " + myBalance)
}
  else{
    console.log("Incorrect pin number");
  } 






       