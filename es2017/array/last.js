const push = (
    (item, array) => {
        array.push(item);
        return array;
    }
);

const ipush = (
    (item, array) => [...array, item]
);

const sort = (
    (fn, array) => 'function' === typeof fn ? array.sort(fn) : array.sort()
);

const isort = (
    (fn, array) => 'function' === typeof fn ? [...array].sort(fn) : [...array].sort()
);

module.exports = Object.freeze({
    push,
    ipush,
    sort,
    isort,
});
