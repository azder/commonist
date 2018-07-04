const {isobj} = require('../../../cjs/is');

describe('cjs/is/isobj', () => {

    it('is a function', () => {
        expect(typeof isobj).toEqual('function');
    });

    it('returns `false` for `null`', () => {
        expect(isobj(null)).toBe(false);
    });

    it('returns `false` for `undefined`', () => {
        expect(isobj(void 0)).toBe(false);
    });

    it('returns `false` for empty string', () => {
        expect(isobj('')).toBe(false);
    });

    it('returns `false` for non-empty string', () => {
        expect(isobj('asdf')).toBe(false);
    });

    it('returns `false` for number `0`', () => {
        expect(isobj(0)).toBe(false);
    });

    it('returns `false` for number `NaN`', () => {
        expect(isobj(NaN)).toBe(false);
    });

    it('returns `false` for boolean `true`', () => {
        expect(isobj(true)).toBe(false);
    });

    it('returns `false` for boolean `false`', () => {
        expect(isobj(false)).toBe(false);
    });

    it('returns `true` for empty object', () => {
        expect(isobj({})).toBe(true);
    });

    it('returns `true` for empty array', () => {
        expect(isobj([])).toBe(true);
    });

    it('returns `true` for arrow function', () => {
        expect(isobj($ => $)).toBe(true);
    });

    it('returns `true` for old style function expression', () => {
        // eslint-disable-next-line func-names, prefer-arrow-callback
        expect(isobj(function ($) {
            return $;
        })).toBe(true);
    });

    it('returns `true` for Boolean object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(isobj(new Boolean())).toBe(true); // eslint-disable-line no-new-wrappers
    });

    it('returns `true` for Number object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(isobj(new Number())).toBe(true); // eslint-disable-line no-new-wrappers
    });

    it('returns `true` for Stirng object', () => {
        // noinspection JSPrimitiveTypeWrapperUsage
        expect(isobj(new String())).toBe(true); // eslint-disable-line no-new-wrappers
    });

});


