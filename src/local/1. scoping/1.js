// Scoping

/*
  Example 1
  declaring variables in the global scope

*/
;(function (window) {
  function helloWorld () {
    console.log('Hellworld')
  }
  window.helloWorld = helloWorld
})(window)

window.helloWorld()