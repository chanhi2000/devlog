---
lang: ko-KR
title: 4. Ownership and Borrowing
description: 🦀freecodecamp.org - Rust by Practice > 4. Ownership and Borrowing
tags: ["crashcourse", "rust", "rs", "youtube", "freecodecamp", "zubiarfan"]
meta:
  - name: 🦀freecodecamp.org - Rust by Practice > 4. Ownership and Borrowing
    content: 4. Ownership and Borrowing
  - property: og:title
    content: 4. Ownership and Borrowing
  - property: og:description
    content: 🦀freecodecamp.org - Rust by Practice > 4. Ownership and Borrowing
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rs-freecodecamp-rust-by-practice/04
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Rust By Practice
desc: 4. Ownership and Borrowing
link: https://practice.rs/ownership/ownership.html
logo: https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true
color: rgba(22, 25, 35, 0.2)
```

<!-- https://practice.rs/elegant-code-base.html -->

---


## Understanding Ownership

Ownership is Rust’s most unique feature and has deep implications for the rest of the language. It enables Rust to make memory safety guarantees without needing a garbage collector, so it’s important to understand how ownership works. In this chapter, we’ll talk about ownership as well as several related features: borrowing, slices, and how Rust lays data out in memory.

---

## Ownership

#### 1. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    // Use as many approaches as you can to make it work
    let x = String::from("hello, world");
    let y = x;
    println!("{},{}",x,y);
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0382]: borrow of moved value: `x`
   --> src/main.rs:6:22
    |
  4 |     let x = String::from("hello, world");
    |         - move occurs because `x` has type `String`, which does not implement the `Copy` trait
  5 |     let y = x;
    |             - value moved here
  6 |     println!("{},{}",x,y);
    |                      ^ value borrowed here after move
    |
    = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
  help: consider cloning the value if the performance cost is acceptable
    |
  5 |     let y = x.clone();
    |              ++++++++
  
  For more information about this error, try `rustc --explain E0382`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
    // Use as many approaches as you can to make it work
    let x = String::from("hello, world");
    let y = x;
    println!("{},{}",x,y);
}
```

:::

#### 2. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Don't modify code in main!
fn main() {
    let s1 = String::from("hello, world");
    let s2 = take_ownership(s1);

    println!("{}", s2);
}

// Only modify the code below!
fn take_ownership(s: String) {
    println!("{}", s);
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0277]: `()` doesn't implement `std::fmt::Display`
   --> src/main.rs:6:20
    |
  6 |     println!("{}", s2);
    |                    ^^ `()` cannot be formatted with the default formatter
    |
    = help: the trait `std::fmt::Display` is not implemented for `()`
    = note: in format strings you may be able to use `{:?}` (or {:#?} for pretty-print) instead
    = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0277`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Don't modify code in main!
fn main() {
    let s1 = String::from("hello, world");
    let s2 = take_ownership(s1);

    println!("{}", s2);
}

// Only modify the code below!
fn take_ownership(s: String) {
    println!("{}", s);
}
```

:::

#### 3. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    let s = give_ownership();
    println!("{}", s);
}

// Only modify the code below!
fn give_ownership() -> String {
    let s = String::from("hello, world");
    // Convert String to Vec
    let _s = s.into_bytes();
    s
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0382]: use of moved value: `s`
    --> src/main.rs:12:5
     |
  9  |     let s = String::from("hello, world");
     |         - move occurs because `s` has type `String`, which does not implement the `Copy` trait
  10 |     // Convert String to Vec
  11 |     let _s = s.into_bytes();
     |                ------------ `s` moved due to this method call
  12 |     s
     |     ^ value used here after move
     |
  note: `String::into_bytes` takes ownership of the receiver `self`, which moves `s`
    --> /rustc/cc66ad468955717ab92600c770da8c1601a4ff33/library/alloc/src/string.rs:849:23
  help: you can `clone` the value and consume it, but this might not be your desired behavior
     |
  11 |     let _s = s.clone().into_bytes();
     |               ++++++++
  
  For more information about this error, try `rustc --explain E0382`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
    let s = give_ownership();
    println!("{}", s);
}

