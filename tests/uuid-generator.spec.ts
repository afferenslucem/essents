import { UUIDGenerator } from '../src/index';
import { assert } from "chai";

describe('UUIDGenerator', () => {
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
})
