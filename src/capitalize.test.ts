import { test, expect } from "@jest/globals";

test("capitalize first character", () => {
  expect(utils.capitalize("hello world")).toBe("Hello world");

  expect(utils.capitalize("John Doe")).toBe("John doe");

  expect(utils.capitalize("This Is a Longer String")).toBe(
    "This is a longer string",
  );
});
