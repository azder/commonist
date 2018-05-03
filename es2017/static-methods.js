const {
    keys:    okeys,
    values:  ovals,
    entries: oents, freeze,
    assign,
} = Object;

const {isArray: isarr} = Array;

const {

    isNumber: isnum,
    isInteger: isint,
    isFinite: isfin,
    isSafeInteger: issaf,
    isNaN: isnan,

    parseInt: pint,

} = Number;


const parseHex = (
    string => pint(string, 16) // eslint-disable-line no-magic-numbers
);

const parseDec = (
    string => pint(string, 10) // eslint-disable-line no-magic-numbers
);

const parseOct = (
    string => pint(string, 8) // eslint-disable-line no-magic-numbers
);

const parseBin = (
    string => pint(string, 2) // eslint-disable-line no-magic-numbers
);


module.exports = freeze({

    freeze,
    assign,

    okeys,
    ovals,
    oents,

    isarr,
    isnum,
    isint,
    isfin,
    issaf,
    isnan,

    pint,

    parseHex,
    parseDec,
    parseOct,
    parseBin,

});
