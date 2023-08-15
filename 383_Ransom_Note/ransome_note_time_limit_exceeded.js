/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  let ransomNoteMap = createCharMap(ransomNote);
  let magazineMap = createCharMap(magazine);

  for (const key of ransomNoteMap.keys()) {
    if (!magazineMap.get(key)) {
      return false;
    }
    if (ransomNoteMap.get(key) > magazineMap.get(key)) {
      return false;
    }
  }
  return true;
};

const createCharMap = (strings) => {
  let charMap = new Map();
  for (letter of strings) {
    let count = 0;
    for (let i = 0; i < strings.length; i++) {
      if (strings[i] === letter) {
        count++;
      }
    }
    charMap.set(letter, count);
  }
  return charMap;
};
