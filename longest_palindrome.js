function longestPalindrome(s) {
    let maxLen = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let cur = s.substring(i, j + 1);
            if (cur.split('').reverse().join('') === cur){
              maxLen = Math.max(maxLen, cur.length);
            }
        }
    }
    return maxLen;
}
let s = "racecar"
console.log(longestPalindrome(s));
