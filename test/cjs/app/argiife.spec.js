const {argiife} = require('../../../cjs/app');

describe('cjs/app/argiife', () => {

    let fn;
    let args;

    beforeEach(() => {
        fn = jest.fn();
        args = [1, 2, 3, 4];
    });

    it('is a function', () => {
        expect(typeof argiife).toEqual('function');
    });

    it('immediately executes', () => {
        argiife(args, fn);
        expect(fn).toBeCalled();
    });

    it('is called only once', () => {
        argiife(args, fn);
        expect(fn.mock.calls.length).toBe(1);
    });

    it('is called with given parameters', () => {
        argiife(args, fn);
        expect(fn).toBeCalledWith(...args);
    });

    it('returns the arguments when function is not given', () => {
        expect(argiife(args, 5)).toEqual([...args, 5]);
    });

});


