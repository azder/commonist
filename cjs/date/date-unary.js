const iso2date = (
    timestamp => new Date(timestamp)
);

const unix2date = (
    unixtime => new Date(unixtime)
);


const date2iso = (
    date => date.toISOString()
);

const date2unix = (
    date => date.getTime()
);


const iso2unix = (
    timestamp => date2unix(iso2date(timestamp))
);

const unix2iso = (
    unixtime => date2iso(unix2date(unixtime))
);


module.exports = Object.freeze({

    iso2date,
    unix2date,

    date2iso,
    date2unix,

    iso2unix,
    unix2iso,

});
