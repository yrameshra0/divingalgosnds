import { assert } from 'chai';
import nextHighestNo from '../src/next-highest-number';

describe('Next Highest Number for given number', () => {
    it('should return next highest number', () => {
        assert.equal(nextHighestNo(32841), 34128);
    });

    it('should return None if no next highest number', () => {
        assert.equal(nextHighestNo(4321), 'None');
    });
});