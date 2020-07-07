const random = Math.floor(Math.random() * 6) + 1;

console.log(random);

/* if (random === 1) {
  console.log('one');
} else if (random === 2) {
  console.log('two');
} else if (random === 3) {
  console.log('three');
} else if (random === 4) {
  console.log('four');
} else if (random === 5) {
  console.log('five');
} else if (random === 6) {
  console.log('six');
} */

// condition ? statement : statement2
random === 1
  ? console.log('one')
  : random === 2
  ? console.log('two')
  : console.log('others');
