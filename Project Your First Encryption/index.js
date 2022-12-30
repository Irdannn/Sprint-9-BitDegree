"use strict";

const letters = {
  "A": "Z",
  "B": "Y",
  "C": "X",
  "D": "W",
  "E": "V",
  "F": "U",
  "G": "T",
  "H": "S",
  "I": "R",
  "J": "Q",
  "K": "P",
  "L": "O",
  "M": "N",
  "N": "M",
  "O": "L",
  "P": "K",
  "Q": "J",
  "R": "I",
  "S": "H",
  "T": "G",
  "U": "F",
  "V": "E",
  "W": "D",
  "X": "C",
  "Y": "B",
  "Z": "A",
};

let uiArr = [];
let encryptedArray = [];

let userInput = prompt("please enter a word to convert it into code");
console.log(userInput);

if (userInput !== "" && /^[a-zA-Z]*$/.test(userInput)) {
  uiArr = userInput.toUpperCase().split(``);
  console.log(`This is your input as an array: ${uiArr}`);
  console.log(`This is the first letter of your input: ${userInput[0]}`)

  for (let i = 0; i < uiArr.length; i++) {
    encryptedArray.push(encryptor[uiArr[i]]);
  }
} else {
    console.log("Invalid input. Please refresh the page and try again!");
};

console.log(`This is your joined encrypted output: ${encryptedArray.join("")}`);