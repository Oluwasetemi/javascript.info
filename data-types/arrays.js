/*eslint-disable */
// Declaration
const array = [];
const array2 = [1, true, 'name'];
console.log(array2.length);
// const arr = Array(2, 3, 4);
// const arr2 = Array(2);
const arr3 = Array(10).fill(3);
console.log(arr3);
// console.log(arr2);
// console.log(arr);
console.log(Array.isArray(array));

// mix of values
let arr4 = [ 'Apple', { name: 'John' }, true, function() { console.log('hello'); } ];

// get the object at index 1 and then show its name
console.log( arr4[1].name ); // John

// get the function at index 3 and run it
arr4[3](); // hello
// Methods pop/push, shift/unshift

arr4.push(10)
console.log(arr4)
// Internals
// they are objects with index as there key and the value is the value of what is in the array.
// they are reference by nature

const test = [1, 2, 3];
const copyTest = test;

copyTest[2] = 'changed'

console.log(copyTest)
console.log(test)
//
// Performance
// unshift and shift have more performance issue because it happens in the beginning anf it will have to assign the index after any 0f there operation.

// Loops
let arr5 = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr5.length; i++) {
  console.log( arr5[i] );
}

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log( fruit );
}

for (const key in fruits) {
    console.log(fruits[key])
}
// A word about “length”
console.log(fruits.length)
// new Array()

const arr2 = Array(2);
const arr = Array(2, 3, 4);


// Multidimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, the central element
// toString
console.log(matrix.toString())
