const {parseHex} = require('../../../es2017/static-methods');


describe('es2017/static-methods/parseHex', () => {

    it('is a function', () => {
        expect(typeof parseHex).toEqual('function');
    });

    describe('parses hexadecimal numbers', () => {

        it('when simple numeric string', () => {
            expect(parseHex('1')).toEqual(1);
            expect(parseHex('A')).toEqual(0xA);
            expect(parseHex('-1')).toEqual(-1);
        });

        it('starting with blank(s)', () => {
            expect(parseHex(' 1')).toEqual(1);
            expect(parseHex('   A')).toEqual(0xA);
            expect(parseHex('       -1')).toEqual(-1);
        });

        it('ending with blank(s)', () => {
            expect(parseHex('1 ')).toEqual(1);
            expect(parseHex('A   ')).toEqual(10);
            expect(parseHex('-1   ')).toEqual(-1);
        });

        it('ending with any characters', () => {
            expect(parseHex('1yah')).toEqual(1);
            expect(parseHex('A-xfdas')).toEqual(0xA);
            expect(parseHex('-1#$!@')).toEqual(-1);
        });

    });

    describe('returns NaN for', () => {

        it('empty string', () => {
            expect(parseHex('')).toEqual(NaN);
        });

        it('non-string value', () => {
            expect(parseHex(void 0)).toEqual(NaN);
            expect(parseHex(null)).toEqual(NaN);
            expect(parseHex({})).toEqual(NaN);
        });

        it('string starting with non-hexadecimal number', () => {
            expect(parseHex('xa1')).toEqual(NaN);
            expect(parseHex('yfda')).toEqual(NaN);
            expect(parseHex('zb-1')).toEqual(NaN);
        });


    });

});


