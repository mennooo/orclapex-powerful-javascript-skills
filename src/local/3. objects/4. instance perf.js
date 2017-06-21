// Objects

/*
  Example 3
  Define Instance Object without prototyping

*/
function Person (name) {
  this.name = name
  this.greeting
  this.greet = function () {
    this.greeting = 'Hi ' + this.name
  }
}

// Measure code performance
var start = new Date()

for (let i = 0; i <= 1000000; i++) {
  let person = new Person('Bill' + i)
  person.greet()
}

console.log('Duration (ms):', new Date() - start)
