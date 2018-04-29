const RESULT = Symbol('RESULT');
const TIMEOUT = Symbol('TIMEOUT');


const timeout = (
    (wait, fn, ...args) => {
        fn[TIMEOUT] = setTimeout(function timeouted() {
            fn[RESULT] = fn.apply(this, args);
        }, wait);
        return fn;
    }
);



module.exports = Object.freeze({

    RESULT,

    TIMEOUT,

    timeout,

});
