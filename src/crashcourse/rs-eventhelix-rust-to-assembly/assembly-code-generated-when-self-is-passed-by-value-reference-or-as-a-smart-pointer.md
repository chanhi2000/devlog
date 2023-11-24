---
lang: ko-KR
title: Assembly code generated when self is passed by value, reference or as a smart pointer
description: 🦀Rust to Assembly > Assembly code generated when self is passed by value, reference or as a smart pointer
tags: ["crashcourse", "digitalocean", "rust", "rs", "assembly"]
meta:
  - name: 🦀Rust to Assembly - Assembly code generated when self is passed by value, reference or as a smart pointer
    content: Assembly code generated when self is passed by value, reference or as a smart pointer
  - property: og:title
    content: 🦀Rust to Assembly
  - property: og:description
    content: Assembly code generated when self is passed by value, reference or as a smart pointer
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rs-eventhelix-rust-to-assembly/assembly-code-generated-when-self-is-passed-by-value-reference-or-as-a-smart-pointer.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Assembly code generated when self is passed by value, reference or as a smart pointer
desc: Learn how enums are organized in memory. Also understand the generated assembly code for match on an enum.
link: https://eventhelix.com/rust/rust-to-assembly-enum-match
logo: https://eventhelix.com/images/EventHelix-white-rounded-bg-blue.png
color: rgba(250, 250, 250, 0.2)
```

> Assembly code generated from Rust for parameter passing

---

Here we will be exploring the performance implications of passing the `self` parameter by value, reference, and smart pointers (`Box`, `Rc` and `Arc`). The generated assembly code will help us understand what happens under the hood.

We will be working with the `Complex` struct defined below. The code shows how a struct and its associated methods declarations in Rust. Note that like Python, the `self` parameter that refers to the associated object is passed explicitly in the method declaration.

```rs
use std::rc::Rc;
use std::sync::Arc;

#[derive(Copy, Clone)]
pub struct Complex {
    real: f64,
    imaginary: f64,
}

