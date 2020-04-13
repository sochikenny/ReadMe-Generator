const fs = require('fs'); 
const inquirer = require("inquirer");
const api = require('./utils/api');
const generateReadMeFile = require("./utils/generateMarkdown");

const questions = [
    {
        type: "input",
        name: "github",
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

function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
      console.log(answers);
  
      api.getUser(answers.github)
      .then(function() {
        console.log("Success");
      })
      .catch(function(err) {
        console.log(err);
      });

    });

}

function init() {

    //ask questions in the console
    // .then stores the response in the terminal
    inquirer.prompt(questions)
    .then((answers)=>{
    console.log("User Answer Object", answers)

      // calls the api and passes the github login from the user.
      api.getUser(answers.github)
      .then((githubData) => { 
        // this allows us to only get the data in the githubdata
        var githubProfile = githubData.data;
        // Combining all of our data. "..." allows us to add it to one
        var allData = {...answers, ...githubProfile}
        
        var readmetext = generateMarkdown(allData);
        writeToFile("ReadMeFile.md", readmetext)

       })
   

    });



};

init();

