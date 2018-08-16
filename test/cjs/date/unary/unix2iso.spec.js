const {unix2iso} = require('../../../../cjs/date/date-unary');

describe('cjs/date/date-unary/unix2iso', () => {

    const iso = '2000-01-02T03:04:05.678Z';
    const unix = new Date(iso) - 0;


    it('is a function', () => {
        expect(typeof unix2iso).toEqual('function');
    });

    it('returns the correct date', () => {
        expect(unix2iso(unix)).toEqual(iso);
    });

    it('returns a string', () => {
        expect(typeof unix2iso(unix)).toEqual('string');
    });

});


