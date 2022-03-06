const {
  arrayFlipper,
  countMaxOccuring,
  countMinOccuringBasedOnMax,
} = require("./day_3.js");

const mockData = [
  "00100",
  "11110",
  "10110",
  "10111",
  "10101",
  "01111",
  "00111",
  "11100",
  "10000",
  "11001",
  "00010",
  "01010",
];

const mockFlippedArrayFirstElement = [
  "0",
  "1",
  "1",
  "1",
  "1",
  "0",
  "0",
  "1",
  "1",
  "1",
  "0",
  "0",
];

// 🐐

describe("arrayFlipper", () => {
  it("returns an array with the length equal to the length of each element", () => {
    const flippedArray = arrayFlipper(mockData);
    expect(flippedArray.length).toEqual(5);
  });

  it("returns the first bit of eachelement as the first element", () => {
    const flippedArray = arrayFlipper(mockData);
    expect(flippedArray[0]).toEqual(mockFlippedArrayFirstElement);
  });
});

describe("countMaxOccuring", () => {
  it("returns an array of one element when passed the first element of a flipped array", () => {
    const result = countMaxOccuring([mockFlippedArrayFirstElement]);
    expect(result.length).toEqual(1);
  });

  it("returns an array of the bits that occured the most", () => {
    const result = countMaxOccuring([mockFlippedArrayFirstElement]);
    expect(result).toEqual([1]);
  });
});

describe("countMinOccuringBasedOnMax", () => {
  it("return the binary opposite of a number", () => {
    const result = countMinOccuringBasedOnMax([
      0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0,
    ]);
    expect(result).toEqual([1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1]);
  });
});
