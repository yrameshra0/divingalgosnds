import { assert } from 'chai';
import searchRotated from '../src/searching-rotated-sorted-array';

describe('Searching rotated array', () => {
    it('Rotated at right', () => {
        assert.isTrue(searchRotated([10, 15, 20, 0, 5], 5));
    });

    it('Rotated at left', () => {
        assert.isTrue(searchRotated([50, 5, 20, 25, 30], 5));
    });

    it('Rotated at middle', () => {
        assert.isTrue(searchRotated([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5));
    });

    it('Rotated with duplicates', () => {
        assert.isTrue(searchRotated([2, 2, 2, 3, 4, 2], 4));
    });

    it('Unsuccessful searching', () => {
        assert.isFalse(searchRotated([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 100));
    });
})