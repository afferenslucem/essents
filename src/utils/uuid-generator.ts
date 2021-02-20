import { Random } from "./random";
import sha1 from 'sha1';

export class UUIDGenerator {
    private random = new Random();

    private staticData: string = '';
    private version: string = '';
    private variant: string = '';
    private validN = ['8', '9', 'a', 'b'];

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
        this.staticData = this.staticData || this.defaultStatic();
        this.variant = this.getVariant();
    }

    private defaultStatic(): string {
        const data = Date.now().toString(16) + this.random.next().toString(16);

        return this.convertStatic(data);
    }

    private readFirstParam(first?: number | string) {
        if (typeof first == 'number') {
            this.version = this.toString(first);
        } else if (typeof first == 'string') {
            this.staticData = this.convertStatic(first);
        }
    }

    private getVariant() {
        const chooseN = this.random.next(4);
        return this.validN[chooseN];
    }

    private convertStatic(userStatic: string): string {
        return this.getHashCode(userStatic);
    }

    private generateStatic(length: number): string {
        let staticData = '';

        for (let i = 0; i < length; i++) {
            const rand = this.random.next(16);
            staticData += this.toString(rand);
        }

        return staticData;
    }

    /**
     * returns uuid
     */
    public generate(): string {
        const date = this.getDateHEX().padStart(12, '0');
        const version = this.version.toString();
        const variant = this.variant.toString();
        const staticData = this.staticData;

        const random = this.generateStatic(6);

        return `${date.slice(0, 8)}-${date.slice(8, 12)}-${version}${random.slice(0, 3)}-${variant}${random.slice(3, 6)}-${staticData}`
    }

    private getDateHEX(): string {
        const date = new Date().getTime();

        return this.toString(date).replace('.', '');
    }

    private getHashCode(str: string) {
        return sha1('str').slice(0, 12);
    }

    private toString(number: number): string {
        return number.toString(16);
    }
}
