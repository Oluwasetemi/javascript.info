/* eslint-disable */
// Quotes
// all the way to declare a string single quotes, double quotes, backticks
const single = 'single\'s-quoted';
const double = 'double-quoted';

const backticks = `backticks`; // multiline support

function sum(a, b) {
  return a + b;
}


console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

// Special characters
// It is still possible to create multiline strings with single and double quotes by using a so-called “newline character”, written as \n, which denotes a line break:
// escape sequence \t \n \r \' \\ \"
// String length
console.log('hello'.length);
// Accessing characters
const str = `Hello`;

// the first character
console.log(str[0]); // H
console.log(str.charAt(0)); // H

// the last character
console.log(str[str.length - 1]); // o

// Strings are immutable
const str2 = 'Hi';

str2[0] = 'h'; // error
console.log(str[0]); // doesn't work
// Changing the case
console.log('Interface'.toUpperCase()); // INTERFACE
console.log('Interface'.toLowerCase()); // interface

// you can change a single character
console.log('Interface'[0].toLowerCase()); // interface

// Searching for a substring
const str3 = 'Widget with id';

console.log(str3.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str3.indexOf('widget')); // -1, not found, the search is case-sensitive

if (str.indexOf('w') === -1) {
  throw new error('W does not exist')
}

console.log(str3.indexOf('id')); // 1, "id" is found at the position 1 (..idget with id)

// search starting for a single position
const str4 = 'Widget with id';

console.log(str4.indexOf('id', 2)); // 12

// interested in all occurrences
const str5 = 'As sly as a fox, as strong as an ox';

const target = 'as'; // let's look for it

let pos = 0;
while (true) {
  const foundPos = str5.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`Found at ${foundPos}`);
  pos = foundPos + 1; // continue the search from the next position
}

// str5.matchAll(/as/i)
// another version
const str6 = 'As sly as a fox, as strong as an ox';
const target2 = 'as';

let pos2 = -1;
while ((pos2 = str6.indexOf(target2, pos2 + 1)) !== -1) {
  console.log(pos2);
}

// str.lastIndexOf(substr, position)

let str7 = "Widget with id";

if (str7.indexOf("Widget") != -1) {
    console.log("We found it"); // works now!
}

// bitwise NOT trick
console.log( ~2 ); // -3, the same as -(2+1)
console.log( ~1 ); // -2, the same as -(1+1)
console.log( ~0 ); // -1, the same as -(0+1)
console.log(~-1); // 0, the same as -(-1+1)

let str8 = "Widget";

if (~str8.indexOf("Widget")) {
  console.log( 'Found it!' ); // works
}

// includes, startWith, endsWith
console.log( "Widget with id".includes("Widget") ); // true

console.log("Hello".includes("Bye")); // false

console.log( "Widget".includes("id") ); // true
console.log("Widget".includes("id", 3)); // false, from position 3 there is no "id"

console.log( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

// Getting a substring
// substring, substr, slice
let str9 = "stringify";
console.log( str9.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str9.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

let str10 = "stringify";
console.log(str10.slice(2)); // 'ringify', from the 2nd position till the end

let str11 = "stringify";

// start at the 4th position from the right, end at the 1st from the right
console.log(str11.slice(-4, -1)); // 'gif'

let str12 = "stringify";

// these are same for substring
console.log( str12.substring(2, 6) ); // "ring"
console.log( str12.substring(6, 2) ); // "ring"

// ...but not for slice:
console.log( str12.slice(2, 6) ); // "ring" (the same)
console.log(str12.slice(6, 2)); // "" (an empty string)

let str13 = "stringify";
console.log(str13.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

let str14 = "stringify";
console.log( str14.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters
// Comparing strings
console.log('a' > 'Z'); // true
// different case letters have different codes
console.log( "z".codePointAt(0) ); // 122
console.log("Z".codePointAt(0)); // 90

console.log(String.fromCodePoint(90)); // Z

let str15 = '';

for (let i = 65; i <= 220; i++) {
    str15 += String.fromCodePoint(i);
    console.log(str15)
}
console.log( str );

// Internals, Unicode
console.log( '𝒳'.length ); // 2, MATHEMATICAL SCRIPT CAPITAL X
console.log( '🧘🏼‍♂️'.length ); // 2, FACE WITH TEARS OF JOY
console.log('𩷶'.length); // 2, a rare Chinese hieroglyph
let str = '    hello     '
// str.trim()
str.trim()
// str.repeat()
console.log(str.repeat(2))