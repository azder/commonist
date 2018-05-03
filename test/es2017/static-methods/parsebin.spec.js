const {parseOct} = require('../../../es2017/static-methods');


describe('es2017/static-methods/parseOct', () => {

    it('is a function', () => {
        expect(typeof parseOct).toEqual('function');
    });

    describe('parses octal numbers', () => {

        it('when simple numeric string', () => {
            expect(parseOct('1')).toEqual(1);
            expect(parseOct('7')).toEqual(0o7);
            expect(parseOct('-1')).toEqual(-1);
        });

        it('starting with blank(s)', () => {
            expect(parseOct(' 1')).toEqual(1);
            expect(parseOct('   7')).toEqual(0o7);
            expect(parseOct('       -1')).toEqual(-1);
        });

        it('ending with blank(s)', () => {
            expect(parseOct('1 ')).toEqual(1);
            expect(parseOct('7   ')).toEqual(0o7);
            expect(parseOct('-1   ')).toEqual(-1);
        });

        it('ending with any characters', () => {
            expect(parseOct('1yah')).toEqual(1);
            expect(parseOct('7-xfdas')).toEqual(0o7);
            expect(parseOct('-1#$!@')).toEqual(-1);
        });

    });

    describe('returns NaN for', () => {

        it('empty string', () => {
            expect(parseOct('')).toEqual(NaN);
        });

        it('non-string value', () => {
            expect(parseOct(void 0)).toEqual(NaN);
            expect(parseOct(null)).toEqual(NaN);
            expect(parseOct({})).toEqual(NaN);
        });

        it('string starting with non-octal number', () => {
            expect(parseOct('xa1')).toEqual(NaN);
            expect(parseOct('yfda')).toEqual(NaN);
            expect(parseOct('zb-1')).toEqual(NaN);
        });


    });

});


