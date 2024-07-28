// loop thru the properties of an object
/*
for (key in object) {
  executes the body for each key among object properties
}
*/

const user = {
  name: 'John',
  age: 30,
  isAdmin: true,
};

for (const key in user) {
  // keys
  console.log(key); // name, age, isAdmin
  // values for the keys
  console.log(user[key]); // John, 30, true
}
