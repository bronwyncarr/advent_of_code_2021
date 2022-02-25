// Step 1, get and format data to an input array
const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "input.txt");
let input = fs.readFileSync(pathToFile, "utf-8");

const formatData = (input) => input.split("\n");
let inputArray = formatData(input);

// Part One
const calculatePosition = (inputArray) => {
  let currentPosition = {
    x: 0,
    y: 0,
  };

  const pattern = /(forward|up|down) (\d+)/i;

  inputArray.map((command) => {
    let commandMatch = pattern.exec(command);
    let [, direction, amount] = commandMatch;
    amount = parseInt(amount);

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
  });

  return currentPosition;
};

const finalPosition = calculatePosition(inputArray);
console.log(
  `The final position is ${finalPosition["y"]} height and ${finalPosition["x"]} forward`
);

const multiplyPosition = (finalPosition) =>
  finalPosition["x"] * finalPosition["y"];

console.log(`multiplied value is: ${multiplyPosition(finalPosition)}`);

// export for testing
module.exports = {
  calculatePosition,
  multiplyPosition,
};
