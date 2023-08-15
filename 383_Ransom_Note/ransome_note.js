/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  let piercedMagazine = magazine;
  for (const ransomLetter of ransomNote) {
    for (const magazineLetter of magazine) {
      if (magazineLetter === ransomLetter) {
        piercedMagazine = piercedMagazine.replace(magazineLetter, "");
        break;
      }
    }
  }

  if (magazine.length === piercedMagazine.length + ransomNote.length) {
    return true;
  } else {
    return false;
  }
};

canConstruct("aab", "baa");
