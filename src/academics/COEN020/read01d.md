---
lang: ko-KR 
title: Read 01d
description: COEN020 > Read 01d
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

## ARRAYS, OBJECTS, & POINTERS

::: details ARRAYS, OBJECTS, & POINTERS

Consider the following C declaration: 

```c
char a[4];
```

This declares that the identifier `a` represents an object, which is an array. Arrays are simply collections of other objects, and in this example, those objects are chars. Thus the "attribute list" that describes the object `a` is:

> `a` is an array of (4) *\<chars\>*.

The word "array" is underlined to emphasize that the object 'a' is first understood to be an array, even before we worry about the objects it contains. The text in italics and surrounded by angle brackets describes the kind of objects held within the array `a`.

The dimension is enclosed in parentheses since it really doesn't tell us much about the fundamental organization of the data, but only measures its extent. However, the dimension will be important later when we need to determine the "`size`" of `a`.

Applying this to declarations of arrays of two or more dimensions, such as: 

```c
char b[2][4] ;
char c[3][2][4] ;
```

we can write the corresponding attribute lists as:

> `b` is an array of (2) \<arrays of (4) chars\>.
>
> `c` is an array of (3) \<arrays of (2) arrays of (4) chars\>.

First, note that `b` and `c` are both arrays of objects, just like `a` above. The only difference among `a`, `b`, and `c` is the type of objects that these arrays contain: 

> The objects in `a` are *\<chars\>*.
>
> The objects in `b` are *|<arrays of (4) chars\>*.
>
> The objects in `c` are *\<arrays of (2) arrays of (4) chars\>*.

We may employ typedefs to emphasize this "array of objects" concept shared by `a`, `b`, and `c`:

```c
typedef char A_OBJECTS;
typedef char B_OBJECTS[4]; 
typedef char C_OBJECTS[2][4];

A_OBJECTS a[4]; 	// 'a' is an array of (4) <A_OBJECTS>.
B_OBJECTS b[2]; 	// 'b' is an array of (2) <B_OBJECTS>.
C_OBJECTS c[3];		// 'c' is an array of (3) <C_OBJECTS>.
```

Returning to the declaration of `a`, recall that the identifier `a` used without any subscript provides a constant address expression whose value is the base address of the array `a`. In effect, the words "array of" in the attribute list get replaced by the words "pointer to":

> `a` is a __pointer__ to (the 1st of 4) *\<chars\>*.

In a similar manner, we have:

> `b` is a __pointer__ to (the 1st of 2) *\<arrays of (4) chars\>*.
>
> `c` is a __pointer__ to (the 1st of 3) *\<arrays of (2) arrays of (4) chars\>*

This understanding of the identifiers (without full subscripting) is crucial because their appearance in expressions involving pointer arithmetic demands that we understand the size of the objects. Thus,

> '`a+1`' is a __pointer__ to the 2nd *\<char\>*.
>
> '`b+1`' is a __pointer__ to the 2nd *\<array of (4) chars\>*.
>
> '`c+1`' is a __pointer__ to the 2nd *\<array of (2) arrays of (4) chars\>*.

Now it should be clear that the expressions '`a[1]`' and '`*(a+1)`' are equivalent, because both refer to the 2nd char in the array `a`. Internally, C compilers always convert a subscripted array reference into the equivalent pointer expression before compiling it[^01]. We can use this "equivalence" between subscripts and asterisks to determine whether or not a more complicated expression involving an array identifier is "fully subscripted" or not. For example, consider the expression:

```c
*(c[2]+1)+3
```

Is this a char, a pointer to a char, or what?

If we go back to the declaration of `c`, we see that it is an array of three dimensions. Since the above expression contains one subscript and one asterisk, only two of the three dimensions have been taken care of within the expression. Since the expression is not fully subscripted, it yields a pointer, not a char.


In particular, since we know that the first two of three dimensions have been subscripted, then we can conclude that two of the three "array of" phrases within the attribute list of `c` have been "removed". In other words, the object

> `*(c[2]+1)` is an __array__ of (4) *\<chars\>*

When used as an expression, it is treated as a pointer to the 1st of 4 chars. Adding 3 to this then provides a pointer to the 4th char.

Alternately, we could start with the attribute list of the identifier `c`, removing phrases as we add parts of the expression:

> `c` is an __array__ of (3) *\<arrays of (2) arrays of (4) chars\>*. 
>
> '`c[2]`' is (the 3rd) __array__ of (2) *\<arrays of (4) chars\>*.
>
> '`c[2]`' is a __pointer__ to (the 1st of 2) *\<array of (4) chars\>*. 
>
> '`c[2]+1`' is a __pointer__ to (the 2nd of 2) *\<array of (4) chars\>*.
>
> '`*(c[2]+1)`' is (the 2nd) __array__ of (4) *\<chars\>*. 
>
> '`*(c[2]+1)`' is a __pointer__ to (the 1st of 4) *\<chars\>*.
>
> '`*(c[2]+1)+3`' is a __pointer__ to (the 4th of 4) *\<chars\>*.

:::

---

## Cprogramming.com: Bitwise Operators in C and C++:

::: details Cprogramming.com: Bitwise Operators in C and C++:

Generally, as a programmer you don't need to concern yourself about operations at the bit lev el. You're free to think in by tes, or ints and doubles, or ev en higher lev el data ty pes composed of a combination of these. But there are times when you'd like to be able to go to the lev el of an indiv idual bit. __Exclusive-or encryption__ is one example when you need bitwise operations

Another example comes up when dealing with data compression: what if you wanted to compress a file? In principle, this means taking one representation and turning it into a representation that takes less space. One way of doing this is to use an encoding that takes less than $8\:\text{bits}$ to store a byte. (For instance, if you knew that you would only be using the $26$ letters of the Roman alphabet and didn't care about capitalization, you'd only need $5\:\text{bits}$ to do it.) In order to encode and decode files compressed in this manner, you need to actually extract data at the bit level.

