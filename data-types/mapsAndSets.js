/* eslint-disable */
// Map - why? a collection of keyed data items that allows any type?
// Objects for storing keyed collections.
// Arrays for storing ordered collections.

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the value by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

const map = new Map();

map.set('1', 'str1'); // a string key
map.set(1, 'num1'); // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'

console.log(map.size); // 3

// Objects can be used as key

const john = { name: 'John' };

// for every user, let's store their visits count
const visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // 123

// Iteration over Map

// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

const recipeMap = new Map([
  ['cucumber', 500],
  ['onion', 50],
  ['tomatoes', 350],
]);

console.log(recipeMap)

// iterate over keys (vegetables)
for (const vegetable of recipeMap.entries()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (const amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (const entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// insertion order is using for sorting

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

// Object.entries: Map from Object
const obj99 = {
  name: 'John',
  age: 30
};

console.log(Object.entries(obj99))

const map2 = new Map(Object.entries(obj99));

console.log(map2.get('name')); // John

// // Object.fromEntries: Object from Map
const prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);
console.log(prices)

const map3 = new Map();

map3.set('banana', 1);
map3.set('orange', 2);
map3.set('meat', 4);

const obj2 = Object.fromEntries(map3.entries()); // make a plain object (*)
const obj3 = Object.fromEntries(map3); // make a plain object (*)

// done!
obj = { banana: 1, orange: 2, meat: 4 };

console.log(obj2.orange); // 2

prices2 = { banana: 1, orange: 2, meat: 4 };

console.log(prices.orange); // 2

// Set - A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// et.size – is the elements count.

const set = new Set();

const john2 = { name: 'John' };
const pete = { name: 'Pete' };
const mary = { name: 'Mary' };

// // visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set);

for (const i of set) {
  console.log(i.name);
}

// // set keeps only unique values
console.log(set.size); // 3

for (const user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// Iteration over Set

const set2 = new Set(['oranges', 'apples', 'bananas']);

for (const value of set2) console.log(value);

// the same with forEach:
set2.forEach((value, valueAgain, set) => {
  console.log(value);
  console.log(valueAgain);
});

// set.keys(), set.values(), set.entries()

for (const value of set2.keys()) console.log(value);
for (const value of set2.values()) console.log(value);
for (const value of set2.entries()) console.log(value);
