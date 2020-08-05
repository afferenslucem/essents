import { AbstractCounter } from "./abstract-counter";

export class Counter extends AbstractCounter {
    /**
     * @constructor
     * @this {Counter}
     * @param targetValue counter target value
     * @param onFire callback function
     * @param initialStep initial counter value
     * @param args callback's arguments
     * @throws Error if initial value greatest then target value
     */
    public constructor(targetValue: number, onFire?: Function, initialStep: number = 0, ...args: any[]) {
        super(targetValue, onFire, initialStep, ...args);
    }

    /**
     * Increment current value of counter
     */
    public increment(): void {
        if (this.activated) return;

        super.increment();
    }

    /**
     * Marker of counter state
     */
    public get activated(): boolean {
        return this.currentStep == this.targetValue;
    }
}