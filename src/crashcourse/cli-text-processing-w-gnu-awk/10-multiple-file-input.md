---
lang: ko-KR
title: 10. Multiple file input
description: 🐚Text Processing with GNU awk > 10. Multiple file input
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 10. Multiple file input
    content: 10. Multiple file input
  - property: og:title
    content: 10. Multiple file input
  - property: og:description
    content: 🐚Text Processing with GNU awk > 10. Multiple file input
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/10-multiple-file-input.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 10. Multiple file input
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/multiple-file-input.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

You have already seen blocks like `BEGIN`, `END` and statements like `next`. This chapter will discuss features that are useful to make decisions around each file when there are multiple files passed as input.


::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in 
the examples.

:::

---

## `BEGINFILE`, `ENDFILE` and `FILENAME`

- `BEGINFILE`: this block gets executed before the start of each input file
- `ENDFILE`: this block gets executed after processing each input file
- `FILENAME`: special variable having the filename of the current input file

Here are some examples:

::: tabs

@tab:active Case 1

> can also use: `awk 'BEGINFILE{printf "--- %s ---\n", FILENAME} 1'`

```sh
awk 'BEGINFILE{print "--- " FILENAME " ---"} 1' greeting.txt table.txt
# --- greeting.txt ---
# Hi there
# Have a nice day
# Good bye
# --- table.txt ---
# brown bread mat hair 42
# blue cake mug shirt -7
# yellow banana window shoes 3.14
```

@tab Case 2

> same as: `tail -q -n1 greeting.txt table.txt`

```sh
awk 'ENDFILE{print $0}' greeting.txt table.txt
# Good bye
# yellow banana window shoes 3.14
# nextfile
```

:::

---

## `nextfile`

The `nextfile` statement helps to skip the remaining records from the current file being processed and move on to the next file. Note that the `ENDFILE` block will still be executed, if present.

::: tabs

@tab:active Case 1

print `filename` if it contains '`I`' anywhere in the file

> same as: `grep -l 'I' f[1-3].txt greeting.txt`

```sh
awk '/I/{print FILENAME; nextfile}' f[1-3].txt greeting.txt
# f1.txt
# f2.txt
```

@tab Case 2

print `filename` if it contains both '`o`' and '`at`' anywhere in the file

```sh
awk 'BEGINFILE{m1=m2=0} /o/{m1=1} /at/{m2=1}
     m1 && m2{print FILENAME; nextfile}' f[1-3].txt greeting.txt
# f2.txt
# f3.txt
```

@tab Case 3

print `filename` if it contains '`at`' but not '`o`'

```sh
awk 'BEGINFILE{m1=m2=0} /o/{m1=1; nextfile} /at/{m2=1}
     ENDFILE{if(!m1 && m2) print FILENAME}' f[1-3].txt greeting.txt
# f1.txt
```

:::

::: warning 

`nextfile` cannot be used in the `BEGIN` or `END` or `ENDFILE` blocks. See [gawk manual: nextfile](https://www.gnu.org/software/gawk/manual/gawk.html#Nextfile-Statement) for more details, how it affects `ENDFILE` and other special cases.

:::

---

## `ARGC` and `ARGV`

The `ARGC` special variable contains the total number of arguments passed to the `awk` command, including `awk` itself as an argument. The `ARGV` special array contains the arguments themselves.

::: tabs

@tab:active Case 1

note that the index starts with '0' here

```sh
awk 'BEGIN{for(i=0; i<ARGC; i++) print ARGV[i]}' f[1-3].txt greeting.txt
# awk
# f1.txt
# f2.txt
# f3.txt
# greeting.txt
```

:::

Similar to manipulating `NF` and modifying `$N` field contents, you can change the values of `ARGC` and `ARGV` to control how the arguments should be processed.

However, not all arguments are necessarily filenames. `awk` allows assigning variable values without `-v` option if it is done in the place where you usually provide file arguments. For example:

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{for(i=0; i<ARGC; i++) print ARGV[i]}' table.txt n=5 greeting.txt
# awk
# table.txt
# n=5
# greeting.txt
```

:::

In the above example, the variable `n` will get a value of `5` after `awk` has finished processing the <FontIcon icon="iconfont icon-file"/> `table.txt` file. Here's an example where `FS` is changed between two files.


```sh
cat table.txt
# brown bread mat hair 42
# blue cake mug shirt -7
# yellow banana window shoes 3.14
cat books.csv
# Harry Potter,Mistborn,To Kill a Mocking Bird
# Matilda,Castle Hangnail,Jane Eyre
```

::: tabs

@tab:active Case 1

for <FontIcon icon="iconfont icon-file"/> `table.txt`, `FS` will be the default value
for <FontIcon icon="iconfont icon-file"/> `books.csv`, `FS` will be the comma character
`OFS` is comma for both the files

```sh
awk -v OFS=, 'NF=2' table.txt FS=, books.csv
# brown,bread
# blue,cake
# yellow,banana
# Harry Potter,Mistborn
# Matilda,Castle Hangnail
```

:::

::: info 

See [stackoverflow: extract positions 2-7 from a fasta sequence](https://stackoverflow.com/a/64427745/4082052) for a practical example of changing field/record separators between the files being processed.

:::


---

## Summary

This chapter introduced few more special blocks and variables are that handy for processing multiple file inputs. These will show up in examples in the coming chapters as well.

Next chapter will discuss use cases where you need to take decisions based on multiple input records.

---


## Exercises


::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

Print the last field of the first two lines for the input files <FontIcon icon="iconfont icon-file"/> `table.txt`, <FontIcon icon="iconfont icon-file"/> `scores.csv` and <FontIcon icon="iconfont icon-file"/> `fw.txt`. The field separators for these files are space, comma and fixed width respectively. To make the output more informative, print filenames and a separator as shown in the output below. Assume that the input files will have at least two lines.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# >table.txt<
# 42
# -7
# ----------
# >scores.csv<
# Chemistry
# 99
# ----------
# >fw.txt<
# 0.134563
# 6
# ----------
```

@tab Solution

```sh
awk 'BEGINFILE{print ">" FILENAME "<"} {print $NF} FNR==2{print "----------";
     nextfile}' table.txt FS=, scores.csv FIELDWIDTHS='14 *' fw.txt
# >table.txt<
# 42
# -7
# ----------
# >scores.csv<
# Chemistry
# 99
# ----------
# >fw.txt<
# 0.134563
# 6
# ----------
```

:::

### Exercise 2

For the input files <FontIcon icon="iconfont icon-file"/> `sample.txt`, <FontIcon icon="iconfont icon-file"/> `secrets.txt`, <FontIcon icon="iconfont icon-file"/> `addr.txt` and <FontIcon icon="iconfont icon-file"/> `table.txt`, display only the names of files that contain at or fun in the third field. Assume space as the field separator.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here sample.txt secrets.txt addr.txt table.txt
# secrets.txt
# addr.txt
```

@tab Solution

```sh
awk '$3 ~ /fun|at/{print FILENAME; nextfile}' sample.txt secrets.txt addr.txt table.txt
# secrets.txt
# addr.txt
# table.txt
```

:::


<TagLinks/>