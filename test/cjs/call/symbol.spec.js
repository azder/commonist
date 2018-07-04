const {RESULT, THROTTLE, TIMEOUT, DEBOUNCE} = require('../../../cjs/call');

describe('cjs/call', () => {

    it('exports used symbol: RESULT', () => {
        expect(RESULT).toBeDefined();
        expect(typeof RESULT).toBe('symbol');
    });

    it('exports used symbol: TIMEOUT', () => {
        expect(TIMEOUT).toBeDefined();
        expect(typeof TIMEOUT).toBe('symbol');
    });

    it('exports used symbol: THROTTLE', () => {
        expect(THROTTLE).toBeDefined();
        expect(typeof THROTTLE).toBe('symbol');
    });

    it('exports used symbol: DEBOUNCE', () => {
        expect(DEBOUNCE).toBeDefined();
        expect(typeof DEBOUNCE).toBe('symbol');
    });

});
