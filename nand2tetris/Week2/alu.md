# Unit 2.4

## Arithmetic logic unit

The ALU compues a function on two inputs, and outputs the result.

Function: one out of a family of pre-defined arithmetic and logic functions

### The Hack ALU

- two 16-bit inputs `x` and `y`
- six 1-bit inputs that determine which function to compute
  - computes one out of a faimly of 18 functions
- one 16-bit output
- two 1-bit control outputs

Function control inputs:

- zx - zero x
- nx - negate x
- zy - zero y
- ny - negate y
- f - if f: out=x+y; else out=x&y
- no - negate out

[Hack ALU truth table](./alu_truth.png)

Output control bits

- zr - if out==0 then zr = 1, else zr = 0
- ng - if out < 0 then ng = 1, else ng = 0
