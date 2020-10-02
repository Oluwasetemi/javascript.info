const assert = require('assert')
const math = require('../sum')
const util = require('../util/helper')

const originalHelper = util.biggest;
util.biggest = (p1, p2) => p1.length

assert.strictEqual(math.sum('oluwasetemi'), 11)

util.biggest = originalHelper;
