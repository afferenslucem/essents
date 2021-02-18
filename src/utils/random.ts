const MULTIPLIER = 1_000_000_000;
const RANDOM_LIMIT = 1_000_000;

export class Random {
    private readonly seed: number = 0;

    constructor() {
        this.seed = Date.now() % 100000;
    }

   /**
     * returns random value
     * @param max - upper bound of random value
     * @returns integer value [0 ... max - 1]
     */
    public next(max = RANDOM_LIMIT): number {
       return (Random.random() + this.seed) % max;
    }

    private static random(): number {
        return Math.floor(Math.random() * MULTIPLIER);
    }
}
