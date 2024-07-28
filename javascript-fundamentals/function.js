// Function Declaration
function log(str) {
  // statements
  return str;
}

log('sleep is very important');
// Local variables - variable within a function
// Outer variables - variable outside of a function
// Parameters - arguments passed to a function
// Default values - default values for parameters
// Returning a value - return a value from a function
// Naming a function - naming a function is important
// Functions == Comments - comments are important and they should explain the function


function sum(a = 4, b = 90) {
  // statement
  return a + b;
}

let result = sum();
console.log(result)


function name(params) {
  // statement
}
// XMLHttpRequest - AJAX
// Fetch - fetch API
fetch('https://jsonplaceholder.typicode.com/todos/1')
	.then(response => response.json())
	.then(json => console.log(json));