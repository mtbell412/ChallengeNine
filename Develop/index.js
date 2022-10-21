// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.Develop/utils/generateMardown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: title,
    message: 'Project Title?',
},
{
    type: 'input',
    name: description,
    message: 'Description?',
},
{
    type: 'input',
    name: userStory,
    message: 'User Story?',
},
{
    type: 'input',
    name: acceptanceCriteria,
    message: 'Acceptance Criteria?',
},
{
    type: 'input',
    name: deployedURL,
    message: 'deployedURL?',
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app


init();
