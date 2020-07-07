export function sayHi(user) {
  return `Hello, ${user}!`;
}

// export an array
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

// 📁 say.js
function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export { sayBye }; // a list of exported variables
// export {sayHi as hi, sayBye as bye};
