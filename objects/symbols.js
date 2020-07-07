// By specification, object property keys may be either of string type, or of symbol type. Not numbers, not booleans, only strings or symbols, these two types.

// Till now we’ve been using only strings. Now let’s see the benefits that symbols can give us. it represent a unique identifier

// declare
// id is a new symbol
const id = Symbol();

// id is a symbol with the description "id"
const idSymbol = Symbol('id');
const num = Symbol(9);

// always unique
const id1 = Symbol('id');
const id2 = Symbol('id');

console.log(id1 === id2); // false
// symbols do not auto convert to string, you will need to convert to string with .toString() to use in a string context

// let id = Symbol("id");
// console.log(id.toString()); // Symbol(id), now it works

// Symbols allows us to create hidden properties in an object
const user = {
  // belongs to another code
  name: 'John'
};

const symbolId = Symbol('id');

user[symbolId] = 4;

console.log(user); // we can access the data using the symbol as the key

// symbol in a literal
const idLiteral = Symbol('id');

const testUser = {
  name: 'John',
  // symbol id uses the object literal
  [idLiteral]: 123 // not "id: 123"
};

/*
// symbols are skipped by for in loop
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log("Direct: " + user[id]);
// Object.keys(user) also ignores them but Object.assign copies both string and symbols
*/

// Global Symbols
// read from the global registry

const global = Symbol.for('id'); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
const idAgain = Symbol.for('id');

// the same symbol
console.log(global === idAgain); // true

// Symbol.keyFor() - returns a name by a global symbol reverse of Symbol.for()
// get symbol by name

const sym = Symbol.for('name');
const sym2 = Symbol.for('id');

// get name by symbol
console.log(Symbol.keyFor(sym)); // name
console.log(Symbol.keyFor(sym2)); // id

const globalSymbol = Symbol.for('name');
const localSymbol = Symbol('name');

console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global

console.log(localSymbol.description); // name
console.log(globalSymbol.description); // name

console.log(typeof String.prototype.concat);

/*
// System Symbols
Symbol.hasInstance //@@hasInstance
Symbol.isConcatSpreadable //@@isConcatSpreadable
Symbol.iterator //@@iterator
Symbol.toPrimitive //allows us to describe object to primitive conversion.
//@@asyncIterator
//@@match
//@@matchAll
//@@replace
//@@search
//@@species
//@@split
//@@toStringTag
//@@unscopables


//  Object.getOwnPropertySymbols(obj)
// Reflect.ownKeys(obj)
*/
