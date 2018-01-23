/** ----------------------------------------------------------------------------------------------

Minimum length sub-array of an unsorted array sorting which results in complete sorted array

# Algorithm

## 1) From beginning of the array, move to element in array up to which elements are sorted.
		Where the sorting breaks assign startIndex = sort index

## 2) From end of the array, move to element in array up to which elemnets are sorted.
		Where the sorting breaks assign endIndex = sort index

## 3) Find minimum and maximum elements in the sub array from startIndex -> endIndex

## 4) Search the sorted array from 0 till startIndex to find index at which minimum element will
		be in the sorted array, say minIndex

## 5) Search the sorted array from endIndex till end to find index at which maximum element will
		be in the sorted array, say maxIndex

## 6) Resultant sub array, i.e. from minIndex -> maxIndex is the required minimum length sub-array

---------------------------------------------------------------------------------------------- **/

module.exports = function findMinSubArray(array) {
  function findStartIndex(array) {
    for (let i = 1; i < array.length; i++) if (array[i - 1] > array[i]) return i - 1;
  }

  function findEndIndex(array) {
    for (let i = array.length; i >= 0; i--) if (array[i] < array[i - 1]) return i;
  }

  function findMinElemInSubArray(startIndex, endIndex, array) {
    let minElem = array[startIndex];
    for (let i = startIndex; i < endIndex; i++) if (array[i] < minElem) minElem = array[i];

    return minElem;
  }

  function findMaxElemInSubArray(startIndex, endIndex, array) {
    let maxElem = array[startIndex];
    for (let i = startIndex; i < endIndex; i++) if (array[i] > maxElem) maxElem = array[i];

    return maxElem;
  }

  function searchMinElemLocationInSortedArray(minElem, startIndex, array) {
    for (let i = 0; i < startIndex; i++) if (minElem > array[i] && minElem < array[i + 1]) return i + 1;
  }

  function searchMaxElemLocationInSortedArray(maxElem, endIndex, array) {
    for (let i = array.length - 1; i > endIndex; i--) if (maxElem < array[i] && maxElem > array[i - 1]) return i;
  }

  let startIndex = findStartIndex(array);
  let endIndex = findEndIndex(array);
  let minElem = findMinElemInSubArray(startIndex, endIndex, array);
  let maxElem = findMaxElemInSubArray(startIndex, endIndex, array);
  let minIndex = searchMinElemLocationInSortedArray(minElem, startIndex, array);
  let maxIndex = searchMaxElemLocationInSortedArray(maxElem, endIndex, array);

  return array.slice(minIndex, maxIndex);
};
