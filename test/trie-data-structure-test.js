import { assert } from 'chai';
import * as trieDS from '../src/trie-data-structure';

describe('Trie Data Structre implementation', () => {
    let expectedTrieStructure = {
        value: undefined,
        keyArr: [{
            value: undefined,
            keyArr: [undefined, {
                value: undefined,
                keyArr: [undefined, undefined, {
                    value: 100,
                    keyArr: []
                }]
            }]
        }]
    };

    it('Serialize the key-value pair into trie structure', () => {
        let keyValue = {
            "x": 10,
            "xy": 200,
            "abc": 30,
            "a": 90
        };

        console.log(JSON.stringify(trieDS.serialize(keyValue)));
    // assert.deepEquals(, expectedTrieStructure);
    });

    it('De-serialize the trie structure to an key-value pair', () => {

    });

    it('Search trie structure for given key', () => {

    });
});
