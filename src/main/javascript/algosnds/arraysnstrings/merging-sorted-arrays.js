module.exports = function mergeSortedArrays(first, second) {
  let lastIndexOfFirstArray =
      first.findIndex(elem => {
        return elem === undefined;
      }) - 1,
    lastIndexOfSecondArray = second.length - 1,
    totalLength = first.length - 1;

  while (totalLength > 0) {
    let elemA = first[lastIndexOfFirstArray],
      elemB = second[lastIndexOfSecondArray];
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
