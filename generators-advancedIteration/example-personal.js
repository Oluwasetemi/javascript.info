function makeEvenRangeIterator(start = 2, end = Infinity, step = 2) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const it = makeEvenRangeIterator(2, 10);
let result = it.next();
while (!result.done) {
  console.log(result.value);
  result = it.next();
}

const evenRange = {
  from: 2,
  to: 10,
};

evenRange[Symbol.iterator] = function() {
  console.log(this.from);
  return {
    current: this.from,
    last: this.to,
    count: 0,

    next() {
      if (this.current < this.last) {
        this.count++;
        return { done: false, value: (this.current += 2) };
      }
      return { done: true, count: this.count };
    },
  };
};

for (const i of evenRange) {
  console.log(i);
}

function* myNameAgeGithubUsername() {
  yield 'ojo';
  yield 28;
  return 'Oluwasetemi';
}
const generator = myNameAgeGithubUsername();
const name = generator.next();
console.log(name);
const age = generator.next();
console.log(age);
const githubUsername = generator.next();
console.log(githubUsername);
console.log(generator.toString());

// let range = {
//   from: 1,
//   to: 5,

//   // for..of range calls this method once in the very beginning
//   [Symbol.iterator]() {
//     // ...it returns the iterator object:
//     // onward, for..of works only with that object, asking it for next values
//     return {
//       current: this.from,
//       last: this.to,

//       // next() is called on each iteration by the for..of loop
//       next() {
//         // it should return the value as an object {done:.., value :...}
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   }
// };

// for (let i of range) {
//   console.log(i)
// }

function* myGen() {
  yield 1;
  yield 2;
}
const gen = myGen();
console.log(gen.next()); // return {done: false: value: 1}
console.log(gen.return('I am done')); // {done: true, value: 'I am done'}
gen.next(); // {done: true, value: undefined}

async function* generator22() {
  yield new Promise((resolve) => resolve(1));
  yield new Promise((resolve) => resolve(2));
}

const gg = generator22();

(async () => {
  for await (const each of gg) {
    console.log(each);
  }
})();
