var persons = ['bill', 'Julia']

function greetAll () {
  for (var arg = 0; arg < arguments.length; ++arg) {
    console.log('Hi', arguments[arg].name)
  }
}

function greetAllES6 () {
  for (const person of Array.from(arguments)) {
    console.log(`Hi ${person.name}`)
  }
}

greetAll.apply(this, persons)

greetAllES6(...persons)
