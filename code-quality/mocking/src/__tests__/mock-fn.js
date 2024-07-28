const math = require('../sum');
const util = require('../util/helper');

const originalUtil = util.biggest;
util.biggest = jest.fn((p1, p2) => p1.length);



test('should ', () => {
    let res = math.sum('oluwasetemi', 'opeyemi');

    expect(util.biggest.mock.calls).toEqual([['oluwasetemi', 'opeyemi']])
    expect(util.biggest).toHaveBeenCalled()
    expect(res).toBe(11);

    // clean up
    util.biggest = originalUtil;
});
