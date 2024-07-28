// Boolean is the result
console.log(2 > 1); // true (correct)
console.log(2 === 1); // false (wrong)
console.log(2 !== 1); // true (correct)
// String comparison
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true
// Comparison of different types
console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1

// '==' cannot differentiate between 0 and false, 0 and '0'.
console.log('0' == 0); // true,
console.log('0' == false); // true,

// Strict equality
// checks if the values are the same, but not the type
console.log('0' === 0); // false, string '0' becomes a number 0
// Comparison with null and undefined

console.log(undefined == null); // true
// strict equality
console.log(undefined === null); // false

// mull vs 0
console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
// mr strange - equality check and comparison work differently
/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That’s why (3) null >= 0 is true and (1) null > 0 is false.

On the other hand, the equality check == for undefined and null is defined such that,
without any conversions, they equal each other and don’t equal anything else.
That’s why (2) null == 0 is false.¸
 */
// The values null and undefined equal == each other and do not equal any other value.

console.log(null >= 0); // (3) true
