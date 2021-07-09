/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  digits = digits.reverse();
  let carry = 0;
  for (let i = 0; i < digits.length; i++) {
    if (i === 0) {
      digits[i] += 1;
    }

    const currentValue = carry + digits[i];
    digits[i] = currentValue % 10;
    carry = Math.floor(currentValue / 10);
  }

  if (carry) {
    digits.push(carry);
  }

  return digits.reverse();
}
