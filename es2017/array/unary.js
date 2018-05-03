const sort = (
    array => array.sort()
);

const isort = (
    array => [...array].sort()
);

module.exports = Object.freeze({
    sort,
    isort,
});
