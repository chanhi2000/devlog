---
lang: ko-KR
title: 6. In-place file editing
description: 🐚Text Processing with GNU awk > 6. In-place file editing
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 6. In-place file editing
    content: 6. In-place file editing
  - property: og:title
    content: 6. In-place file editing
  - property: og:description
    content: 🐚Text Processing with GNU awk > 6. In-place file editing
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/06-in-place-file-editing.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 6. In-place file editing
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/in-place-file-editing.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

In the examples presented so far, the output from `awk` was displayed on the terminal. This chapter will discuss how to write back the changes to the input files using the `-i` command line option. You can also choose to create backups of the original files.

::: info 

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::

---

## Without backup

The `-i` option allows you to load libraries (see [gawk manual: `-i` option](https://www.gnu.org/software/gawk/manual/gawk.html#index-_002di-option) for details). The inplace library comes by default with the `awk` installation. Use `-i inplace` to indicate that you want to modify the original input itself. Use this option with caution, preferably after testing that the code is working as intended.

```sh
cat greet.txt
# Hi there
# Have a nice day
# Good bye
```

::: tabs

@tab:active Case 1

prefix line numbers

```sh
awk -i inplace '{print NR ". " $0}' greet.txt
cat greet.txt
# 1. Hi there
# 2. Have a nice day
# 3. Good bye
```

:::

Multiple input files are treated separately and changes are written back to the respective files.

```sh
cat f1.txt
# I ate 3 apples
# $ cat f2.txt
# I bought two balls and 3 bats
```

::: tabs

@tab:active Case 1

```sh
awk -i inplace '{gsub(/\<3\>/, "three")} 1' f1.txt f2.txt
cat f1.txt
# I ate three apples
# $ cat f2.txt
# I bought two balls and three bats
```

:::

---

## With backup

You can provide a backup extension by setting the `inplace::suffix` special variable. For example, if the input file is <FontIcon icon="iconfont icon-file"/>`ip.txt` and `inplace::suffix='.orig'` is used, the backup file will be named as `ip.txt.orig`.

```sh
cat f3.txt
#   Name    Physics  Maths
#  Moe  76  82
# Raj  56  64
```

::: tabs

@tab:active Case 1

```sh
awk -i inplace -v inplace::suffix='.bkp' -v OFS=, '{$1=$1} 1' f3.txt
cat f3.txt
# Name,Physics,Maths
# Moe,76,82
# Raj,56,64
```

@tab Case 2

original file will be preserved in '`f3.txt.bkp`'

```sh
cat f3.txt.bkp
#   Name    Physics  Maths
#  Moe  76  82
# Raj  56  64
```

:::

::: info 

In earlier versions of `awk`, the `INPLACE_SUFFIX` variable was used instead of `inplace::suffix`. Also, you can use `inplace::enable` variable to dynamically control whether files should be in-placed or not. See [gawk manual: Enabling In-Place File Editing](https://www.gnu.org/software/gawk/manual/gawk.html#Extension-Sample-Inplace) for more details.

:::

---

## Security implications

By default, when you use the `-i inplace` option, the `awk` command will look for a file named `inplace` or `inplace.awk` in the current working directory. If such files aren't found, then `awk` will look for them in the installation directories, which is what you'd usually want.

For secure applications, you shouldn't rely on the `-i inplace` option. Instead, you could either use the absolute path of the `inplace` file from the installation directory, or manipulate `AWKPATH` (environment variable that controls the behavior of searching for files to be loaded) to be restricted to secure paths only. See [this unix.stackexchange thread](https://unix.stackexchange.com/q/749645/109046) for more details about this issue and workarounds.

---

## Summary

This chapter discussed about the `-i inplace` option which is useful when you need to edit a file in-place. This is particularly useful in automation scripts. But, do ensure that you have tested the `awk` command before applying changes to the actual files if you need to use this option without creating backups.

The next chapter will discuss the use of shell variables in more detail.

---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

For the input file <FontIcon icon="iconfont icon-file"/> `copyright.txt`, replace `copyright: 2018` with `copyright: 2020` and write back the changes to <FontIcon icon="iconfont icon-file"/> `copyright.txt` itself. The original contents should get saved to <FontIcon icon="iconfont icon-file"/> `copyright.txt.orig`

```sh
cat copyright.txt
# bla bla 2015 bla
# blah 2018 blah
# bla bla bla
# copyright: 2018
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
cat copyright.txt
# bla bla 2015 bla
# blah 2018 blah
# bla bla bla
# copyright: 2020

cat copyright.txt.orig
# bla bla 2015 bla
# blah 2018 blah
# bla bla bla
# copyright: 2018
```

@tab Answer

```sh
awk -i inplace -v inplace::suffix='.orig' '{sub(/copyright: 2018/, "copyright: 2020")} 1' copyright.txt

cat copyright.txt
# bla bla 2015 bla
# blah 2018 blah
# bla bla bla
# copyright: 2020
cat copyright.txt.orig
# bla bla 2015 bla
# blah 2018 blah
# bla bla bla
# copyright: 2018
```

:::

### Exercise 2

For the input files <FontIcon icon="iconfont icon-file"/> `nums1.txt` and <FontIcon icon="iconfont icon-file"/> `nums2.txt`, retain only the second and third lines and write back the changes to their respective files. No need to create backups.


```sh
cat nums1.txt
# 3.14
# 4201
# 777
# 0323012
cat nums2.txt
# -45.4
# -2
# 54316.12
# 0x231
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
cat nums1.txt
# 4201
# 777
cat nums2.txt
# -2
# 54316.12
```

@tab Answer

```sh
awk -i inplace 'FNR==2 || FNR==3' nums1.txt nums2.txt
cat nums1.txt
# 4201
# 777
cat nums2.txt
# -2
# 54316.12
```

:::

---

<TagLinks/>