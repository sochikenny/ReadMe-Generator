const fs = require('fs'); 
const inquirer = require("inquirer");
const api = require('./utils/api');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username?"
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Write a short description of your project"
      },
      {
        type: "input",
        name: "Install",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
    },
    {
        type: "input",
        name: "Usage",
        message: "Please provide examples of how your project could be used."
    },
    {
        type: "list",
        name: "License",
        message: "Choose what license you would like to use for your project.",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },
      {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
      }

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err){
            console.error(err);
        }

    });

}

function promptUser() {
    return inquirer.prompt(questions)    
}

async function init() {

    try{
        const answers = await promptUser();
        const user = await api.getUser(answers.GitHub);
        const ReadMe = generateMarkdown(answers, user);
        writeToFile("ReadMeFile.md", ReadMe);
        console.log("***ReadMe file created!***");
        
    }
    catch(err){
        console.log(err);

    }
    
}

init();

