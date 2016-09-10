import { assert } from 'chai';
import allUniqueChars from '../../main/js/all-unique-chars-in-string';

describe('All unique characters in string', () => {
    it('verify all unique charcters', () => {
        assert.isTrue(allUniqueChars('abc'));
        assert.isFalse(allUniqueChars('abca'));
    });
});