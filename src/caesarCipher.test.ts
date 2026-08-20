import { describe, expect, test } from "@jest/globals";
import utils from ".";

describe("caesarCipher", () => {
  test("xyz with shift 3 return abc", () => {
    expect(utils.caesarCipher("xyz", 3)).toBe("abc");
  });

  test("HeLLo with shift 3 return KhOOr", () => {
    expect(utils.caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });

  test("Hello, World! with shift 3 return Khoor, Zruog!", () => {
    expect(utils.caesarCipher("Hello, World!")).toBe("Khoor, Zruog!");
  });
});
