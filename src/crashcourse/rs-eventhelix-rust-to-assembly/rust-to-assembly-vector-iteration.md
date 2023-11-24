---
lang: ko-KR
title: Map Rust vector iteration to assembly
description: 🦀Rust to Assembly > Map Rust vector iteration to assembly
tags: ["crashcourse", "digitalocean", "rust", "rs", "assembly"]
meta:
  - name: 🦀Rust to Assembly - Map Rust vector iteration to assembly
    content: Map Rust vector iteration to assembly
  - property: og:title
    content: 🦀Rust to Assembly
  - property: og:description
    content: Map Rust vector iteration to assembly
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rs-eventhelix-rust-to-assembly/rust-enum-and-match-representation-in-assembly.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Map Rust vector iteration to assembly
desc: Learn how to map Rust vector iteration to assembly. Also understand how the compiler optimizes the loop with vector instructions.
link: https://eventhelix.com/rust/rust-to-assembly-vector-iteration
logo: https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png
color: rgba(250, 250, 250, 0.2)
```

---

> Map Rust vector iteration to assembly

Vectors are the most used collection type in Rust. Let us look under the hood to understand the assembly code generated for a vector iteration. We will see that the length of a vector is an important factor in vectorizing the iterations. With vectorization, the processor performs multiple operations per instruction. Finally, we will experiment with the Compiler Explorer to see how the compiler unrolls loops and uses vector instructions to improve performance.

## Vector memory layout

Before we go any further, let us look at the memory layout of a vector. The definition of a vector is shown below. Vectors in Rust contain a pointer to a heap vector buffer (`buf.ptr`), total capacity of the buffer (`buf.cap`) and the total length (`len`) of the vector. The vector buffer is a pointer to a buffer of the type `T`. The length is the number of elements in the vector. The capacity is the total number of elements that the vector can hold without reallocating the buffer. Note that `_marker` is 0-sized as it is of the type `PhantomData<T>`.

```rs
pub struct Vec<T, A: Allocator = Global> {
    // Points to the start of the vector data and keeps the capacity information
    buf: RawVec<T, A>,
    // Length of the vector
    len: usize,
}

struct RawVec<T> {
    // Points to the heap address that stores the vector data
    ptr: NonNull<T>,
    // Capacity of the vector
    cap: usize,
    _marker: PhantomData<T>,
}
```

The following figure shows the memory layout of a vector. The heap pointer (`buf.ptr`) points to the start of the vector buffer. The vector buffer contains three `i64`. The length of the vector is 3 (`len`) and the capacity of the vector is 8 (`buf.cap`).

![Bool vector](https://eventhelix.com/rust/rust-to-assembly-vector-iteration/vec-i64.svg)

---

## Sample vector handling code

Let us explore the Rust to assembly mapping of the `Vec` struct using a simple function, `increment_by` that increments the elements of a vector by a specified value (`num`). The sample also includes `increment_example` that calls the `increment_by` function.

```rs
// Increment each element of a i64 vector by num. A mutable
// reference to the vector is passed in.
pub fn increment_by(num: i64, list: &mut Vec<i64>) {
    // Iterate over the vector and increment each element.
    for item in list {
        // Note that the item needs to be dereferenced 
        *item += num;
    }
}

pub fn increment_example(inc_by: i64, array: [i64; 4]) -> Vec<i64> {
    let mut list = array.to_vec();
    increment_by(inc_by, &mut list);
    list
}
```

## Assembly code for `increment_by`

The generated assembly code for the `increment_by` function is shown below. The generated assembly code seems quite complex. On close examination, it becomes clear that the code is optimized for operating on vectors of wildly different lengths.

Let us look at the assembly code that does the heavy lifting for a vector of a certain length. Once we understand these fragments, we will look at the complete assembly to understand how all other lengths are handled by combining these fragments.

### Vector length less than 4

For vectors that are shorter than 4, the generated assembly code loops over each entry in the vector and increments it by the specified value.

```armasm
.LBB0_11:
        add     qword ptr [rax], rdi    ; Add num to the next entry in the vector
        add     rax, 8                  ; Move to the next entry in the vector
        cmp     rax, rcx                ; Check if we have reached the end of the vector
        jne     .LBB0_11                ; Jump if we have not reached the end of the vector
