/* eslint-disable */
// strings, arrays, object - for -of loop
console.log('str');

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

console.log(isIterable({ name: 1, age: 2 }))
let t = { name: 1, age: 2 };
console.log(Object.values(t))
for (let i of Object.values(t)) {
    console.log(i)
}

// Symbol.iterator
let range = {
  from: 1,
  to: 5
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function() {

  // ...it returns the iterator object:
  // 2. Onward, for..of works only with this iterator, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

// now it works!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// shorter version
let range2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of range2) {
  console.log(num); // 1, then 2, 3, 4, 5
}

// String is iterable
for (let char of "test") {
  // triggers 4 times: once for each character
  console.log( char ); // t, then e, then s, then t
}


// Calling an iterator explicitly
let str = "Hello";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}


// Iterables and array-likes
// Iterables are objects that implement the Symbol.iterator method, as described above.
// Array-likes are objects that have indexes and length, so they look like arrays.

let arrayLike = { // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2
};

// Error (no Symbol.iterator)
// TODO: uncomment
// for (let item of arrayLike) {}

// Array.from
// takes an iterable or array-like value and makes a “real” Array
let arr = Array.from(arrayLike); // (*)
console.log(Array.from(str))
console.log(arr.pop()); // World (method works)

// syntax of Array.from
// Array.from(obj[, mapFn, thisArg])

// assuming that range is taken from the example above

// square each number
const mapFn = num => num * num;
let arr2 = Array.from(range, mapFn);arr2

console.log(arr2); // 1,4,9,16,25

let str2 = '𝒳😂';

// splits str into array of characters
let chars = Array.from(str);

console.log(chars[0]); // 𝒳
console.log(chars[1]); // 😂
console.log(chars.length); // 2

const result = Array.from({length: 10}, (v, i) => i + 1 );
console.log(result)