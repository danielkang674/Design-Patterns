class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    this._data = data;
    Database.exists = true;
    Database.instance = this;
    return this;
  }
  setData(data) {
    this._data = data;
  }
  getData() {
    return this._data;
  }
};

const mongo = new Database('mongo');
console.log(mongo.getData());
const postgres = new Database('postgres');
console.log(postgres.getData());

function DB(data) {
  if (DB.instance) {
    return DB.instance;
  }
  this.data = data;
  this.setData = function (data) {
    this.data = data;
  };
  this.getData = function () {
    return this.data;
  }
  DB.instance = this;
};

const mongoose = new DB('mongoose');
console.log(mongoose.getData());
const mysql = new DB('mysql');
console.log(mysql.getData());
DB.instance = undefined;
const redis = new DB('redis');
console.log(redis.getData());

const rnd = () => {
  let instance;
  const init = (data) => {
    const privateFunc = () => {
      console.log('I\'m private');
    };
    let privateVar = 'This is a private var';
    let privateNum = Math.random();
    let privData = data;
    return {
      publicMethod() {
        console.log('Public can see me');
      },
      publicProperty: 'I am also public',
      getRandomNumber() {
        return privateNum;
      },
      getData() {
        return privData;
      },
      setData(data) {
        privData = data;
      },
    }
  };
  return {
    getInstance(data) {
      if (!instance) {
        instance = init(data);
      }
      return instance;
    }
  }
};

const rndConstructor = rnd();
const a = rndConstructor.getInstance('a');
console.log(a.getRandomNumber());
console.log(a.getData());
const b = rndConstructor.getInstance('b');
console.log(b.getRandomNumber());
console.log(b.getData());
a.setData('c');
console.log(a.getData());
console.log(b.getData());