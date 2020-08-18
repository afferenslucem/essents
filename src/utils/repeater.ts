export class Repeater {
    /**
     * Id of interval
     * @private
     */
    private _id: number | null = null;

    /**
     * Callback's arguments
     * @private
     */
    private _args: any[] = [];

    /**
     * @constructor
     * @this {Repeater}
     * 
     * @param _func Callback function
     * @param _period Callback executing period
     * @param args Callback arguments
     */
    public constructor(private _func: Function, private _period: number, ...args: any[]) {
        this._args = args;
    }

    /**
     * Creates interval
     * @returns {Repeater} reference to current instance
     */
    public start(): Repeater {
        // @ts-ignore
        this._id = setInterval(() => {
            this._func(...this._args);
        }, this._period);

        return this;
    }

    /**
     * Removes interval
     * @returns {Repeater} reference to current instance
     */
    public kill(): Repeater {
        if(this._id == null) {
            throw new Error('Could not delete empty timer');
        }

        // @ts-ignore
        clearInterval(this._id);

        this._id = null;

        return this;
    }

    /**
     * Marker of interval state
     * @returns {boolean}
     */
    public get alive(): boolean {
        return this._id != null;
    }

    /**
     * Callback executing period
     * @returns {number}
     */
    public get period(): number {
        return this._period;
    }
}