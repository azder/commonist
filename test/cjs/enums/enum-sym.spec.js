const {enumSym} = require('../../../cjs/enums');

describe('cjs/enums/enumSym', () => {

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
        expect(typeof enumSym).toEqual('function');
    });

    it('does not modify the original array', () => {
        enumSym(arr);
        expect(arr).toEqual(['zero', 'one', 'two', 'three']);
    });

    it('does not modify the original object', () => {
        enumSym(obj);
        expect(obj).toEqual({zero: void 0, one: 1, two: '2', three: null});
    });


    it('generates new object from array definition with the enumerated elements', () => {
        const actual = enumSym(arr);
        expect(Object.values(actual).map(v => typeof v)).toEqual(['symbol', 'symbol', 'symbol', 'symbol']);
        expect(actual).not.toBe(arr);
    });


    it('generates new object from object definition with the enumerated elements', () => {
        const actual = enumSym(obj);
        expect(Object.values(actual).map(v => typeof v)).toEqual(['symbol', 'symbol', 'symbol', 'symbol']);
        expect(actual).not.toBe(obj);
    });


    it('ignores additions/changes after the fact', () => {

        const a = enumSym(arr);
        const o = enumSym(obj);

        a.zero = 6;
        o.six = 6;

        delete a.two;
        delete o.two;

        expect(Object.keys(a)).toEqual(['zero', 'one', 'two', 'three']);
        expect(Object.keys(o)).toEqual(['zero', 'one', 'two', 'three']);

    });


    it('ignores duplicate properties to the resulting enum', () => {

        const a = enumSym(['one', 'two', 'one', 'two']);
        const o = enumSym({three: 'one', four: 'two', one: null, two: void 0});

        expect(Object.keys(a)).toEqual(['one', 'two']);
        expect(Object.keys(o)).toEqual(['three', 'four', 'one', 'two']);

    });


});


