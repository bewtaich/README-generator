// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input

const questions = [
  //TITLE
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  //Description
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project.",
  },

  //Installation Instruction
  {
    type: "input",
    name: "installation",
    message: "Provide the steps required to install the project.",
  },

  //Usage Information
  {
    type: "input",
    name: "usage",
    message: "Provide instructions to use the project.",
  },

  //Contribution Guidelines
  {
    type: "input",
    name: "contribution",
    message: "Describe how someone can contribute to this project.",
  },

  //Test Instructions
  {
    type: "input",
    name: "testing",
    message: "Describe how someone can test this project.",
  },

  //GitHub Username
  {
    type: "input",
    name: "github",
    message: "Provide your username on GitHub.",
  },

  //Email Address
  {
    type: "input",
    name: "email",
    message: "Provide an email to contact you.",
  },

  //License
  {
    type: "list",
    name: "license",
    message: "Which license type does your project have?",
    choices: [
      "MIT License",
      "Apache 2.0 License",
      "ISC License",
      "IBM Public License 1.0",
      "Mozilla Public License 2.0",
      "No License",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md Successfully Created");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeToFile("./generated/README.md", generateMarkdown(response))
    );
}

// Function call to initialize app
init();
