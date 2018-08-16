const {iso2unix} = require('../../../../cjs/date/date-unary');

describe('cjs/date/date-unary/iso2unix', () => {

    const iso = '2000-01-02T03:04:05.678Z';
    const unix = new Date(iso) - 0;

    it('is a function', () => {
        expect(typeof iso2unix).toEqual('function');
    });

    it('returns the correct date', () => {
        expect(iso2unix(iso)).toEqual(unix);
    });

    it('returns an integer', () => {
        expect(Number.isInteger(iso2unix(iso))).toBeTruthy();
    });

});


