const {Triangle, Square, Circle} = require('./shapes');

test("render a blue square svg", () => { 
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="blue" />');
});

test("render a green triangle svg", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 140 56, 140" fill="green"/>');
});

test("render a black circle svg", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="black" />');
});