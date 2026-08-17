const utils = (() => {
  const capitalize = (input: string) => {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  };

  const reverseString = (input: string) => {
    return input.split("").reverse().join("");
  };

  return { capitalize, reverseString };
})();

export default utils;
