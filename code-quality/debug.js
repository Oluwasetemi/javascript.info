/**
 * Using this function we can return the max of two numbers
 * @param {Number} a the first number
 * @param {Number} b the second number
 * @returns {Number} return the max of the two numbers
 */
function max2(a, b) {
	let message = '';
	if (a < b) {
		message = `${b} is greater than ${a}`;
		return message;
	}
	message = `${a} is greater than ${b}`;
	return message;
}

console.log(max2(1, 2000));

let b = 100;
function sum(a) {
  b = 9098
	let sum = a + b;
	return sum;
}

console.log(sum(20, 4090000000000000000));

function random(a, b, rand = Math.random()) {
  let random = Math.floor(rand * (b - a + 1)) + a;
  return random;
}


console.log(random(1, 100));
