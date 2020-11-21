let ob = {
    arr: [1, 2, {
        arr: [5, 6, 7],
        name: "halo"
    }],
    version: 1,
    id: undefined
};

function deepCopy(ob) {
    if (ob) {
        if (typeof ob === "number" || typeof ob === "string" || typeof ob === "boolean" || typeof ob === "function") {
            return ob;
        } else if (Array.isArray(ob)) {
            let newArr = new Array(ob.length);
            for (let i = 0; i < ob.length; i++) {
                newArr[i] = deepCopy(ob[i]);
            }
            return newArr;
        } else if (typeof ob === "object") {
            let newObj = {};
            for (const key in ob) {
                newObj[key] = deepCopy(ob[key]);
            }
            newObj.__proto__ = ob.__proto__;
            newObj.__proto__.constructor = ob.__proto__.constructor;
            return newObj;
        } else {}
    } else {
        if (String(ob) === "undefined") {
            return undefined;
        }
        if (String(ob) === "null") {
            return null;
        }
    }
}

let copiedOb = deepCopy(ob);
console.log(copiedOb);