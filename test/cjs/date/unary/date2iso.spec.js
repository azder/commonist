const {date2iso} = require('../../../../cjs/date/date-unary');

describe('cjs/date/date-unary/date2iso', () => {

    const iso = '2000-01-02T03:04:05.678Z';
    const date = new Date(iso);

    it('is a function', () => {
        expect(typeof date2iso).toEqual('function');
    });

    it('returns the correct date', () => {
        expect(date2iso(date)).toEqual(iso);
    });

    it('returns a string', () => {
        expect(typeof date2iso(date)).toEqual('string');
    });

});


