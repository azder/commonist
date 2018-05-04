const {

    isarr,

    isnum,
    isint,
    isfin,
    issaf,
    isnan,

} = require('./static-methods');


const PRIMITIVE_TYPES = [
    'undefined',
    'string',
    'boolean',
    'number',
    'symbol',
]; // null is also, but typeof... SMH


const isnil = (
    value => null === value || void 0 === value
);

const issym = (
    value => 'symbol' === typeof value
);

const isfun = (
    value => 'function' === typeof value
);

const isstr = (
    value => !issym(value) && `${value}` === value
);


const ispmt = (
    value => null === value || PRIMITIVE_TYPES.includes(typeof value)
);

const isobj = (
    value => !ispmt(value)
);

const ispoo = ( // is Plain Old Object
    value => !ispmt(value) && !isfun(value) && !isarr(value)
);


module.exports = Object.freeze({

    isnil,
    isfun,
    isarr,
    isstr,
    issym,

    isnum,
    isint,
    isfin,
    issaf,
    isnan,

    ispmt,
    ispoo,
    isobj,

});
