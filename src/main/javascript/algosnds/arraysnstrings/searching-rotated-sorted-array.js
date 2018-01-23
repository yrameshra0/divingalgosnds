module.exports = function searchRotated(array, elemToSearch) {
  let low = 0;
  let high = array.length - 1;
  let mid = parseInt((low + high) / 2);
  let firstElem = array[low];
  let lastElem = array[high];
  let midElem = array[mid];

  // Indicating left side rotation and element presence in left side
  if (firstElem > midElem && elemToSearch < midElem) return binarySearch(array, low, mid, elemToSearch);

  // Indicating right side rotation and element presence in right side
  if (lastElem < midElem && elemToSearch < midElem) return binarySearch(array, mid + 1, high, elemToSearch);

  // Indicating duplications in array
  if (firstElem === midElem && midElem === lastElem) return linearSearch(array, elemToSearch);

  // Indicating that, we have hit actual rotation point
  if (elemToSearch < midElem) return binarySearch(array, low, mid, elemToSearch);
  else return binarySearch(array, mid + 1, high, elemToSearch);

  function binarySearch(array, low, high, elemToSearch) {
    if (low > high) return false;

    let mid = parseInt((low + high) / 2);
    let midElem = array[mid];

    if (elemToSearch === midElem) return true;

    if (elemToSearch < midElem) return binarySearch(array, low, mid, elemToSearch);
    else return binarySearch(array, mid + 1, high, elemToSearch);
  }

  function linearSearch(array, elemToSearch) {
    return array.some(arrayElem => {
      if (arrayElem === elemToSearch) return true;
    });
  }
};
