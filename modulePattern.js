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

const basketModule = function () {
  // private
  let basket = [];
  const doSomethingPrivate = () => {
    console.log('private');
  };
  // public object
  return {
    addItem(item) {
      basket.push(item);
    },
    getItemCount() {
      return basket.length;
    },
    doSomething: doSomethingPrivate,
    getTotal() {
      let quantity = this.getItemCount(), price = 0;
      while (quantity--) {
        price += basket[quantity].price;
      }
      return price;
    },
  }
};

const basket = basketModule();
basket.addItem({
  item: 'bread',
  price: 0.5
});
basket.addItem({
  item: 'butter',
  price: 0.3
});
console.log(basket.getItemCount());
console.log(basket.getTotal());
basket.doSomething();
console.log(basket.basket); // undefined cuz private

const RevealingModule = () => {
  let privateVar = 'John Doe', publicGreeting = 'hello';

  const privateFunc = () => {
    console.log(`Name ${privateVar}`);
  };
  const publicSetName = (strName) => {
    privateVar = strName;
  };
  const publicGetName = () => {
    privateFunc();
  };

  return { publicSetName, publicGreeting, publicGetName };
};

const revealing = RevealingModule();
revealing.publicGetName();
revealing.publicSetName('Dankey Kang');
console.log(revealing.publicGreeting);

