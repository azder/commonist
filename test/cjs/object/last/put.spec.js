const {put} = require('../../../../cjs/object/last');

describe('cjs/object/last/put', () => {

    let object;
    let key;
    let value;

    beforeEach(() => {
        object = {a: 1, b: 2};
        key = 'c';
        value = 3;
    });

    afterEach(() => {
        object = null;
        key = null;
        value = null;
    });

    it('is a function', () => {
        expect(typeof put).toEqual('function');
    });

    it('attaches a value to an object at specific key', () => {
        put(value, key, object);
        expect(object).toEqual({a: 1, b: 2, c: 3});
    });

    it('returns the same object', () => {
        expect(put(value, key, object)).toBe(object);
    });

});


