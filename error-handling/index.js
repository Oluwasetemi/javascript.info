/* eslint-disable */
function sum(a, b) {
  try {
    if (typeof a === 'string' || typeof b === 'string') {
      throw new Error(' I cannot add string; I am expecting a number');
    }
    return a + b;
  } catch (error) {
    console.log(error.message);
  }
}

const res = sum(1, 3);
res;

process.on('unCaughtError', e => 'error');

// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Error {
  constructor(message) {
    this.message = message;
    this.name = 'Error'; // (different names for different built-in error classes)
    this.stack = '<call stack>'; // non-standard, but most environments support it
  }
}
const mainError = new Error('typerror');

function ErrorFunc(message) {
  this.message = 'message';
  this.name = 'name';
  this.stack = 'stack';
}
const mainError2 = new ErrorFunc('typerror');

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = 'ValidationError'; // (2)
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

/* ValidationError.__proto__ = ErrorFunc
ValidationError.prototype = ErrorFunc */

function test() {
  throw new ValidationError('Whoops!');
}

try {
  test();
} catch (err) {
  console.log(err.message); // Whoops!
  console.log(err.name); // ValidationError
  console.log(err.stack); // a list of nested calls with line numbers for each
}


// Usage
// function readUser(json) {
//   let user = JSON.parse(json);

//   if (!user.age) {
//     throw new ValidationError("No field: age");
//   }
//   if (!user.name) {
//     throw new ValidationError("No field: name");
//   }

//   return user;
// }

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}


// Working example with try..catch

try {
  let user = readUser('{ "age": 25, }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Invalid data: " + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) { // (*)
    console.log("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

let err = new FormatError("formatting error");

console.log( err.message ); // formatting error
console.log( err.name ); // FormatError
console.log( err.stack ); // stack

console.log( err instanceof SyntaxError ); // true
