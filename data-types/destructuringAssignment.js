/* eslint-disable */

// Array destructuring
// we have an array with the name and surname
const arr = ['Ojo', 'Oluwasetemi'];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
const [firstName, surname] = arr;

// const [a, b] = ['tobi', 'damola'];


console.log(firstName); // Ojo
console.log(surname); // Oluwasetemi

let [firstName2, surname2] = "Ojo Oluwasetemi".split(' ');
// ignore element using coma
let [name, , job] = ['ojo', 12, 's/w developer'];

// works with any iterable on the right handside
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

// assign to anything at the left handside
let user = {};

[user.name, user.surname] = "Ojo Oluwasetemi".split(' ');
user
console.log(user.name); // Ojo

// looping with object.entries()
let user2 = {
  name: "John",
  age: 30,
  job: 'developer'
};

[['name', 'John'], ['age', 30]]
// loop over keys-and-values and map
for (let [key, value] of Object.entries(user2)) {
  console.log(key + ':' +value); // name:John, then age:30
}

// ...rest
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// Note that type of `rest` is Array.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// default values
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];

console.log(name3);    // Julius (from array)
console.log(surname3); // Anonymous (default used)

// Object destructuring - let {var1, var2} = {var1:…, var2:…}
let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// the order does not matter for object destructuring

// assign to a new variable name
let options2 = {
  title2: "Menu",
  width: 100,
  height: 200
};

// { sourceProperty: targetVariable }
let {width: w, height: h, title2} = options2;
console.log(width)
console.log(height)
// width -> w
// height -> h
// title -> title

console.log(w);      // 100
console.log(h);      // 200
console.log(title2)//;  // Menu

// default values
let options3 = {
  title3: "Menu"
};

let {width2 = 100, height2 = 200, title3} = options3;

console.log(title3);  // Menu
console.log(width2);  // 100
console.log(height2); // 200

// default parameters can be an expression
// we can combine both assigning to a new variable with default properties
let options4 = {
  title4: "Menu"
};

let {width: w2 = Math.max(100, 200), height: h2 = 200, title4} = options4;

console.log(title4);  // Menu
console.log(w2);      // 100
console.log(h2);      // 200

// rest
let options5 = {
  title5: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title5, ...rest2 } = options5;
console.log(title5);
console.log(rest2)

// now title="Menu", rest={height: 200, width: 100}
console.log(rest2.height);  // 200
console.log(rest2.width);   // 100

// declare before destructuring is possible
let title6, width3, height3;

// okay now
({title, width, height} = {title: "Menu", width: 200, height: 100});

console.log(title); // Menu
console.log(width); // Menu



// Nested destructuring
let options6 = {
  size: {
    width4: 100,
    height4: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// destructuring assignment split in multiple lines for clarity
let {
  size: { // put size here
    width4,
    height4
  },
  items: [item1, item2], // assign items here
  title8 = "Menu" // not present in the object (default value is used)
} = options6;

console.log(title8);  // Menu
console.log(width4);  // 100
console.log(height4); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut

// Smart function parameters
// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
//   // ...
// }
// we pass object to function
let options8 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – taken from options,
  // width, height – defaults used
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

showMenu(options8);

function sum({ a = 10, b = 90 }) {
  return a + b;
}

const obj = {a: 2, b: 5}

console.log(sum({}))

let options9 = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

// using nested destructuring with default and variable renaming
// function showMenu2({
//   title = "Untitled",
//   width: w3 = 100,  // width goes to w
//   height: h3 = 200, // height goes to h
//   items: [item3, item4] // items first element goes to item1, second to item2
// }) {
//   console.log( `${title} ${w3} ${h3}` ); // My Menu 100 200
//   console.log( item3 ); // Item1
//   console.log( item4 ); // Item2
// }

// showMenu2(options9);

// function({
//   incomingProperty: varName = defaultValue
//   ...
// })

// showMenu2({}); // ok, all values are default

// showMenu2(); // this would give an error

function showMenu10({ title = "Menu", width = 100, height = 200 }) {
  console.log( `${title} ${width} ${height}` );
}

showMenu10({}); // Menu 100 200

options;

const clone = JSON.parse(JSON.stringify(options, null, 4))

console.log(clone)
clone.title = 'Ade';
console.log(clone);
options