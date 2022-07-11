import { morseCode } from "./script.js";

// do translation
export const translateToMorseCode = (englishSentence) => {
    const englishWordsArr = englishSentence.split(" ");
    const translatedEnglishWordsArr = englishWordsArr.map((word) => {
        let translatedWord = "";
        for (let i = 0; i < word.length; i++) {
            if (Object.keys(morseCode).includes(word[i])) {
                translatedWord += `${morseCode[word[i]]} `;
            }
        }
        console.log(translatedWord);
        return translatedWord;
    });
    return translatedEnglishWordsArr.join("");
};