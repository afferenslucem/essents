import { Repeater } from "../src/utils/repeater";
import { assert } from "chai";
import { Timer } from "../src";

describe('Repeater', () => {
    it('should create repeater', () => {
        const repeater = new Repeater(() => {}, 10);

        assert.equal(repeater.alive, false);
        assert.equal(repeater.period, 10);
    });
 
    it('repeater should became alive after start', () => {
        const repeater = new Repeater(() => {}, 10).start();

        assert.equal(repeater.alive, true);

        repeater.kill();

        assert.equal(repeater.alive, false);
    });
 
    it('repeater should run routine', async () => {
        let i = 0

        const repeater = new Repeater(() => {
            i++;
        }, 10).start();

        const promise = new Promise(resolve => {
            new Timer(resolve, 80).start();
        });

        await promise;

        repeater.kill();

        assert.isTrue(i > 2);
    });
});