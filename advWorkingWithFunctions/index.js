/* eslint-disable */
// recursion and stack(execution context)

/*
pow(2, 2) = 4
pow(2, 3) = 8
pow(2, 4) = 16
*/

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i += 1) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

function powWithRecursion(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powWithRecursion(x, n - 1);
  }
}
// pow(2, 3) = 2 * pow(2, 2) = 2 * 2 * 2 = 8

console.log(powWithRecursion(2, 3)); // 8

/*
pow(2, 4) = 2 * pow(2, 3)
pow(2, 3) = 2 * pow(2, 2)
pow(2, 2) = 2 * pow(2, 1)
pow(2, 1) = 2
*/

// simple version
function pow2(x, n) {
  return (n == 1) ? x : (x * pow(x, n - 1));
}

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5)); // 120

// linkedList
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);

// OR

function printListAlt(list) {

  while(list) {
    console.log(list.value);
    list = list.next;
  }

}

function printListRecur(list) {

    console.log(list.value); // output the current item

    if (list.next) {
        printListRecur(list.next); // do the same for the rest of the list
    }

}

printListRecur(list);

let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list2);
// rest and spread
// rest
function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log( sumAll(1, 4, 34) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log(sumAll(1, 2, 3)); // 6

// spread
const obj = {
    name: 'oluwasetemi',
    age: 12
}
console.log(obj)

const cloneObj = { ...obj, job: 'developer', name: 'setemi' };cloneObj
console.log(cloneObj.name = 'ade')
console.log(obj)

const arr = [1, 2]
const new1 = [...arr, 3, 4]; new1;



console.log(Math.max(...[1, 2, 4, 5]))
console.log([...'ade'])

// diff btw spread and Array.from
console.log(Array.from({ 0: '1', 9: '9', length: 10 }))
// Array.from operates on both array-likes and iterables.
// The spread syntax works only with iterables.

// variable scope
// Code blocks
if (true) {

}
{
    const a = 10
}
// console.log(a)
// Nested functions

function sayHiBye(firstName, lastName) {

  // helper nested function to use below
  function getFullName() {
    return firstName + " " + lastName;
  }

  console.log( "Hello, " + getFullName() );
  console.log( "Bye, " + getFullName() );

}

sayHiBye('ade', 'ope')

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();

console.log( counter() ); // 0
console.log( counter() ); // 1
console.log( counter() );

function sum2(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum2(10)(10));

// closure - A closure is a function that remembers its outer variables and can access them. In some languages, that’s not possible, or a function should be written in a special way to make it happen. But as explained above, in JavaScript, all functions are naturally closures except the constructor function.

// Lexical Environment
// Garbage collection
// the old 'var'
// var is global/function scope and not block scope
// var run at the beginning of a script or function
// IIFE - Immediately invoked function expression
(function() {

  let message = "Hello";

  console.log(message); // Hello

})();

// Try to declare and immediately call a function
(function() { // <-- Error: Unexpected token (

  let message = "Hello";

  console.log(message); // Hello

}) ();

// Ways to create IIFE

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
}());

!function() {
  console.log("Bitwise NOT operator starts the expression");
}();

+function() {
  console.log("Unary plus starts the expression");
}();

// global object
// browser - window
// node - global
// globalThis
var a = 10;
global.a = a;
console.log(globalThis.a === a)

// polyfills
// babel or polyfill.io

// function object, NFE
// function Car(name, model) {
//     // this = {}
//     this.name = name;
//     this.model = model;
//     // return this
// }
// any function you declare in JS has a name and length property
function sayHi(a, b, c) {
  console.log("Hi");
  sayHi.counter++
}

console.log(sayHi.name); // sayHi
console.log(sayHi.length); // sayHi

// customer properties
sayHi.counter = 0;
sayHi()
sayHi()
sayHi()
console.log(sayHi.counter)

// let benzC100 = new Car('benz', 'C100');
// console.log(benzC100)

// named function expression
const sayHi2 = function(a, b, c) {
  console.log("Hi");
  sayHi.counter++
}

// the 'new FUnction' syntax
// let func = new Function ([arg1, arg2, ...argN], functionBody);
let sumFunc = new Function('a', 'b', 'return a + b')
console.log(sumFunc(2, 4))
// NB - no access to outer variable but has access to global variables


// scheduling: setTimeout and setInterval
// setTimeout
const handler = function() {
    console.log('I was logged after 5s')
}
let timeId = setTimeout(handler, 5000);

clearTimeout(timeId);

function sayHi4(phrase, who) {
  console.log( phrase + ', ' + who );
}

