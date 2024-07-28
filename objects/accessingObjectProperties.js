/* eslint-ignore */

const obj = {
  name: 'ade',
  age: 20,
  isDeveloper: true,
  'first-name': 'javascript',
  'like lion': false,
};
// dot property
obj.name = 'temi';
console.log(obj['first-name']);
console.log(obj);

// square bracket notation
obj['first-name'];
// obj.name;
// obj.age;
const something = 'first-name';
// obj[something]
// obj["like lion"]

// NB- always use the square bracket notation whenever you need to do runtime or user input related things

// computed properties
const computed = {
  [`${'value'}`]: 2,
  [`${2 + 2}`]: 3,
  [`${'value 3'}`]: 4,
  ['hello' + 'world']: 5,
};

console.log(computed);

const fruit = 'apple';
const bag = {
  [`${fruit}Computers`]: 5, // bag.appleComputers = 5
};
console.log(bag.appleComputers);

// const firstName = '';

// const kob = {
//     firstName: 'Oluwasetemi',
//     lastName: 'Ojo'
// }
const first = 'first';
const last = 'last';

const age = 'twenty-five';

const name = 'Oluwasetemi Ojo'; // ['Oluwasetemi', 'Ojo']
const kob = {
  name,
  [`${last}Name`]: name.split(' ')[1],
  [`${first}Name`]: name.split(' ')[0],
};
console.log(kob);

const name1 = 'oluwasetemi';
const age1 = 20;

// const test = //    ame: 'o;luwasetemi',
//     age: 20
// }

const obj1 = {
  name1,
  age1,
};

obj1;

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}

const testUser = makeUser('temi', 23);
testUser;

// allow both normal and shorthand
const user = {
  name, // same as name:name
  age: 30,
};

console.log(user);
// assignment
console.log(check(user, 'age'));

function check(obj, key) {
  // if (obj.hasOwnProperty(key)) {
  for (const k in obj) {
    // console.log(k, obj[k]);
    if (k === key) {
      return true;
    }
  }
  return false;
}

console.log(remove(user, 'age'));
console.log(user);

function remove(obj, key) {
  if (obj[key]) {
    delete obj[key];
    return true;
  }
  return false;
  // console.log('property removed');
}

// delete user.age;
// user['age'] = null
console.log(user);

const fruits = [
  'apples',
  'oranges',
  'bananas',
  'apples',
  'oranges',
  'bananas',
  'apples',
  'oranges',
  'bananas',
];

count(fruits);

function count(arr) {
  const counts = {};
  for (const each in arr) {
    const value = arr[each];
    counts[value] ? (counts[value] += 1) : (counts[value] = 1);
  }
  console.log(counts);
}
const sample = { a: 2, b: 3, c: 4 };
const res = multiplyNumeric(sample);
console.log(res);

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
