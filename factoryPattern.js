class BallFactory {
  createBall(type) {
    let ball;
    if (type === 'football' || type === 'soccer') {
      ball = new SoccerBall();
    }
    if (type === 'basketball') {
      ball = new BasketBall();
    }
    // Not using arrow function to have left of dot this binding
    ball.roll = function () {
      return `The ${this._type} is rolling`;
    }
    return ball;
  }
};

class SoccerBall {
  constructor() {
    this._type = 'soccer ball';
  };
  kick() {
    return `You kicked the ${this._type}`;
  }
};

class BasketBall {
  constructor() {
    this._type = 'basket ball';
  };
  bounce() {
    return `You bounced the ${this._type}`;
  }
};

const factory = new BallFactory();
const soccerball = factory.createBall('soccer');
const basketball = factory.createBall('basketball');

console.log(soccerball.kick());
console.log(soccerball.roll());
console.log(basketball.bounce());
console.log(basketball.roll())
