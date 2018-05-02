const smets = require('../../../es2017/static-methods');


describe('es2017/static-methods', () => {

    it('`freeze` is `Object.freeze`', () => {
        expect(smets.freeze).toBe(Object.freeze);
    });

    it('`okeys` is `Object.keys`', () => {
        expect(smets.okeys).toBe(Object.keys);
    });

    it('`ovals` is `Object.values`', () => {
        expect(smets.ovals).toBe(Object.values);
    });

    it('`oents` is `Object.oents`', () => {
        expect(smets.oents).toBe(Object.entries);
    });

    it('`isarr` is `Array.isArray`', () => {
        expect(smets.isarr).toBe(Array.isArray);
    });

    it('`isnum` is `Number.isNumber`', () => {
        expect(smets.isnum).toBe(Number.isNumber);
    });

    it('`isint` is `Number.isInteger`', () => {
        expect(smets.isint).toBe(Number.isInteger);
    });

    it('`isfin` is `Number.isFinite`', () => {
        expect(smets.isfin).toBe(Number.isFinite);
    });

    it('`issaf` is `Number.isSafeInteger`', () => {
        expect(smets.issaf).toBe(Number.isSafeInteger);
    });

    it('`isnan` is `Number.isNaN`', () => {
        expect(smets.isnan).toBe(Number.isNaN);
    });

});


