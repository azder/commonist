const {push} = require('../../../../es2017/array/first');

describe('es2017/array/first/push', () => {

    let array;
    let item;

    beforeEach(() => {
        array = [1, 2, 3];
        item = 4;
    });

    afterEach(() => {
        array = null;
        item = null;
    });

    it('is a function', () => {
        expect(typeof push).toEqual('function');
    });

    it('adds an item at the end of the array', () => {
        push(array, item);
        expect(array).toEqual([1, 2, 3, 4]);
    });

    it('returns the same array', () => {
        expect(push(array, item)).toBe(array);
    });

});


