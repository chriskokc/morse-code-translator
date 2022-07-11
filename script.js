// create an obj to store morse code for each letter
const morseCode = {
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

// select DOM objects
const userInput = document.querySelector("#translator__input-field");
const outputText = document.querySelector(".result-text");

// functions declaration

const handleUserInput = (event) => {
    const inputText = event.target.value.toUpperCase();
    const outputStr = translateToMorseCode(inputText);
    return outputStr;
};

// do translation
const translateToMorseCode = (englishSentence) => {
    const englishWordsArr = englishSentence.split(" ");
    const translatedEnglishWordsArr = englishWordsArr.map((word) => {
        let translatedWord = "";
        for (let i = 0; i < word.length; i++) {
            if (Object.keys(morseCode).includes(word[i])) {
                translatedWord += `${morseCode[word[i]]} `;
            }
        }
        return translatedWord;
    });
    return translatedEnglishWordsArr.join("");
};

// return an ouput


// attach event listener
userInput.addEventListener("input", handleUserInput);


