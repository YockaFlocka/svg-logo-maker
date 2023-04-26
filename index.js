const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Type 3 characters you want for your SVG logo" 
    },
    {
        type: "input",
        name: "charcolor",
        message: "What color do you want the text to be?"
    },
    {
        type: "list",
        name: "shape",
        message: "What shape do you want the logo to have?",
        choices: ['Circle', 'Square', 'Triangle'] 
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What color do you want the shape to be?",
    }
];

function writeLogo(fileName, data) {
    fs.writeLogo(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        };
      console.log("Generated Logo!");  
    });
}

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        //writeLogo();
    });
}


init();