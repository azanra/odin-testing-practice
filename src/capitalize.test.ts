import { test, expect } from "@jest/globals";

test("capitalize first character", () => {
  expect(utils.capitalize("hello world")).toBe("Hello world");
});
