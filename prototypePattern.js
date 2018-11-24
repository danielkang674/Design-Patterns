function Car(model, year, miles) {
  this.model = model;
  this.year = year;
  this.miles = miles;
};

Car.prototype.toString = function () {
  return `${this.model} has done ${this.miles} miles`
};

const civic = new Car('Honda Civic', 1991, 90000);
const corolla = new Car('Toyota Corolla', 2001, 50000);

console.log(civic.toString());
console.log(corolla.toString());
console.log(civic.constructor);
