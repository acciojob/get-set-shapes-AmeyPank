// //complete this code
// // Rectangle class
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   get width() {
//     return this.width;
//   }

//   get height() {
//     return this.height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// // Square class
// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//     this.side = side;
//   }

//   getPerimeter() {
//     return 4 * this.side;
//   }
// }

// // Do not change the code below this line
// window.Rectangle = Rectangle;
// window.Square = Square;

// // Do not change the code below this line
// window.Rectangle = Rectangle;
// window.Square = Square;


//complete this code
// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

// Square class
class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this._side = side;
  }

  getPerimeter() {
    return 4 * this._side;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;