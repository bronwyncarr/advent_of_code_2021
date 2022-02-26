const {
  calculatePosition,
  partOneInstructions,
  partTwoInstructions,
  multiplyPosition,
} = require("./day_2.js");

const mockData = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

let mockStartPosition = { x: 0, y: 0, z: 0 };

beforeEach(() => {
  mockStartPosition = { x: 0, y: 0, z: 0 };
});

describe("part one instructions", () => {
  it("will change the position ", () => {
    const mockPartOneResultPosition = { x: 5, y: 0, z: 0 };

    const currentPosition = partOneInstructions(
      mockStartPosition,
      "forward",
      5
    );

    expect(currentPosition).toEqual(mockPartOneResultPosition);
  });
});

describe("part two instructions", () => {
  it("will change the position ", () => {
    const mockPartTwoResultPosition = { x: 5, y: 0, z: 0 };

    const currentPosition = partOneInstructions(
      mockStartPosition,
      "forward",
      5
    );

    expect(currentPosition).toEqual(mockPartTwoResultPosition);
  });
});

describe("calculate position", () => {
  it("returns the position with part one instructions", () => {
    const mockPartOneResultPosition = { x: 15, y: 10, z: 0 };

    const currentPosition = calculatePosition(mockData, partOneInstructions);

    expect(currentPosition).toEqual(mockPartOneResultPosition);
  });

  it("returns the position with part one instructions", () => {
    const mockPartTwoResultPosition = { x: 15, y: 60, z: 10 };

    const currentPosition = calculatePosition(mockData, partTwoInstructions);

    expect(currentPosition).toEqual(mockPartTwoResultPosition);
  });
});

// describe("multiply position", () => {
//   it("returns the multiplication of the x and y axis position", () => {
//     const currentPosition = calculatePosition(mockData);
//     const multiplyPositionResult = multiplyPosition(currentPosition);

//     expect(multiplyPositionResult).toBe(150);
//   });
// });
