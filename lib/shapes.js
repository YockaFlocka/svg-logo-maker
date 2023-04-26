class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    setShapeColor(color) {
        this.shapeColor = color;
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
    }

    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Triangle, Square, Circle}