import { assert } from 'chai';
import Sample from '../src/Sample';

describe("Sample test for checking all tooling", () => {

    it("Should evaluate the output of sample", () => {
        assert.isTrue(Sample());
    })

})