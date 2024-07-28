/* eslint-disable */
// The “class” syntax

/*
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
*/

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Usage:
const user = new User('John');
console.log(user)
console.log(user instanceof User);
user.sayHi();

// a function created by class is labelled [[FunctionKind]]:"classConstructor" - string representation of a class starts with the class keyword
// Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype"
// Classes always use strict. All code inside the class construct is automatically in strict mode

/*
// function equivalent
// rewriting class User in pure functions

// 1. Create constructor function
function User(name) {
    // this = {};
  this.name = name;
//   return this;
}
// any function prototype has constructor property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function() {
  console.log(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();

*/

// What is a class?
// Not just a syntactic sugar
// Class Expression
// can be used as a JS expression and named class expression from it's function variant
// "Named Class Expression"
// (no such term in the spec, but that's similar to Named Function Expression)
const User2 = class MyClass {
  sayHi() {
    console.log(MyClass); // MyClass name is visible only inside the class
  }
};

new User2().sayHi(); // works, shows MyClass definition

// console.log(MyClass); // error, MyClass name isn't visible outside of the class

// we can make classes on-demand (dynamically)

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Create a new class
const User3 = makeClass('Hello');

new User3().sayHi(); // Hello

// Getters/setters, other shorthands

const obj12 = {
    name: 'ade', age: 19,
    set setName(value) {
        this.name = value;
    },
    get getName() {
        return this.name
    },
    set setAge(value) {
        this.age = value;
    },
    get getAge() {
        return this.age
    }
}

obj12.setName = 'Oyinbo';
console.log(obj12.getName);
console.log(obj12)

class User4 {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get getName() {
    return this.name;
  }

  set setName(value) {
    if (value.length < 4) {
      console.log('Name is too short.');
      return;
    }
    this.name = value;
  }
}

let userObj = new User4('John');
console.log()
// userObj.setName = '2qq';
userObj
console.log(userObj.getName); // John

userObj = new User4(''); // Name is too short.

const computedObject = {
    [2 + 2]: 'ade'
}
console.log(computedObject)

// method can use computed properties
class User5 {
  ['say' + 'Hi']() {
    console.log('Hello');
  }
}

new User5().sayHi();

// Class properties
class User6 {
  name = 'Oluwasetemi';

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

console.log(new User6().name)
let userVal = new User6();
let value = userVal.sayHi();
console.log(value)


console.log(User6.prototype.sayHi); // placed in User.prototype
console.log(User6.prototype.name); // undefined, not placed in User.prototype

// The “extends” keyword

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

/* Rabbit.prototype = Animal;
Rabbit.__proto__ = Animal;

rabbit = {
    __proto__: Animal
}

Object.create()
Object.setPrototype
Object.getPrototype

*/

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!

// JS allows you to extend with any expression
function f(phrase) {
  return class {
    sayHi() { console.log(phrase) }
  }
}

class User7 extends f("Hello") {}

new User7().sayHi(); // Hello

// Overriding a method
// super keyword for overriding the behaviour of a method in a class

class AnimalAgain {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }

}

class RabbitAgain extends AnimalAgain {
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit2 = new RabbitAgain("Rabbit Again");

rabbit2.run(5); // White Rabbit runs with speed 5.
rabbit2.stop(); // White Rabbit stands still. White rabbit hides!
console.log(rabbit2.speed)

// arrow fxn have no super

// Overriding constructor
class Rabbit2 extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}

class Animal2 {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit3 extends Animal2 {

