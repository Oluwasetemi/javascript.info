const helper = require('./util/helper')

function sumWithRandom(p1, p2) {
    const res = helper.biggest(p1, p2);
    return res;
}

module.exports = {sum: sumWithRandom}