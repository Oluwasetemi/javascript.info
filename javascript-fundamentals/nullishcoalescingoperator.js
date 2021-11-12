// Comparison with ||
result = a !== null && a !== undefined ? a : b;
result = a ?? b

let user;

console.log(user ?? "Anonymous"); // Anonymous (user not defined)

user = 'name'
console.log(user ?? "Anonymous"); // Anonymous (user not defined)

// || returns the first truthy value.
// && returns the first falsy value.
// ?? returns the first defined value.


// Precedence

// || equal to 6 in the precedence table and ?? equal to 5 in the precedence table.

// Using ?? with && or ||
let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works