const push = (
    (array, item) => {
        array.push(item);
        return array;
    }
);

const ipush = (
    (array, item) => [...array, item]
);

const sort = (
    (array, fn) => 'function' === typeof fn ? array.sort(fn) : array.sort()
);

const isort = (
    (array, fn) => 'function' === typeof fn ? [...array].sort(fn) : [...array].sort()
);


module.exports = Object.freeze({
    push,
    ipush,
    sort,
    isort,
});
