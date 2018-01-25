const { assert } = require('chai');
const { describe, it } = require('mocha');
const fetchClusters = require('../../../../main/javascript/algosnds/graphs/number-of-clusters');

describe('Total number of clusters of elements', () => {
  it('Calculates clusters inside a 2D Matrix', () => {
    const mappedClusters = [[1, 0, 1, 0, 1], [1, 1, 0, 0, 0], [0, 1, 0, 1, 1]];
    assert.equal(fetchClusters(mappedClusters), 3);
  });
});