setTimeout(sayHi4, 1000, "Hello", "John"); // Hello, John
// setInterval
start = new Date();
// setInterval(() => {
//     console.log('hello');
// }, 1000);

// repeat with the interval of 2 seconds
// UNcomment
let timerId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
// Nested setTimeout
/** instead of:
let timerId = setInterval(() => console.log('tick'), 2000);
*/


// let timerId2 = setTimeout(function tick() {
//   console.log('tick');
//   timerId2 = setTimeout(tick, 2000); // (*)
// }, 2000);



// let i = 1;
// setTimeout(function run() {
//   func(i++);
//   setTimeout(run, 100);
// }, 100);

/*
let delay = 5000;

let timerId3 = setTimeout(function request() {
//   ...send request...

  if (request failed due to server overload) {
    // increase the interval to the next run
    delay *= 2;
  }

  timerId3 = setTimeout(request, delay);

}, delay);
*/
// Zero delay setTimeout
setTimeout(() => console.log("World"));

console.log("Hello");

// decorators and forwarding, call/apply
// A decorator - a special function that takes another function and alters its behavior.
function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        console.log(`Result from cache`)
        console.log(cache.get(x))
      return cache.get(x); // read the result from it
    }

    let result = func(x);  // otherwise call func
    console.log(`${result} on first run`)
    cache.set(x, result);  // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1) is cached
console.log( "Again: " + slow(1) ); // the same

console.log( slow(2) ); // slow(2) is cached
console.log("Again: " + slow(2)); // the same as the previous line
/*
The cachingDecorator is reusable. We can apply it to another function.
The caching logic is separate, it did not increase the complexity of slow itself (if there was any).
We can combine multiple decorators if needed (other decorators will follow). */

// cachingDecorator cannot be called on Object methods: it needs to be modified
// func.call - creates a context (this) for a function to run
func(1, 2, 3);
func.call(obj, 1, 2, 3)

function sayHiAgain() {
  console.log(this.name);
}

sayHiAgain() // returns undefined;

let user = { name: "John" };
let admin = { name: "Admin" };

// use call to pass different objects as "this"
sayHiAgain.call( user ); // John
sayHiAgain.call( admin ); // Admin

function say(phrase) {
  console.log(this.name + ': ' + phrase);
}

let user2 = { name: "John" };

// user becomes this, and "Hello" becomes the first argument
say.call(user2, "Hello"); // John: Hello

// implementation of cachingDecorator for methods using .call
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    console.log("Called with " + x);
    return x * this.someMethod(); // (*)
  }
};

