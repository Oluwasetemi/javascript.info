// understanding basic operators - operands and operators
// types of operators - unary, binary and ternary

// Math operators
// +,-,/,*,%, **

// String concatenation +
const value = '10';

const result = +value + 10;

console.log(result);

// No effect on numbers
const x = 1;
console.log(+x); // 1

const y = -2;
console.log(+y); // -2

// Converts non-numbers
console.log(+true); // 1
console.log(+''); // 0

// operator precedence BEDMAS
// unary plus
// unary minus
// B - bracket, E - exponentiation, D - division, M - multiplication, A - addition, S- subtraction

// assignment
// allow chaining
// modify in place
let sum = 0;

sum += 2; // sum += 2;
sum *= 2; // sum *= 2;
sum /= 2; // sum /= 2;
sum -= 2; // sum -= 2;

// increment and decrement
// ++
// --
// pre and post

let count = 0;
// console.log(count++); // 0
// console.log(count); // 1
// console.log(++count); //1
// console.log(count);
console.log(count--);
console.log(count);
console.log(--count);
console.log(count);
// bitwise operator
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )

// comma operator
const a = (1 + 2, 3 + 4);

console.log(a); // 7 (the result of 3 + 4)

// solve the task at the end of the session

console.log(typeof typeof 7);
console.log(typeof 7);

const age = 99 / 'a';
console.log(age);
if (typeof age === 'number' && Number.isNaN(age)) {
  console.log('You ');
}
