---
lang: ko-KR
title: 2. Variables
description: 🦀freecodecamp.org - Rust by Practice > 2. Variables
tags: ["crashcourse", "rust", "rs", "youtube", "freecodecamp", "zubiarfan"]
meta:
  - name: 🦀freecodecamp.org - Rust by Practice > 2. Variables
    content: 2. Variables
  - property: og:title
    content: 2. Variables
  - property: og:description
    content: 🦀freecodecamp.org - Rust by Practice > 2. Variables
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/freecodecamp-rust-by-practice/02
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]


---

```card
title: Rust By Practice
desc: 2. Variables
link: https://practice.rs/variables.html
logo: https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true
color: rgba(22, 25, 35, 0.2)
```

<!-- https://practice.rs/elegant-code-base.html -->

---

## Binding and mutability

### 1. 🌟 A variable can be used only if it has been initialized.

::: tabs 

@tab:active Problem

```rs
// Fix the error below with least amount of modification to the code
fn main() {
    let x: i32; // Uninitialized but used, ERROR !
    let y: i32; // Uninitialized but also unused, only a Warning !

    assert_eq!(x, 5);
    println!("Success!");
}
//
//
//  Compiling playground v0.0.1 (/playground)
// warning: unused variable: `y`
//  --> src/main.rs:5:9
//   |
// 5 |     let y: i32; // Uninitialized but also unused, only a Warning !
//   |         ^ help: if this is intentional, prefix it with an underscore: `_y`
//   |
//   = note: `#[warn(unused_variables)]` on by default
// 
// error[E0381]: used binding `x` isn't initialized
//  --> src/main.rs:7:5
//   |
// 4 |     let x: i32; // Uninitialized but used, ERROR !
//   |         - binding declared here but left uninitialized
// ...
// 7 |     assert_eq!(x, 5);
//   |     ^^^^^^^^^^^^^^^^ `x` used here but it isn't initialized
//   |
//   = note: this error originates in the macro `assert_eq` (in Nightly builds, run with -Z macro-backtrace for more info)
// help: consider assigning a value
//   |
// 4 |     let x: i32 = 0; // Uninitialized but used, ERROR !
//   |                +++
// 
// For more information about this error, try `rustc --explain E0381`.
// warning: `playground` (bin "playground") generated 1 warning
// error: could not compile `playground` (bin "playground") due to previous error; 1 warning emitted
```

@tab Solution

```rs
// Fix the error below with least amount of modification to the code
fn main() {
    let x: i32 = 5; // uninitialized but using, ERROR !
    let y: i32; // uninitialized but also unusing, only warning
    println!("{} is equal to 5", x);
}
//
//
// Success!
```

:::

### 2. 🌟 Use mut to mark a variable as mutable.

::: tabs 

@tab:active Problem

```rs
// Fill the blanks in the code to make it compile
fn main() {
    let __ __ = 1;
    __ += 2; 
    
    assert_eq!(x, 3);
    println!("Success!");
}
//
//
//    Compiling playground v0.0.1 (/playground)
// error: expected one of `:`, `;`, `=`, `@`, or `|`, found `__`
//  --> src/main.rs:4:12
//   |
// 4 |     let __ __ = 1;
//   |            ^^ expected one of `:`, `;`, `=`, `@`, or `|`
// 
// error: could not compile `playground` (bin "playground") due to previous error
```

@tab Solution

```rs
fn main() {
    let mut x = 1;
    x += 2;

    assert_eq!(x, 3);
    println!("Success!");
}
//
//
// Success!:
```

:::

---

## Scope

A scope is the range within the program for which the item is valid.

### 3. 🌟

```rs
// Fix the error below with least amount of modification
fn main() {
    let x: i32 = 10;
    {
        let y: i32 = 5;
        println!("The value of x is {} and value of y is {}", x, y);
    }
    println!("The value of x is {} and value of y is {}", x, y); 
}
//    Compiling playground v0.0.1 (/playground)
// error[E0425]: cannot find value `y` in this scope
//  --> src/main.rs:9:62
//   |
// 9 |     println!("The value of x is {} and value of y is {}", x, y); 
//   |                                                              ^ help: a local variable with a similar name exists: `x`
// 
// For more information about this error, try `rustc --explain E0425`.
// error: could not compile `playground` (bin "playground") due to previous error
```

### 4. 🌟🌟

```rs
// Fix the error with the use of define_x
fn main() {
    println!("{}, world", x); 
}

fn define_x() {
    let x = "hello";
}
//    Compiling playground v0.0.1 (/playground)
// error[E0425]: cannot find value `x` in this scope
//  --> src/main.rs:4:27
//   |
// 4 |     println!("{}, world", x); 
//   |                           ^ not found in this scope
// 
// For more information about this error, try `rustc --explain E0425`.
// error: could not compile `playground` (bin "playground") due to previous error
```

---

## Shadowing

You can declare a new variable with the same name as a previous variable, here we can say **the first one is shadowed by the second one.

### 5. 🌟🌟

```rs
// Only modify `assert_eq!` to make the `println!` work(print `42` in terminal)
fn main() {
    let x: i32 = 5;
    {
        let x = 12;
        assert_eq!(x, 5);
    }

    assert_eq!(x, 12);

    let x = 42;
    println!("{}", x); // Prints "42".
}
```


### 6. 🌟🌟

```rs
// Remove a line in the code to make it compile
fn main() {
    let mut x: i32 = 1;
    x = 7;
    // Shadowing and re-binding
    let x = x; 
    x += 3;


    let y = 4;
    // Shadowing
    let y = "I can also be bound to text!"; 

    println!("Success!");
}
```


---

## Unused variables

### 7. Fix the warning below with :

- 🌟 Only one solution
- 🌟🌟 Two distinct solutions

::: note Note

none of the solutions is to remove the line `let x = 1`

:::

```rs
fn main() {
    let x = 1; 
}
// Warning: unused variable: `x`
```

---

## Destructuring

### 8. 🌟🌟 We can use a pattern with let to destructure a tuple to separate variables.

::: tip Tips

you can use Shadowing or Mutability

:::

```rs
// Fix the error below with least amount of modification
fn main() {
    let (x, y) = (1, 2);
    x += 2;

    assert_eq!(x, 3);
    assert_eq!(y, 2);

    println!("Success!");
}
```

---

## Destructuring assignments

Introduced in Rust 1.59: You can now use tuple, slice, and struct patterns as the left-hand side of an assignment.

### 9. 🌟🌟

::: note Note

the feature `Destructuring assignments` need 1.59 or higher Rust version

:::

```rs
fn main() {
    let (x, y);
    (x,..) = (3, 4);
    [.., y] = [1, 2];
    // Fill the blank to make the code work
    assert_eq!([x,y], __);

    println!("Success!");
} 
```

::: note 

You can find the solutions [here (<FontIcon icon="iconfont icon-github"/>`sunface/rust-by-practice`)](https://github.com/sunface/rust-by-practice) (under the solutions path), but only use it when you need it

:::