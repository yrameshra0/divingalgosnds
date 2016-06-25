import { assert } from 'chai';
import FindMinSubArray from '../src/min-unsorted-sub-array'

describe("Minimum Sub Array Sort Problem", () => {
    it("Should provide minimum sub-array ", () => {
        let arrayToBeSorted = [1, 4, 7, 3, 10, 48, 17, 26, 30, 45, 50, 62];

        assert.deepEqual(FindMinSubArray(arrayToBeSorted), [4, 7, 3, 10, 48, 17, 26, 30, 45]);
    });
});