---
lang: ko-KR
title: 8. Control Structures
description: 🐚Text Processing with GNU awk > 8. Control Structures
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 8. Control Structures
    content: 8. Control Structures
  - property: og:title
    content: 8. Control Structures
  - property: og:description
    content: 🐚Text Processing with GNU awk > 8. Control Structures
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/08-control-structures.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 8. Control Structures
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/control-structures.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

You've already seen various examples requiring conditional expressions. This chapter will revisit the `if-else` control structure and the ternary operator. Then you will see some examples with explicit loops (recall that `awk` is already looping over input records). Followed by keywords that control loop flow. Most of the syntax is very similar to the `C` language.

::: info 

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::

---

## `if-else`

Mostly, when you need to use if control structure, you can get away with using the condX{actionX} blocks instead. But sometimes, you need additional condition checking within such action blocks. Or, you might need it inside loops. The syntax is if(cond){action} where the braces are optional if you need only one statement. if can be optionally followed by multiple else if conditions and a final else condition. These can also be nested as needed.

::: tabs

@tab:active Case 1

print all lines starting with '`b`'
additionally, if the last column is `> 0`, then print some more text

```sh
awk '/^b/{print; if($NF>0) print "------"}' table.txt
# brown bread mat hair 42
# ------
# blue cake mug shirt -7
```

@tab Case 2

same as above, but uses the 'else' condition as well

```sh
awk '/^b/{print; if($NF>0) print "------"; else print "======"}' table.txt
# brown bread mat hair 42
# ------
# blue cake mug shirt -7
# ======
```

:::

The ternary operator often reduces the need for single statement `if-else` control structures.

::: tabs

@tab:active Case 1

> same as: `awk '{if(NR%3) ORS="-" ; else ORS=RS} 1'`

```sh
seq 6 | awk '{ORS = NR%3 ? "-" : RS} 1'
# 1-2-3
# 4-5-6
```

@tab Case 2

note that parentheses is necessary for print in this case

```sh
awk '/^b/{print; print($NF>0 ? "------" : "======")}' table.txt
# brown bread mat hair 42
# ------
# blue cake mug shirt -7
# ======
```

:::

::: info 

