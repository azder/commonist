/* eslint-disable no-console */

const {die} = require('../../../cjs/die');

const exit = process.exit;
const log = console.log;


describe('cjs/die/die', () => {

    let args;

    beforeEach(() => {
        args = [1, 2, 3, 4];
        process.exit = jest.fn();
        console.log = jest.fn();
    });

    afterEach(() => {
        args = null;
        process.exit = exit;
        console.log = log;
    });

    it('is a function', () => {
        expect(typeof die).toEqual('function');
    });

    it('logs provided arguments to console', () => {
        die(...args);
        expect(console.log).toBeCalled();
        expect(console.log).toBeCalledWith(...args);
    });

    it('exits the process', () => {
        die(...args);
        expect(process.exit).toBeCalled();
        expect(process.exit).toBeCalledWith(/* nothing */);
    });

});


