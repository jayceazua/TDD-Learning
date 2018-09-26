const chai = require('chai');
const expect = chai.expect;

const { area, perimeter, areaCircle } = require('../functions');


it('Should be 4', () => {
  const four = 2 + 2;
  expect(four).to.equal(4);
});

// Area should return the area of a rectangle.
it('Should return the area of a rectangle', () => {
    expect(area(10, 8)).to.equal(80)
});
// Perimeter should return the perimeter of a rectangle.
it('Should return the perimeter of a rectangle', () => {
    expect(perimeter(10, 8)).to.equal(36)
});
// Should return the area of a circle with radius.
it('Should return the area of a circle', () => {
    expect(areaCircle(10)).to.equal(314.16)
});
