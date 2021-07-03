/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let copy = x;
  let current = 0;

  while (copy > 0) {
    current = current * 10 + (copy % 10);
    copy = Math.floor(copy / 10);
  }

  return current === x;
};

export default isPalindrome;
