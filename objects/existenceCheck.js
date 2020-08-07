// A notable objects feature is that it’s possible to access any property.
const user = {
    abuse: 'bastard'
};

// user.abuse = 'stupid'

console.log('abuse' in user ? `hello ${user.abuse}` : 'no abuse')

console.log(user.noSuchProperty === undefined); // true means "no such property"

// check if a key exist in an object
// 'key' in object;

// Test
const user2 = { age: 30 };

const key = 'age';
console.log(key in user2); // true, takes the name from key and checks for such property

// if (user2.age) {
//     console.log('I am existing')
// }
// works in node version 13.4.0 upward
// optional chaining and null coalescing
// user2?.name;
