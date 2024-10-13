---
lang: ko-KR 
title: Read 01b
description: COEN020 > Read 01b
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

## Embedded.com: Introduction to fixed-width integers

::: details Embedded.com: Introduction to fixed-width integers

> For embedded programmers the most important improvement to C in the C99 standards is the new `stdint.h` header file.

Computer programmers don't always care how wide an integer is when held by the processor. For example, when we write:

```c
for (int i=0; i < N; i++) { ... }
```

we generally expect our compiler to generate the most efficient code possible, whether that makes the loop counter an 8-, 16-, 32-, or even 64-bit quantity.

So long as it's wide enough to hold the maximum value, in the above case N, we'd like the most efficient use of the processor to be made. And, so, that's precisely what the ISO C and C++ standards tell the compiler writer to do: choose the most efficient integer size that will fulfill the specific request. Because of the variable size of integers on different processors and the corresponding flexibility of the language standards, the code above may result in a 32-bit integer with one compiler but a 16-bit integer with another—possibly even if the very same processor is targeted!

But in many other programming situations, integer size matters. Embedded programming, in particular, often involves considerable manipulation of integer data of fixed widths. The most obvious example is the use of memory-mapped I/O to read and write peripheral control and status registers.

In the process of using memory-mapped I/O, it's common to write code like that in Listing 1. In this example we first declare a `struct` that represents the registers in a timer/counter chip. We then declare a pointer to a data structure of that type, and initialize it to point at the memory address assigned (by the hardware designer) to the counter chip. After that setup, we can use the pointer to read and write the registers within the chip.

### Listing 1: Memory-mapped I/O example

```cpp
typedef struct
{
	unsigned int count; 		// Current count register; offset 0x00.
	unsigned int max; 			// Maximum count register; offset 0x02.
	unsigned int _reserved; 	// Unused 16-bit register; offset 0x04.
	unsigned int flags;			// Control/status register; offset 0x06.
} Counter;
Counter volatile * const pCounter = 0x10000000;
// Chip base address.

// ...
pCounter->max = 5000;			// Count from 0 to 5000, then interrupt.

pCounter->flags |= GO; 			// Start the timer.
//...


if (pCounter->flags &= DONE) {
	// ...
}
// ...
```

The obvious advantage of implementing memory-mapped I/O this way is that the compiler automates the calculation of the offsets of the individual registers within the chip. The compiler also automatically adds the offsets of a register to the base address. These things are done at compile time, thus a readable line of code like:

```cpp
pCounter->max = 5000;
```

will be executed just as efficiently as the more cryptic:

```cpp
*(  (unsigned int *)0x10000002  ) = 5000;
```

But what if you port this code to a new compiler or target processor? Will the new compiler agree with the old one that those unsigned `int` are two bytes wide and calculate the offsets appropriately? How can you tell the new compiler more precisely what you want? Other integer names like `short` and `long` won't help, since the sizes of those types are also left up to the compiler writers—subject only to a small set of restrictions relative to the size chosen for `int`.

### Typedef to the rescue

This ambiguity is not a new problem and solutions have been around for decades. The approach generally taken is to define a new data type for each fixed-width integer you plan to use in your programs. For example, we might define:

```cpp
typedef unsigned int uint16;
```

in a header file and then declare each of the registers in the struct in Listing 1 as `uint16`. By using `char`, `short`, and `long` and compiler-specific knowledge, you can define both signed and unsigned 8-, 16-, and 32-bit integer data types. And if the compiler or target processor does later change, you'll need to modify only the `typedef`s to adjust all of the fixed-integer size requests throughout what might be a large set of source files.

This is a good solution and widely used. The problem, however, has always been the lack of agreement on the names for these fixed-width integer `typedef`s. To date, I've seen all of the following names used for signed 16-bit integers in production code and coding standards: `INT16`, `int16`, `INT16S`, and `INT2`, the latter scheme placing the emphasis on the number of bytes rather than bits. I'm sure other names are in use elsewhere.


In hindsight, it sure would've been nice if the authors of the C standard had defined some standard names and made compiler providers responsible for providing the appropriate `typedef` for each fixed-size integer type in a library header file. Alternatively, the C standard could have specified (as Java does) that each of the types `short`, `int`, and `long` has a standard width on all platforms; but that could've had an impact on performance, particularly on 8-bit processors that must implement 16- and 32-bit additions in multi- instruction sequences.

### C99's solution

Interestingly, it turns out the 1999 update to the International Organization for Standardization's (ISO) C standard (hereafter "C99") did just that. The ISO has finally put the weight of its standard behind a preferred set of names for signed and unsigned fixed-size integer data types. The newly defined type names are:

| bit | signed | unsigned |
| :-: | :----: | :------: |
| 8-bit | `int8_t` | `uint8_t` |
| 16-bit | `int16_t` | `uint16_t` |
| 32-bit | `int32_t` | `uint32_t` |
| 64-bit | `int64_t` | `uint64_t` |

According to the updated standard, this required set of `typedef`s (along with some others) is to be defined by compiler vendors and included in the new header file `stdint.h`.

If you're already using a C99-compliant compiler, this new language feature makes declaring each required fixed-width integer variable or register definition as straightforward as using one of the new type names.

Even if you don't have an updated compiler, the inclusion of these names in the C99 standard suggests it's time to update your coding standards and practices. Love them or hate them, at least these new names are part of an accepted international standard. As a direct result, it'll be far easier in the future to port C programs that require fixed-width integers to other compilers and target platforms. In addition, modules that are reused or sold with source can be more easily understood when they conform to standard naming and typing conventions like those in C99.

Of course, if you don't have a C99-compliant compiler yet you'll still have to write your own set of `typedef`s, using compiler-specific knowledge of the `char`, `short`, and `long` primitive widths. I recommend putting these `typedef`s in a header file of your own design and adding the anonymous union declaration shown in Listing 2 to a linked source module to check their sizes; that is, to gently "remind" whomever might someday have the task of porting your code.

#### Listing 2: An anonymous union allows the compiler to report typedef errors automatically

```cpp
static union
{
	char int8_t_incorrect [sizeof( int8_t)==1];
	char uint8_t_incorrect [sizeof( uint8_t)==1];
	char int16_t_incorrect [sizeof( int16_t)==1];
	char uint16_t_incorrect [sizeof( uint16_t)==1];
	char int32_t_incorrect [sizeof( int32_t)==1];
	char uint32_t_incorrect [sizeof( uint32_t)==1];
};
```

The new C99 standard includes a number of minor improvements to the C programming language. Among these, the most important for embedded programmers to understand are the contents of the new `stdint.h` header file. There's a lot more in the C99 standard than I've had room to mention in this brief article. Further research is left as an exercise for the reader.

:::

---

<TagLinks />