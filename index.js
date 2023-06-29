//imports inquirer and the shapes.js file 
const fs = require('fs');
const inquirer = require('inquier');
const generateSVG = require('./lib/shapes');

// prompt
const promptUser = () => {
    inquirer
    .prompt([
        {
//text input for the SVG logo text, 3 charcters maximum
            name: 'text',
            message: 'Enter up to three characters that you want displayed on the logo',
            validate: (input) => {
                if (input.length > 3) {
                    return 'the limit is 3 characters, please re-enter your input';
                }
                return true;
            },
        },

    ])
}