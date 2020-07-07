// Method examples
const user = {
  name: 'John',
  age: 30
};

user.occupation = 'thief';

user.sayHi = function() {
  console.log('Hello!');
};

user;

user.sayHi(); // Hello!

// can be a function declaration
function sayHi() {
  console.log('Hello!');
}
user.sayHi = sayHi;

// method shotHands
const user2 = {
  name: 'John',
  age: 30,
  sayHi() {
    console.log('Hello!');
  }
};

user2.sayHi(); // Hello!

// “this” in methods - to access an object property with a method you need the this keyWorld
const user3 = {
  name: 'John',
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this);
    console.log(this.name);
  }
};

user3.sayHi();

// why this?
let user4 = {
  name: 'John',
  age: 30,

  sayHi() {
    console.log(this.name); // leads to an error
  }
};

user4.sayHi();
const new2 = user4;
user4 = Object(null);

new2.name = 'ade';
new2.sayHi();
new2.sayHi();

const admin = user4;

user4 = null; // overwrite to make things obvious

// admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

// console.log(user4.sayHi()); // John
// “this” is not bound

// create two object and bound the function sayHello to a property named 'f';
const obj1 = {
  f: function sayHello() {
    return 'hi';
  }
};

const obj2 = {
  f: function sayHello() {
    return 'hi';
  }
};

console.log(obj1, obj2);

// The value of this is evaluated during the run-time, depending on the context.
// you can use either dot operator to access the method or square bracket notation
// calling this with an object result in undefined in strict mode and windows in browser

// In JavaScript this is “free”, its value is evaluated at call-time and does not depend on where the method was declared, but rather on what object is “before the dot”.

// Internals: Reference Type

const user5 = {
  name: 'John',
  hi() {
    console.log(this.name);
  },
  bye() {
    console.log('Bye');
  }
};

user5.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
// (user5.name === 'John' ? user5.hi : user5.bye)(); // Error! // ternary operator, binary, unary ops
// user5.name === 'John' ? user5.hi() : user5.bye(); // Error! // ternary operator, binary, unary ops

// reason for error
const user6 = {
  name: 'John',
  hi() {
    console.log(this.name);
  }
};

// split getting and calling the method in two lines✅
const { hi } = user;
// hi(); // Error, because this is undefined

// Arrow functions have no “this”
const user7 = {
  firstName: 'Ilya',
  sayHi: () => {
    const arrow = () => console.log(this.firstName);
    arrow();
  }
};

console.log(user7.sayHi()); // Ilya
