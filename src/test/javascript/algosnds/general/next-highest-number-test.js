const { assert } = require('chai');
const { describe, it } = require('mocha');
const nextHighestNumber = require('../../../../main/javascript/algosnds/general/next-highest-number');

describe('Next Highest Number for given number', () => {
  it('Returns next highest number', () => {
    assert.equal(nextHighestNumber(32841), 34128);
  });

  it('Returns None if no next highest number', () => {
    assert.equal(nextHighestNumber(4321), 'None');
  });
});