impl Complex {
    pub fn magnitude_self_copy(self) -> f64 {
        (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
    }

    pub fn magnitude_self_reference(&self) -> f64 {
        (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
    }

    // Passing smart pointers
    pub fn magnitude_self_box(self: Box<Self>) -> f64 {
        (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
    }

    pub fn magnitude_self_rc(self: Rc<Self>) -> f64 {
        (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
    }

    pub fn magnitude_self_arc(self: Arc<Self>) -> f64 {
        (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
    }
}
```

The `self` parameter in a method can specify the expected ownership model for the object. The following table shows `self` with different ownership models used in the methods associated with the `Complex` struct.


| `Self` __type__ | Passed parameter (highlighted in green) | Implication |
| :---: | :--- | :--- |
| `self` | ![Passing self by value](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/self.svg) | By default, Rust assumes that a parameter passed by value is moved. The ownership of the parameter passes to the called function. In this example, however, the `Complex` type implements `Copy` and `Clone` traits. In this case, the compiler is copying the complete object to the method. |
| `&self` | ![Passing self by reference](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/ref_self.svg) | The method is immutably borrowing the object. Here the compiler will pass the address of `Complex` object to the method. |
| `self : Box<Self>` | ![Passing self by a Box pointer](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/box_self.svg) | `Box` is like the `unique_ptr` in C++. Here the object is allocated on the heap. The method gets complete ownership of the object and will cease to exist after the method returns. The memory would be released back to the heap. | 
| `self : Rc<Self>` | ![Passing self by a RC pointer](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/rc_self.svg) | Here a shared smart pointer has been passed to the method. Multiple pointers to this object may be active in the same thread. The method will share ownership to `self`. The function will decrement shared reference counts stored along with the `Complex` object. If this was the only reference to the object, the object would be destroyed, and the memory would be released to the heap. If the reference counts do not go to zero, the object will live even after the method returns. |
| `self : Arc<Self>` | ![Passing self by a Arc pointer](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/arc_self.svg) | Here a multi-thread safe `Arc` smart pointer is being passed to the method. The method will now own the `Arc` smart pointer. When the method goes out of scope, the shared reference counts saved along with `Complex` will be atomically decremented. If the reference counts reach 0, the object in the heap will be deleted. Note that the reference counts are now decremented using atomic read-modify-write operations. | 

Now let’s examine the assembly code generated for each method shown above. To aid in the understanding a flow chart as well as annotated assembly is presented for each method.

---

## Self is passed by value to the method

```rs
pub fn magnitude_self_copy(self) -> f64 {
    (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
}
```

The assembly code generated for the above function is shown below. One interesting thing to note here is that the compiler has optimized the passing of the `Complex` object by storing the `real` and `imaginary` fields in `xmm0` and `xmm1` registers, respectively. The method computes the result, and the final return value is returned via the `xmm0` register. The following flow chart better illustrates this flow.

### Flow chart

![Assembly code overview for passing self by value](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/self-by-value-calculate-magnitude.svg)

<!-- TODO: mermaid로 변경 -->

### Assembly code

```armasm
; The compiler has optimized the code to pass the real and 
; imaginary parts in the xmm0 and xmm1 registers.
example::Complex::magnitude_self_copy:
        mulsd   xmm0, xmm0  ; Square the real part
        mulsd   xmm1, xmm1  ; Square the imaginary part
        addsd   xmm1, xmm0  ; Add the two squared numbers and store the result in xmm1
        xorps   xmm0, xmm0  ; Clear xmm0. This will zero out the upper bits of the reg.
        sqrtsd  xmm0, xmm1  ; Perform the square root on the squared sum and store in xmm0
        ret                 ; Return to the called with the result in xmm0
```

---

## Self reference &T is passed to the method

```rs
pub fn magnitude_self_reference(&self) -> f64 {
    (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
}
```
A reference to self (`&self`) has been passed in the above function. Here the address of the `Complex` object is passed to the method via the `rdi` register. The generated code then accesses the `real` and `imaginary` parts via a vector operation. The squaring of the numbers is also performed as a vector operation in `xmm0`. The vector results are then unpacked into the `xmm1` and `xmm2` registers. The `xmm1` and `xmm2` registers are then added together and the result is stored in `xmm1`. The square root of the result is then computed and stored in `xmm0`. The final result is returned via the `xmm0` register.

### Flow chart

![Assembly code overview for passing self by reference](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/self-by-reference-calculate-magnitude.svg)

<!-- TODO: mermaid로 변경 -->


### Assembly code

We see that the compiler has generated very different code for the `&self` method compared to the `self` method. In the `&self` method, the compiler has to copy the real and imaginary parts from the memory. The compiler, however, makes up for this loss of performance by using vector operations to perform the squaring and addition of the numbers.

```armasm
; The caller will pass the pointer to the Complex struct in the rdi register.
example::Complex::magnitude_self_reference:
        movupd      xmm0, xmmword ptr [rdi]    ; Vectorized load of the real and imaginary parts
        mulpd       xmm0, xmm0                 ; Square the real and imaginary parts (vectorized)
        movapd      xmm1, xmm0                 ; Vectorized copy of the real and imaginary parts to xmm1
        unpckhpd    xmm1, xmm0                 ; Unpack the real and imaginary parts into xmm1 and xmm0
        addsd       xmm1, xmm0                 ; Add the real and imaginary parts
        xorps       xmm0, xmm0                 ; Clear the complete xmm0 to 0
        sqrtsd      xmm0, xmm1                 ; square root of xmm1 -> xmm0
        ret                                    ; return xmm0
```

---

## Self points to the object on the heap via Box

```rs
pub fn magnitude_self_box(self: Box<Self>) -> f64 {
    (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
}
```

A `Box` smart pointer to self is being passed here. The `Box` contains a pointer to the `Complex` object stored on the heap. The following table shows the heap representation.

| Byte offset | Field | Field size in bytes |
| :--- | :--- | :--- |
| 0 | `Complex` value | 16 |

The generated assembly code looks like the `&self` case. This happens because the method owns the `Box` that points to the `Complex` on the heap. Once the method exits, the self `Box` will go out of scope. The `Box` smart pointer will then free the associated memory (The `Box` in Rust is like the `unique_ptr` in C++).

### Flow chart

![Assembly code overview for passing self as a Box smart pointer](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/box-self-calculate-magnitude.svg)

<!-- TODO: mermaid로 변경 -->

### Assembly code

```armasm
; The caller stores the Complex object on the heap.
; The heap address is passed in the rdi register.
example::Complex::magnitude_self_box:
        push        rax                         ; Preserve the current value of rax on the stack.
        movupd      xmm0, xmmword ptr [rdi]     ; Vectorized load of the real and imaginary parts
        mulpd       xmm0, xmm0                  ; Square the real and imaginary parts (vectorized)
        movapd      xmm1, xmm0                  ; Vectorized copy of the real and imaginary parts to xmm1
        unpckhpd    xmm1, xmm0                  ; Unpack the real and imaginary parts into xmm1 and xmm0
        addsd       xmm1, xmm0                  ; Add the squared real and imaginary parts
        xorps       xmm0, xmm0                  ; Clear the complete xmm0 to 0
        sqrtsd      xmm0, xmm1                  ; square root of xmm1 -> xmm0

        ;♻️This method owns the Box. Now that the function is about to return so 
        ; the Box is going out of scope and is about to be dropped.
        ; Dropping here means that the heap memory allocated for the Complex object
        ; can now be freed. Note that the rdi register already points to the memory that
        ; needs to be freed.
        movsd       qword ptr [rsp], xmm0       ; Save xmm0 on the stack
        mov         esi, 16                     ; Size of the memory to be freed (Complex is 16 bytes)
        mov         edx, 8                      ; The data is 8-byte aligned.

        ; The parameters to the de-allocation function are:
        ; rdi : Address of memory to be freed
        ; esi : Size of memory to be freed.
        ; edx: Alignment of the memory to be freed.
        call        qword ptr [rip + __rust_dealloc@GOTPCREL]   ; The parameters to the de-allocation function are:
        movsd       xmm0, qword ptr [rsp]       ; Restore the xmm0 from the stack. This is the return value.
        pop         rax                         ; Restore the value of the rax register
        ret                                     ; Return the result in xmm0
```

---

## A reference-counted smart pointer `Rc` to self is passed

```rs
pub fn magnitude_self_rc(self: Rc<Self>) -> f64 {
    (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
}
```

The above method is designed to take ownership of `Rc`, a reference counting smart pointer. The `Rc` points to the following data on the heap:

| Byte offset | Field | Field size in bytes |
| :--- | :--- | :--- |
| 0 | `strong` reference count | 8 | 
| 8 | `weak` reference count | 8 | 
| 16 | `Complex` value | 16 |

When a `Rc` is created it starts with the strong reference count set to 1. If a `Rc` is cloned, it does not copy the pointed data, it just increments the reference count. This way multiple shared references may point to the same heap memory. Also, when a `Rc` is dropped, the reference count is decremented. If the reference count falls to 0, the memory block on the heap is de-allocated.

The generated assembly code looks like the `&self` case. The major differences are due to `Rc` reference count decrement handling. Notice that the offsets for the access of the `real` and `imaginary` parts are 16 and 24, respectively. This is due to the two 64-bit reference counts that are present before the `Complex` object.

Once the `real` and `imaginary` parts have been saved in `xmm1`, the reference counts are decremented in preparation of the method going out of scope. If the reference count hits zero, the object pointed from the `Rc` will be deleted. If not, the memory block containing the reference counts and `Complex` objects live as there are other Rc smart pointers pointing to the same memory block.

::: note Note

We have ignored the weak reference in this discussion.

:::

### Flow chart

![Assembly code overview for passing self as an Rc smart pointer](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/rc-self-calculate-magnitude.svg)

<!-- TODO: mermaid로 변경 -->

### Assembly code

```armasm
; The caller passes a heap address in the rdi register that points to:
; Offset 00: Strong reference count
; Offset 08: Weak reference count
; Offset 16: Complex object

example::Complex::magnitude_self_rc:
        sub     rsp, 24                         ; Create a 24-byte space for local variables
        movupd  xmm1, xmmword ptr [rdi + 16]    ; Vector fetch the real and imaginary parts of the struct from memory
        dec     qword ptr [rdi]                 ; Decrement the strong reference
        jne     .LBB4_3                         ; If not zero, proceed with the calculation.
        dec     qword ptr [rdi + 8]             ; Decrement the weak reference
        jne     .LBB4_3                         ; If not zero, proceed with the calculation. 
        mov     esi, 32                         ; Size of the memory to be freed (Complex is 16 bytes)
                                                ; plus two 8-byte reference counters.
        mov     edx, 8                          ; The data is 8-byte aligned.
        movapd  xmmword ptr [rsp], xmm1         ; Vector save xmm1 on the stack (real and imaginary parts)
        call    qword ptr [rip + __rust_dealloc@GOTPCREL] ; De-allocate the memory
        movapd  xmm1, xmmword ptr [rsp]         ; Vector restore xmm1 from the stack (real and imaginary parts)
.LBB4_3:
        mulpd       xmm1, xmm1                  ; Vector square the real and imaginary parts
        movapd      xmm0, xmm1                  ; Copy the result to xmm0
        unpckhpd    xmm0, xmm1                  ; Unpack the real and imaginary parts into xmm1 and xmm0
        addsd       xmm0, xmm1                  ; Add the squared real and imaginary parts
        sqrtsd      xmm0, xmm0                  ; Square root of xmm0 -> xmm0
        add         rsp, 24                     ; Free the space saved for local storage
        ret                                     ; Return the result in xmm0
```

---

## An atomic reference counted shared reference Arc to self is passed

```rs
pub fn magnitude_self_arc(self: Arc<Self>) -> f64 {
    (self.real.powf(2.0) + self.imaginary.powf(2.0)).sqrt()
}
```

`Arc` is a smart pointer that operates across threads. This requires that reference count increments and decrements are atomic. An atomic read-modify-write operation is performed to manage reference counts across threads.

The `Arc` smart pointer points to a heap allocation that contains `AtomicUsize` strong and weak references. The `Complex` object is stored after the two references (see the following table for the memory representation).

| Byte offset | Field | Field size in bytes |
| :--- | :--- | :--- |
| 0 | `AtomicUsize` strong reference count | 8 |
| 8 | `AtomicUsize` weak reference count | 8 |
| 16 | `Complex` value | 16 |

The code generated for `Arc` is similar to the code generated for `Rc`. The significant differences from the `Rc` assembly code are:

- `lock sub qword ptr [rdi]`, 1 is generated for handling the atomic decrement of the reference count.
- The drop check and weak reference count decrement are handled in `alloc::sync::Arc<T>::drop_slow` function.

### Flow chart

![Assembly code overview for passing self as an Arc smart pointer](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/arc-self-calculate-magnitude.svg)

#### Drop slow utility function

![Assembly code for the drop slow function](https://eventhelix.com/rust/rust-to-assembly-value-reference-box-rc-arc/arc-self-drop-slow.svg)

### Assembly code

```armasm
; The caller passes a heap address in the rdi register that points to:
; Offset 00: Strong reference 
; Offset 08: Weak reference
; Offset 16: Complex object
example::Complex::magnitude_self_arc:
        sub     rsp, 24                         ; Create 24-byte space for local variables
        movupd  xmm1, xmmword ptr [rdi + 16]    ; Fetch the real and imaginary parts of the struct from memory
        lock    dec     qword ptr [rdi]         ; Lock and perform an atomic decrement of the strong reference
        jne     .LBB5_2                         ; If not zero, skip ahead to the computation.
        movapd  xmmword ptr [rsp], xmm1         ; Save real and imaginary parts on the stack
        call    alloc::sync::Arc<T>::drop_slow  ; Call the drop_slow function to for further delete processing.
        movapd  xmm1, xmmword ptr [rsp]         ; Now restore the real and imaginary parts from the stack.
.LBB5_2:
        mulpd       xmm1, xmm1                  ; square real and imaginary parts
        movapd      xmm0, xmm1                  ; Copy the result to xmm0
        unpckhpd    xmm0, xmm1                  ; Unpack the high parts of xmm1 into xmm0
        addsd       xmm0, xmm1                  ; Add the squared numbers and save them to xmm0
        sqrtsd      xmm0, xmm0                  ; Square root of xmm0 -> xmm0
        add         rsp, 24                     ; Free the space saved for local storage
        ret                                     ; Return the result in xmm0

; This function frees memory if the atomic reference counts have reached 0.
; The function is invoked with rdi pointing to the address where the address of the complete Arc is stored.
alloc::sync::Arc<T>::drop_slow:
        cmp     rdi, -1         ; Check if Arc block address is set to -1
        je      .LBB0_2         ; If it is skip ahead and return.
        lock    dec  qword ptr [rdi + 8] ; Perform an atomic decrement of the weak reference.
        jne     .LBB0_2         ; If the weak reference is 0, proceed to free the Arc block
        mov     esi, 32         ; Arc block size is 32: 8-strong, 8-weak, 16-Complex
        mov     edx, 8          ; Alignment is 8 bytes
        jmp     qword ptr [rip + __rust_dealloc@GOTPCREL]   ; Free memory
.LBB0_2:
        ret
```

---

## Key takeaways

### For small types copying the object might be more efficient  than passing a reference

In our analysis, the most efficient code with the least memory overhead was generated for the `Complex::magnitude_self_copy` method. From small types, passing by value might be more efficient than passing a reference.

###  Passing a &T is efficient

In most scenarios, passing a reference will be more efficient than passing by value as the compiler will not need to copy the entire contents to the called function.

###  Passing a Box will result in object de-allocation

Passing a `Box<T>` will result in the object being de-allocated. If this is not the desired behavior, then pass a `&T` or `&mut T` instead.

### Prefer passing a &T over Rc and Arc when the function just  wishes to read from T

From the generated code we see that passing an owned `Rc<T>` and `Arc<T>` introduce significant overhead. Prefer passing a reference `&T` in scenarios where no sharing changes are expected.

The [Reddit discussion](https://www.reddit.com/r/rust/comments/lfxy6b/pass_arct_by_clone_or_by_reference) on the subject defines the following rules for `Arc<T>`:

- If a function always needs to own its own copy of the `Arc`, pass `Arc<T>` directly by value. The caller can decide whether to clone or move an existing `Arc` into it.
- If the function just very rarely needs to make a copy of the `Arc`, `&Arc<T>` can make sense so that you are not forced to do atomic operations in the common case, at the cost of not being able to just move the arc in the uncommon case.
- If the function just wants to read from the `T`, just pass `&T`.

###  Consider the memory overhead of `Rc` and `Arc`

On a 64-bit machine, `Rc` and `Arc` add a 16 byte overhead on the heap.

---

## View in the Compiler Explorer

See the direct mapping from the Rust code to the assembly for [all the methods we have covered in this article.](https://godbolt.org/z/b344MYPc6)