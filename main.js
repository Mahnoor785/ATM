"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let myBalance = 10000; // Initial balance
myBalance = 6000;
console.log(myBalance);
let myPin = 1234;
// PIN number
let pinAnswer = await inquirer_1.default.prompt([
    {
        ame: "pin",
        message: "Enter your PIN:",
        type: "number",
    }
]);
let myPin;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Welcome to the ATM!");
        // Ask for PIN
        const pinAnswer = yield inquirer_1.default.prompt([
            {
                name: "pin",
                message: "Enter your PIN:",
                type: "password", // Hide input for PIN
                // Mask character for input
            }
        ]);
        // Check PIN
        if (parseInt(pinAnswer.pin) === myPin) {
            console.log("correct pin code!!!");
        }
        else {
            console.log("Incorrect PIN. Please try again.");
        }
    });
}
let operationsAns = await inquirer_1.default.prompt([
    {
        name: "choice",
        message: "Choose an option:",
        type: "list",
        choices: ["Check Balance", "Withdraw", "Exit"]
    }
]);
console.log("operationAns");
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer_1.default.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number",
        }
    ]);
    myBalance -= amountAns.amount;
    console.log("your remaining balance is:" + myBalance);
}
else if (operationsAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
}
else {
    console.log("Incorrect pin number");
}
