const {ipush} = require('../../../../cjs/array/first');

describe('cjs/array/first/ipush', () => {

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
        ipush(array, item);
        expect(array).toEqual([1, 2, 3]);
    });

    it('generates new array with the given item appended at the end', () => {
        const actual = ipush(array, item);
        expect(actual).toEqual([1, 2, 3, 4]);
        expect(actual).not.toBe(array);
    });

});


