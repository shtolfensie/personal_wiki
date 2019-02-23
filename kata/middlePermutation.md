# Middle Permutation

[Link to Kata](https://www.codewars.com/kata/58ad317d1541651a740000c5/train/javascript)

### Attempts

| No. | Successful | Date        | Code          |
| --- | ---------- | ----------- | ------------- |
| 01  | No         | 21. 2. 2019 | [Code](###01) |

## Solutions

### 01

#### 21. 2. 2019 - not working

only middlePermutation() {...} is my code, everything else is examples from stack ooverflow. Doesn't work due to timeout on larger random test.
Need to calculate the number of expected permutations and only return the one in the middle.

```
function middlePermutation(s) {
//   let res = permut(s).sort();
  let res = Array.from(permut(s.split(''))).map(perm => perm.join('')).sort();
  console.log(res);

  let i = res.length % 2 === 0 ? res.length / 2 - 1 : res.length / 2;
  return res[i];


}

function sFact(num) {
    let rval=1;
    for (let i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

// function permut(string) {

//   if (string.length < 2) return string;

//   let permutations = [];

//   for (let i = 0; i < string.length; i++) {
//     const char = string[i];

//     // check if used
//     if (string.indexOf(char) != i) continue;

//     let remString = string.slice(0, i) + string.slice(i+1, string.length);

//     for (let permutation of permut(remString)) {
//       permutations.push(char + permutation);
//     }
//   }


//   return permutations;
// }

function *permut(a, n = a.length) {
  if (n <= 1) yield a.slice();
  else for (let i = 0; i < n; i++) {
    yield *permut(a, n - 1);
    const j = n % 2 ? 0 : i;
    [a[n-1], a[j]] = [a[j], a[n-1]];
  }
}
```
