import { Random } from '../src/index';
import { assert } from "chai";

describe('Random', () => {
    it('should create generator', () => {
        const rd = new Random();

        assert.isTrue(!!rd);
    });
})
