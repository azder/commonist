const {enumInt} = require('../../../cjs/enums');

describe('cjs/enums/enumInt', () => {

    const ITER = Symbol.iterator;

    let arr;
    let obj;

    beforeEach(() => {
        arr = ['zero', 'one', 'two', 'three'];
        obj = {zero: void 0, one: 1, two: '2', three: null};
    });

    afterEach(() => {
        arr = null;
        obj = null;
    });

    it('is a function', () => {
        expect(typeof enumInt).toEqual('function');
    });

    it('does not modify the original array', () => {
        enumInt(arr);
        expect(arr).toEqual(['zero', 'one', 'two', 'three']);
    });

    it('does not modify the original object', () => {
        enumInt(obj);
        expect(obj).toEqual({zero: void 0, one: 1, two: '2', three: null});
    });


    it('generates new object from array definition with the enumerated elements', () => {
        const actual = enumInt(arr);
        const iter = actual[ITER]; // in order to ignore the iterator extra
        expect(actual).toEqual({zero: 0, one: 1, two: 2, three: 3, [ITER]: iter});
        expect(actual).not.toBe(arr);
    });


    it('generates new object from object definition with the enumerated elements', () => {
        const actual = enumInt(obj);
        const iter = actual[ITER]; // in order to ignore the iterator extra
        expect(actual).toEqual({zero: 0, one: 1, two: '2', three: 3, [ITER]: iter});
        expect(actual).not.toBe(obj);
    });


    it('ignores additions/changes after the fact', () => {

        const a = enumInt(arr);
        const o = enumInt(obj);

        a.zero = 6;
        o.six = 6;

        delete a.two;
        delete o.two;

        expect(a).toEqual({zero: 0, one: 1, two: 2, three: 3, [ITER]: a[ITER]});
        expect(o).toEqual({zero: 0, one: 1, two: '2', three: 3, [ITER]: o[ITER]});

    });


});


