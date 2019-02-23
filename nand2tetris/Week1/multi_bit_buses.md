# Unit 1.6

## Buses

Bus = array of bits

To define a 16 bit bus:
`bus[16]`

```
CHIP Add3Way16 {
  IN first[16], second[16], third[16];
  OUT out[16];

  PARTS:
    Add16(a=first, b=second, out=temp);
    Add16(a=temp, b=third, out=out);
}
```

To manipulate bits in a bus  
buses are index from right to left

```
IN a[4];
OUT out;

AND(a=a[0], b=a[1], out=t01);
AND(a=t01, b=a[2], out=t012);
AND(a=t023, b=a[3], out=out);
```

### Sub buses

buses can be split into (comprised of) sub buses

```
IN lsb[8], msb[8], ...
...
Add16(a[0..7]=lsb, a[8..15=msb, b=..., out=...]);
Add16(..., out[0..3]=t1, out[4..15]=t2);
```

this HDL:

- overlaps of sub-buses are allowed on output buses of parts
- width of internal pins is deduced
- false and true can be used as buses of any width
