// iso  is String
// unix is Number
// date is Date

const iso2date = (
    iso => new Date(iso)
);

const unix2date = (
    unix => new Date(unix)
);


const date2iso = (
    date => date.toISOString()
);

const date2unix = (
    date => date.getTime()
);


const iso2unix = (
    iso => date2unix(iso2date(iso))
);

const unix2iso = (
    unix => date2iso(unix2date(unix))
);


module.exports = Object.freeze({

    iso2date,
    unix2date,

    date2iso,
    date2unix,

    iso2unix,
    unix2iso,

});
