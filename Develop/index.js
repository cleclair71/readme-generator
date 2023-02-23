// packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        default: 'yourUsername',
    },
    {
        type: 'input',
        message: "What is your project's title?",
        name: 'title',
        default: 'title',
    },
    {
        type: 'input',
        message: "If applicable, what is your project's tagline?",
        name: 'tagline',
        default: 'tagline',
    },
    {
        type: 'input',
        message: "Please write a description of your project.",
        name: 'description',
        default: 'Enter description here',
    },
    {
        type: 'input',
        message: "Provide instructions on how to set up and run the project for the Installation section.",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Provide examples or instructions on how to use the project.",
        name: 'usage',
    },
    {
        type: 'input',
        message: "If applicable, what are the github usernames of the project's contributors?",
        name: 'contributing',
    },
    {
        type: 'list',
        message: "Choose a license for your project:",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: "What is the link to your repository?",
        name: 'repo',
        default: 'repo',
    },
    {
        type: 'input',
        message: "What is your email?",
        name: 'email',
        default: 'email',
    },
    {
        type: 'input',
        message: "Explain any libraries used for testing your software, and give explicit instructions on how to run those tests.",
        name: 'tests',
        default: 'tests',
    },
];

// write README file
function writeToFile(fileName, data) {
     return fs.writeFile(fileName, data, err => {
        if (err) return console.log(`Error: ${err}`);
        console.log('File successfully written!');
    });
};


  // initialize app
  function init() {
    inquirer.prompt(questions).then((data) => {
        console.log ("Generating markdown...");
        writeToFile('README.md', generateMarkdown(data));
    });
  }
  
  // call to initialize app
  init();
