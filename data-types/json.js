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
  if (key == 'date') return new Date(value);
  return value;
});

console.log(meetup.date.getDate()); // now works!
