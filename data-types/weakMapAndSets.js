/* eslint-disable */
// WeakMap and WeakSet Why?
// JavaScript engine stores a value in memory while it is reachable (and can potentially be used)
let john = { name: 'John' };

// the object can be accessed, john is the reference to it
// overwrite the reference
john = null;
// the object will be removed from memory

let john2 = { name: 'John' };

let array = [john2];array

john2 = null; // overwrite the reference
array = [john2]; array

// john is stored inside the array, so it won't be garbage-collected
// we can get it as array[0]

// Similar to that, if we use an object as the key in a regular Map, then while the Map exists, that object exists as well. It occupies memory and may not be garbage collected.


let john3 = { name: 'John' };

const map = new Map();
map.set(john3, '...');

john3 = null; // overwrite the reference

map;

for(let i of map.entries()) console.log(i)

// john is stored inside the map,
// we can get it by using map.keys()

// WeakMap is fundamentally different in this aspect. It doesn’t prevent garbage-collection of key objects.

// Let’s see what it means on examples.

// WeakMap
const weakMap = new WeakMap();

const obj = {};

weakMap.set(obj, 'ok'); // works fine (object key)
console.log(weakMap.get(obj))

// can't use a string as the key
// weakMap.set("test", "Whoops");
// Error, because "test" is not an object - Invalid value user as weak map key

// Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.

let john4 = { name: 'John' };

const weakMap2 = new WeakMap();
weakMap2.set(john4, '..AND..');
console.log(weakMap2.get(john4));

john4 = null; // overwrite the reference

console.log(weakMap2.get(john4));
// for(let i of weakMap2) console.log(i)

// john4 is removed from memory!

// API
// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)

// Use case: additional data
// If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.

// We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well
let me = { name: 'oluwasetemi', age: 26 };
weakMap.set(me, 'secret documents');
console.log(weakMap.get(me));

me = null;


console.log(weakMap.get(me));
// if john dies, secret documents will be destroyed automatically

// For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.

//     Here’s an example of a counting function with Map:

// 📁 visitsCount.js
const visitsCountMap = new Map(); // map: user => visits count
const name = 'Ade';
//shortcircuiting ||(false) && (true) ??(null && undefined)
console.log(`Hello ${name && 'world'}`)

// increase the visits count
function countUser(user) {
  const count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
const me2 = { name: 'oluwasetemi' };
countUser(me2);
countUser(me2);
console.log(me2);
console.log(visitsCountMap)

// 📁 main.js

const john6 = { name: 'John' };

countUser(john6); // count his visits
countUser(john6);

// later john leaves us
john = null

console.log(visitsCountMap);

// Now john object should be garbage collected, but remains in memory, as it’s a key in visitsCountMap.

// We need to clean visitsCountMap when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures.

// We can avoid it by switching to WeakMap instead:
// 📁 visitsCount.js
const visitsCountMap2 = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUser2(user) {
  const count = visitsCountMap2.get(user) || 0;
  visitsCountMap2.set(user, count + 1);
}

countUser2(john6)
countUser2(john6)
countUser2(john6)

// john6 = null;

console.log(visitsCountMap2);

console.log(visitsCountMap2.get(john6))

// Use case: caching
// Another common example is caching: when a function result should be remembered (“cached”), so that future calls on the same object reuse it.

// We can use Map to store results, like this:
// 📁 cache.js
const cache = new Map();

// calculate and remember the result
function process(obj) {
  if (!cache.has(obj)) {
    const result = /* calculations of the result for */ obj;

    cache.set(obj, result);
  }

  return cache.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let objRes = {
/* let's say we have an object */
    name: 'ade'
};

const result1 = process(objRes);result1 // calculated

// ...later, from another place of the code...
const result2 = process(objRes);result2 // remembered result taken from cache

// ...later, when the object is not needed any more:
objRes = null;

console.log(cache); // 1 (Ouch! The object is still in cache, taking memory!)

// For multiple calls of process(obj) with the same object, it only calculates the result the first time, and then just takes it from cache. The downside is that we need to clean cache when the object is not needed any more.

// If we replace Map with WeakMap, then this problem disappears: the cached result will be removed from memory automatically after the object gets garbage collected.

// 📁 cache.js
const cacheWeak = new WeakMap();

// calculate and remember the result
function process2(obj) {
  if (!cacheWeak.has(obj)) {
    const result = /* calculate the result for */ obj;

    cacheWeak.set(obj, result);
  }

  return cacheWeak.get(obj);
}

// 📁 main.js
let objRes2 = {
  /* some object */
};

const result11 = process2(objRes2);
const result22 = process2(objRes2);

// ...later, when the object is not needed any more:
objRes2 = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well

// WeakSet
// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it is reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.

const visitedSet = new WeakSet();

let john10 = { name: 'John' };
const pete2 = { name: 'Pete' };
const mary2 = { name: 'Mary' };

visitedSet.add(john10); // John visited us
visitedSet.add(pete2); // Then Pete
visitedSet.add(john10); // John again

// visitedSet has 2 users now

// check if John visited?
console.log(visitedSet.has(john10)); // true
console.log(visitedSet)

// check if Mary visited?
console.log(visitedSet.has(mary2)); // false

john10 = null;
console.log(visitedSet.has(john10)); // true

// visitedSet will be cleaned automatically
