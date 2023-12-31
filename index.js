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
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters that you want displayed on the logo',
            validate: (input) => {
                if (input.length > 3) {
                    return 'the limit is 3 characters, please re-enter your input';
                }
                return true;
            },
        },
//text color of logo
{
    type: 'input',
    name:'textColor',
    message: 'Chose what color you would like your logo text',
    default: 'white',
},
{
//shape options
    type: 'list',
    nape: 'shape',
    message: "select a shape",
    choices: ['circle', 'triangle', 'square'],
},
{
    //shape color
    name: 'shapeColor',
    message: 'Please enter the color for the desired shape of your choosing (keyword or hexadecimal):',
    default: 'black',
    },
])
.then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const svgTemplate = generateSVG(text, textColor, shape, shapeColor);
    saveSvgToFile(svgTemplate);
})
.catch((error) => {
    console.log('An error occurred:', error);
});
};

const saveSvgToFile = (svgTemplate) => {
fs.writeFile('logo.svg', svgTemplate, (err) => {
if (err) {
console.log('Error occurred while saving SVG file', err);
} else {
console.log('Generated logo.svg');
};
});
};

promptUser();