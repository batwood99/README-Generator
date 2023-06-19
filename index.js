const markDown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'title',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        return 'Please enter the name of your project.';
      }
    }
  },
  {
    type: 'input',
    message: 'Provide a description of your project:',
    name: 'description',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        return 'Please provide a description of your project.';
      }
    }
  },
  {
    type: 'input',
    message: 'Enter the installation instructions for your application:',
    name: 'installation',
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        return 'If there are no specific installation instructions, enter "No instructions required."';
      }
    }
  },
  {
    type: 'input',
    message: 'Provide usage information for your application:',
    name: 'usage',
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        return 'Please provide usage information for your application.';
      }
    }
  },
  {
    type: 'input',
    message: 'Specify contribution guidelines for your project:',
    name: 'contribution',
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        return 'If there are no specific contribution guidelines, enter "No contribution guidelines."';
      }
    }
  },
  {
    type: 'input',
    message: 'Provide test instructions for your application:',
    name: 'test',
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        return 'Please provide test instructions for your application.';
      }
    }
  },
  {
    type: 'list',
    message: 'Choose a license for your project:',
    name: 'license',
    choices: ['General Public License (GPL)', 'The Apache License', 'Microsoft Public License (MS-PL)', 'Berkeley Software Distribution (BSD)'],
    default: 'General Public License (GPL)'
  },
  {
    type: 'input',
    message: 'Enter your GitHub username:',
    name: 'github',
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        return 'Please enter your GitHub username.';
      }
    }
  },
  {
    type: 'input',
    message: 'Enter your email address:',
    name: 'email',
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        return 'Please enter your email address.';
      }
    }
  }
];