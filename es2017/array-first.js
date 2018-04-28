const push = (
    (array, item) => {
        array.push(item);
        return array;
    }
);

const ipush = (
    (array, item) => [...array, item]
);

module.exports = Object.freeze({
    push,
    ipush,
});
