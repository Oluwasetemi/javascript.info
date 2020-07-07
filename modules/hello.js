// default import
import User from './user.js';

alert(User); // no such variable (each module has independent variables)
// document.body.innerHTML = user; // John
const john = new User('john');
console.log(john);
