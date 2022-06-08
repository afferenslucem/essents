import { Timer } from "../src/utils/timer";
import { assert } from "chai";

describe('Timer', () => {
    it('should create timer', () => {
        const timer = new Timer(() => {}, 10);

        assert.equal(timer.alive, false);
        assert.equal(timer.autokill, true);
        assert.equal(timer.delay, 10);
    });
    
    it('should create timer without autokill', () => {
        const timer = new Timer(() => {}, 10, false);

        assert.equal(timer.alive, false);
        assert.equal(timer.autokill, false);
        assert.equal(timer.delay, 10);
    });
    
    it('should return alive timer after start', () => {
        const timer = new Timer(() => {}, 10);

        timer.start();
        assert.equal(timer.alive, true);

        timer.kill();
        assert.equal(timer.alive, false);
    });
    
    it('should be killed after fired with autokill flag', async () => {

        let timer = null;

        const promise = new Promise((resolve) => {
            timer = new Timer(resolve, 10).start();
        });

        await promise;

        // @ts-ignore
        assert.equal(timer.alive, false);
        // @ts-ignore
        assert.equal(timer.autokill, true);
    });
    
    it('should be killed after fired with autokill flag', async () => {

        let timer = null;

        let passed = false;

        function pass(callback: Function) {
            passed = true;
            callback();
        }

        const promise = new Promise((resolve) => {
            timer = new Timer(pass, 10, true, resolve).start();
        });

        await promise;
        
        assert.isTrue(passed);
    });
})
