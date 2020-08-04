export class Counter {
    private _args: any[];
    private _onFire: Function | null;


    /**
     * @default 0;
     */
    private _step: number;

    public constructor(private _bound: number, onFire?: Function, initialStep: number = 0, ...args: any[]) {
        if(this._bound <= initialStep) {
            throw new Error(`Bound should be greater then initial value | initial value: ${initialStep} | bound: ${this._bound}`);
        }

        this._onFire = onFire ?? null;
        this._args = args;
        this._step = initialStep;
    }

    public increment(): void {
        this._step++;

        if(this._step == this._bound) {
            this.onMatch();
        }
    }

    private onMatch() {
        if(this._onFire != null) {
            this._onFire(...this._args);
        }
    }

    public get activated(): boolean {
        return this._step == this._bound;
    }

    public get currentStep(): number {
        return this._step;
    }

    public get bound(): number {
        return this._bound;
    }

    public get args(): any[] {
        return this._args;
    }

    public set args(v: any[]) {
        this._args = v ?? [];
    }

    public get onFire(): Function | null {
        return this._onFire;
    }

    public set onFire(v: Function | null) {
        this._onFire = v;
    }
}