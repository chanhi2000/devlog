---
lang: ko-KR
title: 3. Basic Types
description: 🦀freecodecamp.org - Rust by Practice > 3. Basic Types
tags: ["crashcourse", "rust", "rs", "youtube", "freecodecamp", "zubiarfan"]
meta:
  - name: 🦀freecodecamp.org - Rust by Practice > 3. Basic Types
    content: 3. Basic Types
  - property: og:title
    content: 3. Basic Types
  - property: og:description
    content: 🦀freecodecamp.org - Rust by Practice > 3. Basic Types
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rs-freecodecamp-rust-by-practice/03
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Rust By Practice
desc: 3. Basic Types
link: https://practice.rs/basic-types/numbers.html
logo: https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true
color: rgba(22, 25, 35, 0.2)
```

<!-- https://practice.rs/elegant-code-base.html -->

---


## Data Types

### Introduction

Every value in Rust is of a certain _data type_, which tells Rust what kind of data is being specified so it knows how to work with that data. We’ll look at two data type subsets: scalar and compound.

Keep in mind that Rust is a _statically typed_ language, which means that it must know the types of all variables at compile time. The compiler can usually infer what type we want to use based on the value and how we use it. In cases when many types are possible, such as when we converted a String to a numeric type using parse in the [“Comparing the Guess to the Secret Number”](https://doc.rust-lang.org/book/ch02-00-guessing-game-tutorial.html#comparing-the-guess-to-the-secret-number) section in Chapter 2, we must add a type annotation, like this:

```rs
let guess: u32 = "42".parse().expect("Not a number!");
```
If we don’t add the `: u32` type annotation shown in the preceding code, Rust will display the following error, which means the compiler needs more information from us to know which type we want to use:

```sh
cargo build
#    Compiling no_type_annotations v0.1.0 (file:///projects/no_type_annotations)
# error[E0282]: type annotations needed
#  --> src/main.rs:2:9
#   |
# 2 |     let guess = "42".parse().expect("Not a number!");
#   |         ^^^^^
#   |
# help: consider giving `guess` an explicit type
#   |
# 2 |     let guess: _ = "42".parse().expect("Not a number!");
#   |              +++
# 
# For more information about this error, try `rustc --explain E0282`.
# error: could not compile `no_type_annotations` due to previous error
```

You’ll see different type annotations for other data types.

### Scalar Types

A _scalar_ type represents a single value. Rust has four primary scalar types: integers, floating-point numbers, Booleans, and characters. You may recognize these from other programming languages. Let’s jump into how they work in Rust.

#### Integer Types

An _integer_ is a number without a fractional component. We used one integer type in Chapter 2, the `u32` type. This type declaration indicates that the value it’s associated with should be an unsigned integer (signed integer types start with i instead of u) that takes up 32 bits of space. Table 3-1 shows the built-in integer types in Rust. We can use any of these variants to declare the type of an integer value.

##### Table 3-1: Integer Types in Rust

| Length | Sigend | Unsigned |
| :--- | :--- | :--- |
| 8-bit | `i8` | `u8` |
| 16-bit | `i16` | `u16` |
| 32-bit | `i32` | `u32` |
| 64-bit | `i64` | `u64` |
| 128-bit | `i128` | `u128` |
| arch | `isize` | `usize` |

Each variant can be either signed or unsigned and has an explicit size. `Signed` and `unsigned` refer to whether it’s possible for the number to be negative—in other words, whether the number needs to have a sign with it (signed) or whether it will only ever be positive and can therefore be represented without a sign (unsigned). It’s like writing numbers on paper: when the sign matters, a number is shown with a plus sign or a minus sign; however, when it’s safe to assume the number is positive, it’s shown with no sign. Signed numbers are stored using [two’s complement](https://en.wikipedia.org/wiki/Two%27s_complement) representation.

Each signed variant can store numbers from $-(2^{n-1})$ to $2^{n-1} - 1$ inclusive, where $n$ is the number of bits that variant uses. So an i8 can store numbers from $-(2^7)$ to $2^7-1$, which equals $-128$ to $127$. Unsigned variants can store numbers from $0$ to $2^n-1$, so a `u8` can store numbers from $0$ to $2^8-1$, which equals $0$ to $255$.

Additionally, the `isize` and `usize` types depend on the architecture of the computer your program is running on, which is denoted in the table as “arch”: 64 bits if you’re on a 64-bit architecture and 32 bits if you’re on a 32-bit architecture.

You can write integer literals in any of the forms shown in Table 3-2. Note that number literals that can be multiple numeric types allow a type suffix, such as `57u8`, to designate the type. Number literals can also use _ as a visual separator to make the number easier to read, such as 1_000, which will have the same value as if you had specified 1000.

##### Table 3-2 Integer Literals in Rust

| Number literals | Example |
| :--- | :--- |
| Decimal | `98_222` |
| Hex | `0xff` |
| Octal | `0o77` |
| Binary | `0b1111_0000` |
| Byte (`u8` only) | `b'A'` |

So how do you know which type of integer to use? If you’re unsure, Rust’s defaults are generally good places to start: integer types default to `i32`. The primary situation in which you’d use `isize` or `usize` is when indexing some sort of collection.

::: info Integer Overflow

Let’s say you have a variable of type `u8` that can hold values between 0 and 255. If you try to change the variable to a value outside that range, such as 256, _integer overflow_ will occur, which can result in one of two behaviors. When you’re compiling in debug mode, Rust includes checks for integer overflow that cause your program to _panic_ at runtime if this behavior occurs. Rust uses the term _panicking_ when a program exits with an error; we’ll discuss panics in more depth in the [“Unrecoverable Errors with `panic`!”](https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html) section in Chapter 9.

When you’re compiling in release mode with the `--release` flag, Rust does _not_ include checks for integer overflow that cause panics. Instead, if overflow occurs, Rust performs _two’s complement wrapping_. In short, values greater than the maximum value the type can hold “wrap around” to the minimum of the values the type can hold. In the case of a `u8`, the value 256 becomes 0, the value 257 becomes 1, and so on. The program won’t panic, but the variable will have a value that probably isn’t what you were expecting it to have. Relying on integer overflow’s wrapping behavior is considered an error.

To explicitly handle the possibility of overflow, you can use these families of methods provided by the standard library for primitive numeric types:

- Wrap in all modes with the `wrapping_*` methods, such as `wrapping_add`.
- Return the `None` value if there is overflow with the `checked_*` methods.
- Return the value and a boolean indicating whether there was overflow with the `overflowing_*` methods.
- Saturate at the value’s minimum or maximum values with the `saturating_*` methods.

:::

#### Floating-Point Types

Rust also has two primitive types for _floating-point numbers_, which are numbers with decimal points. Rust’s floating-point types are `f32` and `f64`, which are 32 bits and 64 bits in size, respectively. The default type is `f64` because on modern CPUs, it’s roughly the same speed as `f32` but is capable of more precision. All floating-point types are signed.

Here’s an example that shows floating-point numbers in action:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let x = 2.0; // f64

    let y: f32 = 3.0; // f32
}
```

