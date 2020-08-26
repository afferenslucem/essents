import { UUIDGenerator } from '../src/index';
import { assert } from "chai";

describe('UUIDGenerator', () => {
    it('should create generator', () => {
        const rd = new UUIDGenerator();

        assert.isTrue(!!rd);

        rd.generate();
        rd.generate();
        rd.generate();
    });
})