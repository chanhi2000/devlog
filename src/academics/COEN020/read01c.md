---
lang: ko-KR 
title: Read 01c
description: COEN020 > Read 01c
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

## 2's Complement Multiplication by Hand

::: details 2's Complement Multiplication by Hand

There are a couple of ways of doing 2's complement multiplication by hand. Neither is actually used by the circuitry of a computer because there are more efficient (and more complex) algorithms for hardware implementation.

First, recall that multiplying one N-bit number by another N-bit number will create a product of $2N$ bits.

__Method #1__: First, *sign-extend both operands from $N$ to $2N$ bits* and then perform normal binary multiplication. Use the least-significant $2N$ bits of the result and discard the rest.

![__Example__: Multiplying two 4-bit 2's complement numbers](/images/COEN020/read03a-fig01.png)

__Method #2__: Never multiply by a negative value, and *always sign-extend the partial products*:
- If both operands are positive: no problem
- If operands are of different sign: put positive operand on the bottom and proceed
- If both operands are negative: convert both to their positive equivalent and proceed

![__Example__: Multiplying two 4-bit 2's complement numbers](/images/COEN020/read03a-fig02.png)

Now apply this to the problem we had in class 

$$
-1_{10}\times-2_{10}
$$

![__Method #1__: First, *sign-extend both operands from $N$ to $2N$ bits* and then perform normal binary multiplication. Use the least-significant $2N$ bits of the result and discard the rest.](/images/COEN020/read03a-fig03.png)

![__Method #2__: Never multiply by a negative value, and always *sign-extend the partial products*:](/images/COEN020/read03a-fig04.png)

Actually, if you didn't notice, there's a problem here! The first partial product is $10$, which when  sign-extended should be $1110$, not $0010$. We know that $10$ is supposed to be $+2$, but there's no way the computer would know because it just thinks that it's a 2-bit 2's complement number. The reality here is that $+2$ cannot be represented as a 2-bit 2's complement number, and so this method will not work in this case.

:::

---

## Converting an Unsigned Integer Product to a Signed Integer Product

::: details Converting an Unsigned Integer Product to a Signed Integer Product

Converting an Unsigned Integer Product to a Signed Integer Product

Consider the problem of finding the product of two signed 2's complement integers. We'll do this using the same approach we used for fixed-point multiplication, _i.e._, compute the unsigned product and then modify it — except that we need to keep the full double-length result rather than just the middle half. We'll do it here using four-bit operands, but the principle is the same regardless of operand size.

First the math:

$$
\begin{align*}
A_uB_u&=\left(2^3A_3+A_{2..0}\right)\left(2^3B_3+B_{2..0}\right)\\
&=2^6A_3B_3+2^3\left(A_3B_{2..0}+B_3A_{2..0}\right)+A_{2..0}B_{2..0}\\\\
A_sB_s&=\left(-2^3A_3+A_{2..0}\right)\left(-2^3B3+B_{2..0}\right)\\
&=2^6A_3B_3-2^3\left(A_3B_{2..0}+B_3A_{2..0}\right)+A_{2..0}B_{2..0}\\\\
&=A_uB_u-2^4\left(A_3B_{2..0}+B_3A_{2..0}\right)
\end{align*}
$$

This equation tells us that for each negative operand, we should subtract the three least-significant bits of the other operand from the most-significant half of the unsigned product. When performing these subtractions, even though the math says to subtract only the three least-significant bits (_i.e._, $A_{2..0}$ or $B_{2..0}$ or both) from the unsigned product, you can actually use the entire 4-bit operand (As or Bs):

$$
A_sB_s=A_uB_u2^4\left(A_3B_S+B_3A_S\right)
$$

**Case 1**: Both operands are positive: No subtractions are performed.

**Case 2**: Operands of different signs: We subtract the positive operand from the most-significant half of the unsigned product. The fourth bit of the positive operand is zero, and thus has no effect on the result.

**Case 3**: Both operands are negative: The most-significant bits of both 4-bit operands are 1's. The first subtraction thus changes the sign of the result; the second subtraction changes it back ─ the same final result you would get if the subtraction used only the least-significant three bits (_i.e._, $A_{2..0}$ and $B_{2..0}$).

:::

---

## Divide vs. Shift: When is x/2 different from x>>1?

::: details Divide vs. Shift: When is x/2 different from x>>1?

### When is x/2 different from x>>1?

Everyone "knows" that the following pairs of expressions are equivalent:

> `x*2`  = `x<<1`

> `x/2`  = `x>>1`

Too bad they aren't.

In the C language standard, there is no requirement that the internal representation of signed integers be two's complement. All the permissible representations agree for positive numbers, but negative numbers can have different representations. If `x` is negative, then `x*2` and `x<<1` are quite different on a sign/magnitude system.

However, Win32 requires a two's complement machine, in which case the first equivalence `x*2 ≡ x<<1` is indeed always true.

Of course, the compiler is free to recognize this and rewrite your multiplication or shift operation. In fact, it is very likely to do this, because `x+x` is more easily pairable than a multiplication or shift. Your shift or multiply-by-two is probably going to be rewritten as something closer to an add `eax`, `eax` instruction.

As for the second so-called equivalence, the C language specification originally did not specify whether division of a negative number by a positive number rounds towards or away from zero, but in 1999, the specification was revised to require rounding towards zero. Furthermore, the result of a right-shift of a negative value is unspecified, so the expression `x>>1` has an unspecified result if `x` is negative.

Even if you assume that the shift fills with the sign bit, The result of the shift and the divide are different if `x` is negative.

| CODE | OUTPUT |
| :--: | :----: |
| `(-1) / 2` | 0 |
| `(-1) >> 1` | 1 |

The moral of the story is to write what you mean. If you want to divide by two, then write "`/2`", not "`>>1`".

:::

---

## The IEEE Standard for Floating Point Arithmetic

::: details The IEEE Standard for Floating Point Arithmetic

The IEEE (Institute of Electrical and Electronics Engineers) has produced a standard for floating point arithmetic. This standard specifies how single precision (32 bit) and double precision (64 bit) floating point numbers are to be represented, as well as how arithmetic should be carried out on them.

Because many of our users may have occasion to transfer unformatted or "binary" data between an IEEE machine and the Cray or the VAX/VMS, it is worth noting the details of this format for comparison with the Cray and VAX representations. The differences in the formats also affect the accuracy of floating point computations.

### Single Precision

The IEEE single precision floating point standard representation requires a 32 bit word, which may be represented as numbered from 0 to 31, left to right. The first bit is the sign bit, S, the next eight bits are the exponent bits, '`E`', and the final 23 bits are the fraction 'F':

```
	S EEEEEEEE FFFFFFFFFFFFFFFFFFFFFFF
	0 1      8 9                     31
```

The value V represented by the word may be determined as follows:

- If `E` is 255 and `F` is nonzero, then `V=NaN` (i.e. "Not a number")
- If `E` is 255 and `F` is zero and `S is 1, then `V` is -infinity.
- If `E` is 255 and `F` is zero and `S` is 0, then `V` is infinity.
- If $0<E<255$ then `V=(-1)**S * 2 ** (E-127) * (1.F)` where "`1.F`" is intended to represent the binary number created by prefixing `F` with an implicit leading 1 and a binary point.
- If `E` is 0 and `F` is nonzero, then `V=(-1)**S * 2 ** (-126) * (0.F)` These are "unnormalized" values.
- If `E` is 0 and `F` is zero and `S` is 1, then `V` is -0
- If `E` is 0 and `F` is zero and `S` is 0, then `V` is 0

In particular,

```
	0 00000000 00000000000000000000000 = 0
	1 00000000 00000000000000000000000 = -0

	0 11111111 00000000000000000000000 = Infinity
	1 11111111 00000000000000000000000 = -Infinity

	0 11111111 00000100000000000000000 = NaN
	1 11111111 00100010001001010101010 = NaN

	0 10000000 00000000000000000000000 = +1 * 2**(128-127) * 1.0 = 2
	0 10000001 10100000000000000000000 = +1 * 2**(129-127) * 1.101 = 6.5
	1 10000001 10100000000000000000000 = -1 * 2**(129-127) * 1.101 = -6.5

	0 00000001 00000000000000000000000 = +1 * 2**(1-127) * 1.0 = 2**(-126)
	0 00000000 10000000000000000000000 = +1 * 2**(-126) * 0.1 = 2**(-127)
	0 00000000 00000000000000000000001 = +1 * 2**(-126) * 0.00000000000000000000001
									   = 2**(-149) (Smallest positive value)
```

### Double Precision

The IEEE double precision floating point standard representation requires a 64 bit word, which may be represented as numbered from 0 to 63, left to right. The first bit is the sign bit, `S`, the next eleven bits are the exponent bits, '`E`', and the final 52 bits are the fraction '`F`':

```
	S EEEEEEEEEEE FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF
	0 1        11 12                                                63
```

The value `V` represented by the word may be determined as follows:

- If `E` is 2047 and `F` is nonzero, then `V=NaN` ("Not a number")
- If `E` is 2047 and `F` is zero and `S` is 1, then `V` is -Infinity
- If `E` is 2047 and `F` is zero and `S` is 0, then `V` is Infinity
- If $0<E<2047$ then `V=(-1)**S * 2 ** (E-1023) * (1.F)` where "`1.F`" is intended to represent the binary number created by prefixing `F` with an implicit leading 1 and a binary point.
- If `E` is 0 and `F` is nonzero, then `V=(-1)**S * 2 ** (-1022) * (0.F)` These are "unnormalized" values.
- If `E` is 0 and `F` is zero and `S` is 1, then `V` is -0
- If `E` is 0 and `F` is zero and `S` is 0, then `V` is 0

:::

---

## Embedded.com: Integer Square Root

::: details Embedded.com: Integer Square Root

> Functions that execute an unpredictable number of iterations are frowned upon in real-time systems.

Ask any math-smart programmer how to find a square root of a number, and five will get you ten, he'll tell you about Newton's method, which is an iterative approach. The general idea is this: given a number a for which we want to find the square root, we begin with an estimate $x_0$ for that root. We then refine the estimate using the formula:

$$
x=\frac{1}{2}\left(x_0+\frac{a}{x_0}\right)\tag{1}
$$

This method does work, and works very well. With any kind of reasonable initial estimate, it converges very rapidly. But it is, after all, an iterative method, and the number of iterations it requires to converge depends on the accuracy of our initial guess. In the vicinity of the correct root, the method converges exponentially, meaning that it gives twice as many digits of accuracy at each step. However, if our initial guess is lousy, we only creep up on the solution by halving the error at each step. Everything depends on how well we make that initial guess. I wrote an article on this way back in 1991 ("Square Roots are Simple?" November 1991, p. 30)—my first column for *ESP*, in fact—where I discussed the intimate details of this method and how to optimize the guessing process.

Even with the best estimates, however, we can't predict in advance how many iterations the method will take to converge to suitable accuracy. In general, functions that execute an unpredictable number of iterations are frowned upon in real-time systems, for the obvious reason that they make the total time per task unpredictable, and introduce jitter, not to mention potential disaster in the form of task overruns, into the system.

If you're using integer arithmetic, there's yet another problem: the method fails to converge! Try it for $a=15$ and you'll find that $x$ oscillates between three and four. Only one of these numbers (the three) can possibly be correct, but tell that to Dr. Newton.

I suppose we could fix the method up easily enough, by refusing to allow a solution whose square is greater than a, but there's another possibility: a closed-form solution that can't oscillate. You and I both know that such algorithms exist—we all learned one in high school. And unless you're very weird, you promptly forgot it just as I did. As a sort of dessert to our recent smorgasbord of algorithms for integer arithmetic, this month I'm offering a discussion of the closed-form solutions for the square root.

### Begin at the Beginning

When I'm starting on a new algorithm, I sometimes find it's both fun and instructional to begin by trying to see just how simple-minded an algorithm I can write. I think I do this just to prove to myself that the problem can at least be solved. From there, anything else is mere refinement.


For the case of integer square roots, let's be specific about what we want: we want the largest integer $x$ whose square is less than $a$. Well, I certainly know one way to find such an integer: an exhaustive search. We'll start with $x=1$, keep incrementing it until it's too big, then back off by one. __Listing 1__ shows the simplest square root finder you will ever see. Note carefully the way the loop test is written. The "`<=`" sign is used, rather than simply "`<`", to guarantee that we always exit the loop with `x` too large.

#### Listing 1: The Simplest square root.

```cpp
unsigned long sqrt(unsigned long a) {
	unsigned long x = 1;
	while (x*x <= a)
		++x;
	return --x;
}
```

### Getting Better

Can we improve on __Listing 1__? Of course; it would be difficult not to do so. The biggest problem with the method is that it requires the multiplication `x*x` at each trial. This shouldn't be necessary. Since we're progressing systematically up through the list of all possible integers, we should be able to predict what the next square will be without having to actually perform the multiplication. We can do this by noting that:

$$
(n+1)^2=n^2+2n+1\tag{2}
$$

If we already have the square of $n$, which we do, we can get the square of the next larger number by adding $2n+1$. Now, does this expression look familiar? It should; it's the expression for the sequence of odd numbers. We can see this relationship graphically by considering the difference between the first few squares, as illustrated in __Table 1__.

#### Table 1: Squares and differences.

| $n$ | $n^2$ | Difference |
| :---: | :-----: | :--------: |
| 0 | 0 | - |
| 1 | 1 | 1 |
| 2 | 4 | 3 |
| 3 | 9 | 5 |
| 4 | 16 | 7 |
| 5 | 25 | 9 |
| 6 | 36 | 11 |
| 7 | 49 | 13 |
| 8 | 64 | 15 |
| 9 | 81 | 17 |
| 10 | 100 | 19 |


__Equation 2__ and __Table 1__ show us that we can generate each square simply by adding a successively larger odd integer to the previous one. __Listing 2__ shows the improved algorithm.

#### Listing 2: Improving efficiency

```cpp
unsigned long sqrt(unsigned long a) {
	unsigned long square = 1;
	unsigned long delta = 3;
	while(square <= a) {
		square += delta;
		delta += 2;
	}
	return (delta/2 - 1);
}
```

This program may seem trivial, but the fact is, you could do a lot worse. While this approach, cycling through all possible integers, isn't going to be fast, it is simple and requires neither multiplication nor division. This makes it a wonderful candidate for implementation on a small microcontroller which doesn't support multiplication or division, where the word length is short, and speed isn't much of an issue. PIC programmers take note.

### The Friden Algorithm

The next algorithm requires some background, which is best given in the form of a little ancient history. Once upon a time, a very long time ago, people didn't have ready access to computers. We didn't even have electronic calculators. I was working at NASA in those days. When we needed more accuracy than we could squeeze out of our slide rules, we used an electro-mechanical calculator. There were several vendors of such machines, but the most common for scientific work was a massive, motor- driven, electro-mechanical monster made by Friden. This thing was bigger than the largest typewriter, had a moveable carriage like one, cost about $1,500 in 1960 dollars, and had hernia-inducing mass. You didn't move a Friden without warming up first on a set of dumbbells. (I did once see, nevertheless, a Friden installed in the passenger side of an MG, for use in sports car rallies.)

The Friden keyboard was huge, consisting of 16 columns of 10 keys each, representing the 10 digits. You punched in a number by picking one from column A, one from column B, and so on. On the carriage was a set of rotating wheels, which displayed the answers as digits which showed up in little windows. A set of operator keys on the right told the computer what to do, and it did so with a great gnashing of gear teeth.

When there was a Friden in use in the room, everyone there knew it. The room lights dimmed, the motor whirred, the entire desktop shook, and the wheels spun with a sound somewhere between a threshing machine and a car in dire need of Mr. Transmission. It sounded as though the machine couldn't possibly last out the day, but in fact, the Friden was quite a reliable machine. The basic Friden was strictly a four-function calculator, with no memory except the little wheels on the carriage. However, a square root version was available at considerable extra cost. Our office had only one square root Friden, so we all had to take turns with it when we needed square roots. Or so I thought.

One day I was busily thinking deep-space thoughts, while my officemate was banging away on our common, non-square-root Friden. I heard a strange sound that went something like "punch-punch-cachunk, punch-punch-cachunk, punch-punch-cachunk- DING, punch-punch-DING-clang-clang" in a repeated rhythm. I thought my mate had either lost his marbles, or was creating some new kind of computer game.

I asked him what the heck he was doing. He said, "Finding a square root."

"But, um...," I said, "this isn't a square root Friden."

"I know," he replied. "That's why I have to do it this way."

Turns out, my officemate, "Gap," was an old NASA hand, and one who could make the Friden do all kinds of tricks, including the famous "Friden March," which was the division of two magic numbers that made the thing simulate the "rah, rah, rah-rah-rah" sound of a football cheer.


Somewhere along the line, Gap had learned the Friden algorithm for finding a square root on a non-square-root Friden. It was the same algorithm, in fact, as the one programmed into the cam-and-gear "ROM" of the square-root Friden. Gap taught it to me, and now I'll teach it to you. (Gap, if you're still out there and reading this, thanks for the education.)

The whole algorithm is based loosely on __Equation 2__, but written:
$$
(n+1)^2=n^2+n+(n+1)\tag{3}
$$

The keys on the Friden keyboard were "sticky," meaning that they held whatever was punched into them. The nice part about the formulation in __Equation 3__ is that the last digit punched in was also the number whose square you were taking. To see it work, watch the squares develop in __Table 2__.

#### Table 2: The "Friden" sequence.

| initial number | numbers added | result |
| :------------: | :-----------: | :----: |
| 0 | 0+1 | 1 |
| 1 | 1+2 | 4 |
| 4 | 2+3 | 9 |
| 9 | 3+4 | 16 |
| 16 | 4+5 | 25 |
| 25 | 5+6 | 36 |
| 36 | 6+7 | 49 |
| 49 | 7+8 | 64 |
| 64 | 8+9 | 81 |

As you can see, the number in the third column of this table is always the square of the last number added in.

Only Gap wasn't really adding, he was subtracting--from the number whose root he was seeking. The "DING" sound I had heard occurred each time the subtraction caused an overflow. This was the signal to Gap that he'd gone too far, so he'd back up by adding the last two numbers back in the reverse order he'd subtracted. In that way, the number remaining in the keyboard was always the largest digit whose square didn't exceed the input number. This is precisely the number we seek for the integer square root.

### Shifting

This next part of the algorithm is critically important, both for the Friden solution and for our computerized ones. It's the notion of shifting, in a manner similar to that used in long division.

Somewhere in the dim recesses of your memory, you have a vague recollection of "pointing off by two" to begin the computation of a square root by hand. That's because squaring a one-digit number (from zero through nine) produces a two-digit result (zero through 81). Consider, for a moment, a two-digit decimal number, where the two digits are  $p$ and $q$. We can write this number as:

$$
x=10p+q\tag{4}
$$

Squaring gives:

$$
\begin{align*}
x^2&=(10p+q)^2\\
&=100p^2+20pq+q^2
\end{align*}\tag{5}
$$

To make the example more concrete, let:

$$
\begin{matrix}
p=9;&q=5;
\end{matrix}\tag{6}
$$

so $x=95$. and

$$
\begin{align*}
x^2&=100(81)+20(45)+25\\
&=8100+900+25\\&=9025
\end{align*}\tag{8}
$$

From this example, it's easy to convince oneself that the $p^2$ and the $q^2$ terms don't interact; the latter term can never be as large as 100, so it can never affect the
value of the higher two digits—it fits neatly into the space reserved by the trailing two zeros of $100p^2$.

The middle term, $900$ in our example, is a little more worrisome. It clearly overlaps into the high half of the result, and changes the values of the two high digits. However, a little reflection will convince you that the value of $q$ can never influence the result we get for $p$. The worst-case condition occurs when $q=9$. Even for this case, however, the sum can never be as large as the square of the next larger $p$. In mathematical terms,

$$
10p+9<10(p+1)\tag{9}
$$

Clearly, there is nothing magic about our choice of ten as the base for this number, so extension to other bases is straightforward.

The implication of __Equation 9__ is profound: it means that we can solve for each individual digit of the root separately; there is no need to backtrack and adjust those digits previously found. As we shift to the next lower digit (using the next pair of digits of the input number, which is why we point off by twos), we are refining the final result by adding digits to the right-hand side of the result, but those digits already found remain inviolate. This characteristic is what makes the whole Friden algorithm fly. To see it work, watch the square root develop (less the successive subtraction) in __Table 3__.

#### Table 3: decimal square root.

| $12$ | $34$ | $56$ | $78$ | $90$ |
| -----: | -----: | -----: | -----: | -----: |
| -0-11 | | | | |
| 1 | | | | |
| -1-2 | | | | |
| 8 | | | | |
| -2-3 | | | | |
| 3 | 334 | | | |
| | -30-31 | | | |
| | 273 | | | |
| | -31-32 | | | |
| | 210 | | | |
| | -32-33 | | | |
| | 145 | | | |
| | -33-34 | | | |
| | 78 | | | |
| | -34-35 | | | |
| | 9 | 956 | | |
| | | -350-351 | | |
| | | 255 | 25578 | |
| | | | -3510-3511 | |
| | | | 18557 | |
| | | | -3511-3512 | |
| | | | 11534 | |
| | | | -3512-3513 | |
| | | | 4509 | 450990 |
| | | | | -35130-35131 |
| | | | | 380729 |
| | | | | -35131-35132 |
| | | | | 310446 |
| | | | | -35132-35133 |
| | | | | 240201 |
| | | | | -35133-35134 |
| | | | | 169934 |
| | | | | -35134-35135 |
| | | | | 99665 |
| | | | | -35135-35136 |
| | | | | 29394 |

As you can see from the table, we're still subtracting numbers in pairs, each one larger than the other. Note, however, that we don't ignore the higher-order digits, as we would in long division. Each of our subtracted numbers includes all the digits previously found, and we're working our way up through the last digit, starting with the zero. This process turned out to be just the right approach for the Friden calculator, which had sticky digits and thus remembered the leftmost digits already found. The nicest part of the whole approach, from the point of view of utility, was that after the last digit was found, the numbers left stuck in the keyboard did, in fact, represent the square root--in this case:

$$
\sqrt{1234567890}=35136+\text{fractional part}\tag{10}
$$

It's worth mentioning that this may be the only case in computing history where the result of the computation is found entered into the keyboard, instead of the usual result display.

Another subtlety of the Friden algorithm is also worth mentioning: in __Table 3__, we shifted the "dividend" by two digits to tackle the next digit of the result. This meant copying the digits found thus far over one digit to the right. In the real Friden algorithm, we don't want to move the digits already found—they're stuck in the keyboard. To avoid moving them, we shift the carriage one place to the left instead of two, which leaves the digits of the root lined up correctly without having to move them. You'll see a similar behavior in our final, binary version.

Finally, note that, unlike the case of division, the number we're subtracting gets more and more digits in it as we go, growing from one digit to five. This behavior is hardly surprising. In general the number of digits in the result, which is also the thing we're subtracting, is half that of the original argument. If we're to get this multi-digit result in the keyboard, it stands to reason that the number of digits involved in the subtractions must grow as the process unfolds. Describing this process in words, however, can't begin to evoke the sound that the Friden calculator would generate while taking a square-root.

From a practical point of view, however, the result is the sound of a thrashing calculator whose decibels, not to mention the complexity of the sound, are rising at an alarming rate, roughly comparable to the sound of a Yugo being seriously overrevved. Imagine the sound of a pondful of hoarse frogs, as one after the other chimes in to harmonize with the rest. The first time you hear it, it seems a toss-up which will arrive first, the solution or the demise of a calculating engine. However, despite the alarming noise, I never saw a Friden fail or give an incorrect result.

### The High-School Algorithm

As I mentioned earlier, you and I both know that a method exists for the pencil-and- paper computation of the square root—we all learned the method, and promptly forgot it, in high school.

As fascinating as the Friden algorithm might be, and as valuable from a historical point of view, it has little if any value using any other calculator, one that lacks the sticky, matrix-like keyboard of the Friden. Nevertheless, it is the basis for the "high school" algorithm and gives us enough insight into the process so that, with any luck, you will be able to remember it this time.

Let's go back to __Equations 4__ and __5__, which I'll repeat here for convenience:

$$
\begin{align*}
x&=10p+q\tag{4}\\
x^2&=100p^2+20pq+q^2\tag{5}
\end{align*}
$$


We'll assume that we've already managed to find $p$, by some method or another. We're now looking for the next digit, $q$. Rewriting __Equation 5__ gives:

$$
\begin{align*}
20pq+q^2&=x^2-100p^2\\
q(20p+q)&=x^2-100p^2\\
q&=\frac{x^2-100p^2}{20p+q}
\end{align*}\tag{11}
$$


This formula gives us a rule for finding $q$. Notice that the numerator of the right-hand side is the original number, less the square of $p$, shifted left so that the two line up. In short, the numerator is the remainder after we've subtracted our initial guess for the root. To get the denominator, we must double our guess $p$, shift it left one place, and add $q$.

At this point, if you've been paying attention, you're asking, "How can I add q until I know what it is?" The answer, of course, is that you can't. This makes the square root algorithm a bit of a trial-and-error process, just like the division algorithm (hardly a surprise, there). In division, as we've learned so laboriously over the last few months, we look at the first couple of digits of the dividend and divisor, and use them to guess at the next digit of the quotient. We can't be sure that it's correct, however, until we've multiplied it by the entire divisor, and verified that we get a small, positive remainder.

In the same way, in the square root process, we assume a value for $q$, based on a divisor of $20p$. Then we must substitute the new value of $q$, and make sure the division still works.

It seems complicated, but it's actually no more complicated than division, and in some ways it's a bit easier.

When I first wrote down __Equation 4__, I was assuming that $p$ and $q$ were single digits. However, you'll note that there's nothing in the math that requires that. We can now let $p$ be all the digits of the root that we've found so far, and $q$ the one we're seeking next. In division, the trial quotient digit must be tested at each step, and often adjusted. The same is true in the square root algorithm. However, in the latter, the larger $p$ is, the less influence $q$ will have on the square, and the less likely we are to have to backtrack and reduce $q$. Therefore, although we must still always check to be sure, there's actually less backtracking in the square root. The only thing that makes the algorithm seem harder is the fact that the root, and therefore the differences, are getting larger as we go along, just as we saw in __Table 3__.

Enough talk; let's see an example. We'll use the same input value we used before. Our first step is to point it off by twos:

$$
12\phantom{2}34\phantom{2}56\phantom{2}78\phantom{2}90
$$

Next, we write down the first digit of the root. We don't need a fancy algorithm for this. The first piece of the argument is only two digits long, and its root can only be one of nine numbers. Even a mathophobe should be able to figure out, by inspection, which of the nine it is. In this case, we see that four gives a square of $16$, which is too large. So the first digit must be three. Write it down above the input value. Now square it, and subtract it to get the remainder:

$$
\require{enclose}
\begin{array}{l}
\:\:\phantom{10}3\\
4\enclose{longdiv}{12\phantom{2}34\phantom{2}56\phantom{2}78\phantom{2}90}\\
\:\phantom{10}\underline{9}\\
\:\:\phantom{10}3\phantom{2}34\\
\end{array}
$$

As you can see, we've "brought down" the next digits, just as we do in division. The only difference is, we bring them down by twos, so our next dividend is $334$. This is the top half of the division in __Equation 11__.

Now, here comes the tricky part: Remember that the bottom half is not $10p+q$, but $20p+q$. Before we look for $q$, we must double the current root, then tack on a new zero (bet that's the part you forgot!). At this point, the process looks like this:

$$
\require{enclose}
\begin{array}{l}
\:\:\phantom{10}3\\
60\enclose{longdiv}{3\phantom{2}34\phantom{2}56\phantom{2}78\phantom{2}90}\\
\end{array}
$$

Our division is, then, $\tfrac{334}{60}$, which yields five and some change. Before we write down the new digit, five, however, we must make sure that the division still works when we stick the five into the divisor. So we now have:

$$
\frac{335}{65}
$$

which still gives us a five. We're okay, and don't need to backtrack. Write this next digit down, so our trial root is now $35$. Please note: it's very, very important for you to see that the trial root and the thing we divide with are not the same, because of that factor of two. The last digit is the same, but the rest of the divisor is double that of the root. At this point, our process looks like this:
$$
\require{enclose}
\begin{array}{l}
\:\:\phantom{10}3\phantom{10}5\\
65\enclose{longdiv}{3\phantom{2}34\phantom{2}56\phantom{2}78\phantom{2}90}\\
\end{array}
$$

Now, you're probably thinking, what next? How do I subtract to get the new remainder?

We can't just square $35$ and subtract it, because we've already subtracted the square of three.

Again, Equation 5 provides our answer. We have:

$$
x^2=100p^2+20pq+q^2
$$

which we have already written in the form:
$$
q(20p+1)=x^2-100p^2
$$

We've also already performed the subtraction on the right--that's how we got the remainder to divide with, to find $q$. Now that we've found it, we must complete the subtraction by subtracting out the left-hand side. That is, the remainder we now must obtain is:
$$
\rm{rem}=x^2-100p^2-q(20p+q)\tag{12}
$$

In this example, $q$ is five, and $20p+q$ is $65$, so we subtract $325$. Note that this step is identical to division. After the subtraction, our process looks like this:

$$
\require{enclose}
\begin{array}{l}
\:\:\phantom{10}3\phantom{10}5\\
65\enclose{longdiv}{3\phantom{2}34\phantom{2}56\phantom{2}78\phantom{2}90}\\
\:\:\phantom{10}3\phantom{2}25\\\hline
\:\:\phantom{10}\:\:\phantom{10}9\phantom{2}56
\end{array}
$$

At this point, we can begin to see how the algorithm works. Let's see if we can state it in words:

- Point off the argument by twos
- Write down the first square root digit by inspection 
- Subtract its square from the first two digits
- Obtain the remainder by drawing down the next two digits
- Double the square root, and append a zero
- Estimate the next root digit by dividing the remainder by this number 
- Verify the digit by substituting it as the last digit of the divisor 
- Multiply the last digit by the divisor
- Subtract to get the new remainder
- Repeat step five until done

:::

---

<TagLinks />