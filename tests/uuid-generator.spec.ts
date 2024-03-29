import { UUIDGenerator } from '../src/index';
import { assert } from "chai";

describe('UUIDGenerator', () => {
    describe('Api', () => {
        it('should create with empty constructor', () => {
            const rd = new UUIDGenerator();

            assert.isTrue(!!rd);

            // @ts-ignore
            assert.equal(rd.version, '4');

            // @ts-ignore
            assert.isNotEmpty(rd.variant);

            // @ts-ignore
            assert.isNotEmpty(rd.staticData);

            // @ts-ignore
            assert.isTrue(rd.staticData.length == 12);

            const uuid = rd.generate();
            assert.isTrue(uuid.charAt(14) == '4');
        });

        it('should create with version', () => {
            const rd = new UUIDGenerator(5);

            assert.isTrue(!!rd);

            // @ts-ignore
            assert.equal(rd.version, '5');

            // @ts-ignore
            assert.isNotEmpty(rd.variant);

            // @ts-ignore
            assert.isNotEmpty(rd.staticData);

            // @ts-ignore
            assert.isTrue(rd.staticData.length == 12);

            const uuid = rd.generate();

            assert.isTrue(uuid.charAt(14) == '5');
        });

        it('should create with static', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            assert.isTrue(!!rd);

            // @ts-ignore
            assert.equal(rd.version, '4');

            // @ts-ignore
            assert.isNotEmpty(rd.variant);

            // @ts-ignore
            assert.isNotEmpty(rd.staticData);

            // @ts-ignore
            assert.isTrue(rd.staticData.length == 12);

            const uuid = rd.generate();
            assert.isTrue(uuid.charAt(14) == '4');
        });

        it('should create with long static', () => {
            const rd = new UUIDGenerator('abcdefghijklmnopqrst1234567890abcdefghijklmnopqrst1234567890');

            assert.isTrue(!!rd);

            // @ts-ignore
            assert.equal(rd.version, '4');

            // @ts-ignore
            assert.isNotEmpty(rd.variant);

            // @ts-ignore
            assert.isNotEmpty(rd.staticData);

            // @ts-ignore
            assert.isTrue(rd.staticData.length == 12);

            const uuid = rd.generate();
            assert.isTrue(uuid.charAt(14) == '4');
        });

        it('should create with version and static', () => {
            const rd = new UUIDGenerator(6, 'hrodvitnir');

            assert.isTrue(!!rd);

            // @ts-ignore
            assert.equal(rd.version, '6');

            // @ts-ignore
            assert.isNotEmpty(rd.variant);

            // @ts-ignore
            assert.isNotEmpty(rd.staticData);

            // @ts-ignore
            assert.isTrue(rd.staticData.length == 12);

            const uuid = rd.generate();
            assert.isTrue(uuid.charAt(14) == '6');
        });

        it('should create with same lengthes', () => {
            const reg = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

            for (let i = 0; i < 32; i++) {
                const rd = new UUIDGenerator('hrodvitnir');

                const uuid = rd.generate();

                assert.equal(uuid.length, 36)
                assert.isTrue(reg.test(uuid));
            }
        });
    });

    describe('Generate static', () => {
        it('should create static', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            // @ts-ignore
            const staticData: string = rd.generateStatic(6);

            // @ts-ignore
            assert.equal(staticData.length, 6);
        });
    })

    describe('Get hash code', () => {
        it('should generate hashCode', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            // @ts-ignore
            const hash: string = rd.getHashCode('hrodvitnir');

            // @ts-ignore
            assert.equal(hash, '15e50dcef949');
        });

        it('should generate hashCode for short string', () => {
            const rd = new UUIDGenerator('h');

            // @ts-ignore
            const hash: string = rd.getHashCode('hrodvitnir');

            // @ts-ignore
            assert.equal(hash, '15e50dcef949');
        });

        it('should generate hashCode', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            // @ts-ignore
            const hash: string = rd.getHashCode('hrodvitnirhrodvitnirhrodvitnirhrodvitnir');

            // @ts-ignore
            assert.equal(hash, '9f8f5f930e8a');
        });
    })

    describe('Convert static', () => {
        it('should keep length', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            // @ts-ignore
            const stat: string = rd.convertStatic('123456789012');

            assert.equal(stat.length, 12);
        });

        it('should growth', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            // @ts-ignore
            const stat: string = rd.convertStatic('123456');

            assert.equal(stat.length, 12);
        });

        it('should cat', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            // @ts-ignore
            const stat: string = rd.convertStatic('12345678901234567890');

            assert.equal(stat.length, 12);
        });
    })

    describe('Get variant', () => {
        it('should get variant', () => {
            const rd = new UUIDGenerator('hrodvitnir');

            for (let i = 0; i < 50; i++) {
                // @ts-ignore
                const stat: string = rd.getVariant();
                assert.equal(stat.length, 1);
            }
        });
    })
})
