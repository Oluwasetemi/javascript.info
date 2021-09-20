/* class IncrementCounter {
count = 0;

name = 'ade';

get value() {
    console.log(`Getting the current value`);
    return this.count;
}

set value(count) {
    console.log(`Getting the current value`);
    this.count = count;
    return this.count;
}

increment() {
    this.count += 1;
}
} */

/* function IncrementCounter() {
  this.count = 0;
  this.name = 'ade';



  this.increment = function() {
    this.count += 1;
  }
}

IncrementCounter.prototype.setValue = function (count) {
  console.log(`Setting the current value`);
  this.count = count;
  return this.count;
}

IncrementCounter.prototype.getValue = function () {
  console.log(`Getting the current value`);
  return this.count;
} */

function IncrementCounter() {
	this._count = 0;

	this.increment = function() {
		return this._count++;
	};
}

/* IncrementCounter.prototype.increment = function () {
  return this._count++;
} */

Object.defineProperty(IncrementCounter.prototype, 'value', {
	get() {
		return this._count;
	},
	set(value) {
		this._count = value;
	},
});

const test = new IncrementCounter();
// test.setValue(100)
test.value = 100;
test.increment();
// console.log(test.getValue());
console.log(test.value);
console.log(test);

// var something = new IncrementCounter("bar");
// console.log(something.value);
// something.value = 'baz';
// console.log(something.value);
