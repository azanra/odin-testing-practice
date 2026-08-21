const utils = (() => {
  const capitalize = (input: string) => {
    return input?.[0]?.toUpperCase() + input.slice(1).toLowerCase();
  };

  const reverseString = (input: string) => {
    return input.split("").reverse().join("");
  };

  const toFixedPoint = (result: number, fixedPoint = 12) =>
    parseFloat(result.toFixed(fixedPoint));

  const calculator = {
    add: function (firstNumber: number, secondNumber: number) {
      return toFixedPoint(firstNumber + secondNumber);
    },
    subtract: function (firstNumber: number, secondNumber: number) {
      return toFixedPoint(firstNumber - secondNumber);
    },
    division: function (firstNumber: number, secondNumber: number) {
      return toFixedPoint(firstNumber / secondNumber, 10);
    },
    multiply: function (firstNumber: number, secondNumber: number) {
      return toFixedPoint(firstNumber * secondNumber);
    },
  };

  return { capitalize, reverseString, calculator };
})();

export default utils;
