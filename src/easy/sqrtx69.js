/**
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = Number.MAX_VALUE;

  while (true) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      left = mid + 1;
    }
  }
}
