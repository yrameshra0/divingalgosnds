const { assert } = require('chai');
const { describe, it } = require('mocha');
const findMinSubArray = require('../../../../main/javascript/algosnds/arraysnstrings/min-unsorted-sub-array');

describe('Minimum Sub Array Sort Problem', () => {
  it('Returns minimum sub-array for an given array ', () => {
    const arrayToBeSorted = [1, 4, 7, 3, 10, 48, 17, 26, 30, 45, 50, 62];

    assert.deepEqual(findMinSubArray(arrayToBeSorted), [4, 7, 3, 10, 48, 17, 26, 30, 45]);
  });
});
