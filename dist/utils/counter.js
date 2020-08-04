"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    /**
     * @constructor
     * @this {Counter}
     * @param _targetValue counter target value
     * @param onFire callback function
     * @param initialStep initial counter value
     * @param args callback's arguments
     */
    constructor(_targetValue, onFire, initialStep = 0, ...args) {
        this._targetValue = _targetValue;
        if (this._targetValue <= initialStep) {
            throw new Error(`Bound should be greater then initial value | initial value: ${initialStep} | bound: ${this._targetValue}`);
        }
        this._onFire = onFire !== null && onFire !== void 0 ? onFire : null;
        this._args = args;
        this._step = initialStep;
    }
    /**
     * Increment current value of counter
     */
    increment() {
        if (this.activated)
            return;
        this._step++;
        if (this._step == this._targetValue) {
            this.onMatch();
        }
    }
    /**
     * Callback executing routine
     */
    onMatch() {
        if (this._onFire != null) {
            this._onFire(...this._args);
        }
    }
    /**
     * Marker of counter state
     * @returns {boolean}
     */
    get activated() {
        return this._step == this._targetValue;
    }
    /**
     * Current value of counter
     * @returns {number}
     */
    get currentStep() {
        return this._step;
    }
    /**
     * Value of callback triggering
     * @returns {number}
     */
    get targetValue() {
        return this._targetValue;
    }
    /**
     * Callback arguments getter
     * @returns {Array<any>}
     */
    get args() {
        return this._args;
    }
    /**
     * Callback arguments setter
     * @param v Arguments
     */
    set args(v) {
        this._args = v !== null && v !== void 0 ? v : [];
    }
    /**
     * Callback getter
     * @returns {Function | null}
     */
    get onFire() {
        return this._onFire;
    }
    /**
     * Callback setter
     * @param v Callback
     */
    set onFire(v) {
        this._onFire = v;
    }
}
exports.Counter = Counter;
