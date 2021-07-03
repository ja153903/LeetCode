/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  let result = "";

  const minLength = Math.min(...strs.map((str) => str.length));

  for (let i = 0; i < minLength; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (char !== strs[j][i]) {
        return result;
      }
    }

    result += char;
  }

  return result;
};

export default longestCommonPrefix;
