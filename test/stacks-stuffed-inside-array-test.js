import { assert } from 'chai';
import newArrayStack from '../src/stacks-stuffed-inside-array';

describe('Storing multiple stacks inside same array', () => {

    it('Push into stacks', () => {
        let arrayStack = newArrayStack();

        arrayStack.push(0, 10);
        arrayStack.push(1, 11);
        arrayStack.push(2, 12);
        arrayStack.push(0, 20);

        assert.equal(arrayStack.pop(1), 11);
    });
});