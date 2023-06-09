const inquirer = require("inquirer");
const fs = require("fs");

// grabbing the exported shapes from the classes
const {Circle, Triangle, Square} = require('./lib/shapes');

// array of questions for the user
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
        message: "What color do you want the text to be? Pick a color or hexidecimal number"
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
        message: "What color do you want the shape to be? Pick a color or hexidecimal number",
    }
];

// function to write the logo.svg file
function writeLogo(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        };
      console.log("Generated logo.svg");  
    });
}

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        let shape;

        // if statements to use the shape the user chose
        if (userInput.shape == 'Circle') {
            shape = new Circle(userInput.shapecolor);
        }

        if (userInput.shape == 'Square') {
            shape = new Square(userInput.shapecolor);
        }

        if (userInput.shape == 'Triangle') {
            shape = new Triangle(userInput.shapecolor); 
        }
        
        // variable that has the final info to generate the svg logo
        var imgCode = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${shape.render()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userInput.charcolor}">${userInput.characters}</text>
      
        </svg>`;

        writeLogo("logo.svg", imgCode);
    });
}


init();