
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

globalThis.test = test;
global.test = test;

globalThis.expect = expect;
global.expect = expect;