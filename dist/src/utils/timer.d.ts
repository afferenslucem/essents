export declare class Timer {
    private _func;
    private _delay;
    private _autokill;
    private _id;
    private _args;
    constructor(_func: Function, _delay: number, _autokill?: boolean, ...args: any[]);
    start(): Timer;
    kill(): Timer;
    get alive(): boolean;
    get autokill(): boolean;
    get delay(): number;
}
