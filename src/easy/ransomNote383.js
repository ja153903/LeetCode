/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const map = new Map();
  magazine.split("").forEach((letter) => {
    if (map.has(letter)) {
      map.set(letter, map.get(letter) + 1);
    } else {
      map.set(letter, 1);
    }
  });

  for (const letter of ransomNote) {
    if (!map.has(letter)) {
      return false;
    }

    const lettersRemaining = map.get(letter);

    if (lettersRemaining === 0) {
      return false;
    }

    map.set(letter, lettersRemaining - 1);
  }

  return true;
}
