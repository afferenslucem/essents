import { assert } from "chai";
import { Counter } from "../src/utils/counter";

const onFire = () => {};
const otherOnFire = () => {};

describe('Counter', () => {
    it('should create counter', () => {

        const counter = new Counter(3, onFire, 1);

        assert.equal(counter.targetValue, 3, 'Invalid bound');
        assert.equal(counter.currentStep, 1, 'Invalid step');
        assert.equal(counter.onFire, onFire, 'Invalid callback');
        assert.deepEqual(counter.args, [], 'Invalid args');
        assert.equal(counter.activated, false, 'Invalid state');
    });

    it('should override counter fields', () => {
        const counter = new Counter(3, onFire, 1);
        const args = [1, 2, 3];

        counter.onFire = otherOnFire;
        counter.args = args;

        assert.equal(counter.onFire, otherOnFire, 'Invalid callback');
        assert.deepEqual(counter.args, args, 'Invalid args');
    });

    it('should fire event', () => {
        let fired = false;

        const counter = new Counter(3, (fire: boolean) => fired = fire, 1, true);

        counter.increment();
        counter.increment();

        assert.equal(fired, true, 'Callback wasn\'t activated');
        assert.equal(counter.activated, true, 'Counter wasn\' activated');
    });

    it('should throw error for incorrect initialStep', () => {
        assert.throws(() => new Counter(3, null, 7), 'Bound should be greater then initial value | initial value: 7 | bound: 3')
    });
});