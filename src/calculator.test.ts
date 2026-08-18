import { describe, expect, test } from "@jest/globals";
import utils from ".";

describe("calculator", () => {
  describe("addition", () => {
    test("addition 1 + 2 to be 3", () => {
      expect(utils.calculator.add(1, 2)).toBe(3);
    });

    test("addition 0.1 + 0.2 to be 0.3", () => {
      expect(utils.calculator.add(0.1, 0.2)).toBe(0.3);
    });

    test("addition -0.69 to 84.21 to be 83.25", () => {
      expect(utils.calculator.add(-0.69, 84.21)).toBe(83.52);
    });
  });

  describe("subtraction", () => {
    test("subtraction 14 - 28 to be 42", () => {
      expect(utils.calculator.subtract(14, 28)).toBe(-14);
    });

    test("subtraction -0.1 - 0.2 to be -0.3", () => {
      expect(utils.calculator.subtract(-0.1, 0.2)).toBe(-0.3);
    });

    test("subtraction -0.19 - 82.9 to be -83.09", () => {
      expect(utils.calculator.subtract(-0.19, 82.9)).toBe(-83.09);
    });
  });
});