Floating-point numbers are represented according to the IEEE-754 standard. The `f32` type is a single-precision float, and `f64` has double precision.

#### Numeric Operations

Rust supports the basic mathematical operations you’d expect for all the number types: addition, subtraction, multiplication, division, and remainder. Integer division truncates toward zero to the nearest integer. The following code shows how you’d use each numeric operation in a `let` statement:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    // addition
    let sum = 5 + 10;

    // subtraction
    let difference = 95.5 - 4.3;

    // multiplication
    let product = 4 * 30;

    // division
    let quotient = 56.7 / 32.2;
    let truncated = -5 / 3; // Results in -1

    // remainder
    let remainder = 43 % 5;
}
```

Each expression in these statements uses a mathematical operator and evaluates to a single value, which is then bound to a variable. [Appendix B](https://doc.rust-lang.org/book/appendix-02-operators.html) contains a list of all operators that Rust provides.

#### The Boolean Type

As in most other programming languages, a Boolean type in Rust has two possible values: `true` and `false`. Booleans are one byte in size. The Boolean type in Rust is specified using `bool`. For example:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let t = true;

    let f: bool = false; // with explicit type annotation
}
```
The main way to use Boolean values is through conditionals, such as an `if` expression. We’ll cover how if expressions work in Rust in the [“Control Flow”](https://doc.rust-lang.org/book/ch03-05-control-flow.html#control-flow) section.

#### The Character Type

Rust’s `char` type is the language’s most primitive alphabetic type. Here are some examples of declaring `char` values:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}
```

Note that we specify `char` literals with single quotes, as opposed to string literals, which use double quotes. Rust’s `char` type is four bytes in size and represents a Unicode Scalar Value, which means it can represent a lot more than just ASCII. Accented letters; Chinese, Japanese, and Korean characters; emoji; and zero-width spaces are all valid `char` values in Rust. Unicode Scalar Values range from `U+0000` to `U+D7FF` and `U+E000` to `U+10FFFF` inclusive. However, a “character” isn’t really a concept in Unicode, so your human intuition for what a “character” is may not match up with what a `char` is in Rust. We’ll discuss this topic in detail in [“Storing UTF-8 Encoded Text with Strings”](https://doc.rust-lang.org/book/ch08-02-strings.html#storing-utf-8-encoded-text-with-strings) in Chapter 8.

### Compound Types

_Compound types_ can group multiple values into one type. Rust has two primitive compound types: tuples and arrays.

#### The Tuple Type

A _tuple_ is a general way of grouping together a number of values with a variety of types into one compound type. Tuples have a fixed length: once declared, they cannot grow or shrink in size.

We create a tuple by writing a comma-separated list of values inside parentheses. Each position in the tuple has a type, and the types of the different values in the tuple don’t have to be the same. We’ve added optional type annotations in this example:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let tup: (i32, f64, u8) = (500, 6.4, 1);
}
```

The variable `tup` binds to the entire tuple because a tuple is considered a single compound element. To get the individual values out of a tuple, we can use pattern matching to destructure a tuple value, like this:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let tup = (500, 6.4, 1);

    let (x, y, z) = tup;

    println!("The value of y is: {y}");
}
```

This program first creates a tuple and binds it to the variable `tup`. It then uses a pattern with let to take tup and turn it into three separate variables, `x`, `y`, and `z`. This is called _destructuring_ because it breaks the single tuple into three parts. Finally, the program prints the value of `y`, which is `6.4`.

We can also access a tuple element directly by using a period (`.`) followed by the index of the value we want to access. For example:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let x: (i32, f64, u8) = (500, 6.4, 1);

    let five_hundred = x.0;

    let six_point_four = x.1;

    let one = x.2;
}
```

This program creates the tuple `x` and then accesses each element of the tuple using their respective indices. As with most programming languages, the first index in a tuple is 0.

The tuple without any values has a special name, _unit_. This value and its corresponding type are both written `()` and represent an empty value or an empty return type. Expressions implicitly return the unit value if they don’t return any other value.


