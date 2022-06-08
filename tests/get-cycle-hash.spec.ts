import { getCycleHash } from '../src';
import { assert } from 'chai';

describe('getCycleHash', () => {
    it('should return zero for empty string', () => {
        const result = getCycleHash('');

        assert.equal(result, 0);
    });

    it('should return 3987488 for qwerty string', () => {
        const result = getCycleHash('qwerty');

        assert.equal(result, 3987488);
    });

    it('should depends on letters order', () => {
        const result1 = getCycleHash('ab');
        const result2 = getCycleHash('ba');

        assert.equal(result1, 24930);
        assert.equal(result2, 25185);
    });
});
