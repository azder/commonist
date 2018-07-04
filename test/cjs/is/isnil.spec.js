const {isnil} = require('../../../cjs/is');

describe('cjs/is/isnil', () => {

    it('is a function', () => {
        expect(typeof isnil).toEqual('function');
    });

    it('returns `true` for `null`', () => {
        expect(isnil(null)).toBe(true);
    });

    it('returns `true` for `undefined`', () => {
        expect(isnil(void 0)).toBe(true);
    });

    it('returns `false` for empty object', () => {
        expect(isnil({})).toBe(false);
    });

    it('returns `false` for empty string', () => {
        expect(isnil('')).toBe(false);
    });

    it('returns `false` for number `0`', () => {
        expect(isnil(0)).toBe(false);
    });

    it('returns `false` for number `NaN`', () => {
        expect(isnil(NaN)).toBe(false);
    });

    it('returns `false` for boolean `false`', () => {
        expect(isnil(false)).toBe(false);
    });

    it('returns `false` for boolean `true`', () => {
        expect(isnil(true)).toBe(false);
    });

});


