"use strict";

const translate = (word) => {
  const lowerCaseWord = word.toLowerCase();
  let characterArray = lowerCaseWord.split("");
  if (
    characterArray[0] === "a" ||
    characterArray[0] === "e" ||
    characterArray[0] === "i" ||
    characterArray[0] === "o" ||
    characterArray[0] === "u"
  ) {
    return `${lowerCaseWord}way`;
  } else {
    while (
      characterArray.some((character) => {
        return (
          character !== "a" &&
          character !== "e" &&
          character !== "i" &&
          character !== "o" &&
          character !== "u"
        );
      })
    ) {
      let firstConsonant = characterArray.findIndex((character) => {
        return (
          character !== "a" &&
          character !== "e" &&
          character !== "i" &&
          character !== "o" &&
          character !== "u"
        );
      });

      characterArray.splice(firstConsonant, 1);
      characterArray.unshift(firstConsonant, 1);
    }
  }
  //   return `${createNewWord}ay`;
};

// let createNewWord = (i) => {
//   for (i = 0; i < characterArray.length; i++) {
//     let newWord = "";
//     newWord += characterArray[i];
//     return `${newWord}`;
//   }
// };

module.exports = translate;
