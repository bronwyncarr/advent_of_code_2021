const fs = require("fs");
const path = require("path");

const pathToFile = path.join(__dirname, "input.txt");
let input = fs.readFileSync(pathToFile, "utf-8");

const formatData = (input) => input.split("\n");
let inputArray = formatData(input);

// turns puzzle infut into an array of 12 nested elements representing each vertical line
const arrayFlipper = (inputArray) => {
  // [[], [], [], [], [], [], [], [], [], [], [], []];
  const resultArray = new Array(inputArray[0].length)
    .fill(undefined)
    .map(() => new Array(0));

  const seperatedNumbers = inputArray.map((num) => num.split(""));

  seperatedNumbers.forEach((element) => {
    element.forEach((num, index) => {
      resultArray[index].push(num);
    });
  });

  return resultArray;
};

// calculates max occuring based on flipper array
const countMaxOccuring = (flippedArray) => {
  const occurances = flippedArray.map((element) => {
    const totalNumbers = element.length;
    const oneOccurances = element.filter((num) => num === "1").length;
    return oneOccurances > totalNumbers / 2 ? 1 : 0;
  });
  return occurances;
};

// calculates min occuring by flipping max occuring
const countMinOccuringBasedOnMax = (maxOccurances) =>
  maxOccurances.map((num) => (num === 1 ? 0 : 1));

const convertBinaryToDecimal = (array) => parseInt(array.join(""), 2);

const flippedArray = arrayFlipper(inputArray);

const maxOccurancesArray = countMaxOccuring(flippedArray);
const minOccurancesArray = countMinOccuringBasedOnMax(maxOccurancesArray);

const maxOccurances = convertBinaryToDecimal(maxOccurancesArray);
const minOccurances = convertBinaryToDecimal(minOccurancesArray);

console.log("adsf", maxOccurancesArray);
console.log("fgdsa", minOccurancesArray);

console.log(maxOccurances);
console.log(minOccurances);
console.log(maxOccurances * minOccurances);

module.exports = {
  arrayFlipper,
  countMaxOccuring,
  countMinOccuringBasedOnMax,
};
