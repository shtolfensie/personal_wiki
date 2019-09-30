# Unit 2.3

## Negative numbers

### Old way

---

Sign bit
Firts bit is -/+ all other bits represent a positive number

```
0000  0
0001  1
...
0111  7
1000 -0
1001 -1
1010 -2
...
1111 -7
```

This is bad because we have two representations of 0 (+0, -0). And manipulationg these kind of numbers is not elegant and has problems.

### 2's complement

---

Represent negative number -x using the positive number 2^n-x.  
If we have 4 bits, that is 2^4-x => 16-x.

```
0000  0
0001  1
...
0111  7
1000 -8 (8)
1001 -7 (9)
1010 -6 (10)
1011 -5 (11)
...
1110 -2 (14)
1111 -1 (15)
```

16-7 = 9 => 1001.  
Kinda like the left most bit is -8 and everything is a positive we add to it.

```
1010 -6

-8 4 2 1    -8 | 4 2 1
 1 0 1 0 =>  1 | 0 1 0 => -8 + 2 = -6
```

Positive numbers in the range: `0...2^n-1 -1`  
Negative numbers in the range: `-1...-2^n-1`

### Addiotion in 2's complement

```
-2 + -3 => 14 + 13 =>
 1110
+1101
 ----
11011 (we drop the overflow) => 1011 => 11 (dec)

1011 => -5
```

Representation is modulo 2^n  
Addition is modulo 2^n

### Computiong -x

Input: x  
Output: -x (in 2's complement)

```
Idea: 2^n - x = 1 + (2^n - 1) - x
                (2^n = 11111111)
                11111111
               -10101100
                -------- => we just flip the bits when
                01010011    subtractiong from all 1s
          after this just add 1:
            if right most bit is 0, flip it => 1
            if it's 1, flip and carry one
            stop if a bit is 0 and only flip it.
            no need to continue.
```
