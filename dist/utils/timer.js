"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    /**
     * @constructor
     * @this {Timer}
     *
     * @param _func Callback function
     * @param _delay Callback executing delay
     * @param _autokill Flag of automatic deleting timer after callback executing
     * @param args Callback arguments
     */
    constructor(_func, _delay, _autokill = true, ...args) {
        this._func = _func;
        this._delay = _delay;
        this._autokill = _autokill;
        /**
         * Id of timeout
         * @private
         */
        this._id = null;
        /**
         * Callback's arguments
         * @private
         */
        this._args = [];
        this._args = args;
    }
    /**
     * Creates timeout
     * @returns {Timer} reference to current instance
     */
    start() {
        this._id = setTimeout(() => {
            this._func(...this._args);
            if (this.kill) {
                this.kill();
            }
        }, this._delay);
        return this;
    }
    /**
     * Removes timeout
     * @returns {Timer} reference to current instance
     */
    kill() {
        if (this._id == null) {
            throw new Error('Could not delete empty timer');
        }
        clearTimeout(this._id);
        this._id = null;
        return this;
    }
    /**
     * @returns {boolean} Marker of interval state
     */
    get alive() {
        return this._id != null;
    }
    /**
     * @returns {boolean} Flag of automatic deleting timer after callback executing
     */
    get autokill() {
        return this._autokill;
    }
    /**
     * @returns {number} Callback executing delay
     */
    get delay() {
        return this._delay;
    }
}
exports.Timer = Timer;
