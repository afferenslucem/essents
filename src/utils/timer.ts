export class Timer {
    /**
     * Id of timeout
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
     * @this {Timer}
     * 
     * @param _func Callback function
     * @param _delay Callback executing delay
     * @param _autokill Flag of automatic deleting timer after callback executing
     * @param args Callback arguments
     */
    public constructor(private _func: Function, private _delay: number, private _autokill: boolean = true, ...args: any[]) {
        this._args = args;
    }

    /**
     * Creates timeout
     * @returns {Timer} reference to current instance
     */
    public start(): Timer {
        // @ts-ignore
        this._id = setTimeout(() => {
            this._func(...this._args);

            if(this.kill && this.alive && this.autokill) {
                this.kill();
            }
        }, this._delay);

        return this;
    }

    /**
     * Removes timeout
     * @returns {Timer} reference to current instance
     */
    public kill(): Timer {
        // @ts-ignore
        clearTimeout(this._id);

        this._id = null;

        return this;
    }

    /**
     * @returns {boolean} Marker of interval state
     */
    public get alive(): boolean {
        return this._id != null;
    }

    /**
     * @returns {boolean} Flag of automatic deleting timer after callback executing
     */
    public get autokill(): boolean {
        return this._autokill;
    }

    /**
     * @returns {number} Callback executing delay
     */
    public get delay(): number {
        return this._delay;
    }
}