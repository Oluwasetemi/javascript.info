// Constructor function
// why?
// convention to identify ctor functions
// They are named with capital letter first.
// They should be executed only with "new" operator.
function User(name, isAdmin = false) {
  this.name = name;
  this.isAdmin = isAdmin;
}

const user = new User('Jack', true);
const president = new User('Trump');

console.log(user.name); // Jack
console.log(user.isAdmin); // false

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// 1.The function body executes. Usually it modifies this, adds new properties to it.
// 2.The value of this is returned.

// constructor function code example
function User2(name) {
  //   this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  //   return this;  (implicitly)
}

// Constructor mode test: new.target
// Inside a function, we can check whether it was called with new or without it, using a special new.target property.

// It is empty for regular calls and equals the function if called with new

function User3(name) {
  if (!new.target) {
    // if you run me without new
    return new User(name); // ...I will add new for you
  }

  this.name = name;
}

const john = User3('John'); // redirects call to new User
console.log(john.name); // John

// Return from constructors
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

// But if there is a return statement, then the rule is simple:

// If return is called with an object, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.
// In other words, return with an object returns that object, in all other cases this is returned.

// For instance, here return overrides this by returning an object:
function BigUser() {
  this.name = 'John';

  return { name: 'Godzilla' }; // <-- returns this object
}

console.log(new BigUser().name); // Godzilla, got that object
// parenthesis can be omitted while calling a ctor function

// Methods in constructor;
function User4(name) {
  this.name = name;

  this.sayHi = function() {
    console.log(`My name is: ${this.name}`);
  };
}

const john2 = new User4('John');

console.log(john2 instanceof User4);

john2.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
