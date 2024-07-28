// Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c)

function curry(f) {
  // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return function(c) {
        return f(a, b, c);
      };
    };
  };
}

// usage
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(10)); // 3

// lodash
function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}
const _ = require('lodash');

log = _.curry(log);

log(new Date(), 'DEBUG', 'some debug'); // log(a, b, c)

// logNow will be the partial of log with fixed first argument
const logNow = log(new Date());

// use it
logNow('INFO', 'message'); // [HH:mm] INFO message

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum2 = curry(sum);

console.log( curriedSum2(1, 2, 3) ); // 6, still callable normally
console.log( curriedSum2(1)(2,3) ); // 6, currying of 1st arg
console.log( curriedSum2(1)(2)(3) ); // 6, full currying
