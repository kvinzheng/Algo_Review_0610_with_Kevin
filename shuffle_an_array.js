function shuffle(a){
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      a[i - 1], a[j] = a[j], a[i - 1];
  }
  return a;
}



let arr = [1, 2, 3, 4]
console.log(shuffle(arr));
