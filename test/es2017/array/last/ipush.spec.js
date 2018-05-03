const {ipush} = require('../../../../es2017/array/last');

describe('es2017/array/last/ipush', () => {

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
        expect(typeof ipush).toEqual('function');
    });

    it('does not modify original array', () => {
        ipush(item, array);
        expect(array).toEqual([1, 2, 3]);
    });

    it('generates new array with the given item appended at the end', () => {
        const actual = ipush(item, array);
        expect(actual).toEqual([1, 2, 3, 4]);
        expect(actual).not.toBe(array);
    });

});


