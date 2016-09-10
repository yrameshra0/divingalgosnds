import { assert } from 'chai';
import Sample from '../../main/js/Sample';

describe("Sample test for checking all tooling", () => {

    it("Evaluate the output of sample", () => {
        assert.isTrue(Sample());
    })

})