import {Random} from "./random";

export class UUIDGenerator {
    private random = new Random();

    private staticData: string = '';
    private version: string = '';
    private variant: string = '';

    private readonly staticTargetLength = 12;

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
        this.variant = this.getVariant();
    }

    private readFirstParam(first?: number | string) {
        if (typeof first == 'number') {
            this.version = this.toString(first);
        } else if (typeof first == 'string') {
            this.staticData = this.convertStatic(first);
        }
    }

    private getVariant() {
        return this.toString(this.random.next(16))
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
            staticData += this.toString(rand);
        }

        return staticData;
    }

    /**
     * returns uuid
     */
    public generate(): string {
        const date = this.getDateHEX();
        const version = this.version.toString();
        const variant = this.variant.toString();
        const staticData = this.staticData;

        const random = this.generateStatic(6);

        return `${date.slice(0, 8)}-${date.slice(-4)}-${version}${random.slice(0, 3)}-${variant}${random.slice(3, 6)}-${staticData}`
    }

    private getDateHEX(): string {
        const date = new Date().getTime();

        return this.toString(date).replace('.', '');
    }

    private getHashCode(str: string) {
        let hash = 0;

        for (let i = 0; i < str.length; i++) {
            hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
        }

        return this.toString((Math.abs(hash)));
    }

    private saltify(hash: string) {
        const saltLength = this.staticTargetLength - hash.length;

        return hash + this.generateStatic(saltLength);
    }

    private toString(number: number): string {
        return number.toString(16);
    }
}
