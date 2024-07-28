// The optional chaining ?. is an error-proof way to access nested object properties, even if an intermediate property doesn’t exist.

// understanding the problem

const user = {}; // user has no address

console.log(user.address.street); // Error!

// Error if the result of querySelector(...) is null
// let html = document.querySelector('.my-element').innerHTML;

console.log(user && user.address && user.address.street); // undefined (no error)

// short-circuiting

// other use cases - ?.(), ?.[]

const user2 = {
  name: 'oluwasetemi',
  age: false,
};

console.log(user2?.age ?? 40);

const user3 = {}; // user has no address

console.log(user3?.address?.street); // undefined (no error)

// even works if user is not defined
const user4 = null;

console.log(user4?.address); // undefined
console.log(user4?.address.street); // undefined

// it works for declared variable

// Short-circuiting
// As it was said before, the ?. immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.

// So, if there are any further function calls or side effects, they don’t occur:

const user5 = null;
let x = 0;

user5?.sayHi(x++); // nothing happens

console.log(x); // 0, value not incremented

const user6 = {
  admin() {
    console.log('I am admin');
  },
};

const user7 = {};

user6.admin?.(); // I am admin
user7.admin?.();

const user8 = {
  firstName: 'John',
};

const user9 = null; // Imagine, we couldn't authorize the user

const key = 'firstName';

console.log(user8?.[key]); // John
console.log(user9?.[key]); // undefined

console.log(user9?.[key]?.something?.not?.existing); // undefined

delete user?.name; // delete user.name if user exists

// we can use ?. for safe reading and deleting, but not writing.

/*
 * Summary
 * Optional Chaining
obj?.prop – returns obj.prop if obj exists, otherwise undefined.
obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
obj?.method() – calls obj.method() if obj exists, otherwise returns undefined.
*/
