const assert = require('assert');
const { globalAgent } = require('http');
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

// async function test(title, callback) {
//   try {
//     await callback();
//     console.log(`✅ ${title}`)
//   } catch (error) {
//     console.error(`❌ ${title}`)
//     console.error(error);
//   }
// }

// mocha supports it in place of test but you may run it = test;

globalThis.test = it;
global.test = it;

globalThis.expect = expect;
global.expect = expect;

test('sum fxn adds two numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
});


test('subtract fxn adds two numbers asynchronously', async () => {
  const result = await subtractAsync(7, 3)
  const expected = 4
  // expect(result).toBe(expected)
  // use assert in a mode environment
  assert.strictEqual(result, expected);
});