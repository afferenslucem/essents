export class Timer {
    private _id: number | null = null;
    private _args: any[] = [];

    public constructor(private _func: Function, private _delay: number, private _autokill: boolean = true, ...args: any[]) {
        this._args = args;
    }

    public start(): Timer {
        this._id = setTimeout(() => {
            this._func(...this._args);

            if(this.kill) {
                this.kill();
            }
        }, this._delay);

        return this;
    }

    public kill(): Timer {
        if(this._id == null) {
            throw new Error('Could not delete empty timer');
        }

        clearTimeout(this._id);

        this._id = null;

        return this;
    }

    public get alive(): boolean {
        return this._id != null;
    }

    public get autokill(): boolean {
        return this._autokill;
    }

    public get delay(): number {
        return this._delay;
    }
}