// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your Project Title?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the Description of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project Description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to Install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you Use this application?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please describe how to use your app.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can people Contribute to your application?',
            
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the Tests of your application?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which License is being used for your application? (Arrow down to the last choice if N/A)',
            default: 'MIT',
            choices: ['MIT', 'Apache_2.0', 'GPL_v2', 'CC0', ''],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please provide your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credit',
            message: 'Are there any collaborators or third-party assets that require attribution?'
        }
    ];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err? console.log(err) : console.log('Success!')
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('ex-README.md', markdown);
            console.log('Successfully wrote to README.md.');
        })
        .catch((err) => console.log(err));
};

// Function call to initialize app
init();
