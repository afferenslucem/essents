import { assert } from "chai";
import { CycledCounter } from "../src/utils/cycled-counter";

const onFire = () => {};
const otherOnFire = () => {};

describe('CycledCounter', () => {
    it('should create counter', () => {

        const counter = new CycledCounter(3, onFire, 1);

        assert.equal(counter.targetValue, 3, 'Invalid bound');
        assert.equal(counter.currentStep, 1, 'Invalid step');
        assert.equal(counter.onFire, onFire, 'Invalid callback');
        assert.deepEqual(counter.args, [], 'Invalid args');
    });

    it('should override counter fields', () => {
        const counter = new CycledCounter(3, onFire, 1);
        const args = [1, 2, 3];

        counter.onFire = otherOnFire;
        counter.args = args;

        assert.equal(counter.onFire, otherOnFire, 'Invalid callback');
        assert.deepEqual(counter.args, args, 'Invalid args');
    });

    it('should fire event', () => {
        let fired = 0;

        const counter = new CycledCounter(3, () => fired++, 1);

        counter.increment();
        counter.increment();
        // fired = 1
        
        counter.increment();
        counter.increment();
        counter.increment();
        // fired = 2

        assert.equal(fired, 2, 'Callback wasn\'t activated');
        assert.equal(counter.currentStep, 0, 'Incorrect counter state');
    });

    it('should throw error for incorrect initialStep', () => {
        assert.throws(() => new CycledCounter(3, null, 7), 'Bound should be greater then initial value | initial value: 7 | bound: 3')
    });
});