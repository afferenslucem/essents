"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
class Timer {
    constructor(_func, _delay, _autokill = true, ...args) {
        this._func = _func;
        this._delay = _delay;
        this._autokill = _autokill;
        this._id = null;
        this._args = [];
        this._args = args;
    }
    start() {
        this._id = setTimeout(() => {
            this._func(...this._args);
            if (this.kill) {
                this.kill();
            }
        }, this._delay);
        return this;
    }
    kill() {
        if (this._id == null) {
            throw new Error('Could not delete empty timer');
        }
        clearTimeout(this._id);
        this._id = null;
        return this;
    }
    get alive() {
        return this._id != null;
    }
    get autokill() {
        return this._autokill;
    }
    get delay() {
        return this._delay;
    }
}
exports.Timer = Timer;
