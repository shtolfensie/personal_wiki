# Unit 1.3

## Logic gates

- a technique for implementing Boolean functions

Logic gates:

1. Elementary (Nand, And, ...)
2. Composite (Mux, Adder, ...)

### NAND gate

#### Gate diagram

![Gate diagram image](./nand_gate_diagram.png)

#### Functional specification

```
if (a==1 and b==1)
  then out=0 alse out=1
```

#### Truth table

| a   | b   |  out |
| --- | --- | ---: |
| 0   | 0   |    1 |
| 0   | 1   |    1 |
| 1   | 0   |    1 |
| 1   | 1   |    0 |

### Composite gates

![Example of a composite gate](./composite_gate.png) <- three way AND gate

### Interface/Implementation

Interface = the WHAT  
IMPLEMENTATION = the HOW

Only one interface, every interface should be unique.  
Multiple possible implementations.
