function inArray(array1, array2) {
    let res = new Set();
    for (let idx1 = 0; idx1 < array1.length; idx1++) {
        for (let idx2 = 0; idx2 < array2.length; idx2++) {
            if (array2[idx2].includes(array1[idx1])) {
                res.add(array1[idx1]);
            }
        }
    }
    return Array.from(res).sort();
}

let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));
