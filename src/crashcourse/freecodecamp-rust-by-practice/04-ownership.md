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
    content: https://chanhi2000.github.io/crashcourse/freecodecamp-rust-by-practice/04
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Understanding Ownership

Ownership is Rust’s most unique feature and has deep implications for the rest of the language. It enables Rust to make memory safety guarantees without needing a garbage collector, so it’s important to understand how ownership works. In this chapter, we’ll talk about ownership as well as several related features: borrowing, slices, and how Rust lays data out in memory.