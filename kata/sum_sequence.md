# Sum of a sequence

[Kata link](https://www.codewars.com/kata/sum-of-a-sequence/train/javascript)

### Attempts

| No. | Successful | Date        | Code          |
| --- | ---------- | ----------- | ------------- |
| 01  | Yes        | 22. 2. 2019 | [Code](###01) |

## Solutions

### 01

```javascript
const sequenceSum = (begin, end, step, res = 0) => {
  for (let i = begin; i <= end; i += step) {
    res += i;
  }
  return res;
};
```

### 02

#### Not my code!

I kinda don't know how this works. Need to look into it.

```javascript
const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  const n = Math.floor((end - begin) / step) + 1;
  return ((2 * begin + step * (n - 1)) * n) / 2;
};
```

There are also a couple of recursive solutions.
