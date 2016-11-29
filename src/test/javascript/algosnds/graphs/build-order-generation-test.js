import { assert } from 'chai';
import { buildOrderByLookUp, buildOrderByDfsLookUp } from '../../../../main/javascript/algosnds/graphs/build-order-generation';

describe('Generate build order', () => {
    let resolvableProjects = ['a', 'b', 'c', 'd', 'e', 'f'],
        resolvableDependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']],
        resolvableExpectedOrder = ['f', 'e', 'a', 'b', 'd', 'c'],
        nonResolvableProjects = ['a', 'b', 'c'],
        nonResolvableDependencies = [['a', 'b'], ['b', 'c'], ['c', 'b']];

    it('Generate build order by normal look up', () => {
        assert.sameMembers(buildOrderByLookUp(resolvableProjects, resolvableDependencies), resolvableExpectedOrder);
        assert.isUndefined(buildOrderByLookUp(nonResolvableProjects, nonResolvableDependencies));
    });

    it('Generate build order by DFS look up', () => {
        assert.sameMembers(buildOrderByDfsLookUp(resolvableProjects, resolvableDependencies), resolvableExpectedOrder);
        assert.isUndefined(buildOrderByDfsLookUp(nonResolvableProjects, nonResolvableDependencies));
    });
})