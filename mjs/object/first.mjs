export const set = (
    (object, key, value) => {
        object[key] = value;
        return object;
    }
);

export const put = (
    (object, value, key) => {
        object[key] = value;
        return object;
    }
);