function cachingDecorator2(func) {
  let cache = new Map();
  return function(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
      // TODO:
    let result = func.call(this, x); // "this" is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator2(worker.slow); // now make it caching

console.log( worker.slow(2) ); // works
console.log(worker.slow(2)); // works, doesn't call the original (cached)

// how to cache multiple argument for a method

let worker2 = {
  slow(min, max) {
    console.log(`Called with ${min},${max}`);
    return min + max;
  }
};

function cachingDecorator3(func, hash) {
  let cache = new Map();
    return function () {
    //   TODO:
    let key = hash(arguments); // (*)
    console.log(key)
        if (cache.has(key)) {
        console.log(cache.get(key))
      return cache.get(key);
    }

        // TODO:
    let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        console.log(result)
    return result;
  };
}

function hash(args) {
  return args[0] + ',' + args[1];
}

worker2.slow = cachingDecorator3(worker2.slow, hash);

console.log( worker2.slow(3, 5) ); // works
console.log( "Again " + worker2.slow(3, 5) ); // same (cached)

// Explanation
/*
In the line (*) it calls hash to create a single key from arguments. Here we use a simple “joining” function that turns arguments (3, 5) into the key "3,5". More complex cases may require other hashing functions.
Then (**) uses func.call(this, ...arguments) to pass both the context and all arguments the wrapper got (not just the first one) to the original function.
 */

//  func.apply(context, args)
// compare both call and apply
// func.call(context, ...args); // pass an array as list with spread syntax
// The spread syntax ... allows to pass iterable args as the list to call.
// func.apply(context, args);   // is same as using apply
// The apply accepts only array-like args.

// Passing all arguments along with the context(object) to another function is called call forwarding.

/* let wrapper = function () {
  return func.apply(this, arguments);
}; */

function sum100(values) {
    console.log(arguments[0])
    console.log(arguments[2])
    console.log(arguments[1])
    return values
}

sum100(1, 2, 3)

// stage 1
function hash3(args) {
  return args[0] + ',' + args[1];
}
// stage 2
function hash3v1() {
//   console.log( arguments.join() ); // Error: arguments.join is not a function
}

hash3v1(1, 2);
// stage 3
function hash3v2() {
  console.log( [].join.call(arguments) ); // 1,2
}

hash3v2(1, 2);

// TODO: FIX: DEBUG:
// The trick is called method borrowing.

// There exists a way to create decorators that keep access to function properties, but this requires using a special Proxy object to wrap a function

// Example
function spy(func) {

  function wrapper(...args) {
    // using ...args instead of arguments to store "real" array in wrapper.calls
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

function work(a, b) {
  console.log( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function delay(f, ms) {

  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(console.log, 1000);

f1000("test"); // shows "test" after 1000ms

function f(x) {
  console.log(x);
}

// create wrappers
let f10002 = delay(f, 1000);
let f15002 = delay(f, 1500);

f10002("test"); // shows "test" after 1000ms
f15002("test"); // shows "test" after 1500ms

function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}

let f2 = debounce(console.log, 1000);

f2(1); // runs immediately
f2(2); // ignored

setTimeout( () => f(3), 100); // ignored ( only 100 ms passed )
setTimeout( () => f(4), 1100); // runs
setTimeout(() => f(5), 1500); // ignored (less than 1000 ms from the last run)

// diff btw the throttle and debounce
// The difference with debounce – if an ignored call is the last during the cooldown, then it executes at the end of the delay.

function throttle(func, ms) {

    let isThrottled = false;
    let  savedArgs;
    let  savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

function f3(a) {
  console.log(a);
}

// f10003 passes calls to f at maximum once per 1000 ms
let f10003 = throttle(f3, 1000);

f10003(1); // shows 1
f10003(2); // (throttling, 1000ms not out yet)
f10003(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

// function binding
// When passing object methods as callbacks, for instance to setTimeout, there’s a known problem: "losing this".
let user3 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// setTimeout(user.sayHi, 1000); // Hello, undefined!

// Solution 1
let user4 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

setTimeout(function() {
  user4.sayHi(); // Hello, John!
}, 1000);

// Another error
let user5 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// setTimeout(() => user5.sayHi(), 1000);

// ...the value of user changes within 1 second
user5 = {
  sayHi() { console.log("Another user in setTimeout!"); }
};

// Another user in setTimeout!

// Solution 2
// running a bound function with a fixed this context set to an object

let user6 = {
  firstName: "John"
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user6);
funcUser(); // John

let user7 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  }
};

// TODO:
let sayHi3 = user7.sayHi.bind(user7); // (*)

// can run it without an object
sayHi3(); // Hello, John!

setTimeout(sayHi3, 1000); // Hello, John!

// even if the value of user changes within 1 second
// sayHi uses the pre-bound value
user = {
  sayHi() { console.log("Another user in setTimeout!"); }
};


// more complex syntax will come a little later
// let boundFunc = func.bind(context);

// If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

// / * bind all the methods in a particular object */
for (let key in user) {
  if (typeof user[key] == 'function') {
    user[key] = user[key].bind(user);
  }
}

// bind syntax
// let bound = func.bind(context, [arg1], [arg2], ...);
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log(double(5)); // = mul(2, 5) = 10

// partial function application - we create a new function by fixing some parameters of the existing on

// creating a partial function without a context
function partial(func, ...argsBound) {
  return function(...args) { // (*)
    return func.call(this, ...argsBound, ...args);
  }
}

// Usage:
let user8 = {
  firstName: "John",
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  }
};

// add a partial method with fixed time
user8.sayNow = partial(user8.say, new Date().getHours() + ':' + new Date().getMinutes());

user8.sayNow("Hello");
// Something like:
// [10:00] John: Hello!

// lodash present us with _.bindALl() and _.partial()

// arrow functions revisited
// not this
const group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

    showList() {
      console.log(this.students)
        this.students.forEach(
            student => console.log(`${this.title}: ${student}`)
        );
  }
};

group.showList();

let group2 = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      console.log(this.title + ': ' + student)
    });
  }
};

group2.showList();

// .bind(this) creates a “bound version” of the function.
// The arrow => doesn’t create any binding. The function simply doesn’t have this. The lookup of this is made exactly the same way as a regular variable search: in the outer lexical environment.

// no arguments
function sum(a, b, c) {
    let total = 0;
    let arr = [];
    for (let i in arguments) {
        arr[i] = arguments[i]
        total += arr[i]
    }
    console.log(Object.values(arguments).reduce((a, b) => a + b, 0))
        // for (let i = 0; i < arr.length; i += 1) {
        //     total += arr[i]
        //     console.log(arr[i])
        // }
    total
}

sum(10, 11, 12, 13)