---
lang: ko-KR
title: Mapping Arrays, Tuples, Box and Option to assembly
description: 🦀Rust to Assembly > Mapping Arrays, Tuples, Box and Option to assembly
tags: ["crashcourse", "digitalocean", "rust", "rs", "assembly"]
meta:
  - name: 🦀Rust to Assembly - Mapping Arrays, Tuples, Box and Option to assembly
    content: Mapping Arrays, Tuples, Box and Option to assembly
  - property: og:title
    content: 🦀Rust to Assembly
  - property: og:description
    content: Mapping Arrays, Tuples, Box and Option to assembly
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rs-eventhelix-rust-to-assembly/mapping-arrays-tuples-box-and-option-to-assembly.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Mapping Arrays, Tuples, Box and Option to assembly
desc: Learn how Arrays, Tuples, Box and Option are represented in memory. Also understand the generated assembly code for these types.
link: https://eventhelix.com/rust/rust-to-assembly-arrays-option-box
logo: https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png
color: rgba(250, 250, 250, 0.2)
```

---

> Rust to assembly: Arrays, Tuples, Box, and Option handling

We have already seen how Rust handles enums under the hood. We also looked at the code generation for the Box smart pointer. Here we put these items together in a Rust example that describes how arrays, tuples, Option enum, and Box smart pointer allocations are managed at the assembly level.

## Code example

We will be dissecting the assembly generated for the following Rust code. The code defines functions that take arrays, tuples, Box, and Option as arguments and return them. We will be looking at the assembly generated for the functions that take these types as arguments.

```rs
// A named tuple with two fields.
pub struct Coordinate(f64, f64);

// A named tuple that contains two named tuples.
pub struct Line(Coordinate, Coordinate);

// This function takes an optional named tuple and returns an optional Box smart pointer containing four
// coordinates.
pub fn make_quad_coordinates(maybe_coordinate: Option<Coordinate>) -> Option<Box<[Coordinate; 4]>> {
    // Check if the Option uses the Some variant. If it does, then extract the contents of the tuple
    // into x and y variables. If a None variant is used, the function simply returns.
    // The question mark is syntactic sugar for matching and extracting from a Some and returning on None.
    let Coordinate(x, y) = maybe_coordinate?;

    // Create a new Box smart pointer containing four coordinates. Note that this involves memory
    // allocation on the heap.
    Some(Box::new([
        Coordinate(x, y),
        Coordinate(-x, -y),
        Coordinate(-x, y),
        Coordinate(x, -y),
    ]))
}

