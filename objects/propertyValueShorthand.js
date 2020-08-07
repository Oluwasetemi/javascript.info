const name = 'oluwasetemi';
const age = 20;

// const test = //    ame: 'o;luwasetemi',
//     age: 20
// }


const obj = {
    name,
    age
}

function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // saconstas age: age
  };
}


const testUser = makeUser('temi', 23);testUser

// allow both normal and shorthand
let user = {
  name,  // same as name:name
  age: 30
};

console.log(user)