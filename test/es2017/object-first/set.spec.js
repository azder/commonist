const {set} = require('../../../es2017/object-first');

describe('es2017/object-first/set', () => {

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

    it('attaches an value to an object at specific key', () => {
        set(object, key, value);
        expect(object).toEqual({a: 1, b: 2, c: 3});
    });

});


