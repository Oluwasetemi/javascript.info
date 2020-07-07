// declare an object variable(literal and object constructor)
// properties - “key(string and called propertyName): value”
// removing a property
const user = new Object({
  name: 'ade'
}); // "object constructor" syntax

console.log(user);
const user2 = {
  age: 18
}; // "object literal" syntax
// Object.create
const xyz = Object.create({
  name: 'stephen',
  age: 99
});

console.log(xyz);

// delete property
delete user2.age;
console.log(user2.age);
