const { assert } = require('chai');
const { describe, it } = require('mocha');
const newLinkedList = require('../../../../main/javascript/algosnds/lists/linked-list-kth-elem-from-last');

describe('Gives kth element from last from linked list', () => {
  const linkedList = newLinkedList([10, 5, 3, 1, 2, 8]);

  it('kth element from recursive algorithm', () => {
    linkedList.recurKElem(4);

    assert.equal(linkedList.getKThElem().data, 1);
  });

  it('kth element from iterative algorithm', () => {
    linkedList.iterateKElem(2);

    assert.equal(linkedList.getKThElem().data, 5);
  });
});
