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
const repeater_1 = require("../src/utils/repeater");
const chai_1 = require("chai");
const src_1 = require("../src");
describe('Repeater', () => {
    it('should create repeater', () => {
        const repeater = new repeater_1.Repeater(() => { }, 10);
        chai_1.assert.equal(repeater.alive, false);
        chai_1.assert.equal(repeater.period, 10);
    });
    it('repeater should became alive after start', () => {
        const repeater = new repeater_1.Repeater(() => { }, 10).start();
        chai_1.assert.equal(repeater.alive, true);
        repeater.kill();
        chai_1.assert.equal(repeater.alive, false);
    });
    it('repeater should run routine', () => __awaiter(void 0, void 0, void 0, function* () {
        let i = 0;
        const repeater = new repeater_1.Repeater(() => {
            i++;
        }, 10).start();
        const promise = new Promise(resolve => {
            new src_1.Timer(resolve, 50).start();
        });
        yield promise;
        chai_1.assert.isTrue(i > 2);
        repeater.kill();
    }));
});
