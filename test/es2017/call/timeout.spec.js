const {timeout, RESULT, TIMEOUT} = require('../../../es2017/call');

jest.useFakeTimers();


describe('es2017/call/timeout', () => {

    const hello = 'hello world';
    const world = () => hello;

    let fn;
    let wait;

    beforeEach(() => {
        fn = jest.fn();
        wait = 1000;
    });

    afterEach(() => {
        fn = null;
        wait = null;
    });

    it('is a function', () => {
        expect(typeof timeout).toEqual('function');
    });

    it('calls setTimeout with given `wait` and callback function', () => {
        timeout(wait, fn);
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), wait);
    });

    it('executes the given `fn` after the given `wait` miliseconds', () => {
        timeout(wait, fn);
        expect(fn).not.toBeCalled();
        jest.runAllTimers();
        expect(fn).toBeCalled();
        expect(fn).toBeCalledWith(/* nothing */);
    });

    it('executes the given `fn` with the given args', () => {
        timeout(wait, fn, 1, 2, 3, 4);
        expect(fn).not.toBeCalled();
        jest.runAllTimers();
        expect(fn).toBeCalled();
        expect(fn).toBeCalledWith(1, 2, 3, 4);
    });

    describe('returns the given `fn`', () => {

        it('just after being called', () => {
            expect(timeout(wait, fn)).toBe(fn);
        });

        it('which gets filled with timeout id', () => {

            const f = timeout(wait, world);

            expect(f[RESULT]).toBe(void 0);
            expect(f[TIMEOUT]).toBeDefined();

        });

        it('which gets filled with result after timeout ends', () => {


            const f = timeout(wait, world);

            expect(f[RESULT]).toBe(void 0);
            jest.runAllTimers();
            expect(f[RESULT]).toBe(hello);

        });

    });

});


