// Objects

/*
  Example 2
  Define Instance Object

*/

// Define Instance Object (constructor)
let Greeter = function (name) {
  this.greeting = 'Hi'
  this.name = name
}
// Add function to Instance Object
Greeter.prototype.greet = function () {
  console.log(this.greeting + ' ' + this.name)
}

// Creat instance
let greeter = new Greeter('Bill')

// Execute a method
greeter.greet()
