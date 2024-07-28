const { sumAsync, subtractAsync } = require('../math')

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    }
  }
}

async function test(title, callback) {
  try {
    await callback();
    console.log(`✅ ${title}`)
  } catch (error) {
    console.error(`❌ ${title}`)
    console.error(error);
  }
}

async function sumTest() {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
}
test('sum fxn adds two numbers', sumTest);

async function subtractTest() {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}

test('subtract fxn adds two numbers', subtractTest);
