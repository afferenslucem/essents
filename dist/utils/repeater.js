"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repeater = void 0;
class Repeater {
    /**
     * @constructor
     * @this {Repeater}
     *
     * @param _func Callback function
     * @param _period Callback executing period
     * @param args Callback arguments
     */
    constructor(_func, _period, ...args) {
        this._func = _func;
        this._period = _period;
        /**
         * Id of interval
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
     * Creates interval
     * @returns {Repeater} reference to current instance
     */
    start() {
        this._id = setInterval(() => {
            this._func(...this._args);
        }, this._period);
        return this;
    }
    /**
     * Removes interval
     * @returns {Repeater} reference to current instance
     */
    kill() {
        if (this._id == null) {
            throw new Error('Could not delete empty timer');
        }
        clearInterval(this._id);
        this._id = null;
        return this;
    }
    /**
     * Marker of interval state
     * @returns {boolean}
     */
    get alive() {
        return this._id != null;
    }
    /**
     * Callback executing period
     * @returns {number}
     */
    get period() {
        return this._period;
    }
}
exports.Repeater = Repeater;
