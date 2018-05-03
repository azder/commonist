const {isort} = require('../../../../es2017/array/last');

describe('es2017/array/last/isort', () => {

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
        expect(typeof isort).toEqual('function');
    });

    it('works even without comparison function', () => {
        expect(isort(void 0, array)).toEqual([1, 2, 3, 4]);
    });

    it('does not modify original the array', () => {
        isort(fn, array);
        expect(array).toEqual([4, 2, 1, 3]);
    });

    it('generates new array with the elements sorted', () => {
        const actual = isort(fn, array);
        expect(actual).toEqual([1, 2, 3, 4]);
        expect(actual).not.toBe(array);
    });

});


