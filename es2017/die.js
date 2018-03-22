const die = (
    (...args) => {
        console.log(...args);
        process.exit();
    }
);

module.exports = Object.freeze({
    die
});