#### The Array Type

Another way to have a collection of multiple values is with an _array_. Unlike a tuple, every element of an array must have the same type. Unlike arrays in some other languages, arrays in Rust have a fixed length.

We write the values in an array as a comma-separated list inside square brackets:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

```rs
fn main() {
    let a = [1, 2, 3, 4, 5];
}
```

Arrays are useful when you want your data allocated on the stack rather than the heap (we will discuss the stack and the heap more in [Chapter 4](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#the-stack-and-the-heap)) or when you want to ensure you always have a fixed number of elements. An array isn’t as flexible as the vector type, though. A _vector_ is a similar collection type provided by the standard library that _is_ allowed to grow or shrink in size. If you’re unsure whether to use an array or a vector, chances are you should use a vector. [Chapter 8](https://doc.rust-lang.org/book/ch08-01-vectors.html) discusses vectors in more detail.

However, arrays are more useful when you know the number of elements will not need to change. For example, if you were using the names of the month in a program, you would probably use an array rather than a vector because you know it will always contain 12 elements:

```rs
let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];
```

You write an array’s type using square brackets with the type of each element, a semicolon, and then the number of elements in the array, like so:

```rs
let a: [i32; 5] = [1, 2, 3, 4, 5];
```

Here, `i32` is the type of each element. After the semicolon, the number `5` indicates the array contains five elements.

You can also initialize an array to contain the same value for each element by specifying the initial value, followed by a semicolon, and then the length of the array in square brackets, as shown here:

```rs
let a = [3; 5];
```

The array named `a` will contain `5` elements that will all be set to the value `3` initially. This is the same as writing `let a = [3, 3, 3, 3, 3];` but in a more concise way.

##### Accessing Array Elements

An array is a single chunk of memory of a known, fixed size that can be allocated on the stack. You can access elements of an array using indexing, like this:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

fn main() {
    let a = [1, 2, 3, 4, 5];

    let first = a[0];
    let second = a[1];
}
In this example, the variable named `first` will get the value `1` because that is the value at index `[0]` in the array. The variable named `second` will get the value `2` from index `[1]` in the array.

##### Invalid Array Element Access

Let’s see what happens if you try to access an element of an array that is past the end of the array. Say you run this code, similar to the guessing game in Chapter 2, to get an array index from the user:

Filename: <FontIcon icon="iconfont icon-file"/>`src/main.rs`

![This code panics! x80](https://doc.rust-lang.org/book/ch00-00-introduction.html#ferris)

```rs
use std::io;

fn main() {
    let a = [1, 2, 3, 4, 5];

    println!("Please enter an array index.");

    let mut index = String::new();

    io::stdin()
        .read_line(&mut index)
        .expect("Failed to read line");

    let index: usize = index
        .trim()
        .parse()
        .expect("Index entered was not a number");

    let element = a[index];

    println!("The value of the element at index {index} is: {element}");
}
```

This code compiles successfully. If you run this code using `cargo run` and enter `0`, `1`, `2`, `3`, or `4`, the program will print out the corresponding value at that index in the array. If you instead enter a number past the end of the array, such as `10`, you’ll see output like this:

```sh
cargo run
# thread 'main' panicked at 'index out of bounds: the len is 5 but the index is 10', src/main.rs:19:19
# note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

The program resulted in a _runtime_ error at the point of using an invalid value in the indexing operation. The program exited with an error message and didn’t execute the final println! statement. When you attempt to access an element using indexing, Rust will check that the index you’ve specified is less than the array length. If the index is greater than or equal to the length, Rust will panic. This check has to happen at runtime, especially in this case, because the compiler can’t possibly know what value a user will enter when they run the code later.

This is an example of Rust’s memory safety principles in action. In many low-level languages, this kind of check is not done, and when you provide an incorrect index, invalid memory can be accessed. Rust protects you against this kind of error by immediately exiting instead of allowing the memory access and continuing. Chapter 9 discusses more of Rust’s error handling and how you can write readable, safe code that neither panics nor allows invalid memory access.

---

## Numbers

### Integer

#### 1. 🌟

::: tip Tips

If we don't explicitly assign a type to a variable, then the compiler will infer one for us.

:::

::: tabs

@tab:active 💀Problem

```rs
// Remove something to make it work
fn main() {
    let x: i32 = 5;
    let mut y: u32 = 5;

    y = x;
    
    let z = 10; // Type of z ? 

    println!("Success!");
}
//
//
//    Compiling playground v0.0.1 (/playground)
// error[E0308]: mismatched types
//  --> src/main.rs:7:9
//   |
// 5 |     let mut y: u32 = 5;
//   |                --- expected due to this type
// 6 |
// 7 |     y = x;
//   |         ^ expected `u32`, found `i32`
// 
// For more information about this error, try `rustc --explain E0308`.
// error: could not compile `playground` (bin "playground") due to previous error
```

@tab Solution

```rs
// Remove something to make it work
fn main() {
    let x: i32 = 5;
    let mut y = 5;

    y = x;
    
    let z = 10; // type of z : i32
    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

#### 2. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Fill the blank
fn main() {
    let v: u16 = 38_u8 as __;

    println!("Success!");
}
//
//
//    Compiling playground v0.0.1 (/playground)
// error[E0412]: cannot find type `__` in this scope
//  --> src/main.rs:4:27
//   |
// 4 |     let v: u16 = 38_u8 as __;
//   |                           ^^ not found in this scope
// 
// For more information about this error, try `rustc --explain E0412`.
// error: could not compile `playground` (bin "playground") due to previous error
```

@tab Solution

```rs
// Fill the blank
fn main() {
    let v: u16 = 38_u8 as u16;

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

#### 3. 🌟🌟🌟

::: tip Tips

If we don't explicitly assign a type to a variable, then the compiler will infer one for us.

:::

::: tabs

@tab:active 💀Problem

```rs
// Modify `assert_eq!` to make it work
fn main() {
    let x = 5;
    assert_eq!("u32".to_string(), type_of(&x));

    println!("Success!");
}

// Get the type of given variable, return a string representation of the type  , e.g "i8", "u8", "i32", "u32"
fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}
//
//
//    Compiling playground v0.0.1 (/playground)
//     Finished dev [unoptimized + debuginfo] target(s) in 0.98s
//      Running `target/debug/playground`
// thread 'main' panicked at 'assertion failed: `(left == right)`
//   left: `"u32"`,
//  right: `"i32"`', src/main.rs:5:5
// note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

@tab Solution

```rs
// Modify `assert_eq!` to make it work
fn main() {
    let x = 5;
    assert_eq!("i32".to_string(), type_of(&x));

    println!("Success!");
}

// Get the type of given variable, return a string representation of the type  , e.g "i8", "u8", "i32", "u32"
fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}
//
//
/*
  Success!
*/
```

:::

#### 4. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Fill the blanks to make it work
fn main() {
    assert_eq!(i8::MAX, __); 
    assert_eq!(u8::MAX, __); 

    println!("Success!");
}
//
//
/*
      Compiling playground v0.0.1 (/playground)
   error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:4:25
     |
   4 |     assert_eq!(i8::MAX, __); 
     |                         ^^ not found in this scope
   
   error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:5:25
     |
   5 |     assert_eq!(u8::MAX, __); 
     |                         ^^ not found in this scope
   
   For more information about this error, try `rustc --explain E0425`.
   error: could not compile `playground` (bin "playground") due to 2 previous errors
*/
```

@tab Solution

```rs
// Fill the blanks to make it work
fn main() {
    assert_eq!(i8::MAX, 127); 
    assert_eq!(u8::MAX, 255); 

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

#### 5. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Fix errors and panics to make it work
fn main() {
   let v1 = 251_u8 + 8;
   let v2 = i8::checked_add(251, 8).unwrap();
   println!("{},{}",v1,v2);
}
//
//
/*    
      Compiling playground v0.0.1 (/playground)
   error: literal out of range for `i8`
    --> src/main.rs:5:29
     |
   5 |    let v2 = i8::checked_add(251, 8).unwrap();
     |                             ^^^
     |
     = note: the literal `251` does not fit into the type `i8` whose range is `-128..=127`
     = help: consider using the type `u8` instead
     = note: `#[deny(overflowing_literals)]` on by default
   
   error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Fix errors and panics to make it work
fn main() {
   let v1 = 247_u8 + 8;
   let v2 = i8::checked_add(119, 8).unwrap();
   println!("{},{}",v1,v2);
}
//
//
/*
  255,127
*/
```

:::

#### 6. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Modify `assert!` to make it work
fn main() {
    let v = 1_024 + 0xff + 0o77 + 0b1111_1111;
    assert!(v == 1579);

    println!("Success!");
}
//
//
/* 
      Compiling playground v0.0.1 (/playground)
       Finished dev [unoptimized + debuginfo] target(s) in 0.55s
        Running `target/debug/playground`
   thread 'main' panicked at 'assertion failed: v == 1579', src/main.rs:5:5
   note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
// Modify `assert!` to make it work
fn main() {
    let v = 1_024 + 0xff + 0o77 + 0b1111_1111;
    assert!(v == 1597);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

### Floating-Point

#### 7. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Fill the blank to make it work
fn main() {
    let x = 1_000.000_1; // ?
    let y: f32 = 0.12; // f32
    let z = 0.01_f64; // f64

    assert_eq!(type_of(&x), "__".to_string());
    println!("Success!");
}

fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  warning: unused variable: `y`
   --> src/main.rs:5:9
    |
  5 |     let y: f32 = 0.12; // f32
    |         ^ help: if this is intentional, prefix it with an underscore: `_y`
    |
    = note: `#[warn(unused_variables)]` on by default
  
  warning: unused variable: `z`
   --> src/main.rs:6:9
    |
  6 |     let z = 0.01_f64; // f64
    |         ^ help: if this is intentional, prefix it with an underscore: `_z`
  
  warning: `playground` (bin "playground") generated 2 warnings (run `cargo fix --bin "playground"` to apply 2 suggestions)
      Finished dev [unoptimized + debuginfo] target(s) in 0.58s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: `(left == right)`
    left: `"f64"`,
   right: `"__"`', src/main.rs:8:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
// Fill the blank to make it work
fn main() {
    let x = 1_000.000_1; // f64
    let y: f32 = 0.12; // f32
    let z = 0.01_f64; // f64

    assert_eq!(type_of(&x), "f64".to_string());
    println!("Success!");
}

fn type_of<T>(_: &T) -> String {
    format!("{}", std::any::type_name::<T>())
}
//
//
/*
  Success!
*/
```

:::

#### 8. 🌟🌟 Make it work in two distinct ways

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    assert!(0.1+0.2==0.3);

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.55s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: 0.1 + 0.2 == 0.3', src/main.rs:3:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
fn main() {
    assert!(0.1_f32+0.2_f32==0.3_f32);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

### Range

#### 9. 🌟🌟 

Two goals: 
1. Modify assert! to make it work 
2. Make `println!` output: `97 - 122`

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    let mut sum = 0;
    for i in -3..2 {
        sum += i
    }

    assert!(sum == -3);

    for c in 'a'..='z' {
        println!("{}",c);
    }
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 2.13s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: sum == -3', src/main.rs:7:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
fn main() {
    let mut sum = 0;
    for i in -3..2 {
        sum += i
    }

    assert!(sum == -5);

    for c in 'a'..='z' {
        println!("{}",c as u8);
    }
}
//
//
/*
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
*/
```

:::

#### 10. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Fill the blanks
use std::ops::{Range, RangeInclusive};
fn main() {
    assert_eq!((1..__), Range{ start: 1, end: 5 });
    assert_eq!((1..__), RangeInclusive::new(1, 5));

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0425]: cannot find value `__` in this scope
   --> src/main.rs:5:20
    |
  5 |     assert_eq!((1..__), Range{ start: 1, end: 5 });
    |                    ^^ not found in this scope
    |
  help: you might have meant to write `.` instead of `..`
    |
  5 -     assert_eq!((1..__), Range{ start: 1, end: 5 });
  5 +     assert_eq!((1.__), Range{ start: 1, end: 5 });
    |
  
  error[E0425]: cannot find value `__` in this scope
   --> src/main.rs:6:20
    |
  6 |     assert_eq!((1..__), RangeInclusive::new(1, 5));
    |                    ^^ not found in this scope
    |
  help: you might have meant to write `.` instead of `..`
    |
  6 -     assert_eq!((1..__), RangeInclusive::new(1, 5));
  6 +     assert_eq!((1.__), RangeInclusive::new(1, 5));
    |
  
  error[E0277]: can't compare `std::ops::Range<{integer}>` with `RangeInclusive<{integer}>`
   --> src/main.rs:6:5
    |
  6 |     assert_eq!((1..__), RangeInclusive::new(1, 5));
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ no implementation for `std::ops::Range<{integer}> == RangeInclusive<{integer}>`
    |
    = help: the trait `PartialEq<RangeInclusive<{integer}>>` is not implemented for `std::ops::Range<{integer}>`
    = help: the following other types implement trait `PartialEq<Rhs>`:
              <std::ops::Range<Idx> as PartialEq>
              <std::ops::Range<usize> as PartialEq<aho_corasick::Span>>
    = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  Some errors have detailed explanations: E0277, E0425.
  For more information about an error, try `rustc --explain E0277`.
  error: could not compile `playground` (bin "playground") due to 3 previous errors
*/
```

@tab Solution

```rs
// Fill the blanks
use std::ops::{Range, RangeInclusive};
fn main() {
    assert_eq!((1..5), Range{ start: 1, end: 5 });
    assert_eq!((1..=5), RangeInclusive::new(1, 5));

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

### Computations

#### 11. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Fill the blanks and fix the errors
fn main() {
    // Integer addition
    assert!(1u32 + 2 == __);

    // Integer subtraction
    assert!(1i32 - 2 == __);
    assert!(1u8 - 2 == -1); 
    
    assert!(3 * 50 == __);

    assert!(9.6 / 3.2 == 3.0); // error ! make it work

    assert!(24 % 5 == __);
    // Short-circuiting boolean logic
    assert!(true && false == __);
    assert!(true || false == __);
    assert!(!true == __);

    // Bitwise operations
    println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
    println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
    println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
    println!("1 << 5 is {}", 1u32 << 5);
    println!("0x80 >> 2 is 0x{:x}", 0x80u32 >> 2);
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0425]: cannot find value `__` in this scope
   --> src/main.rs:5:25
    |
  5 |     assert!(1u32 + 2 == __);
    |                         ^^ not found in this scope
  
  error[E0425]: cannot find value `__` in this scope
   --> src/main.rs:8:25
    |
  8 |     assert!(1i32 - 2 == __);
    |                         ^^ not found in this scope
  
  error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:11:23
     |
  11 |     assert!(3 * 50 == __);
     |                       ^^ not found in this scope
  
  error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:15:23
     |
  15 |     assert!(24 % 5 == __);
     |                       ^^ not found in this scope
  
  error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:17:30
     |
  17 |     assert!(true && false == __);
     |                              ^^ not found in this scope
  
  error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:18:30
     |
  18 |     assert!(true || false == __);
     |                              ^^ not found in this scope
  
  error[E0425]: cannot find value `__` in this scope
    --> src/main.rs:19:22
     |
  19 |     assert!(!true == __);
     |                      ^^ not found in this scope
  
  error[E0277]: the trait bound `u8: Neg` is not satisfied
   --> src/main.rs:9:24
    |
  9 |     assert!(1u8 - 2 == -1); 
    |                        ^^ the trait `Neg` is not implemented for `u8`
    |
    = help: the following other types implement trait `Neg`:
              &f32
              &f64
              &i128
              &i16
              &i32
              &i64
              &i8
              &isize
            and 8 others
  
  Some errors have detailed explanations: E0277, E0425.
  For more information about an error, try `rustc --explain E0277`.
  error: could not compile `playground` (bin "playground") due to 8 previous errors
*/
```

@tab Solution

```rs
// Fill the blanks and fix the errors
fn main() {
    // Integer addition
    assert!(1u32 + 2 == 3);

    // Integer subtraction
    assert!(1i32 - 2 == -1);
    assert!(1i8 - 2 == -1);
    
    assert!(3 * 50 == 150);

    assert!(9 / 3 == 3); // error ! make it work

    assert!(24 % 5 == 4);
    // Short-circuiting boolean logic
    assert!(true && false == false);
    assert!(true || false == true);
    assert!(!true == false);

    // Bitwise operations
    println!("0011 AND 0101 is {:04b}", 0b0011u32 & 0b0101);
    println!("0011 OR 0101 is {:04b}", 0b0011u32 | 0b0101);
    println!("0011 XOR 0101 is {:04b}", 0b0011u32 ^ 0b0101);
    println!("1 << 5 is {}", 1u32 << 5);
    println!("0x80 >> 2 is 0x{:x}", 0x80u32 >> 2);
}
//
//
/*
  0011 AND 0101 is 0001
  0011 OR 0101 is 0111
  0011 XOR 0101 is 0110
  1 << 5 is 32
  0x80 >> 2 is 0x20
*/
```

:::

---

## Char, Bool and Unit

### Char

#### 1. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work
use std::mem::size_of_val;
fn main() {
    let c1 = 'a';
    assert_eq!(size_of_val(&c1),1); 

    let c2 = '中';
    assert_eq!(size_of_val(&c2),3); 

    println!("Success!");
}
//
//
/*
   Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.59s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: `(left == right)`
    left: `4`,
   right: `1`', src/main.rs:6:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace  
*/
```

@tab Solution

```rs
// Make it work
use std::mem::size_of_val;
fn main() {
    let c1 = 'a';
    assert_eq!(size_of_val(&c1), 4);

    let c2 = '中';
    assert_eq!(size_of_val(&c2), 4);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

#### 2. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work
fn main() {
    let c1 = "中";
    print_char(c1);
} 

fn print_char(c : char) {
    println!("{}", c);
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:5:16
    |
  5 |     print_char(c1);
    |     ---------- ^^ expected `char`, found `&str`
    |     |
    |     arguments to this function are incorrect
    |
  note: function defined here
   --> src/main.rs:8:4
    |
  8 | fn print_char(c : char) {
    |    ^^^^^^^^^^ --------
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Make it work
fn main() {
    let c1 = '中';
    print_char(c1);
}

fn print_char(c : char) {
    println!("{}", c);
}
//
//
/*
  中
*/
```

:::

### Bool

#### 3. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make println! work
fn main() {
    let _f: bool = false;

    let t = true;
    if !t {
        println!("Success!");
    }
}
//
//
/*
*/
```

@tab Solution

```rs
// Make println! work
fn main() {
    let _f: bool = false;

    let t = false;
    if !t {
        println!("hello, world");
    }
} 
//
//
/*
  hello, world
*/
```

:::

#### 4. 🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work
fn main() {
    let f = true;
    let t = true && false;
    assert_eq!(t, f);

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.54s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: `(left == right)`
    left: `false`,
   right: `true`', src/main.rs:6:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
// Make it work
fn main() {
    let f = true;
    let t = true || false;
    assert_eq!(t, f);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

### Unit type

#### 5. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work, don't modify `implicitly_ret_unit` !
fn main() {
    let _v: () = ();

    let v = (2, 3);
    assert_eq!(v, implicitly_ret_unit());

    println!("Success!");
}

fn implicitly_ret_unit() {
    println!("I will return a ()");
}

// Don't use this one
fn explicitly_ret_unit() -> () {
    println!("I will return a ()");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:7:5
    |
  7 |     assert_eq!(v, implicitly_ret_unit());
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |     |
    |     expected `({integer}, {integer})`, found `()`
    |     expected because this is `({integer}, {integer})`
    |
    = note:  expected tuple `({integer}, {integer})`
            found unit type `()`
    = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Make it work, don't modify `implicitly_ret_unit` !
fn main() {
    let v0: () = ();

    let v = (2, 3);
    assert_eq!(v0, implicitly_ret_unit());

    println!("Success!");
}

fn implicitly_ret_unit() {
    println!("I will return a ()");
}

// Don't use this one
fn explicitly_ret_unit() -> () {
    println!("I will return a ()");
}
//
//
/*
  I will return a ()
  Success!
*/
```

:::

#### 6. 🌟🌟 What's the size of the unit type?

::: tabs

@tab:active 💀Problem

```rs
// Modify `4` in assert to make it work
use std::mem::size_of_val;
fn main() {
    let unit: () = ();
    assert!(size_of_val(&unit) == 4);

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.71s
       Running `target/debug/playground`
  thread 'main' panicked at 'assertion failed: size_of_val(&unit) == 4', src/main.rs:6:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution

```rs
// Modify `4` in assert to make it work
use std::mem::size_of_val;
fn main() {
    let unit: () = ();
    assert!(size_of_val(&unit) == 0);

    println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

---

## Statements and Expressions

### Examples

```rs
fn main() {
    let x = 5u32;

    let y = {
        let x_squared = x * x;
        let x_cube = x_squared * x;

        // This expression will be assigned to `y`
        x_cube + x_squared + x
    };

    let z = {
        // The semicolon suppresses this expression and `()` is assigned to `z`
        2 * x;
    };

    println!("x is {:?}", x);
    println!("y is {:?}", y);
    println!("z is {:?}", z);
}
//
//
/*
  x is 5
  y is 155
  z is ()
*/
```

### Exercises

#### 1. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Make it work with two ways
fn main() {
   let v = {
       let mut x = 1;
       x += 2
   };

   assert_eq!(v, 3);

   println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:8:4
    |
  8 |    assert_eq!(v, 3);
    |    ^^^^^^^^^^^^^^^^
    |    |
    |    expected `()`, found integer
    |    expected because this is `()`
    |
    = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution 1

```rs
// Make it work with two ways
fn main() {
    let v = {
        let mut x = 1;
        x += 2
    };
 
    assert_eq!(v, ());

   println!("Success!");
}
//
//
/*
  Success!
*/
```

@tab Solution 2

```rs
// Make it work with two ways
fn main() {
    let v = {
        let mut x = 1;
        x += 2;
        x
    };

    assert_eq!(v, 3);

   println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

#### 2. 🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
   let v = (let x = 3);

   assert!(v == 3);

   println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error: expected expression, found `let` statement
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^
  
  error: expected expression, found statement (`let`)
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: variable declaration using `let` is a statement
  
  error[E0658]: `let` expressions in this position are unstable
   --> src/main.rs:3:13
    |
  3 |    let v = (let x = 3);
    |             ^^^^^^^^^
    |
    = note: see issue #53667 <https://github.com/rust-lang/rust/issues/53667> for more information
  
  warning: unnecessary parentheses around assigned value
   --> src/main.rs:3:12
    |
  3 |    let v = (let x = 3);
    |            ^         ^
    |
    = note: `#[warn(unused_parens)]` on by default
  help: remove these parentheses
    |
  3 -    let v = (let x = 3);
  3 +    let v = let x = 3;
    |
  
  error[E0308]: mismatched types
   --> src/main.rs:5:17
    |
  5 |    assert!(v == 3);
    |            -    ^ expected `bool`, found integer
    |            |
    |            expected because this is `bool`
  
  Some errors have detailed explanations: E0308, E0658.
  For more information about an error, try `rustc --explain E0308`.
  warning: `playground` (bin "playground") generated 1 warning
  error: could not compile `playground` (bin "playground") due to 4 previous errors; 1 warning
*/
```

@tab Solution

```rs
fn main() {
    let v = {
        let x = 3;
        x
    };

   assert!(v == 3);

   println!("Success!");
}
//
//
/*
  Success!
*/
```

:::

#### 3. 🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    let s = sum(1 , 2);
    assert_eq!(s, 3);

    println!("Success!");
}

fn sum(x: i32, y: i32) -> i32 {
    x + y;
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
    --> src/main.rs:9:27
     |
  9  | fn sum(x: i32, y: i32) -> i32 {
     |    ---                    ^^^ expected `i32`, found `()`
     |    |
     |    implicitly returns `()` as its body has no tail or `return` expression
  10 |     x + y;
     |          - help: remove this semicolon to return this value
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
    let s = sum(1 , 2);
    assert_eq!(s, 3);

    println!("Success!");
}

fn sum(x: i32, y: i32) -> i32 {
    return x + y;
}
//
//
/*
  Success!
*/
```

:::

---

## Functions

#### 1. 🌟🌟🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    // Don't modify the following two lines!
    let (x, y) = (1, 2);
    let s = sum(x, y);

    assert_eq!(s, 3);

    println!("Success!");
}

fn sum(x, y: i32) {
    x + y;
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error: expected one of `:`, `@`, or `|`, found `,`
    --> src/main.rs:12:9
     |
  12 | fn sum(x, y: i32) {
     |         ^ expected one of `:`, `@`, or `|`
     |
     = note: anonymous parameters are removed in the 2018 edition (see RFC 1685)
  help: if this is a `self` type, give it a parameter name
     |
  12 | fn sum(self: x, y: i32) {
     |        +++++
  help: if this is a parameter name, give it a type
     |
  12 | fn sum(x: TypeName, y: i32) {
     |         ++++++++++
  help: if this is a type, explicitly ignore the parameter name
     |
  12 | fn sum(_: x, y: i32) {
     |        ++
  
  error[E0308]: mismatched types
   --> src/main.rs:7:5
    |
  7 |     assert_eq!(s, 3);
    |     ^^^^^^^^^^^^^^^^
    |     |
    |     expected `()`, found integer
    |     expected because this is `()`
    |
    = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to 2 previous errors 
*/
```

@tab Solution

```rs
fn main() {
    // Don't modify the following two lines!
    let (x, y) = (1, 2);
    let s = sum(x, y);

    assert_eq!(s, 3);

    println!("Success!");
}

fn sum(x: i32, y: i32) -> i32 {
    x + y
}
//
//
/*
  Success!
*/
```

:::

#### 2. 🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
   print();
}

// Replace i32 with another type
fn print() -> i32 {
   println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
   --> src/main.rs:6:15
    |
  6 | fn print() -> i32 {
    |    -----      ^^^ expected `i32`, found `()`
    |    |
    |    implicitly returns `()` as its body has no tail or `return` expression
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
   print();
}

// replace i32 with another type
fn print() -> () {
    println!("hello,world");
}
//
//
/*
  hello,world
*/
```

:::

#### 3. 🌟🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Solve it in two ways
// DON'T let `println!` works
fn main() {
    never_return();

    println!("Failed!");
}

fn never_return() -> ! {
    // Implement this function, don't modify the fn signatures
    
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  warning: unreachable statement
   --> src/main.rs:6:5
    |
  4 |     never_return();
    |     -------------- any code following this expression is unreachable
  5 |
  6 |     println!("Failed!");
    |     ^^^^^^^^^^^^^^^^^^^ unreachable statement
    |
    = note: `#[warn(unreachable_code)]` on by default
    = note: this warning originates in the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  error[E0308]: mismatched types
   --> src/main.rs:9:22
    |
  9 | fn never_return() -> ! {
    |    ------------      ^ expected `!`, found `()`
    |    |
    |    implicitly returns `()` as its body has no tail or `return` expression
    |
    = note:   expected type `!`
            found unit type `()`
  
  For more information about this error, try `rustc --explain E0308`.
  warning: `playground` (bin "playground") generated 1 warning
  error: could not compile `playground` (bin "playground") due to previous error; 1 warning emitted
 */
```

@tab Solution 1

```rs
// Solve it in two ways
// DON'T let `println!` works
fn main() {
    never_return();
}

fn never_return() -> ! {
    // implement this function, don't modify fn signatures
    panic!("I return nothing!")
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.54s
       Running `target/debug/playground`
  thread 'main' panicked at 'I return nothing!', src/main.rs:8:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
*/
```

@tab Solution 2

```rs
// Solve it in two ways
// DON'T let `println!` works
fn main() {
    never_return();
}

use std::thread;
use std::time;

fn never_return() -> ! {
    // implement this function, don't modify fn signatures
    loop {
        println!("I return nothing");
        // sleeping for 1 second to avoid exhausting the cpu resource
        thread::sleep(time::Duration::from_secs(1))
    }
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
      Finished dev [unoptimized + debuginfo] target(s) in 0.53s
       Running `target/debug/playground`
  /playground/tools/entrypoint.sh: line 11:     8 Killed                  timeout --signal=KILL ${timeout} "$@"
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing
  I return nothing 
*/
```

:::

### Diverging functions

Diverging functions never return to the caller, so they may be used in places where a value of any type is expected.

#### 4. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    println!("Success!");
}

fn get_option(tp: u8) -> Option<i32> {
    match tp {
        1 => {
            // TODO
        }
        _ => {
            // TODO
        }
    };
    
    // Rather than returning a None, we use a diverging function instead
    never_return_fn()
}

// IMPLEMENT this function in THREE ways
fn never_return_fn() -> ! {
    
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0308]: mismatched types
    --> src/main.rs:21:25
     |
  21 | fn never_return_fn() -> ! {
     |    ---------------      ^ expected `!`, found `()`
     |    |
     |    implicitly returns `()` as its body has no tail or `return` expression
     |
     = note:   expected type `!`
             found unit type `()`
  
  For more information about this error, try `rustc --explain E0308`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution 1

```rs
fn main() {
    println!("Success!");
}

fn get_option(tp: u8) -> Option<i32> {
    match tp {
        1 => {
            // TODO
        }
        _ => {
            // TODO
        }
    };
    
    // Rather than returning a None, we use a diverging function instead
    never_return_fn()
}

// IMPLEMENT this function in THREE ways
fn never_return_fn() -> ! {
    unimplemented!()
}
//
//
/* Success! */
```

@tab Solution 2

```rs
fn main() {
    println!("Success!");
}

fn get_option(tp: u8) -> Option<i32> {
    match tp {
        1 => {
            // TODO
        }
        _ => {
            // TODO
        }
    };
    
    // Rather than returning a None, we use a diverging function instead
    never_return_fn()
}

// IMPLEMENT this function in THREE ways
fn never_return_fn() -> ! {
    panic!()
}
//
//
/* Success! */
```

@tab Solution 3

```rs
fn main() {
    println!("Success!");
}

fn get_option(tp: u8) -> Option<i32> {
    match tp {
        1 => {
            // TODO
        }
        _ => {
            // TODO
        }
    };
    
    // Rather than returning a None, we use a diverging function instead
    never_return_fn()
}

// IMPLEMENT this function in THREE ways
fn never_return_fn() -> ! {
    todo!();
}
//
//
/* Success! */
```

@tab Solution 4

```rs
fn main() {
    println!("Success!");
}

fn get_option(tp: u8) -> Option<i32> {
    match tp {
        1 => {
            // TODO
        }
        _ => {
            // TODO
        }
    };
    
    // Rather than returning a None, we use a diverging function instead
    never_return_fn()
}

// IMPLEMENT this function in THREE ways
fn never_return_fn() -> ! {
    loop {
        std::thread::sleep(std::time::Duration::from_secs(1))
    }
}
//
//
/* 
  Success! 
*/
```

:::

#### 5. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs

fn main() {
    // FILL in the blank
    let b = __;

    let _v = match b {
        true => 1,
        // Diverging functions can also be used in match expression to replace a value of any value
        false => {
            println!("Success!");
            panic!("we have no value for `false`, but we can panic");
        }
    };

    println!("Exercise Failed if printing out this line!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0425]: cannot find value `__` in this scope
   --> src/main.rs:4:13
    |
  4 |     let b = __;
    |             ^^ not found in this scope
  
  For more information about this error, try `rustc --explain E0425`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
    // FILL in the blank
    let b = false;

    let _v = match b {
        true => 1,
        // Diverging functions can also be used in match expression
        false => {
            println!("Success!");
            panic!("we have no value for `false`, but we can panic")
        }
    };

    println!("Exercise Failed if printing out this line!");
}
//
//
/*
    Compiling playground v0.0.1 (/playground)
    Finished dev [unoptimized + debuginfo] target(s) in 0.53s
     Running `target/debug/playground`
  thread 'main' panicked at 'we have no value for `false`, but we can panic', src/main.rs:10:13
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
  Success!
*/
```

:::

::: note

You can find the solutions [here (<FontIcon icon="iconfont icon-github"/>`sunface/rust-by-practice`)](https://github.com/sunface/rust-by-practice) (under the solutions path), but only use it when you need it

:::