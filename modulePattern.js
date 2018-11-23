const testModule = (function () {
  let counter = 0;
  return {
    incrementCounter() {
      return counter++;
    },
    resetCounter() {
      console.log(`counter value prior to reset ${counter}`);
      counter = 0;
    }
  };
})();

testModule.incrementCounter();
testModule.resetCounter();

// Simple template
const myNamespace = (function () {
  let myPrivateVar, myPrivateMethod;
  // private counter
  myPrivateVar = 0;
  // private method to log any arguments
  myPrivateMethod = function (foo) {
    console.log(foo, myPrivateVar);
  }

  return {
    myPublicVar: 'foo',
    myPublicFunction(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();

myNamespace.myPublicFunction('yes');