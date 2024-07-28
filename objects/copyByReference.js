// One of the fundamental differences of objects vs primitives is that they are stored and copied “by reference”.

// Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.

// A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it
const user = {
  name: 'John',
};

const admin = user; // copy the reference
console.log(admin)

admin.name = 'Pete'; // changed by the "admin" reference
console.log(user);

const adminClone = admin;
adminClone.name = 'JavaScript';
console.log(adminClone);
console.log(user);
console.log(admin);
console.log(user.name); // 'Pete', changes are seen from the "user" reference

const new1 = { new1: 1 };
const new2 = { new2: 2 };
const obj = { age: 20 };
const newObj = { ...obj };
console.log(newObj);
newObj.age = 99;
console.log(newObj);
console.log(obj);

Object.assign(obj, new1, { age: 21 }, { age: 31 }, { new1: 3 });
console.log(obj); // the properties in new1 and new2 wil;l; be added to obj
// if the properties exist in the target then it will be over written by the properties from the sources
const user2 = {
  name: 'John',
  age: 30,
};

// spread operator
const clone = { ...user2, name: 'TJ' };
console.log(clone);
clone.name = 'ade';
console.log(clone);
console.log(user2);

const newCloned = {};
// natural
for (const key in clone) {
  newCloned[key] = clone[key];
}
console.log(newCloned);
newCloned.name = 'clone_ade';
console.log(newCloned);
console.log(clone);

const nestedObj = {
  ...user,
  relatives: {
    cousins: {
      jide: 'dare',
    },
    uncles: {
      big: 'daddy',
    },
  },
};

// reason for deep cloning
console.log(nestedObj);
/* eslint-disable */
const objAssignClone = Object.assign({}, nestedObj);
/* eslint-enable */
const closeNested = { ...nestedObj };
console.log(closeNested);
console.log(objAssignClone);
closeNested.relatives.cousins.jide = 'odunayo';
console.log(nestedObj);
console.log(objAssignClone);

// deep clone
const deepObj = {};
for (const key in user2) {
  deepObj[key] = user2[key];
}

const deepNestedObj = {};

for (const key in nestedObj) {
  if (nestedObj.hasOwnProperty(key)) {
    const eachValue = nestedObj[key];
    deepNestedObj[key] = eachValue;
  }
}

console.log(deepNestedObj);
deepNestedObj.relatives.cousins.jide = 'dare';
console.log(nestedObj);

console.log(deepObj);

// console.log(Object.is(deepObj, user2))

// spread operator
const clone2 = { ...user2 };
console.log(clone2);

// JSON.stringify()
// lodash deep clone
// https://lodash.com/docs/4.17.15#cloneDeep
