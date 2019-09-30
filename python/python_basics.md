# Python Basics

This entry describes the basic Python principles.

## Python datatypes

### Numbers

The basic datatypes in python related to numbers are:

- `integer` - normal integer type - whole numbers. eg. 3, 5, 345
- `floating point numbers` - eg. 3.14, 88.3, 93.1
- `complex numbers` - specified as \<real part>+\<imaginary part>
  - eg. `2+3j`

### Strings

To work with text, Python uses the `string` type.  
Strings can use both types of quotes (`''` or `""`).

To **escape** a character the backslash `\` is placed before it. To ignore escaping, a string can be specified as a **raw** string by putting the letter _r_ before the opening quote. `str = r'All \n this \r will \\ print.'` >>> **All \n this \r will \\\ print.**

#### Triple-Quoted strings

A string can also be delimited by three single or double quotes on each side. `'''This is a string.'''`. Such strings can contain both single `'` and double `"` quotes without the need to excape them. Such strings can also span multiple lines, and the newline char `\n` will be preserved when further working with the string.

```
'''This is a string
that spans multiple lines.
These lines will be printed like this.
'''
```