module.exports = function waterCollected(towers) {
  let totalWater = 0;

  function findBoundaries(direction, index, max) {
    if (towers[index] === undefined) return max;

    if (towers[index] > max) return findBoundaries(direction, index + direction, towers[index]);

    return findBoundaries(direction, index + direction, max);
  }

  towers.forEach((elem, index) => {
    const leftOfElem = findBoundaries(-1, index, elem);
    const rightOfElem = findBoundaries(1, index, elem);

    if (leftOfElem > elem && elem < rightOfElem) totalWater += Math.min(leftOfElem, rightOfElem) - elem;
  });

  return totalWater;
};
