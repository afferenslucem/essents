"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repeater = void 0;
class Repeater {
    constructor(_func, _period, ...args) {
        this._func = _func;
        this._period = _period;
        this._id = null;
        this._args = args;
    }
    start() {
        this._id = setInterval(() => {
            this._func(...this._args);
        }, this._period);
        return this;
    }
    kill() {
        if (this._id == null) {
            throw new Error('Could not delete empty timer');
        }
        clearInterval(this._id);
        this._id = null;
        return this;
    }
    get alive() {
        return this._id != null;
    }
    get period() {
        return this._period;
    }
}
exports.Repeater = Repeater;
