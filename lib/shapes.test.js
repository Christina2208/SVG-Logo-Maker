//importing the shapes.js file to see if the three shapes are able to be rendered properly
const generateSVG = require("./shapes");

//circle
describe('circle', () => {
    test('renders correctly', () => {
        const shape = new circle();
        let color = ('green')
        shape.setColor(color);
        expect(svgCode).toEqual('<circle cx="150" cy="100" r="50" fill="green" />');
    })
//triangle
describe('triangle', () => {
    test('renders correctly', () => {
        const shape = new triangle();
        let color = ('yellow')
        shape.setColor(color);
        expect(svgCode).toEqual('<polygon points="0,200 300,200 150,0" fill="yellow" />');
    })
//square
describe('square', () => {
    test('renders correctly', () => {
        const shape = new square();
        let color = ('blue')
        shape.setColor(color);
        expect(svgCode).toEqual('<rect x="100" y="50" width="100" height="100" fill="blue" />');
    });
})
})
})

