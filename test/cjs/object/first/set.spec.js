const {set} = require('../../../../cjs/object/first');

describe('cjs/object/first/set', () => {

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
        set(object, key, value);
        expect(object).toEqual({a: 1, b: 2, c: 3});
    });

    it('returns the same object', () => {
        expect(set(object, key, value)).toBe(object);
    });

});


