function randomCase(x) {
    var arr = x.split('');
    for (var i in arr) {
        if (Math.floor(Math.random() * 2) === 1) {
            arr[i] = arr[i].toLowerCase();
        } else {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}

function jadonCase(x) {
    var arr = x.split(' ');
    for (var i in arr) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1, arr[i].length);
    }
    return arr.join(' ');
}

var x = "THIS IS AN ALL CAPS STRING";
console.log(jadonCase(x));
// THIS IS AN ALL CAPS STRING
