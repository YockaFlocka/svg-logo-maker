const {Triangle, Square, Circle} = require('./shapes');

test("render a blue square svg", () => { 
    const shape = new Square();
    shape.setShapeColor("blue");
    expect(shape.render()).toEqual('<rect x="90" y="40" width="150" height="150" fill="blue" />');
});