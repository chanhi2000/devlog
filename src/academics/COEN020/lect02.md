---
lang: ko-KR 
title: Lect. 02
description: COEN020 > Lect. 02
category: 
  - SCU
  - COEN020
  - Computer Engineering
tag: 
  - "coen"
  - "coen020"
  - "scu"
  - "cpp"
  - "c"
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Data Representation

### Kinds of Data

- __Numbers__
  - Integers
    - unsigned
    - signed
  - Reals
    - fixed-point
    - floating-point
  - Binary-coded decimal
- __Text__
  - ASCII Characters
  - Strings
- __Other__
  - Graphics
  - Images
  - Video
  - Audio

---

## Numbers are Different

- Computers use binary numbers (0's and 1's).
  - Requires more digits to represent the same magnitude.
- Computers store and process numbers using a fixed number of digits (“fixed-precision”).
- Computers represent signed numbers using 2's complement instead of the more natural (for humans) “sign-plus-magnitude” representation.

---

## Positional Number Systems

- Numeric values are represented by a sequence of digit symbols.
- Symbols represent numeric values.
  - Symbols are not limited to '0'-'9'!
- Each symbol's contribution to the total value of the number is weighted according to its position in the sequence.

---

## Polynomial Evalutaion

::: tabs 

@tab:active Whole Numbers ($\text{Radix} = 10$):

$$
1234_{10}=1\times10^3+2\times10^2+3\times10^1+4\times10^0
$$

@tab With Fractional Part ($\text{Radix} = 10$):

$$
36.72_{10}=3\times10^1+6\times10^0+7\times10^{-1}+2\times10^{-2}
$$

@tab General Case ($\text{Radix} = \text{R}$):

$$
(S_1S_0.S_{-1}S_{-2})_R=S_1\times{R}^1+S_0\times{R}^0+S_{-1}\times{R}^{-1}+S_{-2}\times{R}^{-2}
$$

:::

---

## CONVERTING RADIX $R$ to Decimal

$$
\begin{align*}
36.72_8&=3\times8^{1}+6\times8^{0}+7\times8^{-}+2\times8^{-}\\
&=24+6+0.875+0.03125\\
&=30.90625_{10}
\end{align*}
$$

::: tip Note

Polynomial evaluation doesn't work if you try to convert in the other direction – _i.e._, from decimal to something else!  Why?

:::

---

## Binary to Decimal Conversion

Converting to decimal, so we can use polynomial evaluation:

$$
\begin{align*}
10110101_2&=1×2^7+1×2^5+1×2^4+1×2^2+1×2^0\\
&=128+32+16+4+1\\
&=181_{10}
\end{align*}
$$


## Variation on Polynomial Evaluation

::: tabs

@tab:active Example

$$
\begin{align*}
0.437_8&=\left(4\times8^{-1}\right)+\left(3\times8^{-2}\right)+\left(7\times8^{-3}\right)\\
&=\left(4\times0.125\right)+\left(3\times0.015625\right)+\left(7\times0.001953125\right)\\
&=\cdots
\end{align*}
$$

@tab alternative approach

$$
\begin{align*}
0.437_8&=\left(4\times8^{-1}\right)+\left(3\times8^{-2}\right)+\left(7\times8^{-3}\right)\\
&=\frac{\left(4\times8^{(2)}+3\times8^{(1)}+7\times8^{(0)}\right)}{8^{(3)}}\\
&=\frac{\left(4\times64+3\times8+7\times1\right)}{512}\\
&=\frac{287}{512}=0.5605468751
\end{align*}
$$

:::

### ![PROBLEMS: DECIMAL CONVERSION][1]

---

## DECIMAL TO BINARY CONVERSION

- Converting to binary — can't use polynomial evaluation!
- Whole part and fractional parts must be handled separately!
  - __Whole part__: *Use repeated division*.
  - __Fractional part__: *Use repeated multiplication*.
  - Combine results when finished.

---

## DECIMAL TO BINARY CONVERSION

### WHOLE PART: REPEATED DIVISION

- Divide by target radix (2 in this case)
- Remainders become digits in the new representation ($0\le\text{digit}<R$)
- Digits produced in right to left order.
- Quotient is used as next dividend.
- Stop when the quotient becomes zero, but use the corresponding remainder.

### EXAMPLE

| operation | quotiente | remainder |
| :---: | :---: | :---: |
| $97\div2$ | 48 | 1 |
| $48\div2$ | 24 | 0 |
| $24\div2$ | 12 | 0 |
| $12\div2$ | 6 | 0 |
| $6\div2$ | 3 | 0 |
| $3\div2$ | 1 | 1 |
| $1\div2$ | 0 | 1 |