// This function takes an optional named tuple and returns an optional tuple by value.
pub fn cross_lines_from_quad_coordinates(
    maybe_coordinate: Option<Coordinate>,
) -> Option<(Line, Line)> {
    // Pattern match and extract the contents of the array if the Option uses the Some variant.
    // Return None if the Option uses the None variant.
    let [a, b, c, d] = *make_quad_coordinates(maybe_coordinate)?;

    // Form two lines from four coordinates and return them as a tuple.
    // The tuple is wrapped in a Some variant.
    Some((Line(a, b), Line(c, d)))
}
```

Let us split the analysis into two functions:

- `make_quad_coordinates` that takes an optional named tuple and returns an optional Box smart pointer containing four coordinates.
- `cross_lines_from_quad_coordinates` that takes an optional named tuple and returns an optional tuple by value.

---

## Analyzing `make_quad_coordinates`

```rs
pub fn make_quad_coordinates(maybe_coordinate: Option<Coordinate>) -> Option<Box<[Coordinate; 4]>> {
    let Coordinate(x, y) = maybe_coordinate?;

    Some(Box::new([
        Coordinate(x, y),
        Coordinate(-x, -y),
        Coordinate(-x, y),
        Coordinate(x, -y),
    ]))
}
```

When we analyze the code be on the lookout for the following:

- Since the function returns a `Box` smart pointer, the assembly code allocates memory on the heap. `__rust_alloc` is used to allocate memory on the heap.
- If the heap allocation fails, the function throws an exception using a special instruction (`ud2`).
- Rust `enums` typically result in generating a discriminant value that is used to select the variant. Rust code generator optimizes the `Option<Box>` implementation by using the NULL pointer as the discriminant value.

---

## Understanding the data layout

Understanding the assembly code will be aided by understanding the memory layout of several data types used in the code. We will encounter the following data types:

- `Coordinate` - a named tuple with two fields.
- `Line` - a named tuple that contains two named tuples.
- `Box<[Coordinate; 4]>` - a Box smart pointer that contains an array of four coordinates.
- `Option<Coordinate>` - an enum that contains a named tuple.
- `Option<Box<[Coordinate; 4]>>` - an enum that contains a Box smart pointer that contains anarray of four coordinates.

Next, we look at the memory layout of the key data types used in the code.

### Representation of Option

The memory layout of the `Option<Coordinate>` type is shown below. Byte offset 0 is the discriminant used to distinguish between the variants `Some` and `None`. The `Coordinate` tuple is stored in the next two entries.

| Byte offset	| `None` | `Some` |
| :--- | :--- | :--- |
| 0 | Discriminator (0) |	Discriminator (1) |
| 8 | | f64 |
| 16 | | f64 |

### Representation of `Option<Box<[Coordinate; 4]>>`

The memory layout of the `Option<Box<[Coordinate; 4]>>` type is shown below. There are two memory locations in the `Option<Box<[Coordinate; 4]>>` type.

The first is the pointer to the array of coordinates. The second is the array of `Coordinate` objects.

### Option on the stack

The Rust code generator optimizes the `Option<Box<>>` type to a single pointer on the stack. The pointer works as a pointer to the array of coordinates as well as the discriminator. If the pointer is `NULL`, the `Option` variant is assumed to be `None`. A nonzero pointer indicates that the `Option` variant is `Some`.

| Byte offset	| `None` | `Some` |
| :--- | :--- | :--- |
| 0 | The Box pointer is `NULL` | The Box pointer contains a valid address that points to the heap. |

### `[Coordinate; 4]` array on the heap

The `[Coordinate; 4]` array is allocated on the heap. The heap pointer is stored in the Box pointer. The Box pointer points to the memory shown below. The array contains four Coordinate objects.

| Byte offset | Content |
| :--- | :--- |
| 0 | Coordinate |
| 16 | Coordinate |
| 32 | Coordinate |
| 48 | Coordinate |

### IEEE 754 floating point standard

The `Coordinate` tuple contains two `f64` fields. The `f64` type is a 64-bit floating point number. The IEEE 754 floating point standard is used to represent the floating point numbers. The standard defines the following:

| Sign | Exponent | Fraction (Mantissa) |
| :--- | :--- | :--- |
| bit 63 | bit 62 to 52	Bit | 51 to 0 |
| 1 bit | 11 bits | 52 bits |

The key point here is that floating point numbers use a sign bit to define the sign of the number. The sign bit is the most significant bit. We will see in the assembly code that the generated code flips the sign bit of the `f64` field to negate the number.

---

## Flow chart for `make_quad_coordinates`

The flow chart for the `make_quad_coordinates` function shows how the input `Option` discriminator is checked early in the function. If the `Option` is `None`, the function returns early. If the `Option` is `Some`, the function extracts the contents of the tuple and uses the `Box` smart pointer to allocate memory on the heap. The function then returns the `Box` pointer.

Key points to note:

- The flow chart also shows that the function will panic if memory allocation for forming the `Box` pointer fails.
- The compiler maximizes the use of vector operations. Often, the generated code is operating on two `f64` values at a time.
- The function will throw an exception if `Box` allocation fails.
- The compiler uses the NULL pointer as the discriminator for the `Option<Box>` type. No discriminator field is needed.

![Rust Box memory allocation and error handling](https://eventhelix.com/rust/rust-to-assembly-arrays-option-box/option-box.svg)

---

## Assembly code for `make_quad_coordinates`

The assembly code for the `make_quad_coordinates` function is shown below. The code is annotated with comments that explain the assembly code.

```armasm
; The address of Option<Coordinate> is passed in the rdi register.
; The representation of Option<Coordinate> is shown in the table above.

.LCPI0_0:
        .quad   0x8000000000000000              ; Constants used for flipping the signed bit..
        .quad   0x8000000000000000              ; ..of a 64-bit floating point number.
