const generateSVG = (text, textColor, shape, shapeColor) => {
    let shapeForm;

    if (shape === 'triangle') {
        shapeForm = '<polygon points="0,200 300,200 150,0" fill="' + shapeColor + '"></polygon>';
    } else if (shape === 'circle'){
        shapeForm = '<circle cx="150" cy="100" r="50" fill="' + shapeColor + '"></circle>';
    } else if (shape === 'square') {
        shapeForm = '<rect x="100" y="50" width="100" height="100" fill="' + shapeColor + '"></rect>';
    } else {
        shapeForm = '';
    }

const svgTemplate = '<svg width="300" height= "200" xmlns= "http://www.w3.org/2000/svg">' + shapeForm + '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="' + textColor + '">' + text + '</text>' +
'</svg>';

return svgTemplate;
}

module.exports = generateSVG