import { Random } from "./random";

export class UUIDGenerator {
    private rand = new Random();

    /**
     * returns uuid
     */
    public generate(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
            const rand = this.rand.next(16);
            const value = char == 'x' ? rand : (rand & 0x3 | 0x8);
            return value.toString(16);
          });
    }
}