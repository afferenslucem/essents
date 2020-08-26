import { AbstractCounter } from "./abstract-counter";

export class CycledCounter extends AbstractCounter {
    /**
     * @constructor
     * @this {CycledCounter}
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
     * Function of changing counter value
     * @param lastStep Prevous step of counter
     * 
     * @returns Number value of new step value
     * @protected
     */
    protected changeStep(lastStep: number): number {
        const result = (lastStep + 1) % (this.targetValue)

        return result;
    }

    /**
     * @protected
     * @param step Current step value
     * @param targetValue Trigger value
     * 
     * @returns Boolean signal of matching
     */
    protected checkMatch(currenctValue: number, target: number): boolean {
        return currenctValue == 0;
    }
}