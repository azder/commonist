const set = (
    (object, key, value) => {
        object[key] = value;
        return object;
    }
);

module.exports = Object.freeze({
    set
});
