const {amain} = require('../../../es2017/app');

process.on('unhandledRejection', () => {
    // workaround for a jest bug that spills out deprecation warning when not needed
});

describe('es2017/app/amain', () => {

    let fn;


    beforeEach(() => {
        fn = jest.fn();
    });

    it('is a function', () => {
        expect(typeof amain).toEqual('function');
    });

    it('immediately executes', () => {
        amain(fn);
        expect(fn).toBeCalled();
    });

    it('is called only once', () => {
        amain(fn);
        expect(fn.mock.calls.length).toBe(1);
    });

    it('is called with process.argv parameters', () => {
        amain(fn);
        expect(fn).toBeCalledWith(...process.argv);
    });

});



