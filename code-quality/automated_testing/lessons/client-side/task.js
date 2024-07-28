describe("Raises x to power n", function () {
  it("5 in the power of 0 equals 0", function () {
    assert.equal(pow(5, 0), 1);
    expect(pow(5, 0)).to.equal(1)
  });
  it("5 in the power of 1 equals 5", function () {
    assert.equal(pow(5, 1), 5);
  });

  it("5 in the power of 2 equals 25", function () {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function () {
    assert.equal(pow(5, 3), 125);
  });
  it("5 in the power of -3 equals 1/125", function () {
    assert.equal(pow(5, -3), 1/125);
  });
});



describe("Sum function", function () {
  it('return 7 for 3, 4 ', () => {
    const result = sum(3, 4);
    const expected = 7;
    assert.equal(result, expected);
  });
  it('it accepts 2 number as argument ', () => {
    expect(() => sum(3)).throw()
  });

  it('the 2 argument should be number', () => {
    // expect(() => sum('a', 'b')).throw()
    expect(() => sum('a', 7)).throw()
  });
});
