---
fontfamily:
  - charter
---

# Unit 2.2

## Binary addition

After we have addition, we can do any other operation almost for "free".

### Addition mechanic

```
      1 1 1
       ¯|¯|¯|¯|
  0 0 0 1 0 1 0 1
+ 0 1 0 1 1 1 0 0
  ---------------
  0 1 1 1 0 0 0 1
```

Just add the forst two bits.  
0 + 1 = 1, no carry.  
0 + 0 = 0.  
1 + 1 = 2, write down 0 and carry 1.  
1 + 0 + (1) = 2, write down 0 and carry 1.  
1 + 1 + (1) = 3, write down 1 and carry 1.  
0 + 0 + (1) = 1, no carry.
1 + 0 = 1.
0 + 0 = 0.

If there is a carry at the last bit, the overflow is usually dropped. So this kind of addition is not integer addition. It is depended on the size of the word.

### Adders

1. Half adder - adds two bits
2. Full adder - adds three bits
3. Adder - adds two numbers

#### Half adder

![Half adder visualisation](./half_adder.png)  
![Half adder truth table](./half_adder_truth.png)  
![Half adder interface](./half_adder_inter.png)

#### Full adder

![Full adder](./full_adder.png)  
Adds two bits plus a carry.

#### Multi-bit adder

combination of 16 full adders (15 full and 1 half for the right most bit).
Returns a 16 bit bus number.
