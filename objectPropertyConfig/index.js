// /* eslint-disable */

// let user = {
//   name: "John"
// };

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.Boolean()ify(descriptor, null, 2 ) );
// /* property descriptor:
// {
//   "value": "John",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }
// */

// Object.defineProperty(user, "name", {
//   value: "John"
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// alert( JSON.stringify(descriptor, null, 2 ) );
// /*
// {
//   "value": "John",
//   "writable": false,
//   "enumerable": false,
//   "configurable": false
// }
//  */
// // non-writable error
//  let user = {
//   name: "John"
// };

// Object.defineProperty(user, "name", {
//   writable: false
// });

// user.name = "Pete"; // Error: Cannot assign to read only property 'name'

// let user = { };

// Object.defineProperty(user, "name", {
//   value: "John",
//   // for new properties we need to explicitly list what's true
//   enumerable: true,
//   configurable: true
// });

// alert(user.name); // John
// user.name = "Pete"; // Error

// // non-writable error
// let user = {
//   name: "John",
//   toString() {
//     return this.name;
//   }
// };

// // By default, both our properties are listed:
// for (let key in user) alert(key); // name, toString

const obj = {
  name: 'ade',
  age: 10
};

const clone = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(obj)
);
console.log(clone);
clone.name = 'oluwasetemi';
console.log(obj);
console.log(clone);

// property accessor
// getter and setter
// accessor descriptor
// smarter getter and setter
//
const user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    const [name, surname] = value.split(' ');
    this.name = name;
    this.surname = surname;
    return `${name} ${surname}`;
  }
};

console.log(user.fullName); // John Smith
user.fullName = 'Oluwasetemi Ojo';
console.log(user.name);
console.log(user.surname);

const user2 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short, need at least 4 characters');
      return;
    }
    this._name = value;
  }
};

user2.name = 'Peewe';
console.log(user2.name); // Pete

user.name = ''; // Name is too short...

function User(name, birthday) {
  // let this = {};
  this.name = name;
  this.birthday = birthday;
  // return this;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, 'age', {
    get() {
      const todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

const john = new User('John', new Date(1993, 1, 12));
// const admin = new User('Admin', 225);

console.log(john.age);

console.log(typeof console);

console.dir(String.prototype);
const a = 'This is a boy'.indexOf('is');
console.log(a);
