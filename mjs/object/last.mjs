export const set = (
    (key, value, object) => {
        object[key] = value;
        return object;
    }
);

export const put = (
    (value, key, object) => {
        object[key] = value;
        return object;
    }
);


