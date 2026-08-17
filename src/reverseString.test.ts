import { describe, expect, test } from "@jest/globals";
import utils from ".";

describe("reverseString", () => {
  test("reverse hello world to dlrow olleh", () => {
    expect(utils.reverseString("hello world")).toBe("dlrow olleh");
  });

  test("reverse dlrow olleh to hello world", () => {
    expect(utils.reverseString("dlrow olleh")).toBe("hello world");
  });
});
