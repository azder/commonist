const die = (
    (...args) => {
        console.log(...args); // eslint-disable-line no-console
        process.exit();
    }
);

module.exports = Object.freeze({
    die,
});

