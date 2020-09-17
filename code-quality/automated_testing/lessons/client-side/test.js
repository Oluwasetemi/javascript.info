
describe("pow", function () {

 /*  it("raises to n-th power", function () {
    assert.equal(pow(2, 3), 8);
    assert.equal(pow(3, 4), 81);
  }); */

  /* it("2 raised to power 3 is 8", function () {
    assert.equal(pow(2, 3), 8);
  });

  it("3 raised to power 4 is 81", function () {
    assert.equal(pow(3, 4), 81);
  }); */

  it("for negative n the result is NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("for non-integer n the result is NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });

  // describe("raises x to power 3", function () {


  //   function makeTest(x) {
  //     let expected = x * x * x;
  //     it(`${x} in the power 3 is ${expected}`, function () {
  //       assert.equal(pow(x, 3), expected);
  //     });
  //   }

  //   for (let x = 1; x <= 5; x++) {
  //     makeTest(x);
  //   }
  // })



  describe('understanding the test hooks', () => {
    before(() => console.log("Testing started – before all tests"));
    after(() => console.log("Testing finished – after all tests"));

    beforeEach(() => console.log("Before a test – enter a test"));
    afterEach(() => console.log("After a test – exit a test"));

    it('test 1', () => console.log(1));
    it('test 2', () => console.log(2));
  });

});
