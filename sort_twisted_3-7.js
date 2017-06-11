function sortTwisted37(array) {
    arr = swap37(array.map(String));
    arr = arr.sort((a, b) => a - b);
    return swap37(arr).map(Number);
}

function swap37(arr) {
    for (var i in arr) {
        var num = arr[i];
        if (num.includes('3') || num.includes('7')) {
            num = arr[i].split('');
            for (var j in num) {
                if (num[j] === '3') {
                    num[j] = '7';
                } else if (num[j] === '7') {
                    num[j] = '3';
                }
            }
            arr[i] = num.join('');
        }
    }
    return arr;
}


var array = [13, 35, -24, 19, 73, 4, 6, 5, -26, 21, 14, -21, 72, -18, 77, -24, -21, 5, 37, -6, 25];
console.log(sortTwisted37(array));
// console.log(swap37(array.map(String)));
