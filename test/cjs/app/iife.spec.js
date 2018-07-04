const {iife} = require('../../../cjs/app');

describe('cjs/app/iife', () => {

    let fn;

    beforeEach(() => {
        fn = jest.fn();
    });

    it('is a function', () => {
        expect(typeof iife).toEqual('function');
    });

    it('immediately executes', () => {
        iife(fn);
        expect(fn).toBeCalled();
    });

    it('is called only once', () => {
        iife(fn);
        expect(fn.mock.calls.length).toBe(1);
    });

    it('is called without parameters', () => {
        iife(fn);
        expect(fn).toBeCalledWith(/* nothing */);
    });

});


