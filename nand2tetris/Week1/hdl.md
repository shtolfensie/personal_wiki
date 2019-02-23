# Hardware description language

- HDL is a functional/declarative language
- the order of HDL statements is insignificant
- before using a chip part, you must know its interface
  - Not (in= , out= ), And(a= , b= , out= )
- connections like partName(a=a, out=out) are common

### Common HDLs

- VHDL
- Verilog

## Example of a HDL code with a part diagram

[HDL part desc with a diagram](./hdl_code_w_diagram.png)

When constructing a HDL part:

- name all internal connections
- write all gates from left-to-right
  - this is only a convention for more readable code

HDL documentation:
www.nand2tetris.org/hdl-survival-guide
