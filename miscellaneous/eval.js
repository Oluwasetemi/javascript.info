/* eslint-disable */
const code = 'console.log("Hello")';
eval(code); // Hello

let value = eval('1+1');
let value2 = eval('let i = 0; ++i');

let a = 1;

function f() {
  let a = 2;

  eval('console.log(a)'); // 2
}

f();

// can change outer variables
let x = 5;
eval("x = 10");
console.log(x); // 10, value modified

// in strict env - eval has its own lexical environment

eval("let x = 5; function f() {}");

console.log(typeof x); // undefined (no such variable)
// function f is also not visible

// if eval needs a local variable then use 'new Function' and pass them arguments