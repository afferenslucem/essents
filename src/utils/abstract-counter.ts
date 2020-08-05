export abstract class AbstractCounter {
    /**
     * Callback's arguments
     * @private
     */
    private _args: any[];

    /**
     * Callback function
     * @private
     */
    private _onFire: Function | null;

    /**
     * Current step of counter
     * @private
     * @default 0
     */
    private _step: number;

    /**
     * @constructor
     * @this {AbstractCounter}
     * @param _targetValue counter target value
     * @param onFire callback function
     * @param initialStep initial counter value
     * @param args callback's arguments
     * @throws Error if initial value greatest then target value
     */
    protected constructor(private _targetValue: number, onFire?: Function, initialStep: number = 0, ...args: any[]) {
        if(this._targetValue <= initialStep) {
            throw new Error(`Bound should be greater then initial value | initial value: ${initialStep} | bound: ${this._targetValue}`);
        }

        this._onFire = onFire ?? null;
        this._args = args;
        this._step = initialStep;
    }

    /**
     * Increment current value of counter
     */
    public increment(): void {
        this._step = this.changeStep(this._step);

        if (this.checkMatch(this._step, this._targetValue)) {
            this.onMatch();
        }
    }

    /**
     * Function of changing counter value
     * @param lastStep Prevous step of counter
     * 
     * @returns Number value of new step value
     * @protected
     * @virtual
     */
    protected changeStep(lastStep: number): number {
        lastStep++;

        return lastStep;
    }
 
    /**
     * @protected
     * @virtual
     * @param step Current step value
     * @param targetValue Trigger value
     * 
     * @returns Boolean signal of matching
     */
    protected checkMatch(step: number, targetValue: number): boolean {
        return step == targetValue;
    }

    /**
     * Callback executing routine
     * @protected
     */
    protected onMatch() {
        if(this._onFire != null) {
            this._onFire(...this._args);
        }
    }

    /**
     * Current value of counter
     */
    public get currentStep(): number {
        return this._step;
    }

    /**
     * Value of callback triggering
     */
    public get targetValue(): number {
        return this._targetValue;
    }

    /**
     * Callback arguments getter
     */
    public get args(): any[] {
        return this._args;
    }

    /**
     * Callback arguments setter 
     * @param v Arguments
     */
    public set args(v: any[]) {
        this._args = v ?? [];
    }

    /**
     * Callback getter
     */
    public get onFire(): Function | null {
        return this._onFire;
    }

    /**
     * Callback setter 
     * @param v Callback
     */
    public set onFire(v: Function | null) {
        this._onFire = v;
    }
}