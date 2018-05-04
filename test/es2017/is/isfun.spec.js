const {isfun} = require('../../../es2017/is');

describe('es2017/is/isnil', () => {

    it('returns `true` for arrow function', () => {
        expect(isfun($ => $)).toBe(true);
    });

    it('returns `true` for old style function expression', () => {
        // eslint-disable-next-line func-names, prefer-arrow-callback
        expect(isfun(function ($) {
            return $;
        })).toBe(true);
    });

    it('returns `false` for `undefined`', () => {
        expect(isfun()).toBe(false);
    });

    it('returns `false` for `null`', () => {
        expect(isfun(null)).toBe(false);
    });

    it('returns `false` for empty string', () => {
        expect(isfun('')).toBe(false);
    });

    it('returns `false` for number `0`', () => {
        expect(isfun(0)).toBe(false);
    });

    it('returns `false` for number `NaN`', () => {
        expect(isfun(NaN)).toBe(false);
    });

    it('returns `false` for boolean `false`', () => {
        expect(isfun(false)).toBe(false);
    });

    it('returns `false` for boolean `true`', () => {
        expect(isfun(true)).toBe(false);
    });


    // TODO: add tests for generators, async functions and similar corner cases

});


