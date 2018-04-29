const {RESULT, TIMEOUT} = require('../../../es2017/call');

describe('es2017/call', () => {

    it('exports used symbol: RESULT', () => {
        expect(RESULT).toBeDefined();
        expect(typeof RESULT).toBe('symbol');
    });

    it('exports used symbol: TIMEOUT', () => {
        expect(TIMEOUT).toBeDefined();
        expect(typeof TIMEOUT).toBe('symbol');
    });

});