example::make_quad_coordinates:
        sub     rsp, 24                         ; Reserve space for local variables.
        cmp     qword ptr [rdi], 0              ; Check if the discriminator is set to 0 (None case)
        je      .LBB0_1                         ; If the discriminator is 0, jump to the exit point.

        ; 👍 Processing Some case of Option
        movups  xmm0, xmmword ptr [rdi + 8]     ; Get the 0ᵗʰ and 1ˢᵗ entry from the Coordinate tuple via a vectorized load
                                                ; (Note the 8-byte offset is needed to skip the discriminator)
        movaps  xmmword ptr [rsp], xmm0         ; Save it into the x and y local variable on the stack.

        ; Requesting memory allocation for Option<Box<[Coordinate; 4]>>.
        ; The array has 4 entries, and each entry needs 16 bytes (for the two f64s)
        ; This adds up to a total of 64 bytes.
        ; Note that no space is needed for the Option discriminator as all 0s (NULL)
        ; can be used to represent the None condition. Any nonzero heap address signifies
        ; the Some condition.

        mov     edi, 64                                 ; Request 64 byte memory
        mov     esi, 8                                  ; Alignment is set to 8 bytes
        call    qword ptr [rip + __rust_alloc@GOTPCREL] ; Request memory allocation. The result is returned in rax.
        test    rax, rax                                ; Check if the memory allocation returned an all zero address (NULL)
        je      .LBB0_5                                 ; If yes, jump to the out of memory error handling
        movaps  xmm1, xmmword ptr [rsp]                 ; Load the x and y local variable into xmm1 (vectorized load)
        movups  xmmword ptr [rax], xmm1                 ; Copy x and y to the heap
        movaps  xmm0, xmmword ptr [rip + .LCPI0_0]      ; Load the constant with the most significant bit set
        xorps   xmm0, xmm1                              ; Flip the sign bit of x and y to store -x and -y in xmm0
        movups  xmmword ptr [rax + 16], xmm0            ; Copy -x and -y to the heap (vectorized store)
        movlps  qword ptr [rax + 32], xmm0              ; Copy -x to the heap
        shufps  xmm1, xmm1, 78                          ; Swap the x and y values in xmm1
        movups  xmmword ptr [rax + 40], xmm1            ; Copy y and x to the heap
        pshufd  xmm0, xmm0, 238                         ; Bring the -y value to the lower 64 bits of xmm0
        movq    qword ptr [rax + 56], xmm0              ; Copy -y to the heap
        add     rsp, 24                                 ; Pop off the local variables from the stack
        ret                                             ; Return the result in rax

        ; 👎 Processing None case of Option
        ; Rust implements optimizes Option<Box>, the None case is signaled by an all zero (NULL)
        ; returned to the caller. There is no discriminator needed.

.LBB0_1:
        xor     eax, eax    ; Setting the lower 32 bits of rax to 0
                            ; Upper bits must be 0 to return an all zero rax
        add     rsp, 24     ; Pop off the local variables
        ret                 ; Return NULL to signal None

        ; ❌ Exception processing (memory allocation failed)
.LBB0_5:
        mov     edi, 64         ; Size of the failed allocation (64-bit)
        mov     esi, 8          ; Alignment of the failed allocation (8-byte)
        call    qword ptr [rip + alloc::alloc::handle_alloc_error@GOTPCREL] ; Call alloc error handler
        ud2                     ; Raise invalid opcode exception to trigger the exception handler.
```

---

## Analyzing cross_lines_from_quad_coordinates

```rs
pub fn cross_lines_from_quad_coordinates(
    maybe_coordinate: Option<Coordinate>,
) -> Option<(Line, Line)> {
    let [a, b, c, d] = *make_quad_coordinates(maybe_coordinate)?;
    Some((Line(a, b), Line(c, d)))
}
```

The assembly code for `cross_lines_from_quad_coordinates` really surprised us. We were expecting to see a heap allocation in the return value from the call to the `make_quad_coordinates` function. Since the `Box` was going to be consumed in the function, we were expecting to see a de-allocation of the heap memory before the function returns. What we see is a very efficient generated code that inlined the `make_quad_coordinates` and eliminated the `Box` altogether. Thus, saving a memory allocation and de-allocation.

The key points in the generated assembly code are:

- The compiler inlines the `make_quad_coordinates` function. This results in deep optimization of the code.
- The compiler eliminates the `Box` allocation and de-allocation.
- The generated code also optimizes the memory writes by joining together two 64-bit writes into a single 128-bit write.

---

## Representation of `Option<(Line, Line)>`

Understanding the representation of `Option<Line,Line>` will assist in keeping track of the flow of the assembly code. The memory layout starts with the `Option` discriminator. The value of 0 indicates the `None` case. A value of 1 indicates the `Some` case. The `Some` case is followed by the two Line structs. The `Line` struct is a tuple of two `Coordinate` structs. The `Coordinate` struct is a tuple of two `f64` values.


| Byte offset	| `None` | `Some` |
| :--- | :--- | :--- |
| 0 | Discriminator (0) |	Discriminator (1) | 
| 8 | | tuple.0 First Coordinate (x): f64 |
| 16 | | tuple.0 First Coordinate (y): f64 |
| 24 | | tuple.0 Second Coordinate (x): f64 |
| 32 | | tuple.0 Second Coordinate (y): f64 |
| 40 | | tuple.1 First Coordinate (x): f64 |
| 48 | | tuple.1 First Coordinate (y): f64 |
| 56 | | tuple.1 Second Coordinate (x): f64 |
| 64 | | tuple.1 Second Coordinate (y): f64 |

---

## Flow chart of `cross_lines_from_quad_coordinates`

We get a glimpse of the deep optimization of the generated code by looking at the flow chart of the `cross_lines_from_quad_coordinates` function. The flow chart shows the inlined code of the `make_quad_coordinates` function. The `Box` allocation and de-allocation are eliminated. Since the `Box` is eliminated, memory allocation failure exception is impossible.

In fact, the flow chart of the `cross_lines_from_quad_coordinates` function is simpler than the flow chart of the `make_quad_coordinates` function it is supposed to call!

![Example of compiler optimizing away Box](https://eventhelix.com/rust/rust-to-assembly-arrays-option-box/option-box-quad-coordinates.svg)

---

## Assembly code for `cross_lines_from_quad_coordinates`

Examine the assembly code using the flow chart blueprint.

Key points to note in the assembly code:

- The `make_quad_coordinates` function is inlined.
- The `Box` allocation and de-allocation are eliminated.
- The function cannot throw an exception because there is no heap allocation.
- The caller of `cross_lines_from_quad_coordinates` is responsible for the memory allocation of the return value.
- The generated code uses vectorized instructions to operate on two `f64s` simultaneously.

```armasm
; maybe_coordinate: Option<Coordinate> is passed in rsi
; The caller passes the return struct address via rdi :Option<Box<[Coordinate; 4]>>
.LCPI1_0:
        .quad   0x8000000000000000            ; Constants used for flipping the signed bit in...
        .quad   0x8000000000000000          ; ..of a 64-bit floating point number.
