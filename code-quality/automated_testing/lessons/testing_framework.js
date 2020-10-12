const { sum, subtract } = require('../math')

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    }
  }
}

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error);
  }
}

function sumTest() {
  const result = sum(3, 'a')
  const expected = 10
  expect(result).toBe(expected)
}

test('sum fxn adds two numbers', sumTest);

function subtractTest() {
  const result = subtract(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}

test('subtract fxn adds two numbers', subtractTest);
