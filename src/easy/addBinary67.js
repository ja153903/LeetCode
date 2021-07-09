/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  a = a.split("");
  b = b.split("");

  const result = [];

  let ax = a.length - 1;
  let bx = b.length - 1;
  let carry = 0;

  while (ax >= 0 || bx >= 0) {
    // only need to iterate until one of them is empty
    let current = carry;

    if (ax >= 0) {
      current += a[ax] == "1" ? 1 : 0;
      ax--;
    }

    if (bx >= 0) {
      current += b[bx] == "1" ? 1 : 0;
      bx--;
    }

    result.push(current % 2);
    carry = Math.floor(current / 2);
  }

  if (carry) {
    result.push(carry);
  }

  return result.reverse().join("");
}
