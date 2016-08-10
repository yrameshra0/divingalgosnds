import { assert } from 'chai';
import newArrayStack from '../src/stacks-stuffed-inside-array';

describe('Storing multiple stacks inside same array', () => {

    it('Push into stacks when next empty stack in array has to be searched', () => {
        let arrayStack = newArrayStack();

        arrayStack.push(0, '01');
        arrayStack.push(0, '02');
        arrayStack.push(1, '11');
        arrayStack.push(1, '12');
        arrayStack.push(2, '21');
        arrayStack.push(0, '03');

        assert.equal(arrayStack.pop(2), '21');
        assert.equal(arrayStack.pop(1), '12');
        assert.equal(arrayStack.pop(1), '11');
        assert.equal(arrayStack.pop(0), '03');
    });

    it('Push into stacks when immediate next stack in array has space', () => {
        let arrayStack = newArrayStack();

        arrayStack.push(0, '01');
        arrayStack.push(0, '02');
        arrayStack.push(1, '11');
        arrayStack.push(2, '21');
        arrayStack.push(0, '03');

        assert.equal(arrayStack.pop(2), '21');
        assert.equal(arrayStack.pop(1), '11');
        assert.equal(arrayStack.pop(0), '03');
    });
});