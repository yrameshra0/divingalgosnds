import { assert } from 'chai';
import FindMinSubArray from '../../../../main/javascript/algosnds/arraysnstrings/min-unsorted-sub-array'

describe("Minimum Sub Array Sort Problem", () => {
    it("Returns minimum sub-array for an given array ", () => {
        let arrayToBeSorted = [1, 4, 7, 3, 10, 48, 17, 26, 30, 45, 50, 62];

        assert.deepEqual(FindMinSubArray(arrayToBeSorted), [4, 7, 3, 10, 48, 17, 26, 30, 45]);
    });
});