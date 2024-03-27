#! /usr/bin/env node
import inquirer from "inquirer";
const randumnumber = Math.floor(Math.random() * 10 + 1);
// console.log(randumnumber);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-10: ",
    },
]);
if (answer.UserGuessedNumber === randumnumber) {
    console.log("congratulation! You Guessed Right Number");
}
else {
    console.log("you guessed wrong number");
}
