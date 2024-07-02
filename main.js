import chalk from "chalk";
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: chalk.green("Q1. What is the correct way to check if two value are not equal in TypeScript?"),
        choices: (["a == b", "a ===b", "a = b", "a !== b"])
    },
    {
        name: "question_2",
        type: "list",
        message: chalk.green("Q2. Which of the following characters is commonly allowed in variable names in TypeScript?"),
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: chalk.green("Q3. Which operator is commonly used for string concatenation in TypeScript?"),
        choices: ["+", "_", "*", "&"]
    },
    {
        name: "question_4",
        type: "list",
        message: chalk.green("Q4. In TypeScript which symbol is commomly used to terminate a statement? "),
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: chalk.green("Q5. Which method of Inquirer.js is used to start the prompt interface and recive user input?"),
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.gray("1. correct!"));
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (quiz.question_2) {
    case "$":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (quiz.question_3) {
    case "+":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (quiz.question_4) {
    case ";":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (quiz.question_5) {
    case "prompt()":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(chalk.red(`Score: ${score}`));
