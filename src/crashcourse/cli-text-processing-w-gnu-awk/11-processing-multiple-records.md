---
lang: ko-KR
title: 11. Processing multiple records
description: 🐚Text Processing with GNU awk > 11. Processing multiple records
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 11. Processing multiple records
    content: 11. Processing multiple records
  - property: og:title
    content: 11. Processing multiple records
  - property: og:description
    content: 🐚Text Processing with GNU awk > 11. Processing multiple records
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/11-processing-multiple-records.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 11. Processing multiple records
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/processing-multiple-records.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

Often, you need to consider multiple lines at a time to make a decision, such as the paragraph mode examples seen earlier. Sometimes, you need to match a particular record and then get records surrounding the matched record. The `condX{actionX}` shortcut makes it easy to code state machines concisely, which is useful to solve such multiple record use cases. See [softwareengineering: FSM examples](https://softwareengineering.stackexchange.com/questions/47806/examples-of-finite-state-machines) if you are not familiar with state machines.

::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in 
the examples.

:::

---

## Processing consecutive records

You might need to define a condition that should satisfy something for one record and something else for the very next record. `awk` does provide a feature to get next record, but that could get complicated (see the [getline](12-two-file-processing.md#getline) section). Instead, you can simply save relevant records in variables/arrays and then create the required conditional expression when you have all the required records available. The default behavior of uninitialized variable to act as `0` in numerical context and empty in string context plays a role too.

::: tabs

@tab:active Case 1

match and print two consecutive records
the first record should contain 'he' and the second one should contain 'you'

```sh
awk 'p ~ /he/ && /you/{print p ORS $0} {p=$0}' para.txt
# Hi there
# How are you
```

@tab Case 2

same filtering as above, but print only the first record

```sh
awk 'p ~ /he/ && /you/{print p} {p=$0}' para.txt
# Hi there
```

@tab Case 3

same filtering as above, but print only the second record

```sh
awk 'p ~ /he/ && /you/; {p=$0}' para.txt
# How are you
```

:::

---

## Context matching

Sometimes you want not just the matching records, but the records relative to the matches as well. For example, it could be to see the comments at the start of a function block that was matched while searching a program file. Or, it could be to see extended information from a log file while searching for a particular error message.

Consider this sample input file:

```sh
cat context.txt
# blue
#     toy
#     flower
#     sand stone
# light blue
#     flower
#     sky
#     water
# language
#     english
#     hindi
#     spanish
#     tamil
# programming language
#     python
#     kotlin
#     ruby
```

### Case 1

Here's an example that emulates the `grep --no-group-separator -A<n>` functionality. The `n && n--` trick used in the example below works like this:

- If initially `n=2`, then we get
  - `2 && 2` — evaluates to `true` and `n` becomes `1`
  - `1 && 1` — evaluates to `true` and `n` becomes `0`
  - `0 &&` — evaluates to `false` and `n` doesn't change
- Note that when conditionals are connected with logical `&&`, the second expression will not be executed at all if the first one turns out to be `false` because the overall result will always be `false`. Same is the case if the first expression evaluates to `true` with the logical `||` operator. Such logical operators are also known as __short-circuit__ operators. Thus, in the above case, `n--` won't be executed when `n` is `0` on the left hand side. This prevents n going negative and `n && n--` will never become true unless `n` is assigned again.

::: tabs

@tab:active Case 1

> same as: `grep --no-group-separator -A1 'blue'`

print the matching line as well as the one that follows it

```sh
awk '/blue/{n=2} n && n--' context.txt
# blue
#     toy
# light blue
#     flower
```

@tab Case 2

overlapping example, `n` gets re-assigned before reaching `0`

```sh
awk '/toy|flower/{n=2} n && n--{print NR, $0}' context.txt
# 2     toy
# 3     flower
# 4     sand stone
# 6     flower
# 7     sky
```

@tab Case 3

doesn't allow overlapping cases to re-assign the counter

```sh
awk '!n && /toy|flower/{n=2} n && n--{print NR, $0}' context.txt
# 2     toy
# 3     flower
# 6     flower
# 7     sky
```

:::

Once you've understood the above examples, the rest of the examples in this section should be easier to comprehend. They are all variations of the logic used above and re-arranged to solve the use case being discussed.

### Case 2

Print `n` records after match. This is similar to previous case, except that the matching record isn't printed.

print 1 line after the matching line for overlapping cases, `n` gets re-assigned before reaching `0`

::: tabs

@tab:active Case 1

```sh
awk 'n && n--; /language/{n=1}' context.txt
    english
    python
```

@tab Case 2

print `2` lines after the matching line doesn't allow overlapping cases to re-assign the counter

```sh
awk '!n && /toy|flower/{n=2; next} n && n--' context.txt
    flower
    sand stone
    sky
    water
```

:::

### Case 3

Here's how to print the `n`th record after the matching record.

::: tabs

@tab:active Case 1

print only the 2nd line found after the matching line the array saves the matching result for each record doesn't rely on a counter, thus works for overlapping cases

> same as: `awk -v n=2 'a[NR-n]; /toy|flower/{a[NR]=1}'`

```sh
awk -v n=2 'NR in a; /toy|flower/{a[NR+n]}' context.txt
#     sand stone
# light blue
#     water
```

@tab Case 2

print only the 3rd line found after matching line `n && !--n` will be true only when `--n` yields `0` overlapping cases won't work as `n` gets re-assigned before going to `0`

```sh
awk 'n && !--n; /language/{n=3}' context.txt
#     spanish
#     ruby
```

:::

### Case 4

Print `n` records before the match. Printing the matching record as well is left as an exercise. Since the file is being read in forward direction, and the problem statement is to print something before the matching record, overlapping situation like the previous examples doesn't occur.

::: tabs

@tab:active Case 1

`i>0` is used because `NR` starts from `1`

```sh
awk -v n=2 '/toy|flower/{for(i=NR-n; i<NR; i++) if(i>0) print a[i]}
            {a[NR]=$0}' context.txt
# blue
# blue
#     toy
#     sand stone
# light blue
```

:::

### Case 5

Print `n`th record before the matching record.

::: tabs

@tab:active Case 1

if the count is small enough, you can save them in variables this one prints the 2nd line before the matching line `NR>2` is needed as first 2 records shouldn't be considered for a match

```sh
awk 'NR>2 && /toy|flower/{print p2} {p2=p1; p1=$0}' context.txt
# blue
#     sand stone
```

@tab Case 2

else, use an array to save previous records

```sh
awk -v n=4 'NR>n && /age/{print a[NR-n]} {a[NR]=$0}' context.txt
# light blue
#     english
```

:::

---

## Records bounded by distinct markers

This section will cover cases where the input file will always contain the same number of starting and ending patterns, arranged in an alternating fashion. For example, there cannot be two starting patterns appearing without an ending pattern between them and vice versa. Lines of text inside and between such groups are optional.

The sample file shown below will be used to illustrate examples in this section. For simplicity, assume that the starting pattern is marked by `start` and the ending pattern by `end`. They have also been given group numbers to make it easier to analyze the output.

```sh
cat uniform.txt
# mango
# icecream
# --start 1--
# 1234
# 6789
# **end 1**
# how are you
# have a nice day
# --start 2--
# a
# b
# c
# **end 2**
# par,far,mar,tar
```

### Case 1

Processing all the groups of records based on the distinct markers, including the records matched by markers themselves. For simplicity, the below command will just print all such records.

::: tabs

@tab:active Case 1

```sh
awk '/start/{f=1} f; /end/{f=0}' uniform.txt
# --start 1--
# 1234
# 6789
# **end 1**
# --start 2--
# a
# b
# c
# **end 2**
```

:::

::: info 

Similar to `sed -n '/start/,/end/p'` you can also use `awk '/start/,/end/'` but the state machine format is more suitable for the various cases to follow.

:::

### Case 2

Processing all the groups of records but excluding the records matched by markers themselves.

::: tabs

@tab:active Case 1

```sh
awk '/end/{f=0} f{print "*", $0} /start/{f=1}' uniform.txt
# * 1234
# * 6789
# * a
# * b
# * c
```

:::

### Case 3-4

Processing all the groups of records but excluding one of the markers.

::: tabs

@tab:active Case 1

```sh
awk '/start/{f=1} /end/{f=0} f' uniform.txt
# --start 1--
# 1234
# 6789
# --start 2--
# a
# b
# c
```

@tab Case 2

```sh
awk 'f; /start/{f=1} /end/{f=0}' uniform.txt
# 1234
# 6789
# **end 1**
# a
# b
# c
# **end 2**
```

:::

The next four cases are obtained by just using `!f` instead of `f` from the cases shown above.

### Case 5

Processing all input records except the groups of records bound by the markers.

::: tabs

@tab:active Case 1

```sh
awk '/start/{f=1} !f{print $0 "."} /end/{f=0}' uniform.txt
# mango.
# icecream.
# how are you.
# have a nice day.
# par,far,mar,tar.
```

:::

### Case 6 

Processing all input records except the groups of records between the markers.

::: tabs

@tab:active Case 1

```sh
awk '/end/{f=0} !f; /start/{f=1}' uniform.txt
# mango
# icecream
# --start 1--
# **end 1**
# how are you
# have a nice day
# --start 2--
# **end 2**
# par,far,mar,tar
```

:::

### Case 7-8

Similar to case 6, but include only one of the markers.

::: tabs

@tab:active Case 1

```sh
awk '!f; /start/{f=1} /end/{f=0}' uniform.txt
# mango
# icecream
# --start 1--
# how are you
# have a nice day
# --start 2--
# par,far,mar,tar
```

@tab Case 2

```sh
awk '/start/{f=1} /end/{f=0} !f' uniform.txt
# mango
# icecream
# **end 1**
# how are you
# have a nice day
# **end 2**
# par,far,mar,tar
```

:::

---

## Specific blocks

Instead of working with all the groups (or blocks) bound by the markers, this section will discuss how to choose blocks based on an additional criteria.

Here's how you can process only the first matching block.

::: tabs

@tab:active Case 1

```sh
awk '/start/{f=1} f; /end/{exit}' uniform.txt
# --start 1--
# 1234
# 6789
# **end 1**
```

@tab Case 2

use other tricks discussed in previous section as needed

```sh
awk '/end/{exit} f; /start/{f=1}' uniform.txt
# 1234
# 6789
```

:::

Getting last block alone involves lot more work, unless you happen to know how many blocks are present in the input file.


::: tabs

@tab:active Case 1

reverse input linewise, change the order of comparison, reverse again might not work if RS has to be something other than newline

```sh
tac uniform.txt | awk '/end/{f=1} f; /start/{exit}' | tac
# --start 2--
# a
# b
# c
# **end 2**
```

@tab Case 2

or, save the blocks in a buffer and print the last one alone

```sh
awk '/start/{f=1; b=$0; next} f{b=b ORS $0} /end/{f=0}
     END{print b}' uniform.txt
# --start 2--
# a
# b
# c
# **end 2**
```

@tab Case 3

Only the `n`th block.

> can also use: `awk -v n=2 '/4/{c++} c==n{print; if(/6/) exit}'`

```sh
seq 30 | awk -v n=2 '/4/{c++} c==n; /6/ && c==n{exit}'
# 14
# 15
# 16
```

@tab Case 4

All blocks greater than nth block.

```sh
seq 30 | awk -v n=1 '/4/{f=1; c++} f && c>n; /6/{f=0}'
# 14
# 15
# 16
# 24
# 25
# 26
```

@tab Case 5

Excluding the `n`th block.

```sh
seq 30 | awk -v n=2 '/4/{f=1; c++} f && c!=n; /6/{f=0}'
# 4
# 5
# 6
# 24
# 25
# 26
```

@tab Case 6

All blocks, only if the records between the markers match an additional condition.

additional condition here is a record with entire content as '15'

```sh
seq 30 | awk '/4/{f=1; buf=$0; m=0; next}
              f{buf=buf ORS $0}
              /6/{f=0; if(m) print buf}
              $0=="15"{m=1}'
# 14
# 15
# 16
```

:::

---

## Broken blocks

Sometimes, you can have markers in random order and mixed in different ways. In such cases, to work with blocks without any other marker present in between them, the buffer approach comes in handy again.

```sh
cat broken.txt
# qqqqqqqqqqqqqqqq
# error 1
# hi
# error 2
# 1234
# 6789
# state 1
# bye
# state 2
# error 3
# xyz
# error 4
# abcd
# state 3
# zzzzzzzzzzzzzzzz

awk '/error/{f=1; buf=$0; next}
     f{buf=buf ORS $0}
     /state/{if(f) print buf; f=0}' broken.txt
# error 2
# 1234
# 6789
# state 1
# error 4
# abcd
# state 3
```

---

## Summary

This chapter covered various examples of working with multiple records. State machines play an important role in deriving solutions for such cases. Knowing various corner cases is also crucial, otherwise a solution that works for one input may fail for others.

Next chapter will discuss use cases where you need to process a file input based on contents of another file.

---

## Exercises


::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

For the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`, print lines containing `do` only if the previous line is empty and the line before that contains you.

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# Just do-it
# Much ado about nothing
```

@tab Solution

```sh
awk 'p2 ~ /you/ && p1=="" && /do/; {p2=p1; p1=$0}' sample.txt
# Just do-it
# Much ado about nothing
```

:::

### Exercise 2

For the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`, match lines containing `do` or `not` case insensitively. Each of these terms occur multiple times in the file. The goal is to print only the second occurrences of these terms (independent of each other).

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# No doubt you like it too
# Much ado about nothing
```

@tab Solution

```sh
awk -v IGNORECASE=1 '/do/ && ++d == 2; /not/ && ++n == 2' sample.txt
# No doubt you like it too
# Much ado about nothing
```

:::

### Exercise 3

For the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`, print the matching lines containing `are` or `bit` as well as `n` lines around the matching lines. The value for `n` is passed to the `awk` command via the `-v` option.

::: tabs

@tab:active Question

```sh
awk -v n=1 ##### add your solution here
# Good day
# How are you
#
# Today is sunny
# Not a bit funny
# No doubt you like it too

# note that the first and last line are empty for this case
awk -v n=2 ##### add your solution here
# Good day
# How are you
# 
# Just do-it
# 
# Today is sunny
# Not a bit funny
# No doubt you like it too
```

@tab Solution

```sh
awk -v n=1 '/are|bit/{for(i=NR-n; i<NR; i++) if(i>0) print a[i]; c=n+1}
            c && c--; {a[NR]=$0}' sample.txt
# Good day
# How are you
# 
# Today is sunny
# Not a bit funny
# No doubt you like it too

awk -v n=2 '/are|bit/{for(i=NR-n; i<NR; i++) if(i>0) print a[i]; c=n+1}
            c && c--; {a[NR]=$0}' sample.txt

# Good day
# How are you
# 
# Just do-it
# 
# Today is sunny
# Not a bit funny
# No doubt you like it too
```

:::

### Exercise 4

For the input file <FontIcon icon="iconfont icon-file"/> `broken.txt`, print all lines between the markers `top` and `bottom`. The first `awk` command shown below doesn't work because it is matching till the end of file as the second marker isn't found. Assume that the input file cannot have two `top` markers without a `bottom` marker appearing in between and vice-versa.


```sh
cat broken.txt
# top
# 3.14
# bottom
# ---
# top
# 1234567890
# bottom
# top
# Hi there
# Have a nice day
# Good bye
```

::: tabs

@tab:active Question

```sh
# wrong output
awk '/bottom/{f=0} f; /top/{f=1}' broken.txt
# 3.14
# 1234567890
# Hi there
# Have a nice day
# Good bye

# expected output
##### add your solution here
# 3.14
# 1234567890
```

@tab Solution

```sh
awk '/bottom/{f=0} f; /top/{f=1}' broken.txt
# 3.14
# 1234567890
# Hi there
# Have a nice day
# Good bye

# expected output
tac broken.txt | awk '/top/{f=0} f; /bottom/{f=1}' | tac
# 3.14
# 1234567890
```

:::

### Exercise 5

For the input file <FontIcon icon="iconfont icon-file"/> `concat.txt`, extract contents from a line starting with `###` until but not including the next such line. The block to be extracted is indicated by the variable `n` passed via the `-v` option.

```sh
cat concat.txt
### addr.txt
# How are you
# This game is good
# Today is sunny
### broken.txt
# top
# 1234567890
# bottom
### sample.txt
# Just do-it
# Believe it
### mixed_fs.txt
# pink blue white yellow
# car,mat,ball,basket
```

::: tabs

@tab:active Question

```sh
awk -v n=2 ##### add your solution here
#### broken.txt
# top
# 1234567890
# bottom

awk -v n=4 ##### add your solution here
#### mixed_fs.txt
# pink blue white yellow
# car,mat,ball,basket
```

@tab Solution

```sh
awk -v n=2 '/^### /{c++} c==n' concat.txt
#### broken.txt
# top
# 1234567890
# bottom

awk -v n=4 '/^### /{c++} c==n' concat.txt
#### mixed_fs.txt
# pink blue white yellow
# car,mat,ball,basket
```

:::

### Exercise 6

For the input file <FontIcon icon="iconfont icon-file"/> `ruby.md`, replace all occurrences of `ruby` (irrespective of case) with `Ruby`. But, do not replace any matches between \`\`\`ruby and \`\`\` lines (`ruby` in these markers shouldn't be replaced either). Save the output in <FontIcon icon="iconfont icon-file"/> `out.md`.

::: tabs

@tab:active Question

```sh
awk ##### add your solution here ruby.md > out.md
diff -sq out.md expected.md 
# Files out.md and expected.md are identical
```

@tab Solution

```sh
awk -v IGNORECASE=1 '/```ruby/{f=1} !f{gsub(/ruby/, "Ruby")} /```$/{f=0} 1' ruby.md > out.md
diff -sq out.md expected.md 
# Files out.md and expected.md are identical
```

:::

### Exercise 7

For the input file <FontIcon icon="iconfont icon-file"/> `lines.txt`, delete the line that comes after a whole line containing `---`. Assume that such lines won't occur consecutively.

```sh
cat lines.txt
# Go There
# come on
# go there
# ---
# 2 apples and 5 mangoes
# come on!
# ---
# 2 Apples
# COME ON
```

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# Go There
# come on
# go there
# ---
# come on!
# ---
# COME ON
```

@tab Solution

> can also use: `awk '!(n && n--); $0=="---"{n=1}' lines.txt`

```sh
awk 'p!="---"; {p=$0}' lines.txt
# Go There
# come on
# go there
# ---
# come on!
# ---
# COME ON
```

:::

### Exercise 8

For the input file <FontIcon icon="iconfont icon-file"/> `result.csv`, use `---` to separate entries with the same name in the first column. Assume that the lines with the same first column value will always be next to each other.


::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# Amy,maths,89
# Amy,physics,75
# ---
# Joe,maths,79
# ---
# John,chemistry,77
# John,physics,91
# ---
# Moe,maths,81
# ---
# Ravi,physics,84
# Ravi,chemistry,70
# ---
# Yui,maths,92
```

@tab Solution

```sh
awk -F, 'NR>1 && p!=$1{print "---"} 1; {p=$1}' result.csv
# Amy,maths,89
# Amy,physics,75
# ---
# Joe,maths,79
# ---
# John,chemistry,77
# John,physics,91
# ---
# Moe,maths,81
# ---
# Ravi,physics,84
# Ravi,chemistry,70
# ---
# Yui,maths,92
```

:::

<TagLinks/>