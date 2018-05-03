const {sort} = require('../../../../es2017/array/first');

describe('es2017/array/first/sort', () => {

    let array;
    let fn;

    beforeEach(() => {
        array = [4, 2, 1, 3];
        fn = (a, b) => a - b;
    });

    afterEach(() => {
        array = null;
        fn = null;
    });

    it('is a function', () => {
        expect(typeof sort).toEqual('function');
    });

    it('sorts an array', () => {
        sort(array);
        expect(array).toEqual([1, 2, 3, 4]);
    });

    it('returns the same array', () => {
        expect(sort(array, fn)).toBe(array);
    });

});


