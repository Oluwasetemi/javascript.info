// String conversion
// String() or toString()

const value = 12 || true || false;
console.log(typeof String(value), String(value));
console.log(typeof value.toString());
console.log(typeof value);

// String conversion is mostly obvious. A false becomes "false", null becomes "null", undefined become 'undefined' etc.

// Number conversion
// Number() and either parseInt() or parseFloat()
const num1 = '10';
console.log(typeof num1);
console.log(typeof Number(num1), Number(num1));
console.log(typeof parseFloat(num1), parseFloat(num1));
console.log(typeof parseInt(num1), parseInt(num1));

console.log(Number('123z')); // NaN (error reading a number at "z")
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('   123   ')); // 123

// BOOLEAN CONVERSION
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
console.log(Boolean(NaN));
// Other values become true.
console.log(Boolean('0'));
console.log('100' + '0');

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean('hello')); // true
console.log(Boolean('')); // false

// this is a single line comments
/*
  This is a multi-line comment
*/

// BIGINT
const value1 = 12345678901234567890123456789012345678909;
console.log(typeof value1);
console.log(typeof BigInt(value1));
