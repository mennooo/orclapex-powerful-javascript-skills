// Objects

/*
  Example 1
  Define object literal

  You cannot create instances

*/

let greeter = {
  greeting: 'Hi',
  name: 'Bill',
  greet: function () {
    console.log(greeter.greeting + ' ' + greeter.name)
  }
}

// Execute method: greet
greeter.greet()
