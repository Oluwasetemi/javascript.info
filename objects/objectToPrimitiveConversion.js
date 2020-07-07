/* eslint-disable */
// ToPrimitive
// All objects are true in a boolean context. There are only numeric and string conversions.
// The numeric conversion happens when we subtract objects or apply mathematical functions. For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
// As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.

// output
alert(obj);

// using object as a property key
anotherObj[obj] = 123;

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

// binary plus uses the "default" hint
let total = obj1 + obj2;

// obj == number uses the "default" hint
if (user == 1) {  };

// 1. Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
// 2. Otherwise if hint is "string" try obj.toString() and obj.valueOf(), whatever exists.
// 3. Otherwise if hint is "number" or "default" try obj.valueOf() and obj.toString(), whatever exists.

// Symbol.toPrimitive
// syntax
obj[Symbol.toPrimitive] = function(hint) {
  // must return a primitive value
  // hint = one of "string", "number", "default"
};

// let value = {
//     a: 1,
//     b: 2
// }
// value['sum'] = function (val1, val2) {
//     return val1 + val2
// }
// value['sum'](2, 4)

let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};
// example
// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

// toString/valueOf

// By default, a plain object has following toString and valueOf methods:

// The toString method returns a string "[object Object]".
// The valueOf method returns the object itself.

// example implementation
let user3 = {
  name: "John",
  money: 1000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  }

};

alert(user3); // toString -> {name: "John"}
alert(+user3); // valueOf -> 1000
alert(user3 + 500); // valueOf -> 1500
// Return types
// returning primitives
// Further conversions
// multiplication * converts operands to numbers.
// If we pass an object as an argument, then there are two stages:

// The object is converted to a primitive (using the rules described above).
// 1.If the resulting primitive isn’t of the right type, it’s converted.