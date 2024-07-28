// declare an object variable(literal and object constructor)
// properties - “key(string and called propertyName): value”
// removing a property
const ob = {
  b: 1,
  a: 2,
  ['cons' + 'ole']: 3,
};

console.log(ob);

const user = new Object({
  name: 'ade',
  age: 99,
}); // "object constructor" syntax

console.log(user);
const user2 = {
  age: 18,
}; // "object literal" syntax
// Object.create
const xyz = Object.create({
  name: 'stephen',
  age: 99,
});

console.log(xyz);

// delete property
delete user.age;
console.log(user.age);
console.log(user);
user.age = 90;
console.log(user);
const objectZ = {};
objectZ.name = 'xyz';
objectZ.age = 999;
console.log(objectZ);

/* let object = {
    key/property: value,
    key/property: value,
    key/property: value,
    key/property: value,
    key/property: value,
} */
