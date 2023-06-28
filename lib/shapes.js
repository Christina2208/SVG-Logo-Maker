const generateSVG = (text, textColor, shape, shapeColor) => {
    let shapeForm;

    if (shape === 'ellipse') {
        shapeForm = '<ellipse cx="200" cy="80" rx="100" ry="50" fill="' + shapeColor + '"></ellipse>';
    } else if (shape === 'circle'){
        shapeForm = '<circle cx="150" cy="100" r="50" fill="' + shapeColor + '"></circle>';
    } else if (shape === 'rectangle') {
        shapeForm = '<rect x="100" y="50" width="300" height="100" fill="' + shapeColor + '"></rect>';
    }
}