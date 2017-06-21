(function () {
  var myVar = 1
  const myConst = {
    value: 2
  }

  if (myVar === 1) {
    let myLet = 3
    myConst.value = myLet
  }
})()
