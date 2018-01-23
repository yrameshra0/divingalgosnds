const { assert } = require('chai');
const { describe, it } = require('mocha');
const allUniqueChars = require('../../../../main/javascript/algosnds/arraysnstrings/all-unique-chars-in-string');

describe('All unique characters in string', () => {
  it('verify all unique charcters', () => {
    assert.isTrue(allUniqueChars('abc'));
    assert.isFalse(allUniqueChars('abca'));
  });
});
