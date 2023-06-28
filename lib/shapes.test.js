//importing the shapes.js file to see if the three shapes are able to be rendered properly
const generateSVG = require("./shapes");

//circle
describe('circle', () => {
    test('renders correctly', () => {
        const shape = new circle();
        var color = ('green')
        shape.setColor(color);
        expect(svgCode).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
    })
    
})
