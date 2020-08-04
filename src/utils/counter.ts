export class Counter {
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
     * @this {Counter}
     * @param _targetValue counter target value
     * @param onFire callback function
     * @param initialStep initial counter value
     * @param args callback's arguments
     */
    public constructor(private _targetValue: number, onFire?: Function, initialStep: number = 0, ...args: any[]) {
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
        if (this.activated) return;

        this._step++;

        if(this._step == this._targetValue) {
            this.onMatch();
        }
    }

    /**
     * Callback executing routine
     */
    private onMatch() {
        if(this._onFire != null) {
            this._onFire(...this._args);
        }
    }

    /**
     * Marker of counter state
     * @returns {boolean}
     */
    public get activated(): boolean {
        return this._step == this._targetValue;
    }

    /**
     * Current value of counter
     * @returns {number}
     */
    public get currentStep(): number {
        return this._step;
    }

    /**
     * Value of callback triggering
     * @returns {number}
     */
    public get targetValue(): number {
        return this._targetValue;
    }

    /**
     * Callback arguments getter
     * @returns {Array<any>}
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
     * @returns {Function | null}
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