// ES6
class Hero {
  constructor(name, specialAbility) {
    this._name = name;
    this._specialAbility = specialAbility;
  }
  getDetails() {
    return `${this._name} can ${this._specialAbility}`;
  }
}

// Pseudoclassical
function Hero(name, specialAbility) {
  this.name = name;
  this.specialAbility = specialAbility;
  this.getDetails = () => `${this.name} can ${this.specialAbility}`;
}

const ironMan = new Hero('Iron man', 'Fly');
console.log(ironMan.getDetails());