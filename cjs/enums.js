const enumInt = (
    definition => Object.freeze(
        (
            Array.isArray(definition)
                ? Object.values(definition)
                : Object.keys(definition)
        ).reduce(
            (enm, key, idx) => {
                const val = definition[key];
                enm[key] = null === val || void 0 === val ? idx : val;
                return enm;
            },
            {
                [Symbol.iterator]: function* intIterator() {
                    // eslint-disable-next-line no-invalid-this
                    for (const entry of Object.entries(this)) {
                        yield entry.reverse();
                    }
                },
            }
        )
    )
);

const enumKey = (
    definition => Object.freeze(
        (
            Array.isArray(definition)
                ? Object.values(definition)
                : Object.keys(definition)
        ).reduce(
            (enm, key) => {
                const val = definition[key];
                enm[key] = null === val || void 0 === val ? key : val;
                return enm;
            },
            {
                [Symbol.iterator]: function* keyIterator() {
                    // eslint-disable-next-line no-invalid-this
                    for (const entry of Object.entries(this)) {
                        yield entry.reverse();
                    }
                },
            }
        )
    )
);

const enumSym = (
    definition => Object.freeze(
        (
            Array.isArray(definition)
                ? Object.values(definition)
                : Object.keys(definition)
        ).reduce(
            (enm, key) => {
                const val = definition[key];
                enm[key] = Symbol(null === val || void 0 === val ? key : val);
                return enm;
            },
            {
                [Symbol.iterator]: function* symIterator() {
                    // eslint-disable-next-line no-invalid-this
                    for (const entry of Object.entries(this)) {
                        yield entry.reverse();
                    }
                },
            }
        )
    )
);


module.exports = Object.freeze({
    enumInt,
    enumKey,
    enumSym,
});
