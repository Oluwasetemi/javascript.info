/* eslint-disable */
// generators
// Generator functions
// Generators can return (“yield”) multiple values, one after another, on - demand.They work great with iterables, allowing to create data streams with ease

// a special object - generator object(value, done)

function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

// "generator function" creates "generator object"
const generator = generateSequence();
// console.log(generator)
console.log(generator.next()); // [object Generator]
console.log(generator.next()); // [object Generator]
console.log(generator.next()); // [object Generator]

// Generators are iterable
function* generateSequenceIterator() {
  yield 1;
  yield 2;
  return 3;
}

const generator2 = generateSequenceIterator();

for (const value of generator2) {
  // NB - if we want the 3 value to be logged then we need to replace the return 3 with yield 3.
  console.log(value); // 1, then 2
}

// all iterators related method are valid - spread operator
function* generateSequence2() {
  yield 1;
  yield 2;
  yield 3;
}
let sequence = [0, ...generateSequence2()];sequence
// Using generators for iterables
// remember this code
let range = {
  from: 1,
  to: 5,

  // for..of range calls this method once in the very beginning
  [Symbol.iterator]() {
    // ...it returns the iterator object:
    // onward, for..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for..of loop
      next() {
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// iteration over range returns numbers from range.from to range.to
console.log([...range]); // 1,2,3,4,5

// generator implementation
let rangeGenerator = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  }
};

console.log([...rangeGenerator]); // 1,2,3,4,5

// Generator composition
// Generator composition is a special feature of generators that allows to transparently “embed” generators in each other
function* generateSequenceCompose(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {

  // 0..9
    // for (let i = 48; i <= 57; i++) yield i;
  yield* generateSequenceCompose(48, 57);

  // A..Z
    // for (let i = 65; i <= 90; i++) yield i;
  yield* generateSequenceCompose(65, 90);

  // a..z
    // for (let i = 97; i <= 122; i++) yield i;
  yield* generateSequenceCompose(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z
// “yield” is a two-way road
function* gen() {
  // Pass a question to the outer code and wait for an answer
  let result = yield "2 + 2 = ?"; // (*)

  console.log(result);
}

let genVal = gen();

let question = genVal.next().value; // <-- yield returns the value

genVal.next(4); // --> pass the result into the generator
// resume the generator after some time
// setTimeout(() => generator.next(4), 1000);

// generator.throw
function* genThrow() {
  try {
    let result = yield "2 + 2 = ?"; // (1)

    console.log("The execution does not reach here, because the exception is thrown above");
  } catch(e) {
    console.log(e); // shows the error
  }
}

let generatorThrow = genThrow();

let questionThrow = generatorThrow.next().value;

generatorThrow.throw(new Error("The answer is not found in my database")); // (2)

// async iterators and generators
let rangeIterator = {
  from: 1,
  to: 5,

  // for..of calls this method once in the very beginning
  [Symbol.iterator]() {
    // ...it returns the iterator object:
    // onward, for..of works only with that object,
    // asking it for next values using next()
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for..of loop
      next() { // (2)
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for(let value of rangeIterator) {
  console.log(value); // 1 then 2, then 3, then 4, then 5
}

let rangeAsyncIterator = {
  from: 1,
  to: 5,

  // for await..of calls this method once in the very beginning
  [Symbol.asyncIterator]() { // (1)
    // ...it returns the iterator object:
    // onward, for await..of works only with that object,
    // asking it for next values using next()
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for await..of loop
      async next() { // (2)
        // it should return the value as an object {done:.., value :...}
        // (automatically wrapped into a promise by async)

        // can use await inside, do async stuff:
        await new Promise(resolve => setTimeout(resolve, 1000)); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// IIFE
(async () => {

  for await (let value of rangeAsyncIterator) { // (4)
    console.log(value); // 1,2,3,4,5
  }

})()

async function* generateSequenceAsync(start, end) {

  for (let i = start; i <= end; i++) {

    // yay, can use await!
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield i;
  }

}

(async () => {

  let generator = generateSequenceAsync(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, then 2, then 3, then 4, then 5
  }

})();

// async iterables Generators
// asyncIterator that are generator not supported in node 1v2
/* let rangeIterables = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() { // a shorthand for [Symbol.iterator]: function*()
      for (let value = this.from; value <= this.to; value++) {
        // make a pause between values, wait for something
    await new Promise(resolve => setTimeout(resolve, 1000));
      yield value;
    }
  }
};

for await (let value of rangeIterables) {
  console.log(value); // 1, then 2, then 3, then 4, then 5
} */

async function* fetchCommits(repo) {
  let url = `https://api.github.com/repos/${repo}/commits`;

  while (url) {
    const response = await fetch(url, { // (1)
      headers: {'User-Agent': 'Our script'}, // github requires user-agent header
    });

    const body = await response.json(); // (2) response is JSON (array of commits)

    // (3) the URL of the next page is in the headers, extract it
    let nextPage = response.headers.get('Link').match(/<(.*?)>; rel="next"/);
    nextPage = nextPage && nextPage[1];

    url = nextPage;

    for(let commit of body) { // (4) yield commits one by one, until the page ends
      yield commit;
    }
  }
}

/* (async () => {

  let count = 0;

  for await (const commit of fetchCommits('javascript-tutorial/en.javascript.info')) {

    console.log(commit.author.login);

    if (++count == 100) { // let's stop at 100 commits
      break;
    }
  }

})(); */
