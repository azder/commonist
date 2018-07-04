const {put} = require('../../../../cjs/object/first');

describe('cjs/object/first/put', () => {

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
        put(object, value, key);
        expect(object).toEqual({a: 1, b: 2, c: 3});
    });

    it('returns the same object', () => {
        expect(put(object, value, key)).toBe(object);
    });

});


