// The “while” loop
// The “do…while” loop
let i = 0;

do {
  // statements
	console.log(i);
	i++;
} while (i < 10);

// The “for” loop
for (var j = 0; j < 10; j += 1) {
	if (j === 5) {
		continue;
	}
	console.log(j);
}
console.log(j);
// Breaking the loop
// Continue to the next iteration
// Labels for break/continue

// loop inside loop
let res = '';
for (let k = 1; k <= 20; k++) {
	for (let l = 1; l <= 12; l += 1) {
		res += `-----------------------\t`;
		res += `${k}*${l} = ${k * l}\n`;
		res += `-----------------------`;
	}
	res += '\n';
}

res;

// initialization, condition, increment/decrement
for (let index = 0; index < 10; index++) {
  // statements
 console.log('repeating ', index);
}


// infinite loop
