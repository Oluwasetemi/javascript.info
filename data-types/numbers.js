/* eslint-disable */
// More ways to write a number
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

const exp = 1e10;

const bigInt1 = Number.MAX_VALUE * 10;
bigInt1;
const result = bigInt1 / 2;
console.log();

const base16 = 0xff;
const base2 = 0b11111111;
const base8 = 0o377;
console.log(base8);

// toString(base)
console.log(123456..toString(36))
const totalBase2 = base16.toString(8);

// Rounding
const test1 = 3.1
const test2 = -1.1
console.log(Math.floor(test1))
console.log(Math.floor(test2))
console.log(Math.ceil(test1))
console.log(Math.ceil(test2))
console.log(Math.round(test1))
console.log(Math.round(test2))
console.log(Math.trunc(test1))
console.log(Math.trunc(test2))

// Imprecise calculations
// .1 + .2 =
let inPre = 9999999999999999;
console.log(inPre)
// Tests: isFinite and isNaN
console.log(Object.is(0, -0))
console.log(Object.is(NaN, NaN))
console.log(isNaN(10/'a'))
// parseInt and parseFloat
//second
// Other math functions
