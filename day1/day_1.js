// Step 1, get and format data to an input array
const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "input.txt");
let input = fs.readFileSync(pathToFile, "utf-8");

const formatData = (input) =>
  input.split("\n").map((item) => parseInt(item, 10));
let inputArray = formatData(input);

// Part 1
// Calculate how many times the depth increases
const calculateDepthIncreases = (inputArray) => {
  let counter = 0;
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > inputArray[i - 1]) {
      counter += 1;
    }
  }
  return counter;
};

const numberOfIncreases = calculateDepthIncreases(inputArray);
console.log(
  `The number of times the depth increased is: ${numberOfIncreases}.`
);

// Part 2
// calculate how many times the sum of 3 subsequent depths increases
const calculateThreeDepthIncreases = (inputArray) => {
  let counter = 0;
  for (let i = 3; i < inputArray.length; i++) {
    let firstValue = inputArray[i - 3];
    let secondValue = inputArray[i];
    if (secondValue > firstValue) {
      counter += 1;
    }
  }
  return counter;
};

const numberOfThreeIncreases = calculateThreeDepthIncreases(inputArray);
console.log(
  `The number of times three subsequent depths increased is: ${numberOfThreeIncreases}.`
);

// export for testing
module.exports = {
  calculateDepthIncreases,
  calculateThreeDepthIncreases,
};
