const {enumKey} = require('../../../cjs/enums');

describe('cjs/enums/enumKey', () => {

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
        expect(typeof enumKey).toEqual('function');
    });

    it('does not modify the original array', () => {
        enumKey(arr);
        expect(arr).toEqual(['zero', 'one', 'two', 'three']);
    });

    it('does not modify the original object', () => {
        enumKey(obj);
        expect(obj).toEqual({zero: void 0, one: 1, two: '2', three: null});
    });


    it('generates new object from array definition with the enumerated elements', () => {
        const actual = enumKey(arr);
        const iter = actual[ITER]; // in order to ignore the iterator extra
        expect(actual).toEqual({zero: 'zero', one: 'one', two: 'two', three: 'three', [ITER]: iter});
        expect(actual).not.toBe(arr);
    });


    it('generates new object from object definition with the enumerated elements', () => {
        const actual = enumKey(obj);
        const iter = actual[ITER]; // in order to ignore the iterator extra
        expect(actual).toEqual({zero: 'zero', one: 1, two: '2', three: 'three', [ITER]: iter});
        expect(actual).not.toBe(obj);
    });


    it('ignores additions/changes after the fact', () => {

        const a = enumKey(arr);
        const o = enumKey(obj);

        a.zero = 6;
        o.six = 6;

        delete a.two;
        delete o.two;

        expect(a).toEqual({zero: 'zero', one: 'one', two: 'two', three: 'three', [ITER]: o[ITER]});
        expect(o).toEqual({zero: 'zero', one: 1, two: '2', three: 'three', [ITER]: a[ITER]});

    });


});


