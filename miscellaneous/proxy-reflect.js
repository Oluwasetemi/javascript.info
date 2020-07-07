/* eslint-disable */
// A Proxy object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them

const target = {};
const proxy = new Proxy(target, {}); // empty handler

proxy.test = 5; // writing to proxy (1)
console.log(target.test); // 5, the property appeared in target!

console.log(proxy.test); // 5, we can read it from proxy too (2)

for (const key in proxy) console.log(key); // test, iteration works (3)

// setting traps with proxies
let numbers = [0, 1, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return 0; // default value
  }
});

console.log(numbers[1]); // 1
console.log(numbers[123]); // 0 (no such item)

let dictionary = {
  Hello: 'Hola',
  Bye: 'Adiós'
};

console.log(dictionary.Hello); // Hola
console.log(dictionary.Welcome); // undefined

dictionary = new Proxy(dictionary, {
  get(target, phrase) {
    // intercept reading a property from dictionary
    if (phrase in target) {
      // if we have it in the dictionary
      return target[phrase]; // return the translation
    }
    // otherwise, return the non-translated phrase
    return phrase;
  }
});

// Look up arbitrary phrases in the dictionary!
// At worst, they're not translated.
console.log(dictionary.Hello); // Hola
console.log(dictionary['Welcome to Proxy']); // Welcome to Proxy (no translation)

// Validation with 'set' trap
let numbers2 = [];

numbers2 = new Proxy(numbers2, { // (*)
  set(target, prop, val) { // to intercept property writing
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  }
});

numbers2.push(1); // added successfully
numbers2.push(2); // added successfully
console.log("Length is: " + numbers.length); // 2

numbers2.push("test"); // TypeError ('set' on proxy returned false)

console.log("This line is never reached (error in the line above)");

// iteration with 'ownKeys' and 'getOwnPropertyDescriptor'

// Object.keys, for..in loop and most other methods that iterate over object properties use [[OwnPropertyKeys]] internal method (intercepted by ownKeys trap) to get a list of properties

let userTrap = {
  name: "John",
  age: 30,
  _password: "***"
};

userTrap = {
 = new Proxy(userTrap, {
  ownKeys(target) {
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "ownKeys" filters out _password
for(let key in userTrap) alert(key); // name, then: age

// same effect on these methods:
alert( Object.keys(user) ); // name,age
    alert(Object.values(user) ); // John,30

// trap protected properties with 'deleteProperty' and other traps.
let userProp = {
  name: "John",
  _password: "secret"
};

alert(userProp._password); // secret

let user = {
  name: "John",
  _password: "***"
};

user = new Proxy(user, {
  get(target, prop) {
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    }
    let value = target[prop];
    return (typeof value === 'function') ? value.bind(target) : value; // (*)
  },
  set(target, prop, val) { // to intercept property writing
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      target[prop] = val;
      return true;
    }
  },
  deleteProperty(target, prop) { // to intercept property deletion
    if (prop.startsWith('_')) {
      throw new Error("Access denied");
    } else {
      delete target[prop];
      return true;
    }
  },
  ownKeys(target) { // to intercept property list
    return Object.keys(target).filter(key => !key.startsWith('_'));
  }
});

// "get" doesn't allow to read _password
try {
  alert(user._password); // Error: Access denied
} catch(e) { alert(e.message); }

// "set" doesn't allow to write _password
try {
  user._password = "test"; // Error: Access denied
} catch(e) { alert(e.message); }

// "deleteProperty" doesn't allow to delete _password
try {
  delete user._password; // Error: Access denied
} catch(e) { alert(e.message); }

// "ownKeys" filters out _password
for(let key in user) alert(key); // name

// in-range with has trap
let range = {
  start: 1,
  end: 10
    };

    let range = {
  start: 1,
  end: 10
};

range = new Proxy(range, {
  has(target, prop) {
    return prop >= target.start && prop <= target.end
  }
});

alert(5 in range); // true
    alert(50 in range); // false

// delay decorator
function delay(f, ms) {
  // return a wrapper that passes the call to f after the timeout
  return function() { // (*)
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

// after this wrapping, calls to sayHi will be delayed for 3 seconds
sayHi = delay(sayHi, 3000);

sayHi("John"); // Hello, John! (after 3 seconds)


// But a wrapper function does not forward property read/write operations or anything else. After the wrapping, the access is lost to properties of the original functions, such as name, length and others

function sayHi(user) {
    alert(`Hello, ${user}!`);
}

alert(sayHi.length); // 1 (function length is the arguments count in its declaration)

sayHi = delay(sayHi, 3000);

alert(sayHi.length); // 0 (in the wrapper declaration, there are zero arguments)

// with proxy
function delayWithProxy(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => target.apply(thisArg, args), ms);
    }
  });
}

function sayHi(user) {
  alert(`Hello, ${user}!`);
}

sayHi = delayWithProxy(sayHi, 3000);

alert(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target

sayHi("John"); // Hello, John! (after 3 seconds)

// Reflect is a built-in object that simplifies creation of Proxy

let user = {};

Reflect.set(user, 'name', 'John');

alert(user.name); // John

let userReflect = {
  name: "John",
};

userReflect = new Proxy(userReflect, {
  get(target, prop, receiver) {
    alert(`GET ${prop}`);
    return Reflect.get(target, prop, receiver); // (1)
  },
  set(target, prop, val, receiver) {
    alert(`SET ${prop}=${val}`);
    return Reflect.set(target, prop, val, receiver); // (2)
  }
});

let name = userReflect.name; // shows "GET name"
userReflect.name = "Pete"; // shows "SET name=Pete"

// proxying a getter
let user = {
  _name: "Guest",
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop];
  }
});

alert(userProxy.name); // Guest

let user = {
  _name: "Guest",
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    return target[prop]; // (*) target = user
  }
});

let admin = {
  __proto__: userProxy,
  _name: "Admin"
};

// Expected: Admin
alert(admin.name); // outputs: Guest (?!?)

// slove the problem above
let user = {
  _name: "Guest",
  get name() {
    return this._name;
  }
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) { // receiver = admin
    return Reflect.get(target, prop, receiver); // (*)
  }
});


let admin = {
  __proto__: userProxy,
  _name: "Admin"
};

alert(admin.name); // Admin

// proxy's limitations
// Built-in objects: Internal slots
// Many built-in objects, for example Map, Set, Date, Promise and others make use of so-called “internal slots”.
// Private fields
// Proxy and the original target object are different

// Revocable proxy
// A revocable proxy is a proxy that can be disabled.

let object = {
  data: "Valuable data"
};

let {proxy, revoke} = Proxy.revocable(object, {});

// pass the proxy somewhere instead of object...
alert(proxy.data); // Valuable data

// later in our code
revoke();

// the proxy isn't working any more (revoked)
alert(proxy.data); // Error

// A call to revoke() removes all internal references to the target object from the proxy, so they are no more connected. The target object can be garbage-collected after that