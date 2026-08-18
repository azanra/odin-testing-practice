const utils = (() => {
  const capitalize = (input: string) => {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  };

  const reverseString = (input: string) => {
    return input.split("").reverse().join("");
  };

  const calculator = {
    add: function (firstNumber: number, secondNumber: number) {
      return parseFloat((firstNumber + secondNumber).toFixed(12));
    },
    subtract: function (firstNumber: number, secondNumber: number) {
      return parseFloat((firstNumber - secondNumber).toFixed(12));
    },
    division: function (firstNumber: number, secondNumber: number) {
      return parseFloat((firstNumber / secondNumber).toFixed(10));
    },
  };

  return { capitalize, reverseString, calculator };
})();

export default utils;
