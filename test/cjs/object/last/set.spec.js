const {set} = require('../../../../cjs/object/last');

describe('cjs/object/last/set', () => {

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
        expect(typeof set).toEqual('function');
    });

    it('attaches a value to an object at specific key', () => {
        set(key, value, object);
        expect(object).toEqual({a: 1, b: 2, c: 3});
    });

    it('returns the same object', () => {
        expect(set(key, value, object)).toBe(object);
    });

});