Finally, you can use bit operations to speed up your program or perform neat tricks. (This isn't always the best thing to do.)

### Thinking about Bits

The byte is the lowest level at which we can access data; there's no "bit" type, and we can't ask for an indiv idual bit. In fact, we can't ev en perform operations on a single bit -- every bitwise operator will be applied to, at a minimum, an entire byte at a time. This means we'll be considering the whole representation of a number whenever we talk about apply ing a bitwise operator. (Note that this doesn't mean we can't ev er change only one bit at a time; it just means we have to be smart about how we do it.) Understanding what it means to apply a bitwise operator to an entire string of bits is probably easiest to see with the shifting operators. By convention, in C and C++ you can think about binary numbers as starting with the most significant bit to the left (_i.e._, $10000000$ is $128$, and $00000001$ is $1$). Regardless of underlying representation, you may treat this as true. As a consequence, the results of the left and right shift operators are not implementation dependent for unsigned numbers (for signed numbers, the right shift operator is implementation defined).

The leftshift operator is the equivalent of moving all the bits of a number a specified number of places to the left:

```
[variable]<<[number of places]
```

For instance, consider the number $8$ written in binary $00001000$. If we wanted to shift it to the left $2$ places, we'd end up with $00100000$; everything is moved to the left two places, and zeros are added as padding. This is the number $32$—in fact, left shifting is the equivalent of multiplying by a power of two.

```c
int mult_by_pow_2(int number, int power)
{
	return number<<power;
}
```

Note that in this example, we're using integers, which are either $2$ or $4$ bytes, and that the operation gets applied to the entire sequence of $16$ or $32$ bits.

But what happens if we shift a number like $128$ and we're only storing it in a single byte: $10000000$? Well, $128\times2=256$, and we can't even store a number that big in a byte, so it shouldn't be surprising that the result is $00000000$.

It shouldn't surprise you that there's a corresponding right-shift operator: `>>` (especially considering that I mentioned it earlier). Note that a bitwise right-shift will be the equivalent of integer division by $2$.

Why is it integer division? Consider the number $5$, in binary, $00000101$. $5/2$ is $2.5$, but if you are performing integer division, $5/2$ is $2$. When you perform a right shift by one: `(unsigned int)5>>1`, you end up with $00000010$, as the rightmost $1$ gets shifted off the end; this is the representation of the number $2$. Note that this only holds true for unsigned integers; otherwise, we are not guaranteed that the padding bits will be all $0$s.

Generally , using the left and right shift operators will result in significantly faster code than calculating and then multiply ing by a power of two. The shift operators will also be useful later when we look at how to manipulating indiv idual bits.

For now, let's look at some of the other binary operators to see what they can do for us.

### Bitwise `AND`

The bitwise AND operator is a single ampersand: `&`. A handy mnemonic is that the small version of the boolean `AND`, `&&`, works on smaller pieces (bits instead of bytes, chars, integers, etc). In essence, a binary `AND` simply takes the logical `AND` of the bits in each position of a number in binary form.

For instance, working with a byte (the char type):

$$
\begin{matrix}
&01001000\\
\&&10111000\\\hline
&00001000
\end{matrix}
$$

The most significant bit of the first number is $0$, so we know the most significant bit of the result must be 0; in the second most significant bit, the bit of second number is zero, so we have the same result. The only time where both bits are $1$, which is the only time the result will be $1$, is the fifth bit from the left. Consequently,

$$
72\:\&\:184=8
$$

### Bitwise OR

Bitwise OR works almost exactly the same way as bitwise `AND`. The only difference is that only one of the two bits needs to be a $1$ for that position's bit in the result to be $1$.(If both bits are a $1$,the result will also have a $1$ in that position.) The symbol is a pipe: `|`. Again, this is similar to boolean logical operator, which is `||`.

$$
\begin{matrix}
&01001000\\
|&10111000\\\hline
&11111000
\end{matrix}
$$

and consequently

$$
72\:\|\:184=248
$$

Let's take a look at an example of when you could use just these four operators to do something potentially useful. Let's say that you wanted to keep track of certain boolean attributes about something -- for instance, you might have eight chars (!) and want to keep track of which are in use. Let's assign each of the cars a number from 0 to 7.

Since we have eight items, all we really need is a single by te, and we'll use each of its eight bits to indicate whether or not a car is in use. To do this, we'll declare a char called in_use, and set it to zero. (We'll assume that none of the cars are initially "in use".)

```c
char in_use = 0;
```

Now, how can we check to make sure that a particular car is free before we try to use it? Well, we need to isolate the one bit that corresponds to that car. The strategy is simple: use bitwise operators to ensure every bit of the result is zero except, possibly , for the bit we want to extract.

Consider trying to extract the fifth bit from the right of a number: $XX?XXXXX$ We want to know what the question mark is, and we aren't concerned about the $X$s. We'd like to be sure that the $X$ bits don't interfere with our result, so we probably need to use a bitwise AND of some kind to make sure they are all zeros. What about the question mark? If it's a $1$, and we take the bitwise $\text{AND}$ of $XX?XXXXX$ and $00100000$, then the result will be $00100000$:

$$
\begin{matrix}
&XX1XXXXX\\
\&&00100000\\\hline
&00100000
\end{matrix}
$$

Whereas, if it's a zero, then the result will be $00000000$:

$$
\begin{matrix}
&XX0XXXXX\\
\&&00100000\\\hline
&00000000
\end{matrix}
$$


So we get a non-zero number if, and only if, the bit we're interested in is a $1$.

This procedure works for finding the bit in the nth position. The only thing left to do is to create a number with only the one bit in the correct position turned on. These are just powers of two, so one approach might be to do something like:

```c
int is_in_use(int car_num)
{
	// pow returns an int, but in_use will also be promoted to an int
	// so it doesn't have any effect; we can think of this as an operation
	// between chars
	return in_use & pow(2, car_num);
}
```

While this function works, it can be confusing. It obscures the fact that what we want to do is shift a bit ov er a certain number of places, sothat we have a number like $00100000$—a couple of zeros, a one, and some more zeros. (The one could also be first or last—$10000000$ or $00000001$.)

We can use a bitwise leftshift to accomplish this, and it'll be much faster to boot. If we start with the number $1$, we are guaranteed to have only a single bit, and we know it's to the far-right. We'll keep in mind that car $0$ will have its data stored in the rightmost bit, and car $7$ will be the leftmost.

```c
int is_in_use(int car_num)
{
	return in_use & 1<<car_num;
}
```

Note that shifting by zero places is a legal operation— we'll just get back the same number we started with.

All we can do right now is check whether a car is in use; we can't actually set the in-use bit for it. There are two cases to consider: indicating a car is in use, and remov ing a car from use. In one case, we need to turn a bit on, and in the other, turn a bit off.

Let's tackle the problem of turning the bit on. What does this suggest we should do? If we have a bit set to zero, the only way we know right now to set it to $1$ is to do a bitwise $\text{OR}$. Conv eniently , if we perform a bitwise $\text{OR}$ with only a single bit set to $1$ (the rest are $0$),then we won't affect the rest of the number because anything $\text{OR}$ed with zero remains the same ($1\:\text{OR}\:0$ is $1$, and $0\:\text{OR}\:0$ is $0$).

```c
void set_in_use(int car_num)
{
	in_use = in_use | 1<<car_num;
}
```

What does this do? Take the case of setting the rightmost bit to $1$: we have some number $0XXXXXXX\:|\:10000000$; the result, $1XXXXXXX$. The shift is the same as before; the only difference is the operator and that we store the result.

Setting a car to be no longer in use is a bit more complicated. For that, we'll need another operator.
Again we need to move a single bit into the correct position:

### The Bitwise Complement

The bitwise complement operator, the tilde, $\sim$, flips every bit. A useful way to remember this is that the tilde is sometimes called a twiddle, and the bitwise complement twiddles every bit: if you have a $1$, it's a $0$, and if you have a $0$, it's a $1$.

This turns out to be a great way of finding the largest possible value for an unsigned number:

```c
unsigned int max = ~0;
```

$0$, of course, is all $0$s: $00000000\:00000000$. Once we twiddle $0$, we get all $1$s: $11111111\:11111111$. Since max is an unsigned int, we don't have to worry about sign bits or two's complement. We know that all $1$s is the largest possible number.

Note that $\sim$ and $!$ cannot be used interchangeably. When you take the logical $\text{NOT}$ of a non-zero number, you get $0$ (FALSE). However, when you twiddle a non-zero number, the only time you'll get $0$ is when every bit is turned on. (This non-equivalence principle holds true for bitwise $\text{AND}$ too, unless you know that you are using strictly the numbers $1$ and $0$. For bitwise $\text{OR}$,to be certain that it would be equivalent, you'd need to make sure that the underlying representation of $0$ is all zeros to use it interchangeably. But don't do that! It'll make your code harder to understand.)

Now that we have a way of flipping bits, we can start thinking about how to turn off a single bit. We know that we want to leave other bits unaffected, but that if we have a 1 in the given position, we want it to be a $0$. Take some time to think about how to do this before reading further.

We need to come up with a sequence of operations that leaves $1$s and $0$s in the non-target position unaffected; before, we used a bitwise $\text{OR}$, but we can also use a bitwise $\text{AND}$. $1\:\text{AND}\:1$ is $1$, and $0\:\text{AND}\:1$ is $0$. Now, to turn off a bit, we just need to $\text{AND}$ it with $0$: $1\:\text{AND}\:0$ is $0$. So if we want to indicate that car $2$ is no longer in use, we want to take the bitwise $\text{AND}$ of $XXXXX1XX$ with $11111011$.

How can we get that number? This is where the ability to take the complement of a number comes in handy: we already know how to turn a single bit on. If we turn one bit on and take the complement of the number, we get every bit on except that bit:

```c
~(1 << position)
```

Now that we have this, we can just take the bitwise $\text{AND}$ of this with the current field of cars, and the only bit we'll change is the one of the `car_num` we're interested in.

```c
int set_unused(int car_num)
{
	in_use = in_use & ~(1<<position);
}
```

You might be thinking to yourself, but this is kind of clunky.We actually need to know whether a car is in use or not (if the bit is on or off) before we can know which function to call. While this isn't necessarily a bad thing, it means that we do need to know a little bit about what's going on. There is an easier way , but first we need the last bitwise operator: exclusiv e-or.

### Bitwise Exclusive-Or (`XOR`)

There is no boolean operator counterpart to bitwise exclusiv e-or, but there is a simple explanation. The exclusiv e-or operation takes two inputs and returns a $1$ if either one or the other of the inputs is a $1$, but not if both are. That is, if both inputs are $1$ or both inputs are $0$, it returns $0$. Bitwise exclusiv e-or, with the operator of a carrot, `^`, performs the exclusive-or operation on each pair of bits. Exclusive-or is commonly abbreviated $\text{XOR}$.

For instance, if you have two numbers represented in binary as $10101010$ and $01110010$ then taking the bitwise $\text{XOR}$ results in $11011000$. It's easier to see this if the bits are lined up correctly:

$$
\begin{matrix}
&01110010\\
\hat{}&10101010\\\hline
&11011000
\end{matrix}
$$

You can think of $\text{XOR}$ in the following way: you have some bit, either $1$ or $0$, that we'll call $A$. When you take $A\:\text{XOR}\:0$, then you always get $A$ back: if $A$ is $1$, you get $1$, and if $A$ is $0$, you get $0$. On the other hand, when you take $A\:\text{XOR}\:1$ , you flip $A$. If $A$ is $0$, you get $1$; if $A$ is $1$ , you get $0$.

So you can think of the $\text{XOR}$ operation as a sort of selective twiddle: if you apply $\text{XOR}$ to two numbers, one of which is all $1$s, you get the equivalent of a twiddle.

Additionally , if you apply the $\text{XOR}$ operation twice—say you have a bit, $A$, and another bit $B$, and you set $C$ equal to $A\:\text{XOR}\:B$, and then take $C\:\text{XOR}\:B$: you get $A\:\text{XOR}\:B\:\text{XOR}\:B$, which essentially either flips every bit of $A$ twice, or never flips the bit, so you just get back $A$. (You can also think of $B\:\text{XOR}\:B$ as cancelling out.) As an exercise, can you think of a way to use this to exchange two integer variables without a temporary variable? (Once you've figured it out, check the solution.)

How does that help us? Well, remember the first principle: $\text{XOR}$ing a bit with $0$ results in the same bit. So what we'd really like to be able to do is just call one function that flips the bit of the car we're interested in—it doesn't matter if it's being turned on or turned off—and leaves the rest of the bits unchanged.

This sounds an awful lot like the what we've done in the past; in fact, we only need to make one change to our function to turn a bit on. Instead of using a bitwise $\text{OR}$, we use a bitwise $\text{XOR}$. This leaves every thing unchanged, but flips the bit instead of alway s turning it on:

```c
void flip_use_state(int car_num) 
{
	in_use = in_use ^ 1<<car_num; 
}
```

### When should you use bitwise operators?

Bitwise operators are good for saving space—but many times, space is hardly an issue. And one problem with working at the level of the individual bits is that if you decide you need more space or want to save some time—for instance, if we needed to store information about $9$ cars instead of $8$—then you might have to redesign large portions of your program.

On the other hand, sometimes you can use bitwise operators to cleverly remove dependencies, such as by using $\sim0$ to find the largest possible integer. And bit shifting to multiply by two is a fairly common operation, so it doesn't affect readability in the way that advanced use of bit manipulation can in some cases (for instance, using $\text{XOR}$ to switch the values stored in two variables).

There are also times when you need to use bitwise operators: if you're working with compression or some forms of encryption, or if you're working on a system that expects bit fields to be used to store boolean attributes.


### Summary

You should now be familiar with six bitwise operators:

#### Works on bits for left argument, takes an integer as a second argument

Shifts bits to of `bit_arg` `shift_arg` places to the left—equivalent to multiplication by $2^{\text{shift\_arg}}$.

```c
bit_arg << shift_arg
```

Shifts bits to of `bit_arg` `shift_arg` places to the right—equivalent to integer division by $2^{\text{shift\_arg}}$.

```c
bit_arg >> shift_arg
```

#### Works on the bits of both arguments

Takes the bitwise $\text{AND}$ of `left_arg` and `right_arg`

```c
left_arg & right_arg
```

Takes the bitwise $\text{XOR}$ of `left_arg` and `right_arg`

```c
left_arg ^ right_arg
```

Takes the bitwise $\text{OR}$ of `left_arg` and `right_arg`

```c
left_arg | right_arg
```

#### Works on the bits of only argument

Reverses the bits of arg

```c
~arg
```

#### Skills and knowledge 

You also know a couple of neat tricks that you can use when performance is critical, or space is slow, or you just need to isolate and manipulate individual bits of a number.

And you now should have a better sense of what goes on at the lowest levels of your computer.

:::

---

## Bit Twiddling Hacks

::: details Bit Twiddling Hacks

```component VPCard
title: Bit Twiddling Hacks
desc: Bit Twiddling Hacks
link: http://graphics.stanford.edu/~seander/bithacks.html
logo: http://graphics.stanford.edu/favicon.ico
color: rgba(255,255,255,0.2)
```

### About the operation counting methodology

When totaling the number of operations for algorithms here, any C operator is counted as one operation. Intermediate assignments, which need not be written to RAM, are not counted. Of course, this operation counting approach only serves as an approximation of the actual number of machine instructions and CPU time. All operations are assumed to take the same amount of time, which is not true in reality, but CPUs have been heading increasingly in this direction over time. There are many nuances that determine how fast a system will run a given sample of code, such as cache sizes, memory bandwidths, instruction sets, etc. In the end, benchmarking is the best way to determine whether one method is really faster than another, so consider the techniques below as possibilities to test on your target architecture.

### Compute the sign of an integer

```c
int v;      // we want to find the sign of v
int sign;   // the result goes here 

// CHAR_BIT is the number of bits per byte (normally 8).
sign = -(v < 0);  // if v < 0 then -1, else 0. 
// or, to avoid branching on CPUs with flag registers (IA32):
sign = -(int)((unsigned int)((int)v) >> (sizeof(int) * CHAR_BIT - 1));
// or, for one less instruction (but not portable):
sign = v >> (sizeof(int) * CHAR_BIT - 1); 
```

The last expression above evaluates to sign = `v >> 31` for 32-bit integers. This is one operation faster than the obvious way, sign = `-(v < 0)`. This trick works because when signed integers are shifted right, the value of the far left bit is copied to the other bits. The far left bit is 1 when the value is negative and $0$ otherwise; all $1$ bits gives $-1$. Unfortunately, this behavior is architecture-specific.

Alternatively, if you prefer the result be either $-1$ or $+1$, then use:

```c
// if v < 0 then -1, else +1
sign = +1 | (v >> (sizeof(int) * CHAR_BIT - 1));  
```

On the other hand, if you prefer the result be either $-1$, $0$, or $+1$, then use:

```c
// Or, for more speed but less portability:
sign = (v != 0) | -(int)((unsigned int)((int)v) >> (sizeof(int) * CHAR_BIT - 1));

// Or, for portability, brevity, and (perhaps) speed:
sign = (v != 0) | (v >> (sizeof(int) * CHAR_BIT - 1));  // -1, 0, or +1
sign = (v > 0) - (v < 0); // -1, 0, or +1
```

If instead you want to know if something is non-negative, resulting in $+1$ or else $0$, then use:

```c
// if v < 0 then 0, else 1
sign = 1 ^ ((unsigned int)v >> (sizeof(int) * CHAR_BIT - 1)); 
```

__Caveat__: On March 7, 2003, Angus Duggan pointed out that the 1989 ANSI C specification leaves the result of signed right-shift implementation-defined, so on some systems this hack might not work. For greater portability, Toby Speight suggested on September 28, 2005 that CHAR_BIT be used here and throughout rather than assuming bytes were 8 bits long. Angus recommended the more portable versions above, involving casting on March 4, 2006. [Rohit Garg](http://rpg-314.blogspot.com/) suggested the version for non-negative integers on September 12, 2009.


### Detect if two integers have opposite signs

```c
int x, y;               // input values to compare signs
bool f = ((x ^ y) < 0); // true iff x and y have opposite signs
```

Manfred Weis suggested I add this entry on November 26, 2009.

### Compute the integer absolute value (abs) without branching

```c
int v;           // we want to find the absolute value of v
unsigned int r;  // the result goes here 
int const mask = v >> sizeof(int) * CHAR_BIT - 1;

r = (v + mask) ^ mask;
```

Patented variation:

```c
r = (v ^ mask) - mask;
```

Some CPUs don't have an integer absolute value instruction (or the compiler fails to use them). On machines where branching is expensive, the above expression can be faster than the obvious approach, `r = (v < 0) ? -(unsigned)v : v`, even though the number of operations is the same.

On March 7, 2003, Angus Duggan pointed out that the 1989 ANSI C specification leaves the result of signed right-shift implementation-defined, so on some systems this hack might not work. I've read that ANSI C does not require values to be represented as two's complement, so it may not work for that reason as well (on a diminishingly small number of old machines that still use one's complement). On March 14, 2004, Keith H. Duggar sent me the patented variation above; it is superior to the one I initially came up with, `r=(+1|(v>>(sizeof(int)*CHAR_BIT-1)))*v`, because a multiply is not used. Unfortunately, this method has been [patented](http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=/netahtml/search-adv.htm&r=1&f=G&l=50&d=ptxt&S1=6073150&OS=6073150&RS=6073150) in the USA on June 6, 2000 by Vladimir Yu Volkonsky and assigned to [Sun Microsystems](http://www.sun.com/). On August 13, 2006, Yuriy Kaminskiy told me that the patent is likely invalid because the method was published well before the patent was even filed, such as in [How to Optimize for the Pentium Processor](http://www.goof.com/pcg/doc/pentopt.txt) by Agner Fog, dated November, 9, 1996. Yuriy also mentioned that this document was translated to Russian in 1997, which Vladimir could have read. Moreover, the Internet Archive also has an old [link](http://web.archive.org/web/19961201174141/www.x86.org/ftp/articles/pentopt/PENTOPT.TXT) to it. On January 30, 2007, Peter Kankowski shared with me an [abs version](http://smallcode.weblogs.us/2007/01/31/microsoft-probably-uses-the-abs-function-patented-by-sun/) he discovered that was inspired by Microsoft's Visual C++ compiler output. It is featured here as the primary solution. On December 6, 2007, Hai Jin complained that the result was signed, so when computing the abs of the most negative value, it was still negative. On April 15, 2008 Andrew Shapira pointed out that the obvious approach could overflow, as it lacked an (unsigned) cast then; for maximum portability he suggested `(v < 0) ? (1 + ((unsigned)(-1-v))) : (unsigned)v`. But citing the ISO C99 spec on July 9, 2008, Vincent Lefèvre convinced me to remove it becasue even on non-2s-complement machines `-(unsigned)v` will do the right thing. The evaluation of `-(unsigned)v` first converts the negative value of `v` to an unsigned by adding `2**N`, yielding a 2s complement representation of v's value that I'll call U. Then, U is negated, giving the desired result, `-U = 0 - U = 2**N - U = 2**N - (v+2**N) = -v = abs(v)`.

### Compute the minimum (min) or maximum (max) of two integers without branching

```c
int x;  // we want to find the minimum of x and y
int y;   
int r;  // the result goes here 

r = y ^ ((x ^ y) & -(x < y)); // min(x, y)
```

On some rare machines where branching is very expensive and no condition move instructions exist, the above expression might be faster than the obvious approach, `r = (x < y) ? x : y`, even though it involves two more instructions. (Typically, the obvious approach is best, though.) It works because if `x < y`, then `-(x < y)` will be all ones, so `r = y ^ (x ^ y) & ~0 = y ^ x ^ y = x`. Otherwise, if `x >= y`, then `-(x < y)` will be all zeros, so `r = y ^ ((x ^ y) & 0) = y`. On some machines, evaluating `(x < y)` as 0 or 1 requires a branch instruction, so there may be no advantage.

To find the maximum, use:

```c
r = x ^ ((x ^ y) & -(x < y)); // max(x, y)
```

#### Quick and dirty versions:

If you know that `INT_MIN <= x - y <= INT_MAX`, then you can use the following, which are faster because `(x - y)` only needs to be evaluated once.

```c
r = y + ((x - y) & ((x - y) >> (sizeof(int) * CHAR_BIT - 1))); // min(x, y)
r = x - ((x - y) & ((x - y) >> (sizeof(int) * CHAR_BIT - 1))); // max(x, y)
```

Note that the 1989 ANSI C specification doesn't specify the result of signed right-shift, so these aren't portable. If exceptions are thrown on overflows, then the values of `x` and `y` should be unsigned or cast to unsigned for the subtractions to avoid unnecessarily throwing an exception, however the right-shift needs a signed operand to produce all one bits when negative, so cast to signed there.

On March 7, 2003, Angus Duggan pointed out the right-shift portability issue. On May 3, 2005, Randal E. Bryant alerted me to the need for the precondition, `INT_MIN <= x - y <= INT_MAX`, and suggested the non-quick and dirty version as a fix. Both of these issues concern only the quick and dirty version. Nigel Horspoon observed on July 6, 2005 that gcc produced the same code on a Pentium as the obvious solution because of how it evaluates `(x < y)`. On July 9, 2008 Vincent Lefèvre pointed out the potential for overflow exceptions with subtractions in `r = y + ((x - y) & -(x < y))`, which was the previous version. Timothy B. Terriberry suggested using xor rather than add and subract to avoid casting and the risk of overflows on June 2, 2009.

### Determining if an integer is a power of 2

```c
unsigned int v; // we want to see if v is a power of 2
bool f;         // the result goes here 

f = (v & (v - 1)) == 0;
```

Note that $0$ is incorrectly considered a power of $2$ here. To remedy this, use:

```c
f = v && !(v & (v - 1));
```

### Sign extending from a constant bit-width

Sign extension is automatic for built-in types, such as chars and ints. But suppose you have a signed two's complement number, x, that is stored using only b bits. Moreover, suppose you want to convert `x` to an int, which has more than b bits. A simple copy will work if `x` is positive, but if negative, the sign must be extended. For example, if we have only 4 bits to store a number, then $-3$ is represented as $1101$ in binary. If we have $8$ bits, then $-3$ is $11111101$. The most-significant bit of the 4-bit representation is replicated sinistrally to fill in the destination when we convert to a representation with more bits; this is sign extending. In C, sign extension from a constant bit-width is trivial, since bit fields may be specified in structs or unions. For example, to convert from 5 bits to an full integer:

```cpp
int x; // convert this from using 5 bits to a full int
int r; // resulting sign extended number goes here
struct {signed int x:5;} s;
r = s.x = x;
```

The following is a C++ template function that uses the same language feature to convert from B bits in one operation (though the compiler is generating more, of course).

```cpp
template <typename T, unsigned B>
inline T signextend(const T x)
{
  struct {T x:B;} s;
  return s.x = x;
}

int r = signextend<signed int,5>(x);  // sign extend 5 bit number x to r
```

John Byrd caught a typo in the code (attributed to html formatting) on May 2, 2005. On March 4, 2006, Pat Wood pointed out that the ANSI C standard requires that the bitfield have the keyword "signed" to be signed; otherwise, the sign is undefined.

### Sign extending from a variable bit-width

Sometimes we need to extend the sign of a number but we don't know a priori the number of bits, `b`, in which it is represented. (Or we could be programming in a language like Java, which lacks bitfields.)

```c
unsigned b; // number of bits representing the number in x
int x;      // sign extend this b-bit number to r
int r;      // resulting sign-extended number
int const m = 1U << (b - 1); // mask can be pre-computed if b is fixed

x = x & ((1U << b) - 1);  // (Skip this if bits in x above position b are already zero.)
r = (x ^ m) - m;
```

The code above requires four operations, but when the bitwidth is a constant rather than variable, it requires only two fast operations, assuming the upper bits are already zeroes.

A slightly faster but less portable method that doesn't depend on the bits in x above position b being zero is:

```c
int const m = CHAR_BIT * sizeof(x) - b;
r = (x << m) >> m;
```

Sean A. Irvine suggested that I add sign extension methods to this page on June 13, 2004, and he provided `m = (1 << (b - 1)) - 1; r = -(x & ~m) | x;` as a starting point from which I optimized to get `m = 1U << (b - 1); r = -(x & m) | x`. But then on May 11, 2007, Shay Green suggested the version above, which requires one less operation than mine. Vipin Sharma suggested I add a step to deal with situations where x had possible ones in bits other than the b bits we wanted to sign-extend on Oct. 15, 2008. On December 31, 2009 Chris Pirazzi suggested I add the faster version, which requires two operations for constant bit-widths and three for variable widths.

### Sign extending from a variable bit-width in 3 operations

The following may be slow on some machines, due to the effort required for multiplication and division. This version is 4 operations. If you know that your initial bit-width, b, is greater than 1, you might do this type of sign extension in 3 operations by using `r = (x * multipliers[b]) / multipliers[b]`, which requires only one array lookup.

```c
unsigned b; // number of bits representing the number in x
int x;      // sign extend this b-bit number to r
int r;      // resulting sign-extended number
#define M(B) (1U << ((sizeof(x) * CHAR_BIT) - B)) // CHAR_BIT=bits/byte
static int const multipliers[] = 
{
  0,     M(1),  M(2),  M(3),  M(4),  M(5),  M(6),  M(7),
  M(8),  M(9),  M(10), M(11), M(12), M(13), M(14), M(15),
  M(16), M(17), M(18), M(19), M(20), M(21), M(22), M(23),
  M(24), M(25), M(26), M(27), M(28), M(29), M(30), M(31),
  M(32)
}; // (add more if using more than 64 bits)
static int const divisors[] = 
{
  1,    ~M(1),  M(2),  M(3),  M(4),  M(5),  M(6),  M(7),
  M(8),  M(9),  M(10), M(11), M(12), M(13), M(14), M(15),
  M(16), M(17), M(18), M(19), M(20), M(21), M(22), M(23),
  M(24), M(25), M(26), M(27), M(28), M(29), M(30), M(31),
  M(32)
}; // (add more for 64 bits)
#undef M
r = (x * multipliers[b]) / divisors[b];
```

The following variation is not portable, but on architectures that employ an arithmetic right-shift, maintaining the sign, it should be fast.

```c
const int s = -b; // OR:  sizeof(x) * CHAR_BIT - b;
r = (x << s) >> s;
```

Randal E. Bryant pointed out a bug on May 3, 2005 in an earlier version (that used `multipliers[]` for `divisors[]`), where it failed on the case of `x=1` and `b=1`.

### Conditionally set or clear bits without branching

```c
bool f;         // conditional flag
unsigned int m; // the bit mask
unsigned int w; // the word to modify:  if (f) w |= m; else w &= ~m; 

w ^= (-f ^ w) & m;

// OR, for superscalar CPUs:
w = (w & ~m) | (-f & m);
```

On some architectures, the lack of branching can more than make up for what appears to be twice as many operations. For instance, informal speed tests on an AMD Athlon™ XP 2100+ indicated it was 5-10% faster. An Intel Core 2 Duo ran the superscalar version about 16% faster than the first. Glenn Slayden informed me of the first expression on December 11, 2003. Marco Yu shared the superscalar version with me on April 3, 2007 and alerted me to a typo 2 days later.

### Conditionally negate a value without branching

If you need to negate only when a flag is false, then use the following to avoid branching:

```c
bool fDontNegate;  // Flag indicating we should not negate v.
int v;             // Input value to negate if fDontNegate is false.
int r;             // result = fDontNegate ? v : -v;

r = (fDontNegate ^ (fDontNegate - 1)) * v;
If you need to negate only when a flag is true, then use this:
bool fNegate;  // Flag indicating if we should negate v.
int v;         // Input value to negate if fNegate is true.
int r;         // result = fNegate ? -v : v;

r = (v ^ -fNegate) + fNegate;
```

Avraham Plotnitzky suggested I add the first version on June 2, 2009. Motivated to avoid the multiply, I came up with the second version on June 8, 2009. Alfonso De Gregorio pointed out that some parens were missing on November 26, 2009, and received a bug bounty.

### Merge bits from two values according to a mask

```c
unsigned int a;    // value to merge in non-masked bits
unsigned int b;    // value to merge in masked bits
unsigned int mask; // 1 where bits from b should be selected; 0 where from a.
unsigned int r;    // result of (a & ~mask) | (b & mask) goes here

r = a ^ ((a ^ b) & mask); 
```

This shaves one operation from the obvious way of combining two sets of bits according to a bit mask. If the mask is a constant, then there may be no advantage.

Ron Jeffery sent this to me on February 9, 2006.

### Counting bits set (naive way)

```c
unsigned int v; // count the number of bits set in v
unsigned int c; // c accumulates the total bits set in v

for (c = 0; v; v >>= 1)
{
  c += v & 1;
}
```

The naive approach requires one iteration per bit, until no more bits are set. So on a 32-bit word with only the high set, it will go through 32 iterations.

### Counting bits set by lookup table

```c
static const unsigned char BitsSetTable256[256] = 
{
#define B2(n) n,     n+1,     n+1,     n+2
#define B4(n) B2(n), B2(n+1), B2(n+1), B2(n+2)
#define B6(n) B4(n), B4(n+1), B4(n+1), B4(n+2)
    B6(0), B6(1), B6(1), B6(2)
};

unsigned int v; // count the number of bits set in 32-bit value v
unsigned int c; // c is the total bits set in v

// Option 1:
c = BitsSetTable256[v & 0xff] + 
    BitsSetTable256[(v >> 8) & 0xff] + 
    BitsSetTable256[(v >> 16) & 0xff] + 
    BitsSetTable256[v >> 24]; 

// Option 2:
unsigned char * p = (unsigned char *) &v;
c = BitsSetTable256[p[0]] + 
    BitsSetTable256[p[1]] + 
    BitsSetTable256[p[2]] +	
    BitsSetTable256[p[3]];


// To initially generate the table algorithmically:
BitsSetTable256[0] = 0;
for (int i = 0; i < 256; i++)
{
  BitsSetTable256[i] = (i & 1) + BitsSetTable256[i / 2];
}
```

On July 14, 2009 Hallvard Furuseth suggested the macro compacted table.

### Counting bits set, Brian Kernighan's way

```c
unsigned int v; // count the number of bits set in v
unsigned int c; // c accumulates the total bits set in v
for (c = 0; v; c++)
{
  v &= v - 1; // clear the least significant bit set
}
```

Brian Kernighan's method goes through as many iterations as there are set bits. So if we have a 32-bit word with only the high bit set, then it will only go once through the loop.

Published in 1988, the C Programming Language 2nd Ed. (by Brian W. Kernighan and Dennis M. Ritchie) mentions this in exercise 2-9. On April 19, 2006 Don Knuth pointed out to me that this method "was first published by Peter Wegner in CACM 3 (1960), 322. (Also discovered independently by Derrick Lehmer and published in 1964 in a book edited by Beckenbach.)"

Counting bits set in 14, 24, or 32-bit words using 64-bit instructions

```c
unsigned int v; // count the number of bits set in v
unsigned int c; // c accumulates the total bits set in v

// option 1, for at most 14-bit values in v:
c = (v * 0x200040008001ULL & 0x111111111111111ULL) % 0xf;

// option 2, for at most 24-bit values in v:
c =  ((v & 0xfff) * 0x1001001001001ULL & 0x84210842108421ULL) % 0x1f;
c += (((v & 0xfff000) >> 12) * 0x1001001001001ULL & 0x84210842108421ULL) 
     % 0x1f;

// option 3, for at most 32-bit values in v:
c =  ((v & 0xfff) * 0x1001001001001ULL & 0x84210842108421ULL) % 0x1f;
c += (((v & 0xfff000) >> 12) * 0x1001001001001ULL & 0x84210842108421ULL) % 
     0x1f;
c += ((v >> 24) * 0x1001001001001ULL & 0x84210842108421ULL) % 0x1f;
```

This method requires a 64-bit CPU with fast modulus division to be efficient. The first option takes only 3 operations; the second option takes 10; and the third option takes 15.

Rich Schroeppel originally created a 9-bit version, similiar to option 1; see the Programming Hacks section of [Beeler, M., Gosper, R. W., and Schroeppel, R. HAKMEM. MIT AI Memo 239, Feb. 29, 1972](http://www.inwap.com/pdp10/hbaker/hakmem/hakmem.html). His method was the inspiration for the variants above, devised by Sean Anderson. Randal E. Bryant offered a couple bug fixes on May 3, 2005. Bruce Dawson tweaked what had been a 12-bit version and made it suitable for 14 bits using the same number of operations on Feburary 1, 2007.

### Counting bits set, in parallel

```c
unsigned int v; // count bits set in this (32-bit value)
unsigned int c; // store the total here
static const int S[] = {1, 2, 4, 8, 16}; // Magic Binary Numbers
static const int B[] = {0x55555555, 0x33333333, 0x0F0F0F0F, 0x00FF00FF, 0x0000FFFF};

c = v - ((v >> 1) & B[0]);
c = ((c >> S[1]) & B[1]) + (c & B[1]);
c = ((c >> S[2]) + c) & B[2];
c = ((c >> S[3]) + c) & B[3];
c = ((c >> S[4]) + c) & B[4];
```

The B array, expressed as binary, is:

```c
B[0] = 0x55555555 = 01010101 01010101 01010101 01010101
B[1] = 0x33333333 = 00110011 00110011 00110011 00110011
B[2] = 0x0F0F0F0F = 00001111 00001111 00001111 00001111
B[3] = 0x00FF00FF = 00000000 11111111 00000000 11111111
B[4] = 0x0000FFFF = 00000000 00000000 11111111 11111111
```

We can adjust the method for larger integer sizes by continuing with the patterns for the Binary Magic Numbers, B and S. If there are k bits, then we need the arrays S and B to be `ceil(lg(k))` elements long, and we must compute the same number of expressions for c as S or B are long. For a 32-bit v, 16 operations are used.

The best method for counting bits in a 32-bit integer v is the following:

```c
v = v - ((v >> 1) & 0x55555555);                    // reuse input as temporary
v = (v & 0x33333333) + ((v >> 2) & 0x33333333);     // temp
c = ((v + (v >> 4) & 0xF0F0F0F) * 0x1010101) >> 24; // count
```

The best bit counting method takes only 12 operations, which is the same as the lookup-table method, but avoids the memory and potential cache misses of a table. It is a hybrid between the purely parallel method above and the earlier methods using multiplies (in the section on counting bits with 64-bit instructions), though it doesn't use 64-bit instructions. The counts of bits set in the bytes is done in parallel, and the sum total of the bits set in the bytes is computed by multiplying by 0x1010101 and shifting right 24 bits.

A generalization of the best bit counting method to integers of bit-widths upto 128 (parameterized by type `T`) is this:

```c
v = v - ((v >> 1) & (T)~(T)0/3);                           // temp
v = (v & (T)~(T)0/15*3) + ((v >> 2) & (T)~(T)0/15*3);      // temp
v = (v + (v >> 4)) & (T)~(T)0/255*15;                      // temp
c = (T)(v * ((T)~(T)0/255)) >> (sizeof(T) - 1) * CHAR_BIT; // count
```

See [Ian Ashdown's nice newsgroup post](http://groups.google.com/groups?q=reverse+bits&num=100&hl=en&group=comp.graphics.algorithms&imgsafe=off&safe=off&rnum=2&ic=1&selm=4fulhm%248dn%40atlas.uniserve.com) for more information on counting the number of bits set (also known as *sideways addition*). The best bit counting method was brought to my attention on October 5, 2005 by [Andrew Shapira](http://onezero.org/); he found it in pages 187-188 of [Software Optimization Guide for AMD Athlon™ 64 and Opteron™ Processors](http://www.amd.com/us-en/assets/content_type/white_papers_and_tech_docs/25112.PDF). Charlie Gordon suggested a way to shave off one operation from the purely parallel version on December 14, 2005, and Don Clugston trimmed three more from it on December 30, 2005. I made a typo with Don's suggestion that Eric Cole spotted on January 8, 2006. Eric later suggested the arbitrary bit-width generalization to the best method on November 17, 2006. On April 5, 2007, Al Williams observed that I had a line of dead code at the top of the first method.

### Count bits set (rank) from the most-significant bit upto a given position

The following finds the the rank of a bit, meaning it returns the sum of bits that are set to 1 from the most-signficant bit downto the bit at the given position.

```cpp
uint64_t v;       // Compute the rank (bits set) in v from the MSB to pos.
unsigned int pos; // Bit position to count bits upto.
uint64_t r;       // Resulting rank of bit at pos goes here.

// Shift out bits after given position.
r = v >> (sizeof(v) * CHAR_BIT - pos);
// Count set bits in parallel.
// r = (r & 0x5555...) + ((r >> 1) & 0x5555...);
r = r - ((r >> 1) & ~0UL/3);
// r = (r & 0x3333...) + ((r >> 2) & 0x3333...);
r = (r & ~0UL/5) + ((r >> 2) & ~0UL/5);
// r = (r & 0x0f0f...) + ((r >> 4) & 0x0f0f...);
r = (r + (r >> 4)) & ~0UL/17;
// r = r % 255;
r = (r * (~0UL/255)) >> ((sizeof(v) - 1) * CHAR_BIT);
```

Juha Järvi sent this to me on November 21, 2009 as an inverse operation to the computing the bit position with the given rank, which follows.

### Select the bit position (from the most-significant bit) with the given count (rank)

The following 64-bit code selects the position of the rth 1 bit when counting from the left. In other words if we start at the most significant bit and proceed to the right, counting the number of bits set to 1 until we reach the desired rank, `r`, then the position where we stop is returned. If the rank requested exceeds the count of bits set, then 64 is returned. The code may be modified for 32-bit or counting from the right.

```c
uint64_t v;          // Input value to find position with rank r.
unsigned int r;      // Input: bit's desired rank [1-64].
unsigned int s;      // Output: Resulting position of bit with rank r [1-64]
uint64_t a, b, c, d; // Intermediate temporaries for bit count.
unsigned int t;      // Bit count temporary.

// Do a normal parallel bit count for a 64-bit integer,                     
// but store all intermediate steps.                                        
// a = (v & 0x5555...) + ((v >> 1) & 0x5555...);
a =  v - ((v >> 1) & ~0UL/3);
// b = (a & 0x3333...) + ((a >> 2) & 0x3333...);
b = (a & ~0UL/5) + ((a >> 2) & ~0UL/5);
// c = (b & 0x0f0f...) + ((b >> 4) & 0x0f0f...);
c = (b + (b >> 4)) & ~0UL/0x11;
// d = (c & 0x00ff...) + ((c >> 8) & 0x00ff...);
d = (c + (c >> 8)) & ~0UL/0x101;
t = (d >> 32) + (d >> 48);
// Now do branchless select!                                                
s  = 64;
// if (r > t) {s -= 32; r -= t;}
s -= ((t - r) & 256) >> 3; r -= (t & ((t - r) >> 8));
t  = (d >> (s - 16)) & 0xff;
// if (r > t) {s -= 16; r -= t;}
s -= ((t - r) & 256) >> 4; r -= (t & ((t - r) >> 8));
t  = (c >> (s - 8)) & 0xf;
// if (r > t) {s -= 8; r -= t;}
s -= ((t - r) & 256) >> 5; r -= (t & ((t - r) >> 8));
t  = (b >> (s - 4)) & 0x7;
// if (r > t) {s -= 4; r -= t;}
s -= ((t - r) & 256) >> 6; r -= (t & ((t - r) >> 8));
t  = (a >> (s - 2)) & 0x3;
// if (r > t) {s -= 2; r -= t;}
s -= ((t - r) & 256) >> 7; r -= (t & ((t - r) >> 8));
t  = (v >> (s - 1)) & 0x1;
// if (r > t) s--;
s -= ((t - r) & 256) >> 8;
s = 65 - s;
```

If branching is fast on your target CPU, consider uncommenting the if-statements and commenting the lines that follow them.

Juha Järvi sent this to me on November 21, 2009.

:::

---

<TagLinks />

[^01]: Since `a[k]` becomes `*(a+k)`, and since addition is commutative, many C compilers also happily accept `k[a]`.