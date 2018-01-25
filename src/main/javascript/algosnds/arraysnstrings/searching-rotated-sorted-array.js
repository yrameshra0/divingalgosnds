module.exports = function searchRotated(array, elemToSearch) {
  const low = 0;
  const high = array.length - 1;
  const mid = parseInt((low + high) / 2);
  const firstElem = array[low];
  const lastElem = array[high];
  const midElem = array[mid];

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

    const mid = parseInt((low + high) / 2);
    const midElem = array[mid];

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
