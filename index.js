const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Triangle, Square} = require('./lib/shapes');

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Type 3 characters you want for your SVG logo",
        validate: your_title => {
            if (your_title.length === 3) {
                return true;
            } else {
                console.log(": Please enter 3 characters, no more no less.")
                return false;
            }
        } 
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
    fs.writeFile(fileName, data, (err) => {
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
        let shape;

        if (userInput.shape == 'Circle') {
            shape = new Circle(userInput.shapecolor);
        }

        if (userInput.shape == 'Square') {
            shape = new Square(userInput.shapecolor);
        }

        if (userInput.shape == 'Triangle') {
            shape = new Triangle(userInput.shapecolor); 
        }
        
        var imgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.charcolor}">${userInput.characters}</text>
      
        </svg>`;

        writeLogo("logo.svg", imgCode);
    });
}


init();