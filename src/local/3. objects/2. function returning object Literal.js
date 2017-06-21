// Objects

/*
  Example 2
  Function returning object literal

  You can create instances

*/
function createGreeter (name) {
  return {
    greeting: 'Hi',
    name: name,
    greet: function () {
      console.log(greeter.greeting + ' ' + name)
    }
  }
}

let greeter = createGreeter('Bill')
let greeter2 = createGreeter('John')

// Execute method: greet
greeter2.greet()
greeter.greet()
