---
lang: ko-KR
title: 3. Regular Expressions
description: 🐚CLI Text Processing with GNU awk > 3. Regular Expressions
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚CLI Text Processing with GNU awk > 3. Regular Expressions
    content: 3. Regular Expressions
  - property: og:title
    content: 3. Regular Expressions
  - property: og:description
    content: 🐚CLI Text Processing with GNU awk > 3. Regular Expressions
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/03-regular-expressions.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 3. Regular Expressions
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/regular-expressions.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

Regular Expressions is a versatile tool for text processing. It helps to precisely define a matching criteria. For learning and understanding purposes, one can view regular expressions as a mini-programming language in itself, specialized for text processing. Parts of a regular expression can be saved for future use, analogous to variables and functions. There are ways to perform AND, OR, NOT conditionals, features to concisely define repetition to avoid manual replication and so on.

Here are some common use cases:

- Sanitizing a string to ensure that it satisfies a known set of rules. For example, to check if a given string matches password rules.
- Filtering or extracting portions on an abstract level like alphabets, digits, punctuation and so on.
- Qualified string replacement. For example, at the start or the end of a string, only whole words, based on surrounding text, etc.

This chapter will cover regular expressions as implemented in `awk`. Most of `awk`'s regular expression syntax is similar to Extended Regular Expression (ERE) supported by `grep -E` and `sed -E`. Unless otherwise indicated, examples and descriptions will assume ASCII input.

::: info 

See also [POSIX specification](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap09.html) for regular expressions and [unix.stackexchange: Why does my regular expression work in X but not in Y?](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap09.html) See my [blog post](https://learnbyexample.github.io/gnu-bre-ere-cheatsheet/) for differences between regexp features supported by `grep`, `sed` and `awk`.

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::

---

## Syntax and variable assignment

As seen in the previous chapter, the syntax is `string ~ /regexp/` to check if the given string satisfies the rules specified by the regexp. And `string !~ /regexp/` to invert the condition. By default, `$0` is checked if the string isn't specified. You can also save a regexp literal in a variable by adding `@` as a prefix. This is needed because `/regexp/` by itself would mean `$0 ~ /regexp/`.

```sh
printf 'spared no one\ngrasped\nspar\n' | awk '/ed/'
# spared no one
# grasped

printf 'spared no one\ngrasped\nspar\n' | awk 'BEGIN{r = @/ed/} $0 ~ r'
# spared no one
# grasped
```

---


<TagLinks/>