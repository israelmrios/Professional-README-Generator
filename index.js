// Linked packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a description explaining your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and/or a short description on how to use this application?"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please enter your contribution guidelines?",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter your test instructions?",
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter an email where you can be contacted for any questions regarding this project?",
    },
    {
        // Choose to use "list" type in order to give the user options to select from 
        // Used the new inquirer.Separator() to give the license options a separator from the NONE option        
        type: "list",
        name: "license",
        message: "Please chose which license you want to use for this project or select NONE if you are choosing not to use one?",
        choices: ["Mozilla Public 2.0", "Apache 2.0", "MIT", new inquirer.Separator(), "NONE"],
    },
];

// This function will take the file name from the init function and the data and will write the README file to the Current Working Directory (CWD).
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// Choosing to name the README.md file as "sampleREADME.md" to separate it from this projects README.md
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("sampleREADME.md", generateMarkdown(data));
        console.log('Thank you, your README.md file has been created!!!')
    })
}

init();