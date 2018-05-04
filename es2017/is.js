const {

    isarr,

    isnum,
    isint,
    isfin,
    issaf,
    isnan,

} = require('./static-methods');


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

});
