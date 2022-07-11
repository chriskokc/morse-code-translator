import { expect, it } from "@jest/globals";
import { translateToMorseCode } from "./translation";

it("should translate the word morse to -- --- .-. ... .", () => {
    const result = translateToMorseCode("morse");
    expect(result).toBe("-- --- .-. ... .");
});

it("should translate the word code to -.-. --- -.. .", () => {
    const result = translateToMorseCode("code");
    expect(result).toBe("-.-. --- -.. .");
});

it("should translate the word translator to - .-. .- -. ... .-.. .- - --- .-.", () => {
    const result = translateToMorseCode("translator");
    expect(result).toBe("- .-. .- -. ... .-.. .- - --- .-.");
})

it("should translate the sentence 'this is an example' to - .... .. ... .. ... .- -. . -..- .- -- .--. .-.. .", () => {
    const result = translateToMorseCode("This is an example");
    expect(result).toBe("- .... .. ... .. ... .- -. . -..- .- -- .--. .-.. .");
})