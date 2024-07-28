// default name
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
// export { sayHi as default };

// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHiAgain(user) {
  alert(`Hello, ${user}!`);
}

// 📁 main.js
// import {default as User, sayHi} from './user.js';

// new User('John');
