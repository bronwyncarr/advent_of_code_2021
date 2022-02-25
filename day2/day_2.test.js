const { calculatePosition, multiplyPosition } = require("./day_2.js");
const mockData = [
  "forward 5",
  "down 5",
  "forward 8",
  "up 3",
  "down 8",
  "forward 2",
];

const mockResultPosition = { x: 15, y: 10 };

describe("calculate position", () => {
  it("returns the x and y axis position", () => {
    const currentPosition = calculatePosition(mockData);

    expect(currentPosition).toEqual(mockResultPosition);
  });
});

describe("multiply position", () => {
  it("returns the multiplication of the x and y axis position", () => {
    const currentPosition = calculatePosition(mockData);
    const multiplyPositionResult = multiplyPosition(currentPosition);

    expect(multiplyPositionResult).toBe(150);
  });
});
