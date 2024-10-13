---
lang: ko-KR
title: COEN020
description: COEN020
---

# {{ $frontmatter.description }} 관련

::: tip NOTE
[SCU] Intro to Embedded Systems
:::

---

## COURSE DESCRIPTION

Introduction to computer organization: CPU, registers, buses, memory, I/O interfaces. Number systems: arithmetic and information representation. Assembly language programming: addressing techniques, arithmetic and logic operations, branching and looping, stack operations, procedure calls, parameter passing, and interrupts. C language programming: pointers, stack frames, interrupt processing.

---

## COURSE OBJECTIVES

1. To understand the underlying hardware of a computer from the low-level point of view of an assembly language programmer.
2. To lay a foundation students need for later courses in computer architecture, operating systems, and networks.
3. To present the material in the context of embedded systems because of its industrial relevance.

---

## EXPECTED LEARNING OUTCOMES

1. Perform number base conversions and arithmetic using signed and unsigned fixed-point number systems, including the ability to specify range and precision, and to detect overflow.
2. Use the bit manipulation features of C to test, insert, extract, and modify bit fields within a packed representation.
3. Understand the organization of a computer from the point of view of an assembly language programmer.
4. Use a modern integrated development environment to construct programs as a mix of C and assembly, linked with real-time kernel libraries.
5. Understand the relative advantages and disadvantages of various methods of input-output programming, including polled waiting loops, interrupt driven, and direct memory access.

---

## HOMEWORK

Homework assignments are expected to be completed prior to class on Friday of each week. Homework is preparation for a short 10-minute quiz over the same material given at the start of class on the following Monday. The homework is not to be turned in and will not be graded. The solutions to all the homework assignments are posted on Camino.

---

## Quizzes

There will be a short 10-minute quiz over the homework given at the start of class on each Monday. No quiz makeups are allowed, but the lowest quiz score will be dropped. If you miss a quiz due to illness, bring me a written doctor's excuse and I will not count that quiz in the quiz average.

---

## LAB

Assignments are due at the end of each laboratory period, unless specifically told otherwise. You are encouraged to discuss assignments and overall solution strategies (e.g., software organization) with others; however, all actual solutions (e.g., programming and/or coding) must be that of the individual student. Violation will result in zero credit for the assignment. Lab grade is computed and recorded separately.

| Dates | Reading | Topics |
| :---- | :------ | :----- |
| 3/30;4/1 | 1.1-1.3,1.5-1.8;2.1-2.2 | Introduction to Embedded Systems;Fixed-precision binary numbers, positional number systems. |
| 4/6,8,10 | 2.4-2.6;3.1-3.3 | Binary representation of integers;2's complement and hardware complexity; integer multiplication and division; fixed-point real arithimetic. |
| 4/13,15,17 | 4.1-4.6 | Getting the Most Out of C: Integer and Boolean types, Mixing types, Manipulating bits, accessing mem ory-mapped devices. |
| 4/20,22,24 | 4.7-4.8;5.1-5.3 | Structures, Variant access, Unions; Computer Organization: Memory, the CPU, I/O; Fri: REVIEW |
| 4/27,29;5/1 | 5.4-5.5;6.1-6.4 | Mon: MIDTERM; ARM Architecture, ARM assembly,Loading, constants and memory data, storing data, converting C to assembly |
| 5/4,6,8 | 6.5-6.8 | Memory addressing, Stack, arithmetic, bit manipulation, shift, and bit-field manipulation instructions, |
| 5/11,13,15 | 7.1-7.4.2 | Instruction sequencing, decisions, loops, function call and return, register usage |
| 5/18,20,22 | 7.4.3-7.4.6;8.1.1 | Parameters, return values, temporary variables, preserving registers. Introduction to I/O |
| 5/27,29 | 8.1.2-8.1.6 | Exceptions and interrupts; thread and handler modes; exception handlers, latency reduction; priorities. |
| 6/1,3,5 | 8.2-8.4 | Synchronization, transfer rate, latency; buffers and queus; estimating I/O performance; Friday: REVIEW |

---

<TagLinks/>