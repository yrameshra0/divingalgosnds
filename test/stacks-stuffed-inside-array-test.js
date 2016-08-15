import { assert } from 'chai';
import newArrayStack from '../src/stacks-stuffed-inside-array';

describe('Storing multiple stacks inside same array', () => {

    it('Push into stacks by searching shifting other stacks front', () => {
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

        arrayStack.push(0, '03');
        arrayStack.push(1, '11');
        arrayStack.push(1, '12');
        arrayStack.push(2, '21');
        assert.equal(arrayStack.pop(2), '21');
        assert.equal(arrayStack.pop(1), '12');
        assert.equal(arrayStack.pop(1), '11');
        assert.equal(arrayStack.pop(0), '03');
    });

    it('Push into stacks by searching shifting other stacks at backside', () => {
        // Currently this is passing but
        let arrayStack = newArrayStack();

        arrayStack.push(0, '01');
        arrayStack.push(1, '11');
        arrayStack.push(1, '12');

        arrayStack.push(2, '21');
        arrayStack.push(2, '22');
        arrayStack.push(2, '23');

        assert.equal(arrayStack.pop(2), '23');
        assert.equal(arrayStack.pop(1), '12');
        assert.equal(arrayStack.pop(0), '01');

        arrayStack.push(0, '01');
        arrayStack.push(1, '12');
        arrayStack.push(2, '23');

        assert.equal(arrayStack.pop(2), '23');
        assert.equal(arrayStack.pop(1), '12');
        assert.equal(arrayStack.pop(0), '01');
    });

    it('Throws error when no space in stack', () => {
        // Currently this is passing but
        let arrayStack = newArrayStack();

        arrayStack.push(0, '01');
        arrayStack.push(0, '02');
        arrayStack.push(1, '11');
        arrayStack.push(1, '12');

        arrayStack.push(2, '21');
        arrayStack.push(2, '22');


        assert.throws(() => {
            arrayStack.push(0, '03');
        }, Error, 'No space in stack for storage');
    });

    it('Peeks into stack', () => {
        let arrayStack = newArrayStack();

        arrayStack.push(0, '01');
        arrayStack.push(0, '02');
        arrayStack.push(1, '11');
        arrayStack.push(1, '12');

        assert.equal(arrayStack.peek(0), '02');
        assert.equal(arrayStack.peek(1), '12');
    })
});