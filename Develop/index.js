// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your projects title?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and/or short description on how to use this application?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose a license?",
        choices: ["Mozilla Public License 2.0", "Apache License 2.0", "MIT License"],
    },
    {
        type: "input",
        name: "contributing",
        message: "contribution guidelines",
    },
    {
        type: "input",
        name: "tests",
        message: "test instructions",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email where you can be contacted at for any questions reguarding this project.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