// Only modify the code below!
fn give_ownership() -> String {
    let s = String::from("hello, world");
    // Convert String to Vec
    let _s = s.into_bytes();
    s
}
```

:::

#### 4. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Fix the error without removing code line
fn main() {
    let s = String::from("hello, world");

    print_str(s);

    println!("{}", s);
}

fn print_str(s: String)  {
    println!("{}",s)
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0382]: borrow of moved value: `s`
    --> src/main.rs:7:20
     |
  3  |     let s = String::from("hello, world");
     |         - move occurs because `s` has type `String`, which does not implement the `Copy` trait
  4  |
  5  |     print_str(s);
     |               - value moved here
  6  |
  7  |     println!("{}", s);
     |                    ^ value borrowed here after move
     |
  note: consider changing this parameter type in function `print_str` to borrow instead if owning the value isn't necessary
    --> src/main.rs:10:17
     |
  10 | fn print_str(s: String)  {
     |    ---------    ^^^^^^ this parameter takes ownership of the value
     |    |
     |    in this function
     = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
  help: consider cloning the value if the performance cost is acceptable
     |
  5  |     print_str(s.clone());
     |                ++++++++
  
  For more information about this error, try `rustc --explain E0382`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
// Fix the error without removing code line
fn main() {
    let s = String::from("hello, world");

    print_str(s);

    println!("{}", s);
}

fn print_str(s: String)  {
    println!("{}",s)
}
```

:::

#### 5. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
// Don't use clone ,use copy instead
fn main() {
    let x = (1, 2, (), "hello".to_string());
    let y = x.clone();
    println!("{:?}, {:?}", x, y);
}
//
//
/*
  (1, 2, (), "hello"), (1, 2, (), "hello")
*/
```

@tab Solution

```rs
// Don't use clone ,use copy instead
fn main() {
    let x = (1, 2, (), "hello".to_string());
    let y = x.clone();
    println!("{:?}, {:?}", x, y);
}
```

:::

### Mutability

Mutability can be changed when ownership is transferred.


#### 6. 🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    let s = String::from("hello, ");
    
    // Modify this line only !
    let s1 = s;

    s1.push_str("world");

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0596]: cannot borrow `s1` as mutable, as it is not declared as mutable
   --> src/main.rs:8:5
    |
  8 |     s1.push_str("world");
    |     ^^ cannot borrow as mutable
    |
  help: consider changing this to be mutable
    |
  6 |     let mut s1 = s;
    |         +++
  
  For more information about this error, try `rustc --explain E0596`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
    let s = String::from("hello, ");
    
    // Modify this line only !
    let s1 = s;

    s1.push_str("world");

    println!("Success!");
}
```

:::


#### 7. 🌟🌟🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
    let x = Box::new(5);
    
    let ...      // Implement this line, dont change other lines!
    
    *y = 4;
    
    assert_eq!(*x, 5);

    println!("Success!");
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error: unexpected `...`
   --> src/main.rs:5:9
    |
  5 |     let ...      // Implement this line, dont change other lines!
    |         ^^^
    |         |
    |         not a valid pattern
    |         help: for a rest pattern, use `..` instead of `...`
  
  error: expected `;`, found `*`
   --> src/main.rs:5:12
    |
  5 |     let ...      // Implement this line, dont change other lines!
    |            ^ help: add `;` here
  6 |     
  7 |     *y = 4;
    |     - unexpected token
  
  error[E0425]: cannot find value `y` in this scope
   --> src/main.rs:7:6
    |
  7 |     *y = 4;
    |      ^ help: a local variable with a similar name exists: `x`
  
  error: `..` patterns are not allowed here
   --> src/main.rs:5:9
    |
  5 |     let ...      // Implement this line, dont change other lines!
    |         ^^^
    |
    = note: only allowed in tuple, tuple struct, and slice patterns
  
  For more information about this error, try `rustc --explain E0425`.
  error: could not compile `playground` (bin "playground") due to 4 previous errors
