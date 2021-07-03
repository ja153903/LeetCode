/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const isNegative = x < 0;
  x = Math.abs(x);
  let current = 0;

  while (x > 0) {
    current = current * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  if (
    (isNegative && current > Math.pow(2, 31)) ||
    (!isNegative && current > Math.pow(2, 31) - 1)
  ) {
    return 0;
  }

  return isNegative ? -current : current;
};

export default reverse;
