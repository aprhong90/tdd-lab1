"use strict";

const translate = require("../src/translate");

describe("translate function", () => {
  test("word that starts with a vowel", () => {
    const result = translate("apple");
    expect(result).toBe("appleway");
  });
  test("word that strats with a vowel with capital letters are converted to lowercase", () => {
    const result = translate("ANyTimE");
    expect(result).toBe("anytimeway");
  });
  test("words that start with one consonant", () => {
    const result = translate("toilet");
    expect(result).toBe("tltoieay");
  });
});