*/
```

@tab Solution

```rs
fn main() {
    let x = Box::new(5);
    
    let ...      // Implement this line, dont change other lines!
    
    *y = 4;
    
    assert_eq!(*x, 5);

    println!("Success!");
}
```

:::

### Partial move

Within the destructuring of a single variable, both by-move and by-reference pattern bindings can be used at the same time. Doing this will result in a partial move of the variable, which means that parts of the variable will be moved while other parts stay. In such a case, the parent variable cannot be used afterwards as a whole, however the parts that are only referenced (and not moved) can still be used.

#### Example

```rs
fn main() {
    #[derive(Debug)]
    struct Person {
        name: String,
        age: Box<u8>,
    }

    let person = Person {
        name: String::from("Alice"),
        age: Box::new(20),
    };

    // `name` is moved out of person, but `age` is referenced
    let Person { name, ref age } = person;

    println!("The person's age is {}", age);

    println!("The person's name is {}", name);

    // Error! borrow of partially moved value: `person` partial move occurs
    //println!("The person struct is {:?}", person);

    // `person` cannot be used but `person.age` can be used as it is not moved
    println!("The person's age from person struct is {}", person.age);
}
//
//
/*
  The person's age is 20
  The person's name is Alice
  The person's age from person struct is 20
*/
```

### Exercises

#### 8. 🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
   let t = (String::from("hello"), String::from("world"));

   let _s = t.0;

   // Modify this line only, don't use `_s`
   println!("{:?}", t);
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0382]: borrow of partially moved value: `t`
   --> src/main.rs:8:21
    |
  5 |    let _s = t.0;
    |             --- value partially moved here
  ...
  8 |    println!("{:?}", t);
    |                     ^ value borrowed here after partial move
    |
    = note: partial move occurs because `t.0` has type `String`, which does not implement the `Copy` trait
    = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
  
  For more information about this error, try `rustc --explain E0382`.
  error: could not compile `playground` (bin "playground") due to previous error
*/
```

@tab Solution

```rs
fn main() {
   let t = (String::from("hello"), String::from("world"));

   let _s = t.0;

   // Modify this line only, don't use `_s`
   println!("{:?}", t);
}
```

:::

#### 9. 🌟🌟

::: tabs

@tab:active 💀Problem

```rs
fn main() {
   let t = (String::from("hello"), String::from("world"));

    // Fill the blanks
    let (__, __) = __;

    println!("{:?}, {:?}, {:?}", s1, s2, t); // -> "hello", "world", ("hello", "world")
}
//
//
/*
     Compiling playground v0.0.1 (/playground)
  error[E0416]: identifier `__` is bound more than once in the same pattern
   --> src/main.rs:6:14
    |
  6 |     let (__, __) = __;
    |              ^^ used in a pattern more than once
  
  error[E0425]: cannot find value `__` in this scope
   --> src/main.rs:6:20
    |
  6 |     let (__, __) = __;
    |                    ^^ not found in this scope
  
  error[E0425]: cannot find value `s1` in this scope
   --> src/main.rs:8:34
    |
  8 |     println!("{:?}, {:?}, {:?}", s1, s2, t); // -> "hello", "world", ("hello", "world")
    |                                  ^^ not found in this scope
  
  error[E0425]: cannot find value `s2` in this scope
   --> src/main.rs:8:38
    |
  8 |     println!("{:?}, {:?}, {:?}", s1, s2, t); // -> "hello", "world", ("hello", "world")
    |                                      ^^ not found in this scope
  
  Some errors have detailed explanations: E0416, E0425.
  For more information about an error, try `rustc --explain E0416`.
  error: could not compile `playground` (bin "playground") due to 4 previous errors
*/
```

@tab Solution

```rs
fn main() {
   let t = (String::from("hello"), String::from("world"));

    // Fill the blanks
    let (__, __) = __;

    println!("{:?}, {:?}, {:?}", s1, s2, t); // -> "hello", "world", ("hello", "world")
}
```

:::

::: note tips

You can find the solutions [here (<FontIcon icon="iconfont icon-github"/>`sunface/rust-by-practice`)](https://github.com/sunface/rust-by-practice) (under the solutions path), but only use it when you need it

:::

---

<TagLinks/>
