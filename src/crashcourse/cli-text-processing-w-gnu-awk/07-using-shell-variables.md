---
lang: ko-KR
title: 7. Using shell variables
description: 🐚Text Processing with GNU awk > 7. Using shell variables
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 7. Using shell variables
    content: 7. Using shell variables
  - property: og:title
    content: 7. Using shell variables
  - property: og:description
    content: 🐚Text Processing with GNU awk > 7. Using shell variables
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/07-using-shell-variables.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 7. Using shell variables
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/using-shell-variables.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

When it comes to automation and scripting, you'd often need to construct commands that can accept input from the user, incorporate data from a file or the output of a tool and so on.

In this chapter, you'll see how to pass information saved in shell variables to `awk` commands. As mentioned before, this book assumes `bash` as the shell being used.

::: info 

As an example, see my repo [ch: command help](https://github.com/learnbyexample/command_help/blob/master/ch) for a practical shell script where commands are constructed dynamically.

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::

---
## `-v` option

The most common method is to use the `-v` command line option.

::: tabs

@tab:active Case 1

assume that the '`s`' variable is part of some bash script or perhaps a variable that stores the output of a shell command

```sh
s='cake'
awk -v word="$s" '$2==word' table.txt
# blue cake mug shirt -7
```

:::

---

## `ENVIRON`

To access environment variables of the shell, you can call the special array variable `ENVIRON` with the name of the environment variable as a string key.

::: tabs

@tab:active Case 1

existing environment variable
output shown here is for my machine, would differ for you

```sh
awk 'BEGIN{print ENVIRON["HOME"]}'
# /home/learnbyexample
awk 'BEGIN{print ENVIRON["SHELL"]}'
# /bin/bash
```

@tab Case 2

defined along with the awk command
note that the variable is placed as a prefix to the command

```sh
word='hello' awk 'BEGIN{print ENVIRON["word"]}'
# hello
```

:::

`ENVIRON` is a good way to get around `awk`'s interpretation of escape sequences. This is especially helpful for fixed string matching (see the [index](09-built-in-functions.md#index) section for examples).

```sh
s='hi\nbye'
```

::: tabs

@tab:active Case 1

when passed via `-v` option

```sh
awk -v ip="$s" 'BEGIN{print ip}'
# hi
# bye
```

@tab Case 2

when passed as an environment variable

```sh
ip="$s" awk 'BEGIN{print ENVIRON["ip"]}'
# hi\nbye
```

:::

Here's another example when a regexp is passed to an `awk` command.

::: tabs

@tab:active Case 1

when passed via `-v` option

```sh
r='\Bpar\B'
awk -v rgx="$r" '$0 ~ rgx' anchors.txt
# awk: warning: escape sequence '\B' treated as plain 'B'
r='\\Bpar\\B'
awk -v rgx="$r" '$0 ~ rgx' anchors.txt
# apparent effort
# two spare computers
```

@tab Case 2

when passed as an environment variable

```sh
r='\Bpar\B'
rgx="$r" awk '$0 ~ ENVIRON["rgx"]' anchors.txt
# apparent effort
# two spare computers
```

:::

---

## Summary

This short chapter revisited the `-v` command line option and introduced the `ENVIRON` special array. These are particularly useful when the `awk` command is part of a shell script. Arrays will be discussed in more detail in the later chapters.

The next chapter will cover control structures.

---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

Use contents of the s variable to display all matching lines from the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`. Assume that the s variable doesn't have any regexp metacharacters and construct a solution such that only whole words are matched.

::: tabs 

@tab:active Question

```sh
s='do'
##### add your solution here
# Just do-it
```

@tab Answer

```sh
awk -v s="$s" '$0 ~ "\\<" s "\\>"' sample.txt
# Just do-it
```

:::

### Exercise 2

Replace all occurrences of `o` for the input file <FontIcon icon="iconfont icon-file"/> `addr.txt` with the literal contents of the s variable. Assume that the s variable has regexp metacharacters.


::: tabs 

@tab:active Question

```sh
s='\&/'
##### add your solution here
# Hell\&/ W\&/rld
# H\&/w are y\&/u
# This game is g\&/\&/d
# T\&/day is sunny
# 12345
# Y\&/u are funny
```

@tab Answer

```sh
s='\&/'
s="$s" awk 'BEGIN{gsub(/[\\&]/, "\\\\&", ENVIRON["s"])} {gsub(/o/, ENVIRON["s"])} 1' addr.txt
# Hell\&/ W\&/rld
# H\&/w are y\&/u
# This game is g\&/\&/d
# T\&/day is sunny
# 12345
# Y\&/u are funny
```

:::

---

<TagLinks/>