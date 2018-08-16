const {iso2date} = require('../../../../cjs/date/date-unary');

describe('cjs/date/date-unary/iso2date', () => {

    const iso = '2000-01-02T03:04:05.678Z';
    const date = new Date(iso);

    it('is a function', () => {
        expect(typeof iso2date).toEqual('function');
    });

    it('returns the correct date', () => {
        expect(iso2date(iso)).toEqual(date);
    });

    it('generates new object of type date', () => {
        const actual = iso2date(iso);
        expect(actual instanceof Date).toBeTruthy();
        expect(actual).not.toBe(date);
    });

});


