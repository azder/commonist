const {isort} = require('../../../../cjs/array/first');

describe('cjs/array/first/isort', () => {

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
        expect(isort(array)).toEqual([1, 2, 3, 4]);
    });

    it('does not modify original the array', () => {
        isort(array, fn);
        expect(array).toEqual([4, 2, 1, 3]);
    });

    it('generates new array with the elements sorted', () => {
        const actual = isort(array, fn);
        expect(actual).toEqual([1, 2, 3, 4]);
        expect(actual).not.toBe(array);
    });

});


