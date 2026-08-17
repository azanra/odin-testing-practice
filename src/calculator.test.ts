import { describe, expect, test } from "@jest/globals";
import utils from ".";

describe("calculator", () => {
  describe("addition", () => {
    test("addition 1 + 2 to be 3", () => {
      expect(utils.calculation.add(1, 2)).toBe(3);
    });

    test("addition 0.1 + 0.2 to be 0.3", () => {
      expect(utils.calculation.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test("addition -0.69 to 84.21 to be 83.25", () => {
      expect(utils.calculatiion.add(-0.69, 84.21)).toBe(83.25);
    });
  });
});
