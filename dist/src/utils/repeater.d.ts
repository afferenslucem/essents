export declare class Repeater {
    private _func;
    private _period;
    private _id;
    private _args;
    constructor(_func: Function, _period: number, ...args: any[]);
    start(): Repeater;
    kill(): Repeater;
    get alive(): boolean;
    get period(): number;
}
