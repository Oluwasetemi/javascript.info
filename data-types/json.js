// JSON.stringify
const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

const json = JSON.stringify(student);

console.log(typeof json); // we've got a string!

console.log(json);

// supports

// Objects { ... }
// Arrays [ ... ]
// Primitives:
// strings,
// numbers,
// boolean values true/false,
// null.

/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/

// does not support
// Function properties (methods).
// Symbolic properties.
// Properties that store undefined

// Excluding and transforming: replacer
const room = {
  number: 23
};

const meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ['title', 'participants']));

const room2 = {
  number: 23
};

const meetup2 = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room // meetup references room
};

room2.occupiedBy = meetup2; // room references meetup

console.log(
  JSON.stringify(meetup2, ['title', 'participants', 'place', 'name', 'number'])
);
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/

// {"title":"Conference","participants":[{},{}]}
// Formatting: space

const user = {
  name: 'John',
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true
  }
};

console.log(JSON.stringify(user, null, 2));
/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/* for JSON.stringify(user, null, 4) the result would be more indented:
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
        "isEditor": true
    }
}
*/
// Custom “toJSON”

const room3 = {
  number: 23
};

console.log(JSON.stringify(room3));

const meetup3 = {
  title: 'Conference',
  date: new Date(Date.UTC(2017, 0, 1)),
  room
};

// TODO:
// console.log( JSON.stringify(meetup3) );
/*
  {
    "title":"Conference",
    "date":"2017-01-01T00:00:00.000Z",  // (1)
    "room": {"number":23}               // (2)
  }
*/

const room4 = {
  number: 23,
  toJSON() {
    return this.number;
  }
};

const meetup4 = {
  title: 'Conference',
  room
};

console.log(JSON.stringify(room4)); // 23

// console.log( JSON.stringify(meetup4) );
/*
  {
    "title":"Conference",
    "room": 23
  }
*/
// JSON.parse
const userData =
  '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

const user2 = JSON.parse(userData);

console.log(user2.friends[1]); // 1
// Using reviver

const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

const meetup5 = JSON.parse(str, function(key, value) {
  if (key === 'date') return new Date(value);
  return value;
});

// console.log(meetup.date.getDate()); // now works!

// Yesterday's class
// Object Destructuring
// normal, renaming, default
// use the rest parameter,
// nested objects
const objDes = { name: 'tmez', age: 99 };
objDes.surnamez = 'Ojo';
objDes.agez = 90;
objDes.details = { graduated: false, worth: 0 };
objDes.willNotShow = undefined;

const {
  name,
  age,
  details: { graduated: areYouAGraduate, worth: value },
  ...ade
} = objDes;

console.log(value);
console.log(areYouAGraduate);
console.log(ade);

// Smart Functions - passing object as the parameters to fxn, renaming the parameter, setting a default value for the parameter
const showObject = ({ name: n2 = 'Oluwasetemi', age }) =>
  `Your name is ${n2} and Age: ${age}`;
const obj = { age: 99 };
console.log(showObject(obj));

// or set the default in the declaration
function sum({ a: length = 10, b: breath = 10 } = {}) {
  return length + breath;
}

// setting the default in the calling of the fxn
console.log(sum());
// JSON
/* const jsonObjDes = JSON.stringify(objDes, [
  'name',
  'details',
  'graduated',
  'worth'
]); */

// const jsonObjDes = JSON.stringify(objDes, function(key, value) {
//   return value === 'name' ? undefined : value;
// });
// objects, arrays, values-number, string, boolean, null. it will not accept fxns,symbols, anything that stores undefined
const jsonObjDes = JSON.stringify(objDes, null, 2);
console.log(JSON.parse(jsonObjDes));
// custom toJSON
objDes.toJSON = function() {
  return { name, age };
};

const abc = JSON.stringify(objDes);
console.log(abc);
