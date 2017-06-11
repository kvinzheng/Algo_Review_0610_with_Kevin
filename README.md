# JavaScript

## For loop

```javascript

arr = [
  'r',
  'ra',
  'rac',
  'race',
  'racec',
  'raceca',
  'racecar',
]
// IN
for (let i in arr){
  console.log(i);
}

>>>
el is: 0
el is: 1
el is: 2
el is: 3
el is: 4
el is: 5
el is: 6

// OF
for (let el of arr){
  console.log(el);
}
el is: r
el is: ra
el is: rac
el is: race
el is: racec
el is: raceca
el is: racecar
```
