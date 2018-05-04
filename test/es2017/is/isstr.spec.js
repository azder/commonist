const {isstr} = require('../../../es2017/is');

describe('es2017/is/isstr', () => {

    it('is a function', () => {
        expect(typeof isstr).toEqual('function');
    });

    it('returns `true` for empty string', () => {
        expect(isstr('')).toBe(true);
    });

    it('returns `true` for non-empty string', () => {
        expect(isstr('asdf')).toBe(true);
    });


    it('returns `false` for a symbol', () => {
        expect(isstr(Symbol('test'))).toBe(false);
    });

    it('returns `false` for `null`', () => {
        expect(isstr(null)).toBe(false);
    });

    it('returns `false` for `undefined`', () => {
        expect(isstr(void 0)).toBe(false);
    });

    it('returns `false` for empty object', () => {
        expect(isstr({})).toBe(false);
    });

    it('returns `false` for number `0`', () => {
        expect(isstr(0)).toBe(false);
    });

    it('returns `false` for number `NaN`', () => {
        expect(isstr(NaN)).toBe(false);
    });

    it('returns `false` for boolean `false`', () => {
        expect(isstr(false)).toBe(false);
    });

    it('returns `false` for boolean `true`', () => {
        expect(isstr(true)).toBe(false);
    });

});


