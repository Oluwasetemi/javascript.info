const { sumAsync, subtractAsync } = require('../math')


async function sumTest() {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
}
test('sum fxn adds two numbers asynchronously', sumTest);

async function subtractTest() {
  const result = await subtractAsync(7, 3)
  const expected = 4
  expect(result).toBe(expected)
}

test('subtract fxn adds two numbers asynchronously', subtractTest);