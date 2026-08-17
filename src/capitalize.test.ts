import { test, expect, describe } from "@jest/globals";
import utils from ".";

describe("capitalizeUtils", () => {
  test("capitalize first character", () => {
    expect(utils.capitalize("hello world")).toBe("Hello world");
  });

  test("keep sentence capitalized", () => {
    expect(utils.capitalize("John Doe")).toBe("John doe");
  });

  test("capitalize title case sentence", () => {
    expect(utils.capitalize("This Is a Longer String")).toBe(
      "This is a longer string",
    );
  });
});
