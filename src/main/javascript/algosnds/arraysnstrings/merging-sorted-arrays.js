module.exports = function mergeSortedArrays(first, second) {
  let lastIndexOfFirstArray =
    first.findIndex(elem => {
      return elem === undefined;
    }) - 1;
  let lastIndexOfSecondArray = second.length - 1;
  let totalLength = first.length - 1;

  while (totalLength > 0) {
    const elemA = first[lastIndexOfFirstArray];
    const elemB = second[lastIndexOfSecondArray];
    if (elemA > elemB) {
      first[totalLength] = elemA;
      lastIndexOfFirstArray--;
    } else {
      first[totalLength] = elemB;
      lastIndexOfSecondArray--;
    }

    totalLength--;
  }

  return first;
};
