const {isort} = require('../../../../es2017/array/unary');

describe('es2017/array/unary/isort', () => {

    let array;

    beforeEach(() => {
        array = [4, 2, 1, 3];
    });

    afterEach(() => {
        array = null;
    });

    it('is a function', () => {
        expect(typeof isort).toEqual('function');
    });

    it('works even without comparison function', () => {
        expect(isort(array)).toEqual([1, 2, 3, 4]);
    });

    it('does not modify original the array', () => {
        isort(array);
        expect(array).toEqual([4, 2, 1, 3]);
    });

    it('generates new array with the elements sorted', () => {
        const actual = isort(array);
        expect(actual).toEqual([1, 2, 3, 4]);
        expect(actual).not.toBe(array);
    });

});


