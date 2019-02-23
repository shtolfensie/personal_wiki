# Unit 1

## Unit 1.1

### Boolean logic

Boolean logic operates with only `0`s and `1`s.  
A boolean expression can be written as **formulas** or as **truth tables**.

#### Basic boolean operations

(x AND y)  
x∧y
|x |y |AND|
|---|---|---:|
|0 |0 |0 |
|1 |0 |0 |
|0 |1 |0 |
|1 |1 |1 |

(x OR y)  
x∨y
|x |y |OR|
|---|---|---:|
|0 |0 |0 |
|1 |0 |1 |
|0 |1 |1 |
|1 |1 |1 |

NOT(x)  
¬x
|x |NOT|
|---|---:|
|0 |1 |
|1 |0 |

#### Boolean expressions

NOT(0 OR (1 AND 1)) = NOT(0 OR 1) = NOT(1) = 0

Boolean expression evaluation follows same rules of order of operation when it comes to parentheses as regular mathematical expressions.

#### Boolean functions

f(x, y, z) = (x AND y) OR (NOT(x) AND z)

#### Boolean identities

##### Comutative laws

(x AND y) = (y AND x)  
(x OR y) = (y OR x)

##### Associative laws

(x AND (y AND z)) = ((x AND y) AND z)  
same for OR

##### Distributive laws

(x AND (y OR z)) = (x AND y) OR (x AND z)  
(x OR (y AND z)) = (x OR y) AND (y OR z)

##### De Morgan laws

NOT(x AND y) = NOT(x) OR NOT(y)  
NOT(x OR y) = NOT(x) AND NOT(y)

## Unit 1.2

### Boolean function synthesis

From truth table to expression

- take every row that results in a `1` and create an expression which gives a `1`
  - this expression will result in a `1` only for this row
- combine these expressions with an `OR`

|     | x   | y   | z   | f   |
| --- | --- | --- | --- | --- |
| 1.  | 0   | 0   | 0   | 1   |
| 2.  | 0   | 0   | 1   | 0   |
| 3.  | 0   | 1   | 0   | 1   |

1\. --> (NOT(x) AND NOT(y) AND NOT(z))  
3\. --> (NOT(x) AND y AND NOT(z))  
==> (NOT(x) AND NOT(y) AND NOT(z)) OR (NOT(x) AND y AND NOT(z))

### NAND operation

NAND(x,x) = NOT(x AND x)
|x|y|NAND|
|---|---|---|
|0|0|1|
|0|1|1|
|1|0|1|
|1|1|0|

The NAND operation can be used to represent every other boolean operation

1. NOT(x) = (x NAND x)
2. (x AND y) = NOT(x NAND y)

   (x NAND y) NAND (x NAND y)
