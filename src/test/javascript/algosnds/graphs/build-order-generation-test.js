import { assert } from 'chai';
import generateBuildOrder from '../../../../main/javascript/algosnds/graphs/build-order-generation';

describe('Generate build order', () => {
    it('Build order with resolvalbe dependencies', () => {
        let projects = ['a', 'b', 'c', 'd', 'e', 'f'],
            dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']],
            expectedOrder = ['f', 'e', 'a', 'b', 'd', 'c'];

        assert.sameMembers(generateBuildOrder(projects, dependencies), expectedOrder);
    });

    it('Build order with cicylic dependencies', () => {
        let projects = ['a', 'b', 'c'],
            dependencies = [['a', 'b'], ['b', 'c'], ['c', 'b']];

        assert.isUndefined(generateBuildOrder(projects, dependencies));
    });
})