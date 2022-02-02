const name = 'oluwasetemi';
const age = 20;

// const test = //    ame: 'o;luwasetemi',
//     age: 20
// }

const obj = {
  name,
  age,
};

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // saconstas age: age
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
let sample = { a: 2, b: 3, c: 4 };
let res = multiplyNumeric(sample);
console.log(res)

function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
  return obj;
}
