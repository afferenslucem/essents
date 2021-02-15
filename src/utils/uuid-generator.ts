import { Random } from "./random";
import { performance } from 'perf_hooks';

export class UUIDGenerator {
    private random = new Random();

    private staticData: string = '';
    private version: string = '';
    private variant: string = '';

    private readonly staticTargetLength = 14;

    public constructor();
    public constructor(v: number);
    public constructor(staticData: string);
    public constructor(v: number, userStatic: string);
    public constructor(first?: number | string, second?: string) {
        if (first != null) {
            this.readFirstParam(first);
        }
        if (second) {
            this.staticData = this.convertStatic(second);
        }

        this.version = this.version || '4';
        this.staticData = this.staticData || this.generateStatic();
        this.variant = (this.random.next(16) & 0x3 | 0x8).toString();
    }

    private readFirstParam(first?: number | string) {
        if (typeof first == 'number') {
            this.version = first.toString();
        } else if (typeof first == 'string') {
            this.staticData = this.convertStatic(first);
        }
    }

    private convertStatic(userStatic: string): string {
        const data = this.getHashCode(userStatic);

        return data.length < this.staticTargetLength ? this.saltify(data) : data.slice(0, this.staticTargetLength);
    }

    private generateStatic(length?: number): string {
        let staticData = '';

        const targetLength = length || this.staticTargetLength;

        for (let i = 0; i < targetLength; i++) {
            const rand = this.random.next(16);
            staticData += rand.toString(16);
        }

        return staticData;
    }

    /**
     * returns uuid
     */
    public generate(): string {
        const date = this.getDate().toString(16).replace('.', '');
        const version = this.version.toString();
        const variant = this.variant.toString();
        const staticData = this.staticData;
        const random = this.generateStatic(6);

        return `${date.slice(0, 8)}-${date.slice(-4)}-${version}${random.slice(0, 3)}-${variant}${random.slice(3, 6)}-${staticData}`
    }

    private getDate(): number {
        return new Date().getTime();
    }

    private getHashCode(str: string) {
        let hash = 0;

        for(let i = 0; i < str.length; i++) {
            hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
        }

        return (Math.abs(hash)).toString(16);
    }

    private saltify(hash: string) {
        const saltLength = this.staticTargetLength - hash.length;

        return hash + this.generateStatic(saltLength);
    }
}
