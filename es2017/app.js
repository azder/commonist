// application constructs


const argiife = (
    ([...argv], fn) => ('function' === typeof fn ? fn(...argv) : [...argv, fn])
);


const iife = (
    fn => argiife([], fn)
);


const main = (
    fn => argiife(process.argv, fn)
);


const GENERIC_ERROR = 1;

const amain = (

    async fn => (
        // eslint-disable-next-line no-return-await
        await argiife(process.argv, fn).catch(error => {
            console.error(error); // eslint-disable-line no-console
            process.exit(GENERIC_ERROR);
        })
    )

);


module.exports = Object.freeze({
    argiife,
    iife,
    main,
    amain,
});
