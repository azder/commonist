const {ispmt} = require('../../../es2017/is');

describe('es2017/is/ispmt', () => {

    it('is a function', () => {
        expect(typeof ispmt).toEqual('function');
    });

    it('returns `true` for `null`', () => {
        expect(ispmt(null)).toBe(true);
    });

    it('returns `true` for `undefined`', () => {
        expect(ispmt(void 0)).toBe(true);
    });

    it('returns `true` for empty string', () => {
        expect(ispmt('')).toBe(true);
    });

    it('returns `true` for non-empty string', () => {
        expect(ispmt('asdf')).toBe(true);
    });

    it('returns `true` for number `0`', () => {
        expect(ispmt(0)).toBe(true);
    });

    it('returns `true` for number `NaN`', () => {
        expect(ispmt(NaN)).toBe(true);
    });

    it('returns `true` for boolean `false`', () => {
        expect(ispmt(false)).toBe(true);
    });

    it('returns `true` for boolean `true`', () => {
        expect(ispmt(true)).toBe(true);
    });

    it('returns `false` for empty object', () => {
        expect(ispmt({})).toBe(false);
    });

    it('returns `false` for empty array', () => {
        expect(ispmt([])).toBe(false);
    });

    it('returns `false` for Boolean object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(ispmt(new Boolean())).toBe(false); // eslint-disable-line no-new-wrappers
    });

    it('returns `false` for Number object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(ispmt(new Number())).toBe(false); // eslint-disable-line no-new-wrappers
    });

    it('returns `false` for Stirng object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(ispmt(new String())).toBe(false); // eslint-disable-line no-new-wrappers
    });

});


