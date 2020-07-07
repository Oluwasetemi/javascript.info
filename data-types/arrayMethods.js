/* eslint-disable */
// Add/remove items
// pop, push, shift and unshift
// slice
const arr = [1, 2, 3, 4, 5];
const result = arr.slice(2, 4);
console.log(result);

const names = ['ade', 'totti', 'temi', 'ayo', 'simi', 'code'];
names.splice(2, 3, 'ope', 'stephen');
console.log(names);

names.splice(names.length, 0, 'tola', 'adeMi');
console.log(names);

const arr2 = [1, 2];

// create an array from: arr and [3,4]
console.log(arr2.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr2.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr2.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
// Iterate: forEach
arr;
arr.forEach(v => console.log(v + 1));

const temp = arr.map((v, i) => i + v);
console.log(temp);

// using an anon function declaration
arr.forEach(function(number, index, array) {
  console.log(number);
  console.log(index);
  console.log(array);
});
// using a function signature
console.log(arr.forEach(console.log));
// using arrow functions
arr.forEach((each, index, array) => console.log({ each, index, array }));

// Searching in array
// indexOf/lastIndexOf and includes
const arr3 = [1, 0, 1, false, 1];

console.log(arr3.indexOf(0)); // 1
console.log(arr3.lastIndexOf(1, 3)); // 1
console.log(arr3.indexOf(false)); // 2
console.log(arr3.indexOf(null)); // -1

console.log(arr3.includes(1)); // true

// correctly handles NaN
const arr4 = [NaN];
console.log(arr4.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr4.includes(NaN)); // true (correct)

// find and findIndex
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' }
];
const findUser = (value, index, array) => {
  console.log({ value, index, array });
  return value.id == 2;
};
const user = users.find(v => v.name === 'Pete'); // function (v) { return v.name === 'Pete' }
console.log(user);
const userIndex = users.findIndex(item => item.name == 'Mary');

console.log(user.name); // John
console.log(userIndex); // John

const users2 = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' }
];

// returns array of the first two users2
const someUsers = users2.filter(item => item.id < 3);

console.log(someUsers); // 2

// Transform an array and re-order
// map
const lengths = ['Bilbo', 'Gandalf', 'Nazgul'].map(item => item.length);
console.log(lengths); // 5,7,6

// sort
const arr5 = [1, 2, 1, 15];

// the method reorders the content of arr
arr5.sort();

console.log(arr5); // 1, 15, 2

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

const arr6 = [1, 2, 15];

arr6.sort(compareNumeric);

console.log(arr6); // 1, 2, 15

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log(`${a} <> ${b}`);
});

// comparison function may return number
const arr7 = [1, 2, 15];

arr7.sort(function(a, b) {
  return a - b;
});

console.log(arr7); // 1, 2, 15

// use localeCompare for string
// reverse
const arr8 = [1, 2, 3, 4, 5];
arr8.reverse();

console.log(arr8); // 5,4,3,2,1

// split and join
const officers = 'Bilbo, Gandalf, Nazgul';

const officersArr = officers.split(', ');

for (const name of officersArr) {
  console.log(`A message to ${name}.`); // A message to Bilbo  (and other names)
}

const strTest = 'test';

console.log(strTest.split('')); // t,e,s,t

const arr9 = ['Bilbo', 'Gandalf', 'Nazgul'];

const str = arr9.join(';'); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgul

const string = 'ade, oluwasetemi, ojo';
const strArr = string.split(', ');
console.log(strArr)
console.log(strArr.reverse())
console.log(strArr.join(', '))

// reduce and reduceRight
const arr10 = [1, 2, 3, 4, 5, 4, 3, 10, 1, 5, 6, 2];
// sum = 0; 0 + 1, 1 + 2, 3 + 3

const fruits = ['apple', 'banana', 'orange', 'apple', 'lemon', 'ginger'];

const fruitObject = fruits.reduce(function (prev, curr, currIndex, arr) {
    console.log(curr)
    console.log(prev)
    if (curr in prev) {
        prev[curr]++
    } else {
        prev[curr] = 1;
    }
    return prev;
}, {})
// const totalN = arr10.reduce((sum, current) => sum + current, 0);

const callBackFn = (sum, current, currentIndex, array) => {
    console.log({sum, current, currentIndex, array})
    return sum + current;
}
const totalN = arr10.reduce(callBackFn);

const totalObj = arr10.reduce((sum, current) => {
    if (current in sum) {
        sum[current]++
    } else {
        sum[current] = 1
    }
    return sum
}, {})

console.log(totalObj);
console.log(totalN);

function findLongestWordLength(str) {

    wordArr = str.split(' ');
    console.log(wordArr);
    let wordArrLength = [];
    for (let i = 0; i < wordArr.length; i++) {
        let length = wordArr[i].length;
        wordArrLength.push(length)
    }
    console.log(wordArrLength)
    let max = Math.max(...wordArrLength);
    let indexMax = wordArrLength.findIndex(v => v === max)
    console.log(max)
    console.log(indexMax)
    console.log(wordArr[indexMax])
    console.log(wordArrLength[max])
  return max;
}
console.log(
findLongestWordLength("The quick brown fox jumped over the lazy dog"));

const arr11 = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0) then the first element is used as the initial value
const sum2 = arr11.reduce((sum, current) => sum + current);

console.log(sum2); // 15
let sum = 0;
for (let i = 0; i < arr11.length; i += 1) {
    sum += arr11[i];
}
console.log(sum)

// Array.isArray
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray([]));

// Most methods support “thisArg”
const army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

const usersDb = [{ age: 16 }, { name: 'xxx', age: 20 }, {name: 'yyy', age: 23 }, { age: 30 }];

// find users, for who army.canJoin returns true
const soldiers = usersDb.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].name); // 20
console.log(soldiers[1].age);

const ans = usersDb.filter(user => army.canJoin(user));
console.log(ans);
