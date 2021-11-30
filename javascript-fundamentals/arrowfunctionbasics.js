// arrow function basics
// implicit return
const implicitLogFunction = (str) => console.log(str);

implicitLogFunction('hello');
// explicit return
const log = (str) => {
  console.log(str);
};

log('hello');


// function declare
let square =  (num) => {
  return num * num;
}

console.log(square(10));
