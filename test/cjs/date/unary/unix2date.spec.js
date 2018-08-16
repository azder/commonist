const {unix2date} = require('../../../../cjs/date/date-unary');

describe('cjs/date/date-unary/unix2date', () => {

    const date = new Date('2000-01-02T03:04:05.678Z');
    const unix = date - 0;

    it('is a function', () => {
        expect(typeof unix2date).toEqual('function');
    });

    it('returns the correct date', () => {
        expect(unix2date(unix)).toEqual(date);
    });

    it('generates new object of type date', () => {
        const actual = unix2date(unix);
        expect(actual instanceof Date).toBeTruthy();
        expect(actual).not.toBe(date);
    });

});