```

### Vector length is 4

If the vector length is 4, the compiler unrolls the loop and generates the following assembly code. Vector instructions perform two 64-bit operations in parallel. The `movdqu` instruction moves the vector data from the vector buffer to an `xmm` register. The `paddq` instruction adds the specified value to the vector data. The `movdqu` instruction moves the vector data back to the vector buffer.

```armasm
.LBB0_7:
        movdqu  xmm1, xmmword ptr [rcx + rsi]         ; Load two 64-bit numbers from the vector
        movdqu  xmm2, xmmword ptr [rcx + rsi + 16]    ; Load two more 64-bit numbers from the vector
        paddq   xmm1, xmm0                            ; Add the increment value to the first two 64-bit number
        paddq   xmm2, xmm0                            ; Add the increment value to the 3rd and 4th of 64-bit number
        movdqu  xmmword ptr [rcx + rsi], xmm1         ; Store the result back in the vector (1st and 2nd number)
        movdqu  xmmword ptr [rcx + rsi + 16], xmm2    ; Store the result back in the vector (3rd and 4th number)

```

### Vector length is a multiple of 8

For vectors with lengths that are a multiple of 8, the compiler handles 8 64-bit operations per iteration. The 8 64-bit numbers are copied to the `xmm` registers using four `movdqu` instructions. Four `paddq` instructions perform the 8 additions. Finally, the four `movdqu` instructions copy the results back to the vector buffer.

```armasm
.LBB0_5:
        movdqu  xmm1, xmmword ptr [rcx + rsi]         ; Load the first two 64-bit number
        movdqu  xmm2, xmmword ptr [rcx + rsi + 16]    ; Load the third and fourth 64-bit number
        movdqu  xmm3, xmmword ptr [rcx + rsi + 32]    ; Load the fifth and sixth 64-bit number
        movdqu  xmm4, xmmword ptr [rcx + rsi + 48]    ; Load the seventh and eighth 64-bit number
        paddq   xmm1, xmm0      ; Add the increment value to the first two 64-bit number
        paddq   xmm2, xmm0      ; Add the increment value to the third and fourth 64-bit number
        movdqu  xmmword ptr [rcx + rsi], xmm1         ; Store the first two 64-bit number
        movdqu  xmmword ptr [rcx + rsi + 16], xmm2    ; Store the third and fourth 64-bit number
        paddq   xmm3, xmm0      ; Add the increment value to the fifth and sixth 64-bit number
        paddq   xmm4, xmm0      ; Add the increment value to the seventh and eighth 64-bit number
        movdqu  xmmword ptr [rcx + rsi + 32], xmm3    ; Store the fifth and sixth 64-bit number
        movdqu  xmmword ptr [rcx + rsi + 48], xmm4    ; Store the seventh and eighth 64-bit number
        add     rsi, 64     ; Increment the 64-bit numbers index
        add     rax, -2     ; Decrement the count by 2 as 8 64-bit numbers have been processed.
        jne     .LBB0_5     ; Jump if there are still quad 64-bit numbers to process
        test    r10b, 1     ; Check if there are still entries to process
        je      .LBB0_8     ; Jump if less than 4 entries need to be processed.
