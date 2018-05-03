const {sort} = require('../../../../es2017/array/last');

describe('es2017/array/last/sort', () => {

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
        sort(null, array);
        expect(array).toEqual([1, 2, 3, 4]);
    });

    it('returns the same array', () => {
        expect(sort(fn, array)).toBe(array);
    });

});


