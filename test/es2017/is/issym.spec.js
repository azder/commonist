const {issym} = require('../../../es2017/is');

describe('es2017/is/issym', () => {

    it('is a function', () => {
        expect(typeof issym).toEqual('function');
    });

    it('returns `true` for a symbol', () => {
        expect(issym(Symbol('test'))).toBe(true);
    });

    it('returns `false` for `null`', () => {
        expect(issym(null)).toBe(false);
    });

    it('returns `false` for `undefined`', () => {
        expect(issym(void 0)).toBe(false);
    });

    it('returns `false` for empty object', () => {
        expect(issym({})).toBe(false);
    });

    it('returns `false` for empty string', () => {
        expect(issym('')).toBe(false);
    });

    it('returns `false` for non-empty string', () => {
        expect(issym('asdf')).toBe(false);
    });

    it('returns `false` for number `0`', () => {
        expect(issym(0)).toBe(false);
    });

    it('returns `false` for number `NaN`', () => {
        expect(issym(NaN)).toBe(false);
    });

    it('returns `false` for boolean `false`', () => {
        expect(issym(false)).toBe(false);
    });

    it('returns `false` for boolean `true`', () => {
        expect(issym(true)).toBe(false);
    });

});


