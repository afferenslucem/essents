export class Repeater {
    private _id: number | null = null;
    private _args: any[];

    public constructor(private _func: Function, private _period: number, ...args: any[]) {
        this._args = args;
    }

    public start(): Repeater {
        this._id = setInterval(() => {
            this._func(...this._args);
        }, this._period);

        return this;
    }

    public kill(): Repeater {
        if(this._id == null) {
            throw new Error('Could not delete empty timer');
        }

        clearInterval(this._id);

        this._id = null;

        return this;
    }

    public get alive(): boolean {
        return this._id != null;
    }

    public get period(): number {
        return this._period;
    }
}