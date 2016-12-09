import { assert } from 'chai';
import * as tree from '../../../../main/javascript/algosnds/trees/random-node';

describe('Tree implementation than can retrieve an any random node with equal probability', () => {
    it('Insert node into tree', () => {
        tree.insertInOrder(20);
        assert.equal(tree.find(20).data, 20);

        tree.insertInOrder(10);
        assert.equal(tree.find(20).data, 20);
        assert.equal(tree.find(10).data, 10);

        assert.isUndefined(tree.find(100));
    });
    it('Find node from tree');
    it('Delete node from tree');
    it('Fetch random node from tree');
});