$$
\therefore\:\text{RESULT}=1100001_2
$$

### FRACTIONAL PART: REPEATED MULTIPLICATION

- Multiply by target radix (2 in this case)
- Whole part of product becomes digit in the new representation ($0\le\text{digit}<R$)
- Digits produced in left to right order.
- Fractional part of product is used as next multiplicand.
- Stop when the fractional part becomes zero (sometimes it won't).

### EXAMPLE

| operation | quotiente | remainder |
| :---: | :---: | :---: |
| $0.1\times2=0.2$ | 0.2 | 0 |
| $0.2\times2=0.4$ | 0.4 | 0 |
| $0.4\times2=0.8$ | 0.8 | 0 |
| $0.8\times2=1.6$ | 0.6 | 1 |
| $0.6\times2=1.2$ | 0.2 | 1 |
| $0.2\times2=0.4$ | 0.4 | 0 |
| $\vdots$ | $\vdots$ | $\vdots$ |

$$
\therefore\:\text{RESULT}=0.00011001100110011\cdots_{2}
$$

### HOW MUCH SHOULD WE KEEP?

- MATHEMATICIAN's answer:
  - Use the proper notation: $0.0\overline{0011}$
- SCIENTIST's answer:
  - Preserve significant digits and round:
    - $0.1$
    - $0.0001$
    - Round @ 5th digit: $0.0010$
- ENGINEER's answer:
  - depends on number of bits in the variable ($8$, $16$, $32$, $64$)

### MORAL

Some fractional numbers have an exact representation in one number system, but not in another!  _E.g._, $\tfrac{1}{3}$ has no exact representation in decimal, but does in **base 3**!

$$
\begin{align*}
\frac{1}{3}&=0.3333\cdots_{10}\\
&=0.1_{3}
\end{align*}
$$

What about $\tfrac{1}{10}$ when represented in binary?

$$
\begin{align*}
\frac{1}{10}&=0.1_{10}\\
&=0.00011001100110011\cdots_{2}
\end{align*}
$$

- Can these representation errors accumulate?
- What does this imply about equality comparisons of real numbers?

### [PROBLEMS: REPEATED MULTIPLICATION][2]

---

## COUNTING

- Principle is the same regardless of radix.
  - Add $1$ to the least significant digit.
  - If the result is less than $R$, write it down and copy all the remaining digits on the left.
  - Otherwise, write down zero and add $1$ to the next digit position, etc.

---

## COUNTING IN BINARY

| decimal | binary |
| :-----: | :----: |
| $0$ | $0000$ |
| $1$ | $0001$ |
| $2$ | $0010$ |
| $3$ | $0011$ |
| $4$ | $0100$ |
| $5$ | $0101$ |
| $6$ | $0110$ |
| $7$ | $0111$ |
 
::: tip Note

Note the pattern!

- LSB (bit 0) toggles on every count.
- Bit 1 toggles on every *other* count.
- Bit 2 toggles on every *fourth* count.
- Etc….

:::

---

## HEXADECIMAL NUMBERS

- The *__number__* of digit symbols is determined by the radix (*e.g.*, $R=16$)
- The *__value__* of the digit symbols range from $0$ to $15$ ($0$ to $R-1$).
- The *__symbols__* are 0-9 followed by A-F.
- Conversion between binary and hex is trivial!
- Use as a shorthand for binary (significantly fewer digits are required for same magnitude).

---

## MEMORIZE THIS!

| hexadecimal | binary |
| :---: | :---: |
| $0$ | $0000$ |
| $1$ | $0001$ |
| $2$ | $0010$ |
| $3$ | $0011$ |
| $4$ | $0100$ |
| $5$ | $0101$ |
| $6$ | $0110$ |
| $7$ | $0111$ |
| $8$ | $1000$ |
| $9$ | $1001$ |
| $A$ | $1010$ |
| $B$ | $1011$ |
| $C$ | $1100$ |
| $D$ | $1101$ |
| $E$ | $1110$ |
| $F$ | $1111$ |

---

## BINARY/HEX CONVERSIONS

- Hex digits are in one-to-one correspondence with groups of four binary digits:

$$
\begin{align*}
&3\text{A}56.\text{E}2\text{F}8\\
&=0011\:1010\:0101\:0110\:.\:1110\:0010\:1111\:1000
\end{align*}
$$

- Conversion is a simple table lookup!
- Zero-fill on left and right ends to complete the groups!
- Works because $16=2^4$ (power relationship)

### [PROBLEMS: DECIMAL CONVERSION](ex02.md)

---

## QUESTION:

Do you trust the used car salesman that tells you that the 1966 Mustang he wants to sell you has only the 13,000 miles that it's odometer shows?

- If not, what has happened?
- Why?
> PROBLEM OF "FIXED PRECISION"

---

## REPRESENTATION ROLLOVER

- Consequence of fixed precision.
- Computers use fixed precision!
- Digits are lost on the left-hand end.
- Remaining digits are still correct.
- Rollover while counting …
  - Up: $999999\to000000\:\:(R^{n}-1\to0)$
  - Down: $000000\to999999\:\:(0\to{R}^{n}-1)$

---

## ROLLOVER IN UNSIGNED BINARY

- Consider an 8-bit byte used to represent an unsigned integer:
  - Range: $00000000\to11111111\:\:(0\to255_{10})$
  - Incrementing a value of $255$ should yield $256$, but this exceeds the range.
  - Decrementing a value of $0$ should yield $-1$, but this exceeds the range.
  - Exceeding the range is known as *__overflow__*.

---

## DIFFERENCE BETWEEN ROLLOVER AND OVERFLOW
- *__Rollover__* describes a pattern sequence behavior.
- *__Overflow__* describes an arithmetic behavior.
- Whether or not rollover causes overflow *depends on how the patterns are interpreted* as numeric values!
  - _E.g._, In signed two's complement representation, $11111111\to00000000$ corresponds to counting from minus one to zero.


---

## TWO INTERPRETATIONS

$$
\begin{align*}
1010\:0111_2&\begin{cases}
\underset{\text{unsigned}}{\rightarrow}&167_{10}\\
\underset{\text{signed}}{\rightarrow}&-89_{10}
\end{cases}
\end{align*}
$$

- Signed vs. unsigned is a matter of interpretation; thus *a single bit pattern can represent two different values*.
-  Allowing both interpretations is useful:
  - Some data (_e.g._, count, age) can never be negative, and having a greater range is useful.

---

## WHY NOT SIGN+MAGNITUDE?

- Complicates addition :
  - To add, first check the signs. If they agree, then add the magnitudes and use the same sign; else subtract the smaller from the larger and use the sign of the larger.
  - How do you determine which is smaller/larger?
- Complicates comparators:
  - Two zeroes!

### EXAMPLE:

$$
\begin{matrix}
&2_{10}\\
+&-7_{10}\\\hline
&?
\end{matrix}\:\:\:\:
\begin{matrix}
&0010\\
+&1111\\\hline
&????
\end{matrix}
$$

since $111>010$

$$
\begin{matrix}
&7_{10}\\
-&2_{10}\\\hline
&?
\end{matrix}\:\:\:\:
\begin{matrix}
&111\\
-&010\\\hline
&101
\end{matrix}
$$

use sign of $111$:

$$
\therefore\:\underline{1}101=-5_{10}
$$

---

## WHY 2'S COMPLEMENT?

- Just as easy to determine sign as in sign+magnitude.
- Almost as easy to change the sign of a number.
- Addition can proceed w/out worrying about which operand is larger.
- A single zero!
- One hardware adder works for both signed and unsigned operands.

### EXAMPLE:

signed:

$$
\begin{matrix}
&2_{10}\\
+&-7_{10}\\\hline
&?
\end{matrix}\:\:\:\:
\begin{matrix}
&0010\\
+&1001\\\hline
&1011
\end{matrix}
$$

$$
\therefore\:1011=-5_{10}
$$

unsigned:

$$
\begin{matrix}
&2_{10}\\
+&9_{10}\\\hline
&?
\end{matrix}\:\:\:\:
\begin{matrix}
&0010\\
+&1001\\\hline
&1011
\end{matrix}
$$

$$\therefore\:1011=11_{10}$$

---

## CHANGING THE SIGN

sign+magnitude:

$$
\begin{align*}
+5&=0101\\
-5&=1101
\end{align*}
$$

2's complement:

$$
\begin{align*}
+5&=0101\\
\sim(5)&=1010\\
-5&=\sim(5)+1\\
&=1011
\end{align*}
$$

---

## EASIER HAND METHOD

- STEP 1: Copy the bits from right to left, through and including the first 1.
- STEP 2: Copy the inverse of the remaining bits.

$$
\begin{matrix}
4&0{\color{Red}1}00\\
\downarrow&\downarrow\\
-4&{\color{Red}1}100
\end{matrix}
$$

---

## REPRESENTATION WIDTH

You must be sure to pad the original value out to the full representation width before applying the algorithm!

::: tabs

@tab:active WRONG

$$
\begin{align*}
+25_{10}&=11001_{2}\\
-25_{10}&=\underset{\text{apply algorithm}}{00111_{2}}\\
&=\underset{\text{expand to 8-bits}}{00000111_{2}}
\end{align*}
$$

@tab RIGHT

$$
\begin{align*}
+25_{10}&=11001_{2}\\
&\left<\begin{matrix}
\text{add}\begin{cases}\text{leading }0\text{s}&\text{if positive}\\\text{leading }1\text{s}&\text{if negative}\end{cases}
\end{matrix}\right>\\
-25_{10}&=\underset{\text{expand to 8-bits}}{00011001_{2}}\\
&=\underset{\text{apply algorithm}}{11100111_{2}}
\end{align*}
$$

:::

---

## CONVERTING 2's COMPLEMENT TO DECIMAL

### METHOD #1

- If MSB is 0, the number is positive.
  - convert as if it were unsigned.
- If MSB is 1, the number is negative.
- Apply 2's complement algorithm to find bit pattern of the corresponding positive magnitude
- Convert the bit pattern to decimal.
- Put a minus sign in front.

### EXAMPLE:

$$
\begin{align*}
-(10110010_{2})&\to01001110_{2}\\
&\left<01001110_{2}=\left(2^6+2^3+2^2+2^1\right)=78_{10}\right>\\
\therefore\:10110010_{2}&=-78
\end{align*}
$$

### METHOD #2:

Use polynomial evaluation, but make the contribution of the MSB be negative:

$$
\begin{align*}
10110010_{2}&=(-1\times2^7)+(2^5)+(2^4)+(2^1)\\
&=-128+32+16+2\\
&=-78_{10}
\end{align*}
$$

---

## 2's COMPLEMENT ANOMALY

$$
\begin{align*}
-128&=1000\:0000\\
-(-128)&=\sim(1000\:0000)+1\\
&=0111\:1111+1\\
&=1000\:0000
\end{align*}
$$

Result is negative! *__Why__*?
> OVERFLOW

---

## RANGE OF UNSIGNED INTEGERS

Each of '$n$' bits can have one of two values.

$$
\begin{align*}
\begin{matrix}
\text{Total }\#\text{ of}\\
\text{ patterns of }n\text{ bits}
\end{matrix}
&=\underset{\text{do it }n\text{ times}}{2\times2\times2\times\cdots\times2}\\
&=2^{n}
\end{align*}
$$

If $n$-bits are used to represent an unsigned integer value:
- __Range__: $0$ to $2^n-1$  ($2^n$ different values)

### [PROBLEMS: UNSIGNED RANGE][4]

---

## RANGE OF SIGNED BINARY INTEGERS

- __Half__ of the $2^n$ patterns will be used for positive values, and half for negative.
- Half is $2^{n-1}$.
  - Positive Range: $0$ to  $2^{n-1}-1$  ($2^{n-1}$ patterns)
  - Negative Range: $-2^{n-1}$ to $-1$ ($2^{n-1}$ patterns)

### EXAMPLE

for 8-Bits ($n=8$)

$$
\begin{align*}
\therefore\:\text{range}:&-2^7\:\text{to}\:+2^7-1
\end{align*}
$$

### [PROBLEMS: 2's COMPLEMENT RANGE][5]

---

## DECIMAL ADDITION TABLE

---

## DECIMAL ADDITION USING TABLE

---

## BINARY ADDITION & CARRIES

| $C_\text{in}$ | $X$ | $Y$ | $n$ | $C_\text{out}$ | $S$ |
| :---: | :---: | :---: | :---: |:---: | :---: |
| 0 | 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 2 | 1 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 2 | 1 | 0 |
| 1 | 1 | 0 | 2 | 1 | 0 |
| 1 | 1 | 1 | 3 | 1 | 1 |

- Column "$n$" is simply the sum of $C_\text{in}$, $X$ and $Y$.
- Columns $C_\text{out}$ & $S$ are simply the binary representation of $n$.

---

## BINARY ADDITION USING TABLE


## BINARY SUBTRACTION & BORROWS


## UNSIGNED OVERFLOW


## SIGNED OVERFLOW


## DETECTING OVERFLOW

### [PROBLEMS: OVERFLOW][6]


## COMPARING INTEGERS


## FLOATING-POINT REALS


## SINGLE-PRECISION FLOATING-POINT REPRESENTATION


## REPRESENTATION OF CHARACTERS


## CHARACTER CONSTANTS IN C


## CHARACTER ESCAPES


## REPRESENTATION OF STRINGS

## BINARY CODED DECIMAL (BCD)

- packed (2 digits per byte):
- unpacked (1 digit per byte):

---

<TagLinks />