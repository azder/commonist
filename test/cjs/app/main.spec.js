const {main} = require('../../../cjs/app');

describe('cjs/app/main', () => {

    let fn;

    beforeEach(() => {
        fn = jest.fn();
    });

    it('is a function', () => {
        expect(typeof main).toEqual('function');
    });

    it('immediately executes', () => {
        main(fn);
        expect(fn).toBeCalled();
    });

    it('is called only once', () => {
        main(fn);
        expect(fn.mock.calls.length).toBe(1);
    });

    it('is called with process.argv parameters', () => {
        main(fn);
        expect(fn).toBeCalledWith(...process.argv);
    });

});