    constructor(name, earLength, speed) {
      super(name, speed)
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Doesn't work!
let rabbit3 = new Rabbit3("White Rabbit", 10, 140); // Error: this is not defined.
console.log(rabbit3)

// The short answer is: constructors in inheriting classes must call super(...), and (!) do it before using this
// a derived constructor has an internal property called [[ConstructorKind]]:"derived"

// So a derived constructor must call super in order to execute its parent(non - derived) constructor, otherwise the object for this won’t be created.And we’ll get an error.

class Animal3 {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit4 extends Animal3 {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// now fine
let rabbitDerived = new Rabbit3("White Rabbit", 10);
console.log(rabbitDerived.name); // White Rabbit
console.log(rabbitDerived.earLength); // 10

// Super: internals, [[HomeObject]]
// When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.
let animalNew = {
  name: "Animal",
  eat() {         // animalNew.eat.[[HomeObject]] == animal
    console.log(`${this.name} eats.`);
  }
};

let rabbitNew = {
  __proto__: animalNew,
  name: "Rabbit",
  eat() {         // rabbitNew.eat.[[HomeObject]] == rabbit
    super.eat();
  }
};

let longEar = {
  __proto__: rabbitNew,
  name: "Long Ear",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

// works correctly
console.log(longEar.eat());  // Long Ear eats.

// Then super uses it to resolve the parent prototype and its methods.

// Static properties and method
class UserAgain {
  static staticMethod() {
    console.log(this === User);
  }
}

UserAgain.staticMethod(); // true
// the value of this in a static method is the class constructor itself

/* class Article {
  static publisher = "Ilya Kantor";
}

console.log(Article.publisher); // Ilya Kantor */


// Inheritance of static properties and methods

// So, Rabbit extends Animal creates two [[Prototype]] references:

// Rabbit function prototypally inherits from Animal function.
// Rabbit.prototype prototypally inherits from Animal.prototype.
// As a result, inheritance works both for regular and static methods.

class Animal5 {}
class Rabbit5 extends Animal5 {}

// for statics
console.log(Rabbit5.__proto__ === Animal5); // true

// for regular methods
console.log(Rabbit5.prototype.__proto__ === Animal5.prototype); // true

// private and public property
class Animal6 {}
class Rabbit6 extends Animal6 {}

// for statics
console.log(Rabbit6.__proto__ === Animal6); // true

// for regular methods
console.log(Rabbit6.prototype.__proto__ === Animal6.prototype); // true


// protected, private and public properties - protecting the internal details of OOP

class CoffeeMachine {
  waterAmount = 0; // the amount of water inside

  constructor(power) {
    this.power = power;
    console.log( `Created a coffee-machine, power: ${power}` );
  }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
coffeeMachine.waterAmount = 200;

console.log(coffeeMachine)

class CoffeeMachineProtected {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// create the coffee machine
let coffeeMachine2 = new CoffeeMachineProtected(100);

// add water
// coffeeMachine2.waterAmount = -20; // Error: Negative water
console.log(coffeeMachine2)

class CoffeeMachine2 {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// create the coffee machine
let coffeeMachine3 = new CoffeeMachine2(100);

console.log(`Power is: ${coffeeMachine2.power}W`); // Power is: 100W
console.log(coffeeMachine2.power)
coffeeMachine2.power = 25; // Error (no setter)

// get.... and set... method are preferred to prefixing the method with get and set
class CoffeeMachine3 {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine3().setWaterAmount(100);

// protected fields are inherited_

// '#waterLimit' - private field
class CoffeeMachine4 {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("Negative water");
    if (value > this.#waterLimit) throw new Error("Too much water");
  }

}

let coffeeMachine4 = new CoffeeMachine4();

// can't access privates from outside of the class
// coffeeMachine4.#checkWater(); // Error
// coffeeMachine4.#waterLimit = 1000; // Error */
/*
class CoffeeMachine6 {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Negative water");
    this.#waterAmount = value;
  }
}

// let machine = new CoffeeMachine();

// machine.waterAmount = 100;
// console.log(machine.#waterAmount); // Error

// NB compared to protected fields the privates fields cannot be assessed
class MegaCoffeeMachine extends CoffeeMachine6 {
    #waterAmount = 0
  method() {
    console.log( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}

// Extending built in classes
// add one more method to it (can do more)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false

// builtin array method return the inherited class
arr.constructor === PowerArray

class PowerArray2 extends Array {
  isEmpty() {
    return this.length === 0;
  }

    // TODO: note
  // built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr2 = new PowerArray2(1, 2, 5, 10, 50);
console.log(arr2.isEmpty()); // false

// filter creates new array using arr.constructor[Symbol.species] as constructor
let filteredArr2 = arr.filter(item => item >= 10);

// filteredArr is not PowerArray, but Array
console.log(filteredArr2.isEmpty()); // Error: filteredArr.isEmpty is not a function

// Other collections, such as Map and Set, work alike. They also use Symbol.species

// Built-in objects have their own static methods, for instance Object.keys, Array.isArray etc.

// As we already know, native classes extend each other.For instance, Array extends Object

// But built-in classes are an exception. They don’t inherit statics from each other

// For example, both Array and Date inherit from Object, so their instances have methods from Object.prototype. But Array.[[Prototype]] does not reference Object, so there’s no, for instance, Array.keys() (or Date.keys()) static method.

// The instanceof operator
class RabbitQ {}
let rabbitQ = new RabbitQ();

// is it an object of Rabbit class?
console.log(rabbitQ instanceof RabbitQ); // true

// function implementation
// instead of class
function RabbitQe() {}

console.log( new RabbitQe() instanceof RabbitQe ); // true

// with built in classes like Array
let arr5 = [1, 2, 3];
console.log( arr5 instanceof Array ); // true
console.log( arr5 instanceof Object ); // true



// Bonus: Object.prototype.toString for the type
// copy toString method into a variable for convenience
let objectToString = Object.prototype.toString;

// what type is this?
let arr6 = [];

console.log(objectToString.call(arr)); // [object Array]

let userTest = {
  [Symbol.toStringTag]: "User"
};

console.log({}.toString.call(userTest)); // [object User]

// toStringTag for the environment-specific object and class:
// console.log( window[Symbol.toStringTag]); // window
// console.log( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest

// console.log( {}.toString.call(window) ); // [object Window]
// console.log({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]

// Mixins
// a mixin is a class containing methods that can be used by other classes without a need to inherit from it
// a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes
// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

// usage:
class UserMixed {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(UserMixed.prototype, sayHiMixin);

// now User can say hi
new UserMixed("Dude").sayHi(); // Hello Dude!

// Mixins can make use of inheritance inside themselves
let sayMixin2 = {
  say(phrase) {
    console.log(phrase);
  }
};

let sayHiMixin2 = {
  __proto__: sayMixin2, // (or we could use Object.create to set the prototype here)

  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  }
};

class UserExample {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(UserExample.prototype, sayHiMixin2);

// now User can say hi
new UserExample("Dude").sayHi(); // Hello Dude!
*/

// Example
let eventMixin = {
  /**
   * Subscribe to event, usage:
   *  menu.on('select', function(item) { ... }
  */
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Cancel the subscription, usage:
   *  menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Generate an event with the given name and data
   *  this.trigger('select', data1, data2);
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // no handlers for that event name
    }

    // call the handlers
    this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
  }
};

// usage
// Make a class
class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

// add a handler, to be called on selection:
menu.on("select", value => console.log(`Value selected: ${value}`));

// triggers the event => the handler above runs and shows:
// Value selected: 123
menu.choose("123");

// Mixin – is a generic object-oriented programming term: a class that contains methods for other classes
// Some other languages allow multiple inheritance. JavaScript does not support multiple inheritance, but mixins can be implemented by copying methods into prototype