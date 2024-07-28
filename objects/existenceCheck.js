// A notable objects feature is that it’s possible to access any property.
const user = {
	abuse: 'bastard',
	noSuchProperty: 1,
};

// user.abuse = 'stupid'

console.log('abuse' in user ? `hello ${user.abuse}` : 'no abuse');


console.log(user.noSuchProperty); // true means "no such property"

// check if a key exist in an object
// 'key/property' in object;

// Test
const user2 = { age: 30 };

const key = 'age';
console.log(key in user2); // true, takes the name from key and checks for such property

// if (user2.age) {
//     console.log('I am existing')
// }
// works in node version 13.4.0 upward
// optional chaining and null coalescing ??
// user2?.name;

// Tasks javascript.info
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
  Julia: 110,
  name: 'John',
};

function addAll(obj) {
  let sum = 0;
  for (const prop in obj) {
    if (prop in obj && typeof obj[prop] === 'number') {
      //   sum += obj[prop];
      sum += obj[prop];
    }
  }
  return sum;
}

console.log(addAll(salaries));

// return how many items in an object
function count(obj) {
  let count = 0;
  for (const prop in obj) {
    count++;
  }
  return count;
}

console.log(count(salaries));

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.log(multiplyNumeric(menu));

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  console.log(obj);
  return obj;
}

// after the call
menu = {
  width: 400,
  height: 600,
  title: 'My menu',
};

console.log(menu && menu.age);
