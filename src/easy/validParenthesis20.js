/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const stack = [];

  for (const c of s) {
    if (c === "[") {
      stack.push("]");
    } else if (c === "{") {
      stack.push("}");
    } else if (c === "(") {
      stack.push(")");
    } else if (!stack.length || stack.pop() !== c) {
      return false;
    }
  }

  return !stack.length;
};

export default isValid;
