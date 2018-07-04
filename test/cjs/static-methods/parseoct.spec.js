const {parseBin} = require('../../../cjs/static-methods');


describe('cjs/static-methods/parseBin', () => {

    it('is a function', () => {
        expect(typeof parseBin).toEqual('function');
    });

    describe('parses binary numbers', () => {

        it('when simple numeric string', () => {
            expect(parseBin('1')).toEqual(0b1);
            expect(parseBin('-1')).toEqual(-1);
        });

        it('starting with blank(s)', () => {
            expect(parseBin('   1')).toEqual(0b1);
            expect(parseBin('       -1')).toEqual(-1);
        });

        it('ending with blank(s)', () => {
            expect(parseBin('1   ')).toEqual(0b1);
            expect(parseBin('-1   ')).toEqual(-1);
        });

        it('ending with any characters', () => {
            expect(parseBin('1-xfdas')).toEqual(0b1);
            expect(parseBin('-1#$!@')).toEqual(-1);
        });

    });

    describe('returns NaN for', () => {

        it('empty string', () => {
            expect(parseBin('')).toEqual(NaN);
        });

        it('non-string value', () => {
            expect(parseBin(void 0)).toEqual(NaN);
            expect(parseBin(null)).toEqual(NaN);
            expect(parseBin({})).toEqual(NaN);
        });

        it('string starting with non-binary number', () => {
            expect(parseBin('xa1')).toEqual(NaN);
            expect(parseBin('yfda')).toEqual(NaN);
            expect(parseBin('zb-1')).toEqual(NaN);
        });


    });

});


