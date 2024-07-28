// Accessing methods in the Object of primitives

// REason why you can access methods on primitives => when primitives are declared, an Object Wrapper (String, Number, Boolean, and Symbol) is also created internally which gives us access to several methods.
// NB: they are discarded when you're done using the variable
const name = 'Oluwasetemi';

// internally
let nameWrapper = String(name);

// we have access to all String related methods
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// the moment you stop/finish using the variable the object Wrapper is discarded/destroyed



const number = 10.567;
console.log(number.toFixed(2));
console.log(number.toFixed(1));
console.log(number.toExponential());
console.log(number.toPrecision(2));
console.log(number.toString(2));
console.log(number.toString(16));