```

### Handling vectors of arbitrary length

Now that we have analyzed the special cases, let us look at the code below that handles vectors of arbitrary length. The code uses the assembly code blocks we described above. The full code of the function combines the three code blocks to handle vectors of arbitrary length. For example, a vector of length 41 will be handled as.

1. Iterate until index 31 ($4*8=32 entries$) with four loops through that process 8 operations per loop (4 sets of vector operations). The `.LBB0_5` label shows the code that performs the four loops.
2. Iterate until index 35 ($32+4 entries$) with the code that processes 4 operations with two vector operations `.LBB0_7` label shows this in the assembly of the function.
3. Iterate until index 38 ($36+3 entries$) with the code that processes one iteration per loop. Refer to `.LBB0_11` label in the following code.

```armasm
; rsi contains the address of the vector to be incremented.
example::increment_by:
        mov     r9, qword ptr [rsi + 16] ; r9 now contains the length of the vector
        test    r9, r9                   ; Check if the vector is empty
        je      .LBB0_12                 ; Jump if the vector is empty
        mov     rcx, qword ptr [rsi]     ; rcx now contains the address of the vector data
        lea     rax, [r9 - 1]            ; rax now contains the index of the last entry in the vector.
        movabs  rdx, 2305843009213693951 ; Hex 1FFF_FFFF_FFFF_FFFF
        and     rdx, rax                 ; rdx contains the index of the last entry in the vector with 3 MSB cleared.
        mov     rax, rcx                 ; rax now contains the address of the vector data
        cmp     rdx, 3                   ; Check if the vector has less than 4 entries
        jb      .LBB0_10                 ; Jump if the vector has less than 4 entries
        
        ; ⭐ Handle vectors with 4 or more entries
        inc     rdx             ; Add 1 to the last entry index to get length.
        mov     r8, rdx         ; r8 now contains the number of items to be processed.
        and     r8, -4          ; Mask of the lower 2 bits to get the count of entries that is divisible by 4.
        movq    xmm0, rdi       ; Parameter num, the increment value, is now in xmm0.
        pshufd  xmm0, xmm0, 68  ; Make a copy of num to the upper 64 bits to facilitate vector addition.
                                ; 68 = 0100 0100 results in copying the lower 64 bits to the upper 64 bits.
                                ; A reference with detailed description follows the assembly code.
        lea     rax, [r8 - 4]   ; rax now is 4 less than the number of items to be processed.
        mov     r10, rax        ; r10 is now 4 less than the number of items to be processed.
        shr     r10, 2          ; Divide r10 by 4 to get the index of the last quad 64-bit numbers.
        inc     r10             ; Add 1 to get the count of quad 64-bit numbers.
        test    rax, rax        ; Check if any more sets of 4 entries are available
        je      .LBB0_3         ; Jump if no more sets of 4 entries are available
        mov     rax, r10        ; rax now contains the count of quad 64-bit numbers
        and     rax, -2         ; Mask of the lower 2 bits to get the count of quad 64-bit numbers that is divisible by 4.
        xor     esi, esi        ; Set the quad 64-bit numbers index to 0

        ; ⭐ Process eight 64-bit additions per iteration
.LBB0_5:
        movdqu  xmm1, xmmword ptr [rcx + rsi]         ; Load the first two 64-bit number
        movdqu  xmm2, xmmword ptr [rcx + rsi + 16]    ; Load the third and fourth 64-bit number
        movdqu  xmm3, xmmword ptr [rcx + rsi + 32]    ; Load the fifth and sixth 64-bit number
        movdqu  xmm4, xmmword ptr [rcx + rsi + 48]    ; Load the seventh and eighth 64-bit number
        paddq   xmm1, xmm0      ; Add the increment value to the first two 64-bit number
        paddq   xmm2, xmm0      ; Add the increment value to the third and fourth 64-bit number
        movdqu  xmmword ptr [rcx + rsi], xmm1         ; Store the first two 64-bit number
        movdqu  xmmword ptr [rcx + rsi + 16], xmm2    ; Store the third and fourth 64-bit number
        paddq   xmm3, xmm0      ; Add the increment value to the fifth and sixth 64-bit number
        paddq   xmm4, xmm0      ; Add the increment value to the seventh and eighth 64-bit number
        movdqu  xmmword ptr [rcx + rsi + 32], xmm3    ; Store the fifth and sixth 64-bit number
        movdqu  xmmword ptr [rcx + rsi + 48], xmm4    ; Store the seventh and eighth 64-bit number
        add     rsi, 64     ; Move offset to next entry
        add     rax, -2     ; Decrement the count by 2 as 8 64-bit numbers have been processed.
        jne     .LBB0_5     ; Jump if there are still quad 64-bit numbers to process
        test    r10b, 1     ; Check if there are still entries to process
        je      .LBB0_8     ; Jump if less than 4 entries need to be processed.

        ; ⭐ Block processing four 64-bit additions
