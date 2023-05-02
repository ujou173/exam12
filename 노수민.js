// const add = require('./utility-module/add.js');
// const minus = require('./utility-module/minus.js');
// const divide = require('./utility-module/divide.js');
// const multiply = require('./utility-module/multiply.js');

class Calculate {
  constructor(first, second) {
    this._first = first;
    this._second = second;
  }

  set first(value) {
    if(typeof(value) !== 'number' || !Number.isInteger(value)) {
      console.error("정수가 아닙니다");
    } else {
      this._first = value;
    }
  }

  set second(value) {
    if(typeof(value) !== 'number' || !Number.isInteger(value)) {
      console.error("정수가 아닙니다");
    } else {
      this._second = value;
    }
  }

  get first() {
    return this._first;
  }

  get second() {
    return this._second;
  }

  add() {
    return this._first + this._second;
  }

  minus() {
    return this._first - this._second;
  }

  divide() {
    return this._first / this._second;
  }

  multiply() {
    return this._first * this._second;
  }
}


const a = 10;
const b = 20;

const calc = new Calculate(a, b);
console.log(calc)

console.log(calc.add(a, b));
console.log(calc.minus(a, b));
console.log(calc.divide(a, b));
console.log(calc.multiply(a, b));