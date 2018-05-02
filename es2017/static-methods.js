const {keys: okeys, values: ovals, entries: oents, freeze} = Object;
const {isArray: isarr} = Array;
const {
    isNumber:      isnum,
    isInteger:     isint,
    isFinite:      isfin,
    isSafeInteger: issaf,
    isNaN:         isnan,
} = Number;


module.exports = freeze({

    freeze,

    okeys,
    ovals,
    oents,

    isarr,
    isnum,
    isint,
    isfin,
    issaf,
    isnan,

});
