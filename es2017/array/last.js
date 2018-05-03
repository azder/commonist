const push = (
    (item, array) => {
        array.push(item);
        return array;
    }
);

const ipush = (
    (item, array) => [...array, item]
);

module.exports = Object.freeze({
    push,
    ipush,
});
