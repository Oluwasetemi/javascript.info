/* Objects are assigned and copied by reference.
In other words, a variable stores not the “object value”,
but a “reference” (address in memory) for the value.
So copying such a variable or passing it as a
function argument copies that reference, not the object itself. */

/* All operations via copied references (like adding/removing properties) are performed on the same single object.

To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function, such as _.cloneDeep(obj). */
// Comparison by reference
const person = { name: 'setemi', age: 25 };
const admin = person;

// a change to admin will change person because admin is just a reference to person
admin.name = 'stephen';

console.log(person);

// Cloning and merging, Object.assign
// cloning with object.assign
const personClone = {};
Object.assign(personClone, person);

console.log(personClone);

// add more properties to personClone
const a = { ...personClone, school: 'lautech', ...person };
// or spread operator
// const a = { ...personClone, school: 'lautech', ...person };

console.log(a);

const user = {
  name: 'John',
  age: 30,
};

const clone = {}; // the new empty object

// let's copy all user properties into it
for (const key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent clone
clone.name = 'Pete'; // changed the data in it

alert(user.name); // still John in the original object

// Nested cloning
const nestedPerson = {
  name: 'setemi',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    country: 'USA',
  },
};

const nestedPersonClone = { ...nestedPerson };
console.log(nestedPersonClone);

// deep clone with lodash
