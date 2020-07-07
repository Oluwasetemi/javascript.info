class IncrementCounter {
  #count = 0;

  name = 'ade';

  get value() {
    console.log(`Getting the current value`);
    return this.#count;
  }

  set value(count) {
    console.log(`Getting the current value`);
    this.#count = count;
    return this.#count;
  }

  increment() {
    this.#count += 1;
  }
}

const test = new IncrementCounter();
console.log((test.value = 100));
test.increment();
console.log(test.value);
console.log(test);
