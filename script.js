import { translateToMorseCode } from "./translation.js";

// create an obj to store morse code for each letter
export const morseCode = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--.."
}

let result = "";

// select DOM objects
const userInput = document.querySelector("#translator__input-field");
const outputText = document.querySelector(".result-text");
const resetBtn = document.querySelector("#reset-btn");

// functions declaration

const handleUserInput = (event) => {
    const inputText = event.target.value.toUpperCase();
    const outputStr = translateToMorseCode(inputText);
    result = outputStr;
    outputText.innerHTML = result;
};

const clear = () => {
    outputText.innerHTML = "There you go! Here is your translate: ";
};

// attach event listener
userInput.addEventListener("input", handleUserInput);
resetBtn.addEventListener("click", clear);


