
describe("pow", function () {

  xit("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  });

  xit("2 raised to power 3 is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  xit("3 raised to power 4 is 81", function () {
    assert.equal(pow(3, 4), 81);
  });

  xit("for negative 2 the result is .5", function () {
    assert.equal(pow(2, -1), .5);
    assert.isNumber(pow(2, -1), .5);
  });

  describe("raises x to power y", function () {


    function makeTest(x, y) {
      let expected = 1;
      for (let i = 1; i <= y; i++) {
        expected *= x;
      }
      xit(`${x} in the power ${y} is ${expected}`, function () {
        assert.equal(pow(x, y), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      for (let y = 1; y <= 12; y++) {
        // console.log({x, y})
        makeTest(x, y);
      }
    }
    // makeTest(3, 5);
  })



  describe('understanding the test hooks', () => {
    before(() => console.log("Testing started – before all tests"));
    after(() => console.log("Testing finished – after all tests"));

    beforeEach(() => console.log("Before a test – enter a test"));
    afterEach(() => console.log("After a test – exit a test"));

    xit('test 1', () => console.log(1));
    it('test 2', () => console.log(2));
  });

});
