// // EXERCISE 1 - HELLO WORLD (to compile using tsc CLI)
// function log(message) {
//   console.log(message);
// }
// var message = 'Hello World';
// log(message);
// // EXERCISE 2 - DECLARING VARIABLES
// var number = 1;
// let count = 2;
// function doSomething () {
//   for (var i = 0; i < 5; i++) {
//     console.log(i)
//   }
//   console.log('Finally: ' + i);
// }
// doSomething();
// // EXERCISE 3 - TYPES
//     // let counter = 5;
//     // counter = 'a';
// let a: number;
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color { Red = 0, Green = 1, Blue = 2, Purple = 3 };
// let backgroundColor = Color.Green;
// console.log(Color);
// // EXERCISE 4 - TYPE ASSERTIONS
// let message;
// let endsWithC = (<string>message).endsWith('c')
// let alternativeWay = (message as string).endsWith('c')
// //  EXERCISE 5 - ARROW FUNCTIONS
// let log = function (message) {
//   console.log(message)
// }
// let doLog = (message) => console.log(message);
// // EXERCISE 6 - INTERFACES
// interface Point {
//   x: number,
//   y: number
// }
// let drawPoint = (point: Point) => {
//   // ..
// }
// EXERCISE 7 - CLASSES
var Point = (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        console.log('lol');
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
