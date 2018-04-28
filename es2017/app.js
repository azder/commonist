// application constructs

const argiife = (
    ([...argv], fn) => ('function' === typeof fn) ? fn(...argv) : [...argv, fn]
);

const iife = (
    fn => argiife([], fn)
);

const main = (
    fn => argiife(process.argv, fn)
);

const amain = (

    async (fn) => (
        await argiife(process.argv, fn).catch(error => {
            console.error(error); // eslint-disable-line no-console
            process.exit(1);
        })
    )

);

module.exports = Object.freeze({
    argiife,
    iife,
    main,
    amain,
});
