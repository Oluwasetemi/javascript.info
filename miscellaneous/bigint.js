// ways to create bigInt (literal or BigInt function)
const bigint = 1234567890123456789012345678901234567890n;

const sameBigint = BigInt('1234567890123456789012345678901234567890');

const bigintFromNumber = BigInt(10); // same as 10n

// Math work
console.log(1n + 2n); // 3

console.log(5n / 2n); // 2

let bigint2 = 1n;
let number = 2;

// number to bigint
console.log(bigint2 + BigInt(number)); // 3

// bigint to number
console.log(Number(bigint2) + number); // 3

let bigint3 = 1n;

// console.log(+bigint); // error

// comparison
console.log( 2n > 1n ); // true

console.log(2n > 1); // true

// type cast
console.log( 1 == 1n ); // true

console.log(1 === 1n); // false

// Boolean operation
if (0n) {
  // never executes
  console.log('ji')
}

if (0) {
  // never executes
    console.log('ji')
}

console.log( 1n || 2 ); // 1 (1n is considered truthy)

console.log(0n || 2); // 2 (0n is considered falsy)

// Polyfills