const { assert } = require('chai');
const { describe, it } = require('mocha');
const mergeSortedArrays = require('../../../../main/javascript/algosnds/arraysnstrings/merging-sorted-arrays');

describe('Merge sorted arrays', () => {
  it('Folding one array into another with sorted order', () => {
    let first = [1, 3, 5, 6, 9, 10, undefined, undefined, undefined, undefined];
    let second = [2, 4, 7, 8];

    mergeSortedArrays(first, second);

    assert.deepEqual(first, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