.LBB0_7:
        movdqu  xmm1, xmmword ptr [rcx + rsi]           ; Load two 64-bit numbers from the vector
        movdqu  xmm2, xmmword ptr [rcx + rsi + 16]      ; Load two more 64-bit numbers from the vector
        paddq   xmm1, xmm0                              ; Add the increment value to the first two 64-bit number
        paddq   xmm2, xmm0                              ; Add the increment value to the 3rd and 4th of 64-bit number
        movdqu  xmmword ptr [rcx + rsi], xmm1           ; Store the result back in the vector (1st and 2nd number)
        movdqu  xmmword ptr [rcx + rsi + 16], xmm2      ; Store the result back in the vector (3rd and 4th number)
.LBB0_8:
        cmp     rdx, r8                 ; Check if all entries have been processed
        je      .LBB0_12                ; Jump if all entries have been processed
        lea     rax, [rcx + 8*r8]       ; rax now contains the address of the last entry
.LBB0_10:
        lea     rcx, [rcx + 8*r9]       ; rcx now contains the address of the last entry in the vector
                                        ; rax points to the first entry in the vector

        ; ⭐ Process one 64-bit addition per iteration 
.LBB0_11:
        add     qword ptr [rax], rdi    ; Add num to the next entry in the vector
        add     rax, 8                  ; Move to the next entry in the vector
        cmp     rax, rcx                ; Check if we have reached the end of the vector
        jne     .LBB0_11                ; Jump if we have not reached the end of the vector
.LBB0_12:
        ret
.LBB0_3:
        xor     esi, esi                ; esi is now 0
        test    r10b, 1                 ; Check if one set of quad 64-bit numbers is available
        jne     .LBB0_7                 ; Jump if quad 64-bit numbers are available
        jmp     .LBB0_8                 ; Jump if less than 4 64-bit numbers are available
```

> `pshufd` shuffling options that are explained [in a stack exchange article](https://reverseengineering.stackexchange.com/questions/20338/how-do-the-pshuflw-and-pshufd-instructions-work).

---

## Assembly code for `increment_example`

We have looked at the code generated for `increment_by`. Now let us examine a call to the function from the `increment_example` function.

```rs
pub fn increment_example(inc_by: i64, array: [i64; 4]) -> Vec<i64> {
    let mut list = array.to_vec();
    increment_by(inc_by, &mut list);
    list
}
```

Looking at the code for `increment_example` we can see that the generated assembly code is a lot simpler than that for `increment_by` function. We also see that there is no call to `increment_by`, the relevant code from the function has been inlined into `increment_example`. We are seeing a lot of compiler optimizations at work here.

- The compiler figures out that inlining the `increment_by` function would reduce a function call.
- Once the compiler decides to inline, it sees that the vector will only be of length 4. The compiler decides that it does not need to bring in the complexity of handling any arbitrary length vector. The compiler optimizes the inlined code to be a lot faster by just including the handling for a vector of length 4.
- The compiler also unrolls the loop to process four 64-bit additions.

Also, note that the assembly code for `increment_example` calls `__rust_alloc` for allocating the vector data on the heap. If the memory allocation fails, the function throws an exception using the `ud2` instruction.

```armasm
.LCPI1_0:
        .quad   4               ; Vector length
        .quad   4               ; Vector capacity
