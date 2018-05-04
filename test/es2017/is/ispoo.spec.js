const {ispoo} = require('../../../es2017/is');

describe('es2017/is/ispoo', () => {

    it('is a function', () => {
        expect(typeof ispoo).toEqual('function');
    });

    it('returns `false` for `null`', () => {
        expect(ispoo(null)).toBe(false);
    });

    it('returns `false` for `undefined`', () => {
        expect(ispoo(void 0)).toBe(false);
    });

    it('returns `false` for empty string', () => {
        expect(ispoo('')).toBe(false);
    });

    it('returns `false` for non-empty string', () => {
        expect(ispoo('asdf')).toBe(false);
    });

    it('returns `false` for number `0`', () => {
        expect(ispoo(0)).toBe(false);
    });

    it('returns `false` for number `NaN`', () => {
        expect(ispoo(NaN)).toBe(false);
    });

    it('returns `false` for boolean `true`', () => {
        expect(ispoo(true)).toBe(false);
    });

    it('returns `false` for boolean `false`', () => {
        expect(ispoo(false)).toBe(false);
    });

    it('returns `false` for empty array', () => {
        expect(ispoo([])).toBe(false);
    });

    it('returns `false` for arrow function', () => {
        expect(ispoo($ => $)).toBe(false);
    });

    it('returns `false` for old style function expression', () => {
        // eslint-disable-next-line func-names, prefer-arrow-callback
        expect(ispoo(function ($) {
            return $;
        })).toBe(false);
    });

    it('returns `true` for empty object', () => {
        expect(ispoo({})).toBe(true);
    });

    it('returns `true` for Boolean object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(ispoo(new Boolean())).toBe(true); // eslint-disable-line no-new-wrappers
    });

    it('returns `true` for Number object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(ispoo(new Number())).toBe(true); // eslint-disable-line no-new-wrappers
    });

    it('returns `true` for Stirng object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(ispoo(new String())).toBe(true); // eslint-disable-line no-new-wrappers
    });

});


