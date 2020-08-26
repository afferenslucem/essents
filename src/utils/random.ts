const MULTIPLIER = 1_000_000_000;
const RANDOM_LIMIT = 1_000_000;

export class Random {
    private prev = 1;

   /**
     * returns random value
     * @param max - upper bound of random value
     * @returns integer value [0 ... max - 1]
     */
    public next(max = RANDOM_LIMIT): number {
        const result = (Random.random() + this.prev) % max;
        
        this.prev = result;

        return result;
    }

    private static random(): number {
        return Math.floor(Math.random() * MULTIPLIER);
    }
}