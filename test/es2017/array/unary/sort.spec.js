const {sort} = require('../../../../es2017/array/unary');

describe('es2017/array/unary/sort', () => {

    let array;

    beforeEach(() => {
        array = [4, 2, 1, 3];
    });

    afterEach(() => {
        array = null;
    });

    it('is a function', () => {
        expect(typeof sort).toEqual('function');
    });

    it('sorts an array', () => {
        sort(array);
        expect(array).toEqual([1, 2, 3, 4]);
    });

    it('returns the same array', () => {
        expect(sort(array)).toBe(array);
    });

});


