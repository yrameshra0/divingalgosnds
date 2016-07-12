import { assert } from 'chai';
import * as trieDS from '../src/trie-data-structure';

describe('Trie Data Structre implementation', () => {
    it('Serialize the key-value pair into trie structure', () => {
        let keyValue = {
                "abc": 30
            },
            result = trieDS.serialize(keyValue);

        assert.equal(result.keyArr[0].keyArr[1].keyArr[2].value, 30);
    });

    it('De-serialize the trie structure to an key-value pair', () => {

    });

    it('Search trie structure for given key', () => {
        let keyValue = {
                "xyz": 100
            },
            trieStruc = trieDS.serialize(keyValue);

        assert.equal(trieDS.find(trieStruc, "xyz"), 100);
    });
});
