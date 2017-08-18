// EXERCISE 1 - HELLO WORLD (to compile using tsc CLI)
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
// EXERCISE 2 - DECLARING VARIABLES
var number = 1;
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();
