import { assert } from 'chai';
import nextHighestNo from '../../../main/js/general/next-highest-number';

describe('Next Highest Number for given number', () => {
    it('Returns next highest number', () => {
        assert.equal(nextHighestNo(32841), 34128);
    });

    it('Returns None if no next highest number', () => {
        assert.equal(nextHighestNo(4321), 'None');
    });
});