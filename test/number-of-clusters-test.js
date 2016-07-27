import { assert } from 'chai';
import fetchClusters from '../src/number-of-clusters';

describe('Total number of clusters of elements', () => {
    it('Calculates clusters inside a 2D Matrix', () => {
        let mappedClusters = [
            [1, 0, 1, 0, 1],
            [1, 1, 0, 0, 0],
            [0, 1, 0, 1, 1]
        ];
        assert.equal(fetchClusters(mappedClusters), 3);
    });
});