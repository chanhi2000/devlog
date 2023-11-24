---
lang: ko-KR
title: Intro
description: 🦀freecodecamp.org - Rust by Practice
tags: ["crashcourse", "rust", "rs", "youtube", "freecodecamp", "zubiarfan"]
meta:
  - name: 🦀freecodecamp.org - Rust by Practice
    content: 🦀freecodecamp.org - Rust by Practice
  - property: og:title
    content: 🦀freecodecamp.org - Rust by Practice
  - property: og:description
    content: Intro
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/rs-freecodecamp-rust-by-practice
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: Rust By Practice
desc: Practice Rust with challenging examples, exercises and projects
link: https://practice.rs
logo: https://github.com/sunface/rust-by-practice/blob/master/en/assets/header.jpg?raw=true
color: rgba(22, 25, 35, 0.2)
```

---

> Practice Rust with challenging examples, exercises and projects


This book was designed for easily diving into and get skilled with Rust, and it's very easy to use: All you need to do is to make each exercise compile without ERRORS and Panics !

---

## Running locally

We use mdbook building our exercises. You can run locally with below steps:

```sh
cargo install mdbook
cd rust-by-practice && mdbook serve 
```

---

## Features

Part of our examples and exercises are borrowed from [<FontIcon icon="iconfont icon-github"/> Rust By Example](https://github.com/rust-lang/rust-by-example), thanks for your great works!

Although they are so awesome, we have our own secret weapons :)

- There are three parts in each chapter: examples, exercises and practices
- Besides examples, we have a _lot of exercises_, you can Read, Edit and Run them ONLINE
- Covering nearly all aspects of Rust, such as async/await, threads, sync primitives, optimizing, standard libraries, tool chain, data structures and algorithms etc.
- Every exercise has its own solutions
- The overall difficulties are a bit higher and from easy to super hard: easy 🌟 medium 🌟🌟 hard 🌟🌟🌟 super hard 🌟🌟🌟🌟

__What we want to do is fill in the gap between learning and getting started with real projects.__

---

## Table of Contents

- [1. Small projects with Elegant code](01-elegant-code-base.md)
- [2. Variables](02-variables.md)
- [3. Basic Types](03-basic-types.md)
- [4. Ownership and Borrowing](04-ownership.md)
- [5. Compound Types](05-compound-types.md)
- [6. Flow Control](06-flow-contro.md)
- [7. Pattern Match](07-pattern-match.md)
- [8. Method & Associated function](08-method.md)
- [9. Generics and Traits](09-generics-traits.md)
- [10. Collection Types](10-collections.md)
- [11. Type Conversion](11-type-conversions.md)
- [12. Result and panic](12-result-panic.md)
- [13. Crate and Module](13-crate-module.md)
- [14. Comments and Docs](14-comments-docs.md)
- [15. Formatted output](15-formatted-output.md)
- [16. Lifetime](16-lifetime.md)
- [17. Functional programing](17-functional-programing.md)
- [18. newtype and DST](18-newtype-sized.md)
- [19. Smart pointers TODO](19-smart-pointers.md)
- [20. Weak and Circle reference TODO](20-weak.md)
- [21. Self referential TODO](21-self-referential.md)
- [22. Threads TODO](22-threads.md)
- [23. Global variables TODO](23-global-variables.md)
- [24. Errors TODO](24-errors.md)
- [25. Unsafe doing](25-unsafe.md)
- [26. Macro TODO](26-macro.md)
- [27. Tests TODO](27-tests.md)
- [28. Async/Await TODO](28-async.md)
- [29. Standard Library TODO](29-std.md)
- [30. Fighting with Compiler](30-fight-compiler.md)

---

<TagLinks />