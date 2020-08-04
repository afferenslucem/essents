export declare class Timer {
    private _func;
    private _delay;
    private _autokill;
    /**
     * Id of timeout
     * @private
     */
    private _id;
    /**
     * Callback's arguments
     * @private
     */
    private _args;
    /**
     * @constructor
     * @this {Timer}
     *
     * @param _func Callback function
     * @param _delay Callback executing delay
     * @param _autokill Flag of automatic deleting timer after callback executing
     * @param args Callback arguments
     */
    constructor(_func: Function, _delay: number, _autokill?: boolean, ...args: any[]);
    /**
     * Creates timeout
     * @returns {Timer} reference to current instance
     */
    start(): Timer;
    /**
     * Removes timeout
     * @returns {Timer} reference to current instance
     */
    kill(): Timer;
    /**
     * @returns {boolean} Marker of interval state
     */
    get alive(): boolean;
    /**
     * @returns {boolean} Flag of automatic deleting timer after callback executing
     */
    get autokill(): boolean;
    /**
     * @returns {number} Callback executing delay
     */
    get delay(): number;
}
