const set = (
    (key, value, object) => {
        object[key] = value;
        return object;
    }
);

const put = (
    (value, key, object) => {
        object[key] = value;
        return object;
    }
);


module.exports = Object.freeze({
    set,
    put,
});
