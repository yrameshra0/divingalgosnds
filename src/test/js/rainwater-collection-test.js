import { assert } from 'chai';
import waterCollected from '../../main/js/rainwater-collection';

describe('Rainwater collection problem', () => {
    it('Collect max water between given towers', () => {
        assert.equal(waterCollected([1, 2, 5, 1, 1, 7, 4]), 8);
        assert.equal(waterCollected([1, 5, 2, 3, 1, 7, 2, 4]), 11);
    });
});