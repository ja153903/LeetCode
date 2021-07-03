/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  // Read the string from the end to the start
  // If the current value is greater than the previous value in the stack, then increase the totalvalue
  // If the current value is less than the previous value on the stack, then decrease the total value
  const symbolToValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let totalValue = 0;
  const stack = [];

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = symbolToValue[s[i]];
    const topStackValue = !stack.length
      ? currentValue
      : symbolToValue[stack[stack.length - 1]];

    if (currentValue >= topStackValue) {
      totalValue += currentValue;
    } else if (currentValue < topStackValue) {
      totalValue -= currentValue;
    }

    stack.push(s[i]);
  }

  return totalValue;
};

export default romanToInt;
