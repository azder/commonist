const {parseDec} = require('../../../es2017/static-methods');


describe('es2017/static-methods/parseDec', () => {

    it('is a function', () => {
        expect(typeof parseDec).toEqual('function');
    });

    describe('parses decimal numbers', () => {

        it('when simple numeric string', () => {
            expect(parseDec('1')).toEqual(1);
            expect(parseDec('10')).toEqual(10);
            expect(parseDec('-1')).toEqual(-1);
        });

        it('starting with blank(s)', () => {
            expect(parseDec(' 1')).toEqual(1);
            expect(parseDec('   10')).toEqual(10);
            expect(parseDec('       -1')).toEqual(-1);
        });

        it('ending with blank(s)', () => {
            expect(parseDec('1 ')).toEqual(1);
            expect(parseDec('10   ')).toEqual(10);
            expect(parseDec('-1   ')).toEqual(-1);
        });

        it('ending with any characters', () => {
            expect(parseDec('1a')).toEqual(1);
            expect(parseDec('10-fdas')).toEqual(10);
            expect(parseDec('-1#$!@')).toEqual(-1);
        });

    });

    describe('returns NaN for', () => {

        it('empty string', () => {
            expect(parseDec('')).toEqual(NaN);
        });

        it('non-string value', () => {
            expect(parseDec(void 0)).toEqual(NaN);
            expect(parseDec(null)).toEqual(NaN);
            expect(parseDec({})).toEqual(NaN);
        });

        it('string starting with non-decimal number', () => {
            expect(parseDec('a1')).toEqual(NaN);
            expect(parseDec('fda')).toEqual(NaN);
            expect(parseDec('b-1')).toEqual(NaN);
        });


    });

});


