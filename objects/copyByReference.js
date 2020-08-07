// One of the fundamental differences of objects vs primitives is that they are stored and copied “by reference”.

// Primitive values: strings, numbers, booleans – are assigned/copied “as a whole value”.

// A variable stores not the object itself, but its “address in memory”, in other words “a reference” to it
const user = {
  name: 'John'
};

const admin = user; // copy the reference

admin.name = 'Pete'; // changed by the "admin" reference

const adminClone = admin;
adminClone.name = 'JavaScript';
console.log(adminClone.name);
console.log(user.name); // 'Pete', changes are seen from the "user" reference

const new1 = { new1: 1 };
const new2 = { new2: 2 };
const obj = { age: 20 };
const newObj = Object.assign({}, obj);
console.log(newObj)
newObj.age = 99;
console.log(newObj)
console.log(obj)

Object.assign(obj, new1, { age: 21 }, {age: 31}, {new1: 3});
console.log(obj); // the properties in new1 and new2 wil;l; be added to obj
// if the properties exist in the target then it will br over written by the properties from the sources
const user2 = {
  name: 'John',
  age: 30
};

const clone = { ...user2, name: 'TJ' };
console.log(clone)
clone.name = 'ade';
console.log(clone);
console.log(user2);

let nestedObj = {
    ...user,
    relatives: {
        cousins: {
            jide: 'dare'
        },
        uncles: {
            big: 'daddy'
        }
    }
}

// reason for deep cloning
console.log(nestedObj)
let objAssignClone = Object.assign({}, nestedObj)
let closeNested = {...nestedObj}
console.log(closeNested)
console.log(objAssignClone)
closeNested.relatives.cousins.jide = 'odunayo';
console.log(nestedObj)

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

console.log(deepNestedObj)
deepNestedObj.relatives.cousins.jide = 'dare';
console.log(nestedObj)

console.log(deepObj);

// console.log(Object.is(deepObj, user2))

// spread operator
const clone2 = { ...user2 };
console.log(clone2);
