"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const timer_1 = require("../src/utils/timer");
const chai_1 = require("chai");
describe('Timer', () => {
    it('should create timer', () => {
        const timer = new timer_1.Timer(() => { }, 10);
        chai_1.assert.equal(timer.alive, false);
        chai_1.assert.equal(timer.autokill, true);
        chai_1.assert.equal(timer.delay, 10);
    });
    it('should create timer without autorkill', () => {
        const timer = new timer_1.Timer(() => { }, 10, false);
        chai_1.assert.equal(timer.alive, false);
        chai_1.assert.equal(timer.autokill, false);
        chai_1.assert.equal(timer.delay, 10);
    });
    it('should return alive timer after start', () => {
        const timer = new timer_1.Timer(() => { }, 10);
        timer.start();
        chai_1.assert.equal(timer.alive, true);
        timer.kill();
        chai_1.assert.equal(timer.alive, false);
    });
    it('should be killed after fired with autokill flag', () => __awaiter(void 0, void 0, void 0, function* () {
        let timer = null;
        const promise = new Promise((resolve) => {
            timer = new timer_1.Timer(resolve, 10).start();
        });
        yield promise;
        // @ts-ignore
        chai_1.assert.equal(timer.alive, false);
        // @ts-ignore
        chai_1.assert.equal(timer.autokill, true);
    }));
    it('should be killed after fired with autokill flag', () => __awaiter(void 0, void 0, void 0, function* () {
        let timer = null;
        let passed = false;
        function pass(callback) {
            passed = true;
            callback();
        }
        const promise = new Promise((resolve) => {
            timer = new timer_1.Timer(pass, 10, true, resolve).start();
        });
        yield promise;
        chai_1.assert.isTrue(passed);
    }));
});