example::increment_example:
        push    r15             ; Save r15 on the stack
        push    r14             ; Save r14 on the stack
        push    rbx             ; Save rbx on the stack
        mov     r15, rdx        ; r15 = address of the array
        mov     r14, rsi        ; r14 = inc_by
        mov     rbx, rdi        ; rbx = address of vector on the stack

        ; 📦 Allocate memory for the vector buffer
        mov     edi, 32       ; edi = number of 64-bit numbers to process
        mov     esi, 8          ; esi = byte alignment is at 8 bytes
        call    qword ptr [rip + __rust_alloc@GOTPCREL] ; The allocated heap address is in rax
        test    rax, rax ; Check if the allocation failed
        je      .LBB1_1  ; Jump if the allocation failed

        ; ⭐ Copy the array to the vector
        mov     qword ptr [rbx], rax            ; Store the address of the vector in the vector buffer
        movups  xmm0, xmmword ptr [r15]         ; Vectot load the first two 64-bit numbers from the array
        movups  xmm1, xmmword ptr [r15 + 16]    ; Vector load the third and fourth 64-bit numbers from the array
        movups  xmmword ptr [rax + 16], xmm1    ; Vector store the third and fourth 64-bit numbers in the vector
        movups  xmmword ptr [rax], xmm0         ; Vector store the first two 64-bit numbers in the vector
        movaps  xmm0, xmmword ptr [rip + .LCPI1_0] ; Load the vector length and capacity
        movups  xmmword ptr [rbx + 8], xmm0     ; Store the vector length and capacity in the vector

        ; ⭐ Increment the vector
        movq    xmm0, r14                       ; Load the increment value
        pshufd  xmm0, xmm0, 68                  ; The increment value is now copied to the lower and upper 64-bits of xmm0
        movdqu  xmm1, xmmword ptr [rax]         ; Load the first two 64-bit numbers from the vector
        movdqu  xmm2, xmmword ptr [rax + 16]    ; Load the third and fourth 64-bit numbers from the vector
        paddq   xmm1, xmm0                      ; Add the increment value to the first two 64-bit numbers
        movdqu  xmmword ptr [rax], xmm1         ; Store the first two 64-bit numbers in the vector
        paddq   xmm2, xmm0                      ; Add the increment value to the third and fourth 64-bit numbers
        movdqu  xmmword ptr [rax + 16], xmm2    ; Store the third and fourth 64-bit numbers in the vector

        ; ⭐ Return the vector
        mov     rax, rbx        ; Return the vector in rax
        pop     rbx             ; Restore rbx
        pop     r14             ; Restore r14
        pop     r15             ; Restore r15
        ret                     ; Return the vector in rax
.LBB1_1:
; 💀 Allocation failure handler
        mov     edi, 32         ; edi = Size of the attempted allocation
        mov     esi, 8          ; esi = Alignment is at 8 bytes
        call    qword ptr [rip + alloc::alloc::handle_alloc_error@GOTPCREL] ; Call the allocation failure handler
        ud2                     ; Use the ud2 instruction to throw an exception
```

---

## Experiment in the Compiler Explorer

Now let us [experiment with the vector iteration example in the Compiler Explorer](https://godbolt.org/z/q7G3nerPd).

- In the `increment_example` function, change `array: [i64; 4]` (line 12) and see how the compiler handles different array lengths:
  - `array: [i64; 128]` - The compiler unrolls the loop even for 128 entries!
  - `array: [i64; 256]` - The compiler generates an efficient loop that performs 8 64-bit additions in a single iteration of the loop.
  - `array: [i64; 257]` - 256 operations are performed in the loop and the remaining one operation is performed outside the loop.
- Change the compiler options to use the AVX-512 instruction set using the flag setting `-C opt-level=3 -C target_cpu=skylake-avx512` (change in the edit box on the top right). The compiler generates code that uses the `vaddq` instruction to perform 4 64-bit additions with a single instruction.
  - `array: [i64; 256]` - With the AVX-512 instruction set, the compiler generates an efficient loop that performs 16 64-bit additions in a single iteration of the loop.
- In the `increment_by` function, change `*item += num` to `*item *= num` (line 8) and see the dramatic impact on the generated code.
  - The compiler does not try to optimize for different vector lengths. It generates a single loop with that performs the multiplication.

---

## Key Takeaways

- When the length of a vector is not known at compile time, the generated code performs runtime length checks to pick the most efficient loop.
- When the length of the vector is known at compile time, the compiler can generate more efficient code as it does not need to perform runtime length checks to pick the right looping option. The compiler can unroll the loop even for a large number of iterations.
- The compiler can generate more efficient code when the vector is a multiple of 8 or 16 elements.
- Vector creation involves dynamic memory allocation. The compiler generates code that panics when the allocation fails.
- Target a more recent CPU architecture to get more efficient code. The compiler can generate code that uses the AVX-512 instruction set to perform 4 64-bit operations with a single instruction.

