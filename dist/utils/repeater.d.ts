export declare class Repeater {
    private _func;
    private _period;
    /**
     * Id of interval
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
     * @this {Repeater}
     *
     * @param _func Callback function
     * @param _period Callback executing period
     * @param args Callback arguments
     */
    constructor(_func: Function, _period: number, ...args: any[]);
    /**
     * Creates interval
     * @returns {Repeater} reference to current instance
     */
    start(): Repeater;
    /**
     * Removes interval
     * @returns {Repeater} reference to current instance
     */
    kill(): Repeater;
    /**
     * Marker of interval state
     * @returns {boolean}
     */
    get alive(): boolean;
    /**
     * Callback executing period
     * @returns {number}
     */
    get period(): number;
}
