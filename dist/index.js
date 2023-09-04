"use strict";
const obj = {
    height: 3434,
    weight: 34,
    gender: true
};
const obj2 = {
    height: 67,
    weight: 94,
    gender: false
};
const func = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m;
    return n * m * l;
};
func(25, 23);
