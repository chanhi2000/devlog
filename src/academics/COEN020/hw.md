---
lang: ko-KR 
title: Homeworks
description: COEN020 > Homeworks
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

## hw01

### 2.1

Give the entire count sequence of binary patterns for 3-bit unsigned integers.

### 2.2

What is the decimal value represented by the 8-bit binary number $11001001.0101_2$ when interpreted as:

**(a)** an unsigned number?

**(b)** A 2's-complement number?

### 2.3

What is the decimal value represented by the binary number $10001101_2$ when interpreted as:

**(a)** an sign + magnitude number?

**(b)** A 2's-complement number?

### 2.4

Use polynomial evaluation to:

**(a)** Convert $$101101_2$$ to base 10

**(b)** Convert $$\text{DEAF}_{16}$$ to base 10.

**(c)** Convert $$0.324_7$$ to base 10.

### 2.5

Use repeated division to:

**(a)** Convert $$150_{10}$$ to base 2.

**(b)** Convert $$1500_{10}$$ to base 16.

**(c)** Convert $$400_{10}$$ to base 7.

### 2.6

Use repeated multiplication to:

**(a)** Convert $$0.9_{10}$$ to base 2.

**(b)** Convert $$0.9_{10}$$ to base 16.

**(c)** Convert $$0.9_{10}$$ to base 3.

### 2.7

Use shortcuts based on power relationships to:

**(a)** Convert $\text{ACE}5_{16}$ to base 2.

**(b)** Convert $\text{FACE}_{16}$ to base 8.

**(c)** Convert $1011.0111_2$ to base 8.

**(d)** Convert $232.1_4$ to base 8.

**(e)** Convert $$17.6_9$$ to base 3.

### 2.8

Perform the indicated conversions:

**(a)** Convert $$\text{FA}.\text{CE}_{16}$$ to base 2 (binary).

**(b)** Convert $$101011.01101_2$$ to base 16 (hexadecimal).

**(c)** Convert $$56.23_{10}$$ to base 2 (binary).

**(d)** Convert $$11011.01101_2$$ to base 10 (decimal).

**(e)** Convert $$12.34_5$$ to base 7.

### 2.9

Convert the decimal number $$-37.1_{10}$$ to 16-bit 2's-complement binary, with 8 bits of integer part and 8 bits of fractional part.


## 2.10
What is the 2's-complement 8-bit representation of $$-100_{10}$$?


## 2.11
Give the 2's-complement 8-bit representation of $$-7.7_{10}$$, with the binary point in the middle (*e.g.* $$bbbb.bbbb$$).


## 2.12
For each of the following 2's-complement numbers, give the corresponding 8-bit representation of the negative of its value:

**(a)** $$01010101.$$

**(b)** $$10101010.$$

**(c)** $$1000.0001$$

**(d)** $$0111.1110$$


## 2.13
Consider a 2's complement number represented by $$n$$ bits, with the binary point placed between the two most significant bits (*e.g.*, $$b.bb\cdots{b}$$).

**(a)** Give an algebraic expression in terms of $$n$$ for the positive value that has the smallest nonzero magnitude.

**(b)** Give the binary representation of (a). where $$n$$ is 8.

**(c)** Give an algebraic expression in terms of $$n$$ for the negative value that has the smallest nonzero magnitude.

**(d)** Give the binary representation of (c). where $$n$$ is 8.


## 2.14
Give the 32-bit binary representation of the floating-point value $$-25.1$$:


## 2.15
The ASCII code for the symbol “0” is $$30_{16}$$. Use this fact to determine the hex constants that would be stored in memory, starting at $$N$$, for the $$C$$ character string “12345”:


## 2.16
Perform the indicated addition on the following 4-bit operands, filling in all the indicated fields:


## 2.17
Perform the indicated subtraction on the following 4-bit operands, filling in all the indicated fields: 


## 2.18
If the operands are unsigned, then does an overflow occur:

**(a)** In problem 16?

**(b)** In problem 17?


## 2.19
If the operands are signed, then does an overflow occur:

**(a)** In problem 16?

**(b)** In problem 17?


## 2.20
Find the indicated *sum* of the following signed 8-bit 2's-complement numbers and the indicate which cause an arithmetic overflow to occur:

**(a)**
$$
\begin{matrix}
&\:00111110\\
+&\:01101100\\\hline
\end{matrix}
$$

**(b)**
$$
\begin{matrix}
&\:01011011\\
+&\:10110101\\\hline
\end{matrix}
$$

**(c)**
$$
\begin{matrix}
&\:11101011\\
+&\:11110100\\\hline
\end{matrix}
$$


## 2.21
Find the indicated *difference* of the following signed 8-bit 2's-complement numbers and the indicate which cause an arithmetic overflow to occur:

**(a)**
$$
\begin{matrix}
&\:00101100\\
-&\:010110101\\\hline
\end{matrix}
$$

**(b)**
$$
\begin{matrix}
&\:00101110\\
-&\:11101011\\\hline
\end{matrix}
$$

**(c)**
$$
\begin{matrix}
&\:11000100\\
-&\:10101101\\\hline
\end{matrix}
$$


## 2.22
Assume that the C assignment statement “`s=a+b`” has just been executed, where all variables are declared as signed ints. Write a C expression that is true if and only if the addition results in an overflow.


## 2.23
Repeat problem 22 for the C assignment statement “`s=a-b`”.

## 2.24
What is the most positive decimal value of a 6-bit 2's-complement number?


## 2.25
What is the most negative decimal value of a 6-bit 2's-complement number?


## 2.26
What is the minimum decimal value of a 6-bit unsigned number?


## 2.27
What is the maximum decimal value of a 6-bit unsigned number?


## 2.28
The exact binary representation of one-sixth ($$\tfrac{1}{6}$$) requires an infinite number of digits. Truncating it (discarding extra bits) to make it fit within a fixed-precision representation creates a representational error. What is the absolute error that results from storing one-sixth without rounding using $$8$$ fractional bits?


## 2.29
Overflow is impossible when subtracting one unsigned number from another. [T/F]


## 2.30
Overflow is impossible when subtracting two signed operands of the same sign. [T/F]


## 2.31
There are two representations of zero in 2's complement. [T/F]


## 2.32
If rollover occurs when incrementing an integer, there is an overflow. [T/F]


## 2.33
In 2's complement, the absolute values of full-scale negative and full-scale positive are identical. [T/F]

<TagLinks />