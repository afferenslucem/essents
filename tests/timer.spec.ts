import { Timer } from "../src/utils/timer";
import { assert } from "chai";

describe('Timer', () => {
    it('should create not alive timer', () => {
        const timer = new Timer(() => {}, 10);

        assert.equal(timer.alive, false);
    })
})