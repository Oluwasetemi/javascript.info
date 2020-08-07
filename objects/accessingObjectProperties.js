/* eslint ignore */
const obj = {
  name: 'ade',
  age: 20,
  isDeveloper: true,
  'first-name': 'javascript',
  'like lion': false
};

obj['name']

obj['first-name'];
// obj.name;
// obj.age;
// obj["first-name"]
// obj["like lion"]

// NB- always use the square bracket notation whenever you need to do runtime or user input related things

    // computed properties
    const computed = {
  [`${'value'}`]: 2,
  [`${2 + 2}`]: 3,
  [`${'value 3'}`]: 4
};

console.log(computed);

const fruit = 'apple';
const g = {
  [`${fruit}Computers`]: 5 // bag.appleComputers = 5
};

const name = 'Oluwasetemi Ojo';
// const firstName = '';

// const kob = {
//     firstName: 'Oluwasetemi',
//     lastName: 'Ojo'
// }
const first = 'first';
const last = 'last';

const kob = {
  [name.split(' ')[0]]: name.split(' ')[0],
  [`${last}Name`]: name.split(' ')[1]
};
console.log(kob);