example::cross_lines_from_quad_coordinates:
        mov     rax, rdi                    ; Return address information is copied to rax
        cmp     qword ptr [rsi], 0          ; Check if the discriminator is set to 0 (None case)
        je      .LBB1_1                     ; If the discriminator is 0, jump to the exit point.

        ; 👍 Some variant in maybe_coordinate input
        ; The compiler has inlined the make_quad_coordinates function.
        movups  xmm0, xmmword ptr [rsi + 8]     ; Vector load x and y from the memory pointed by rsi
        movaps  xmm1, xmmword ptr [rip + .LCPI1_0] ; Load the constant with the most significant bit set
        xorps   xmm1, xmm0 ; Negate x and y by toggling the sign bit. xmm1 how contains -x and -y.
        movups  xmmword ptr [rax + 8], xmm0     ; Copy x and y for the tuple.0 First Coordinate(x, y) to the heap
        movups  xmmword ptr [rax + 24], xmm1    ; tuple.0 Second Coordinate(x, y): Write a 128-bit word to the
                                                ; memory corresponding to -x and -y
                                                ; Note that Intel ordering will result in -x being written to
                                                ; rax+24 address. -y will be written to rax+32 address.
        movlps  qword ptr [rax + 40], xmm1      ; tuple.1 First Coordinate (x): -x written to memory.
        shufps  xmm0, xmm0, 78                  ; Swap the x and y coordinates in xmm0
        movups  xmmword ptr [rax + 48], xmm0    ; vector store y followed by x
                                                ; wrote tupe.1 First Coordinate (y): y written to memory.
                                                ; wrote tuple.1 Second Coordinate (x): x written to memory.

        pshufd  xmm0, xmm1, 238                 ; Bring -y to the lower 64-bits of xmm0
        movq    qword ptr [rax + 64], xmm0      ; tuple.1 Second Coordinate (y): -y written to memory.
        mov     ecx, 1                          ; Set the discriminator for Some (32 bit write)
        mov     qword ptr [rax], rcx            ; Write the discriminator to memory 
                                                ; (rax is the 64-bit register that contains ecx)
        ret                                     ; Return the result in rax

.LBB1_1:
        ; 👎 None variant in maybe_coordinate input
        xor     ecx, ecx                        ; None case (Discriminator is set to 0)
        mov     qword ptr [rax], rcx            ; Write the None discriminator
        ret                                     ; Return the result in rax
```

---

## Key takeaways

- The Rust compiler uses vector operations to perform multiple operations in a single instruction.
- Rust's inlining of functions is very deep and can eliminate expensive heap allocations.
  - The inlining of functions works for functions in other crates as well.
- `Option` containing a `Box` is represented as a single 64-bit pointer. The `NULL` pointer indicates the `None` case. A non-NULL pointer indicates the `Some` case.
- No discriminators are used to represent the `Option` type.
- Rust functions throw exceptions on memory allocation failure. One needs to be careful when using smart pointers and types that allocate memory from the heap.

---

## View in the Compiler Explorer

The [Compiler Explorer](https://godbolt.org/z/fbT5hGrsz) is a great tool for viewing the generated assembly code. The following link shows the assembly code generated for the `make_quad_coordinates` and `cross_lines_from_quad_coordinates` functions.

You can hover over the opcodes in the assembly code to learn about the individual instructions. Two interesting instructions are:

- `shufps` is a vectorized instruction that can shuffle the contents of a move based on two-bit control fields.
- `pshufd` also supports fancy shuffling options that are explained in a [stack exchange article](https://reverseengineering.stackexchange.com/questions/20338/how-do-the-pshuflw-and-pshufd-instructions-work).