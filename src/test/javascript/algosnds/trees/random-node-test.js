import { assert } from 'chai';
import newTree from '../../../../main/javascript/algosnds/trees/random-node';

describe('Tree implementation than can retrieve an any random node with equal probability', () => {
    const tree = newTree();

    tree.insertInOrder(20);
    tree.insertInOrder(15);
    tree.insertInOrder(25);

    tree.insertInOrder(9);
    tree.insertInOrder(17);
    tree.insertInOrder(23);
    tree.insertInOrder(28);

    tree.insertInOrder(8);
    tree.insertInOrder(10);
    tree.insertInOrder(27);
    tree.insertInOrder(30);

    tree.insertInOrder(6);
    tree.insertInOrder(7);
    tree.insertInOrder(26);

    it('Insert node into tree', () => {
        const tree = newTree();
        tree.insertInOrder(20);
        assert.equal(tree.find(20).data, 20);

        tree.insertInOrder(10);
        assert.equal(tree.find(20).data, 20);
        assert.equal(tree.find(10).data, 10);

        assert.isUndefined(tree.find(100));
    });

    it('Find node from tree', () => {
        assert.isDefined(tree.find(7));
        assert.isUndefined(tree.find(100));
        assert.isUndefined(tree.find(NaN));
    });

    it('Fetch random node from tree', () => {
        const leftSubtreeElems = [20, 15, 9, 8, 10, 6, 7];
        for (let i = 0; i < 500; i++) {
            assert.oneOf(tree.getRandomNode().data, leftSubtreeElems);
        }
    });

    it('Delete node from tree', () => {
        assertDeletion(tree, 7);
        assertDeletion(tree, 6);
        assertDeletion(tree, 25);
        assertDeletion(tree, 23);
    });

    function assertDeletion(tree, nodeData) {
        assert.isDefined(tree.find(nodeData));
        tree.deleteNode(nodeData);
        assert.isUndefined(tree.find(nodeData));
    }
});