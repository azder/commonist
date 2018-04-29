const RESULT = Symbol('RESULT');
const THROTTLE = Symbol('THROTTLE');
const TIMEOUT = Symbol('TIMEOUT');
const DEBOUNCE = Symbol('DEBOUNCE');

const THIS = Symbol('THIS');

const timeout = (function timeout(wait, fn, ...args) {

    const timeouted = function timeouted() {
        timeouted[RESULT] = fn.apply(timeouted[THIS], args);
    };

    timeouted[THIS] = this;
    timeouted[TIMEOUT] = setTimeout(timeouted, wait);

    return timeouted;

});


const throttle = (function throttle(wait, fn) {

    const throttled = (function throttled(...args) {

        const now = Date.now();

        if (0 > (throttled[THROTTLE] + wait - now)) {
            throttled[THROTTLE] = now;
            throttled[RESULT] = fn.apply(throttled[THIS], args);
        }

        return throttled[RESULT];

    });

    throttled[THIS] = this;
    throttled[THROTTLE] = Date.now();

    return throttled;

});


const debounce = (function debounce(immediate, wait, fn) {

    const debounced = function debounced(...args) {

        const ready = (immediate && !debounced[DEBOUNCE]); // set before clearTimeout() clears DEBOUNCE
        clearTimeout(debounced[DEBOUNCE]);

        debounced[DEBOUNCE] = setTimeout(() => {
            debounced[DEBOUNCE] = null;
            if (!immediate) {
                debounced[RESULT] = fn.apply(debounced[THIS], args);
            }
        }, wait);

        if (ready) {
            debounced[RESULT] = fn.apply(debounced[THIS], args);
        }

        return debounced[RESULT];

    };

    debounced[THIS] = this;
    return debounced;

});


module.exports = Object.freeze({

    RESULT,

    THROTTLE,
    TIMEOUT,
    DEBOUNCE,

    timeout,
    throttle,
    debounce,

});
