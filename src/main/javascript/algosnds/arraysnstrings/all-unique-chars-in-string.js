module.exports = function allUniqueChars(stringToCheck) {
  const BASE_CHAR_CODE = 'a'.charCodeAt(0);

  function bitwiseCharCheck(flag) {
    let notFound = true;
    stringToCheck.split('').forEach(char => {
      let charCode = char.charCodeAt(0);
      let charDiff = charCode - BASE_CHAR_CODE;
      let bitSet = 1 << charDiff;

      if (flag & bitSet) {
        notFound = false;
        return;
      }
      flag |= bitSet;
    });

    return notFound;
  }

  return bitwiseCharCheck(0);
};
