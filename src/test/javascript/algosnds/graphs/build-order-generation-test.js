const { assert } = require('chai');
const { describe, it } = require('mocha');
const {
  buildOrderByLookUp,
  buildOrderByDfsLookUp
} = require('../../../../main/javascript/algosnds/graphs/build-order-generation');

describe('Generate build order', () => {
  const resolvableProjects = ['a', 'b', 'c', 'd', 'e', 'f'];
  const resolvableDependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];
  const resolvableExpectedOrder = ['f', 'e', 'a', 'b', 'd', 'c'];
  const nonResolvableProjects = ['a', 'b', 'c'];
  const nonResolvableDependencies = [['a', 'b'], ['b', 'c'], ['c', 'b']];

  it('Generate build order by normal look up', () => {
    assert.sameMembers(buildOrderByLookUp(resolvableProjects, resolvableDependencies), resolvableExpectedOrder);
    assert.isUndefined(buildOrderByLookUp(nonResolvableProjects, nonResolvableDependencies));
  });

  it('Generate build order by DFS look up', () => {
    assert.sameMembers(buildOrderByDfsLookUp(resolvableProjects, resolvableDependencies), resolvableExpectedOrder);
    assert.isUndefined(buildOrderByDfsLookUp(nonResolvableProjects, nonResolvableDependencies));
  });
});
