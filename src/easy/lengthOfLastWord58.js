/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
  let length = 0;
  s = s.trim();

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === " ") {
      return length;
    }
    length++;
  }

  return length;
}
