const {
  calculateDepthIncreases,
  calculateThreeDepthIncreases,
} = require("./day_1.js");
const mockData = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

describe("calculateDepthIncreases", () => {
  it("returns the number of times a depth is greater than the previous depth", () => {
    const numberOfMockedIncreases = 7;

    const numberOfIncreases = calculateDepthIncreases(mockData);

    expect(numberOfIncreases).toBe(numberOfMockedIncreases);
  });
});

describe("calculateThreeDepthIncreases", () => {
  it("returns the number of times three subsquent depths are greater than the previous three depths", () => {
    const numberOfMockedIncreases = 5;

    const numberOfIncreases = calculateThreeDepthIncreases(mockData);

    expect(numberOfIncreases).toBe(numberOfMockedIncreases);
  });
});
