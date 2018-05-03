const set = (
    (object, key, value) => {
        object[key] = value;
        return object;
    }
);

const put = (
    (object, value, key) => {
        object[key] = value;
        return object;
    }
);


module.exports = Object.freeze({
    set,
    put,
});
