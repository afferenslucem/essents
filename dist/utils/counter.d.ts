export declare class Counter {
    private _targetValue;
    /**
     * Callback's arguments
     * @private
     */
    private _args;
    /**
     * Callback function
     * @private
     */
    private _onFire;
    /**
     * Current step of counter
     * @private
     * @default 0
     */
    private _step;
    /**
     * @constructor
     * @this {Counter}
     * @param _targetValue counter target value
     * @param onFire callback function
     * @param initialStep initial counter value
     * @param args callback's arguments
     */
    constructor(_targetValue: number, onFire?: Function, initialStep?: number, ...args: any[]);
    /**
     * Increment current value of counter
     */
    increment(): void;
    /**
     * Callback executing routine
     */
    private onMatch;
    /**
     * Marker of counter state
     * @returns {boolean}
     */
    get activated(): boolean;
    /**
     * Current value of counter
     * @returns {number}
     */
    get currentStep(): number;
    /**
     * Value of callback triggering
     * @returns {number}
     */
    get targetValue(): number;
    /**
     * Callback arguments getter
     * @returns {Array<any>}
     */
    get args(): any[];
    /**
     * Callback arguments setter
     * @param v Arguments
     */
    set args(v: any[]);
    /**
     * Callback getter
     * @returns {Function | null}
     */
    get onFire(): Function | null;
    /**
     * Callback setter
     * @param v Callback
     */
    set onFire(v: Function | null);
}
