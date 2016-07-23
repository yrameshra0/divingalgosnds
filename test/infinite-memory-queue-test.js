import { assert } from 'chai';
import createQueue from '../src/infinite-memory-queue';

describe('Queue operations', () => {
    it('Add items to queue', () => {
        let queue = createQueue();
        queue.enqueue(19);
        queue.enqueue(20);
        assert.equal(queue.dequeue(), 19);
        assert.equal(queue.dequeue(), 20);
    });

    it('Remove items from queue', () => {
        let queue = createQueue();
        queue.enqueue(19);
        assert.equal(queue.dequeue(), 19);
        assert.equal(queue.dequeue(), undefined);
    });

    it('Peek inside queue', () => {
        let queue = createQueue();

        assert.equal(queue.peek(), undefined);
        queue.enqueue(19);
        queue.enqueue(20);
        assert.equal(queue.peek(), 20);
    });
});