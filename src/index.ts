const LOWERCASE_DEC_ENCODING_START_RANGE = 97;
const ALPHABET_AMOUNT = 26;

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

  const getArrayOfAlphabet = () =>
    [...Array(ALPHABET_AMOUNT).keys()].map((item) =>
      String.fromCharCode(item + LOWERCASE_DEC_ENCODING_START_RANGE),
    );

  const caesarCipher = (inputString: string, shiftFactor: number) => {
    const caesarShipTable = new Map<string, string>();
    const plainTextAlphabet = getArrayOfAlphabet();

    const currentShiftFactor =
      shiftFactor > ALPHABET_AMOUNT
        ? shiftFactor % ALPHABET_AMOUNT
        : shiftFactor;

    const cipherTextAlphabet = [
      ...plainTextAlphabet.slice(currentShiftFactor),
      ...plainTextAlphabet.slice(0, currentShiftFactor),
    ];

    plainTextAlphabet.forEach((alphabet, index) => {
      caesarShipTable.set(alphabet, cipherTextAlphabet[index] ?? "");
    });

    const cipheredText = inputString
      .split("")
      .map((text) => {
        const caesarText = caesarShipTable.get(text.toLowerCase());
        if (!caesarText) return text;

        return text === text.toUpperCase()
          ? caesarText.toUpperCase()
          : caesarText;
      })
      .join("");

    return cipheredText;
  };

  return { capitalize, reverseString, calculator, caesarCipher };
})();

export default utils;