See also [stackoverflow: finding min and max value of a column](https://stackoverflow.com/a/29784278) and [gawk manual: switch](https://www.gnu.org/software/gawk/manual/gawk.html#Switch-Statement).

:::

---

## loops

`for` loops are handy when you are working with arrays. Also for processing input fields, since `$N` syntax allows passing an expression instead of just fixed values.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{for(i=2; i<7; i+=2) print i}'
# 2
# 4
# 6
```

@tab Case 2

looping each field

```sh
awk -v OFS=, '{for(i=1; i<=NF; i++) if($i ~ /^[bm]/) $i="["$i"]"} 1' table.txt
# [brown],[bread],[mat],hair,42
# [blue],cake,[mug],shirt,-7
# yellow,[banana],window,shoes,3.14
```

:::

Here's an example of looping over a dynamically constructed array.

```sh
cat marks.txt
# Dept    Name    Marks
# ECE     Raj     53
# ECE     Joel    72
# EEE     Moi     68
# CSE     Surya   81
# EEE     Tia     59
# ECE     Om      92
# CSE     Amy     67
```

::: tabs

@tab:active Case 1

average marks for each department

```sh
awk 'NR>1{d[$1]+=$3; c[$1]++} END{for(k in d) print k, d[k]/c[k]}' marks.txt
# ECE 72.3333
# EEE 63.5
# CSE 74
```

:::

You can use `break` and `continue` to alter the normal flow of loops. `break` will cause the current loop to quit immediately without processing the remaining statements and iterations. `continue` will skip the remaining statements in the loop and start the next iteration.

::: tabs

@tab:active Case 1

```sh
awk -v OFS=, '{for(i=1; i<=NF; i++) if($i ~ /b/){NF=i; break}} 1' table.txt
# brown
# blue
# yellow,banana
```

:::

::: info 

See also [stackoverflow: find missing numbers from sequential list](https://stackoverflow.com/q/38491676/4082052).

:::

`awk` supports the `while` and `do-while` loop mechanisms as well.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{i=6; while(i>0){print i; i-=2}}'
# 6
# 4
# 2
```

@tab Case 2

recursive substitution

```sh
echo 'titillate' | awk '{while(gsub(/til/, "")) print}'
# tilate
# ate
echo 'titillate' | awk '{do{print} while(gsub(/til/, ""))}'
# titillate
# tilate
# ate
```

:::

---

## `next`

`next` is similar to the `continue` statement but it acts on the default loop that goes through the input records. It doesn't affect `BEGIN` or `END` blocks as they are outside the record looping. When `next` is executed, rest of the statements will be skipped and next input record will be fetched for processing.

::: tabs

@tab:active Case 1

```sh
awk '/\<par/{print "%% " $0; next} {print /s/ ? "X" : "Y"}' anchors.txt
# %% sub par
# X
# Y
# X
# %% cart part tart mart
```

:::

You'll see more examples with `next` in the coming chapters.

---

## `exit`

You saw the use of `exit` earlier to quit early and avoid unnecessary processing of records. If an argument isn't passed, `awk` considers the command to have finished normally and the __exit status__ will indicate success. You can pass a number argument for other cases.

::: tabs

@tab:active Case 1

```sh
seq 3542 4623452 | awk 'NR==2452{print; exit}'
# 5993
# $ echo $?
# 0
```

@tab Case 2

```sh
awk '/^br/{print "invalid data"; exit 1}' table.txt
# invalid data
# $ echo $?
# 1
```

@tab Case 3

any remaining files to be processed are also skipped

```sh
awk 'FNR==2{print; exit}' table.txt greeting.txt
# blue cake mug shirt -7
```

:::

If `exit` is used in `BEGIN` or normal blocks, any code in the `END` block will still be executed. For more details and corner cases, see [gawk manual: exit](https://www.gnu.org/software/gawk/manual/gawk.html#Exit-Statement).

::: tabs

@tab:active Case 1

first print is executed on seeing exit, rest of `BEGIN` and normal blocks are skipped
code in the `END` block is then executed

```sh
awk 'BEGIN{print "hi"; exit; print "hello"}
       /^b/;
       END{print "bye"}' table.txt
# hi
# bye
```

:::

---

## Summary

This chapter covered some of the control flow structures provided by `awk`. These features makes `awk` flexible and easier to use compared to `sed`.

Next chapter will discuss some of the built-in functions.

---

---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

The input file <FontIcon icon="iconfont icon-file"/> `nums.txt` contains a single column of numbers. Change positive numbers to negative and vice versa. Solution should use the sub function and shouldn't explicitly use the if-else control structure or the ternary operator.

```sh
cat nums.txt
# 42
# -2
# 10101
# -3.14
# -75
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# -42
# 2
# -10101
# 3.14
# 75
```

@tab Answer

> same as: `awk '{$0 ~ /^-/ ? sub(/^-/, "") : sub(/^/, "-")} 1' nums.txt`

```sh
awk '!sub(/^-/, ""){sub(/^/, "-")} 1' nums.txt
# -42
# 2
# -10101
# 3.14
# 75
```

:::

### Exercise 2

For the input file <FontIcon icon="iconfont icon-file"/> `table.txt`, change the field separator from space to the `,` character. Also, any field not containing digit characters should be surrounded by double quotes.


::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# "brown","bread","mat","hair",42
# "blue","cake","mug","shirt",-7
# "yellow","banana","window","shoes",3.14
```

@tab Answer

```sh
awk -v q='"' -v OFS=, '{for(i=1; i<=NF; i++) if($i !~ /[0-9]/) $i = q $i q} 1' table.txt
# "brown","bread","mat","hair",42
# "blue","cake","mug","shirt",-7
# "yellow","banana","window","shoes",3.14
```

:::

### Exercise 3

For each input line of the file <FontIcon icon="iconfont icon-file"/> `secrets.txt`, remove all characters except the last character of each field. Assume space as the input field separator.

::: tabs 

@tab:active Question

```sh
cat secrets.txt
# stag area row tick
# deaf chi rate tall glad
# Bi tac toe - 42

awk ##### add your solution here
# gawk
# field
# ice-2
```

@tab Answer

> can also use: `awk '{print gensub(/[^ ]*(.)( |$)/, "\\1", "g")}'`
> can also use: `awk -v OFS= '{for(i=1; i<=NF; i++) $i = substr($i, length($i))} 1'`

```sh
awk -v OFS= '{for(i=1; i<=NF; i++) $i = gensub(/.*(.)/, "\\1", 1, $i)} 1' secrets.txt
# gawk
# field
# ice-2
```

:::

### Exercise 4

For the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`, emulate the `q` and `Q` commands of `sed` as shown below.

::: tabs 

@tab:active Question

`sed '/are/q' sample.txt` will print till the line containing '`are`'

```sh
awk ##### add your solution here
# Hello World
# 
# Good day
# How are you
```

`sed '/are/Q' sample.txt` is similar to the 'q`' command,
but the matching line won't be part of the output

```sh
awk ##### add your solution here
# Hello World
# 
# Good day
```

@tab Answer

```sh
sed '/are/q' sample.txt will print till the line containing 'are'
awk '1; /are/{exit}' sample.txt
# Hello World
# 
# Good day
# How are you
```

`sed '/are/Q' sample.txt` is similar to the '`q`' command,
but the matching line won't be part of the output

```sh
awk '/are/{exit} 1' sample.txt
# Hello World
# 
# Good day
```

:::

### Exercise 5 

For the input file <FontIcon icon="iconfont icon-file"/> `addr.txt`:

- if a line contains `e`
  - delete all occurrences of `e`
  - surround all consecutive repeated characters with `{}`
  - assume that the input will not have more than two consecutive repeats
- if a line doesn't contain `e` but contains `u`
  - surround all lowercase vowels in that line with `[]`

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# H{ll}o World
# How ar you
# This gam is g{oo}d
# T[o]d[a]y [i]s s[u]nny
# 12345
# You ar fu{nn}y
```

@tab Answer

```sh
awk -F '' -v OFS= '/e/{gsub(/e/, ""); for(i=1; i<NF; i++)
                  if($i==$(i+1)){ $i = "{" $i; $(i+1) = $(i+1) "}" }
                  print; next}
                  /u/{gsub(/[aiou]/, "[&]")} 1' addr.txt
# H{ll}o World
# How ar you
# This gam is g{oo}d
# T[o]d[a]y [i]s s[u]nny
# 12345
# You ar fu{nn}y
```

:::

### Exercise 6

The goal is to print `found you` if the input file contains `you` and `not found` otherwise. However, both the `print` statements are executed in the `awk` code shown below. Change it to work as expected.


::: tabs 

@tab:active Question

```sh
awk '/you/{print "found you"; exit} END{print "not found"}' addr.txt
# found you
# not found
```

@tab Answer

```sh
awk '/you/{print "found you"; exit} END{print "not found"}' addr.txt
# found you
# not found
```

One way to solve such problems is to use a flag as shown below:

```sh
awk '/you/{print "found you"; f=1; exit} END{if(!f) print "not found"}' addr.txt
# found you

awk '/you/{print "found you"; f=1; exit} END{if(!f) print "not found"}' table.txt
# not found
```

:::

---

<TagLinks/>