// Step 1, get and format data to an input array
const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "input.txt");
let input = fs.readFileSync(pathToFile, "utf-8");

const formatData = (input) => input.split("\n");
let inputArray = formatData(input);

const partOneInstructions = (currentPosition, direction, amount) => {
  switch (direction) {
    case "up":
      currentPosition["y"] -= amount;
      break;
    case "down":
      currentPosition["y"] += amount;
      break;
    case "forward":
      currentPosition["x"] += amount;
      break;
  }
  return currentPosition;
};

const partTwoInstructions = (currentPosition, direction, amount) => {
  switch (direction) {
    case "up":
      currentPosition["z"] -= amount;
      break;
    case "down":
      currentPosition["z"] += amount;
      break;
    case "forward":
      currentPosition["x"] += amount;
      currentPosition["y"] =
        currentPosition["y"] + currentPosition["z"] * amount;
      break;
  }
  return currentPosition;
};

const calculatePosition = (inputArray, callback) => {
  let currentPosition = {
    x: 0,
    y: 0,
    z: 0,
  };

  const pattern = /(forward|up|down) (\d+)/i;

  inputArray.map((command) => {
    let commandMatch = pattern.exec(command);
    let [, direction, amount] = commandMatch;
    amount = parseInt(amount);
    currentPosittion = callback(currentPosition, direction, amount);
  });

  return currentPosition;
};

const multiplyPosition = (finalPosition) =>
  finalPosition["x"] * finalPosition["y"];

// Part One
const finalPositionPartOne = calculatePosition(inputArray, partOneInstructions);
console.log(
  `The final position in PART ONE is ${finalPositionPartOne["y"]} height and ${finalPositionPartOne["x"]} forward.`
);

console.log(
  `Multiplied value in PART ONE is: ${multiplyPosition(finalPositionPartOne)}.`
);

// Part Two
const finalPositionPartTwo = calculatePosition(inputArray, partTwoInstructions);

console.log(
  `The final position for PART TWO IS ${finalPositionPartTwo["y"]} height and ${finalPositionPartTwo["x"]} forward.`
);
console.log(
  `Multiplied value in PART TWO is: ${multiplyPosition(finalPositionPartTwo)}.
  }`
);

// export for testing
module.exports = {
  calculatePosition,
  partOneInstructions,
  partTwoInstructions,
  multiplyPosition,
};
