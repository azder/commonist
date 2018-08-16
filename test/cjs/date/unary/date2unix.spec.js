const {date2unix} = require('../../../../cjs/date/date-unary');

describe('cjs/date/date-unary/date2unix', () => {

    const date = new Date('2000-01-02T03:04:05.678Z');
    const unix = new Date(date) - 0;

    it('is a function', () => {
        expect(typeof date2unix).toEqual('function');
    });

    it('returns the correct date', () => {
        expect(date2unix(date)).toEqual(unix);
    });

    it('returns a string', () => {
        expect(Number.isInteger(date2unix(date))).toBeTruthy();
    });

});


