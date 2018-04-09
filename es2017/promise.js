const pcall = (
    fn => new Promise(resolve => resolve(fn()))
);

const pthen = (
    fn => Promise.resolve().then(fn)
);

module.exports = Object.freeze({
    pcall,
    pthen,
});
