class Shape {
    constructor() {
        this.color = ""
    }

    setColor(color) {
        this.shapeColor = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`      
    }
}

class Square extends Shape {
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 140 56, 140" fill="${this.shapeColor}"/>`
    }
}

module.exports = {Triangle, Square, Circle}