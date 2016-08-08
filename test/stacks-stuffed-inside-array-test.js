import { assert } from 'chai';
import newArrayStack from '../src/stacks-stuffed-inside-array';

describe('Storing multiple stacks inside same array', () => {

    it('Push into stacks', () => {
        let arrayStack = newArrayStack();

        arrayStack.push(0, '01');
        arrayStack.push(1, '11');
        arrayStack.push(1, '12');
        arrayStack.push(2, '21');
        arrayStack.push(0, '01');
        arrayStack.push(0, '03');
        arrayStack.push(1, '13');

        assert.equal(arrayStack.pop(2), '21');
        assert.equal(arrayStack.pop(1), '13');
        assert.equal(arrayStack.pop(0), '03');
    });
});