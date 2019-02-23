# Unit 1.5

## Harware simulation

### Simulation options

- interactive
- script-based
- with / without output and compare files

#### Interactive

Manually input 0s and 1s, let the simulator simulate the hardware

#### Script based

[Test script selection](./test_script_select.png)  
Scirpt files: Xor.tst

```
load Xor.hdl;
set a 0, set b 0, eval;
set a 0, set b 1, eval;
set a 1, set b 0, eval;
set a 1, set b 1, eval;
```

To create an output file:

```
output-file Xor.out,
output-list a b out;
set a 0, set b 0, eval, output <-- on each line where we want to output
```

To compare an output file:

```
output-file Xor.out,
compare-to Xor.cmp,
...
```

The chip logic can be implemented in any high level language. This gives us the opportunity to plan and create a .cmp file to use when writing the chip in HDL.

### Hardware constuction projects

- system achitects
- developers

System architect decides which chips are needed.  
Architect creates

- a chip API
- a test script
- a compare file

With these resources a developer codes a chip.
