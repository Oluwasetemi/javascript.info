const assert = require('assert')
const math = require('../sum')
const util = require('../util/helper')

function fn(impl =() => {}) {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args);
        return impl(...args)
    }
    mockFn.mock = {calls: []};
    mockFn.mockImplementation = newImpl => (impl = newImpl)
    return mockFn;
}

const originalHelper = util.biggest;
util.biggest = fn((p1, p2) => p1.length)

console.log(util.biggest.mock.calls);
assert.strictEqual(math.sum('oluwasetemi', 'opeyemi'), 11);
assert.deepStrictEqual(util.biggest.mock.calls, [['oluwasetemi', 'opeyemi']]);


util.biggest = originalHelper;
