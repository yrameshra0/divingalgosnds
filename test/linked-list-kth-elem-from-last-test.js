import { assert } from 'chai';
import newLinkedList from '../src/linked-list-kth-elem-from-last';

describe('Gives kth element from last from linked list', () => {

    let linkedList = newLinkedList([10, 5, 3, 1, 2, 8]);

    it('kth element from recursive algo', () => {
        linkedList.recurKElem(4)

        assert.equal(linkedList.getKThElem().data, 1);
    });

    it('kth element from iterative algo', () => {
        linkedList.iterKElem(2)

        assert.equal(linkedList.getKThElem().data, 5);
    });
})