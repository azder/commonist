// application constructs

const iife = (
    fn => ('function' === typeof fn) ? fn() : fn
);


const argiife = (
    ([...args, fn]) => ('function' === typeof fn) ? fn(...args) : [...args, fn]
);


const main = (
    fn => argiife(process.argv, fn)
);

const amain = (
    async (fn) => await main(fn)
);

module.exports = Object.freeze({
    iife,
    argiife,
    main,
    amain,
});
