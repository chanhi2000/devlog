---
lang: ko-KR
title: 15. Gotchas and Tips
description: 🐚Text Processing with GNU awk > 15. Gotchas and Tips
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 15. Gotchas and Tips
    content: 15. Gotchas and Tips
  - property: og:title
    content: 15. Gotchas and Tips
  - property: og:description
    content: 🐚Text Processing with GNU awk > 15. Gotchas and Tips
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/15-gotchas-and-tips.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 15. Gotchas and Tips
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/gotchas-and-tips.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

This chapter will discuss some of the often made beginner mistakes, corner cases as well as a few tricks to improve performance.


::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in 
the examples.

:::

---

## Prefixing `$` for variables

Some scripting languages like `bash` require a `$` prefix when you need the value stored in a variable. For example, if you declare `name='Joe'` you'd need `echo "$name"` to print the value. This may result in using `$` prefix and other bashisms in `awk` as well when you are a beginner. To make it a bit worse, `awk` has the `$N` syntax for accessing field contents, which could result in false comprehension that all variables need the `$` prefix to access their values. See also [unix.stackexchange: Why does awk print the whole line when I want it to print a variable?](https://unix.stackexchange.com/q/291126/109046).

::: tabs

@tab:active Case 1

silently fails, `$word` becomes `$0` because of string to numeric conversion

```sh
awk -v word="cake" '$2==$word' table.txt
# works when the variable is used correctly
awk -v word="cake" '$2==word' table.txt
# blue cake mug shirt -7
```

@tab Case 2

here 'field' gets replaced with '2' and hence `$2` is printed

```sh
awk -v field=2 '{print $field}' table.txt
# bread
# cake
# banana
```

:::

---

## DOS style line endings

As mentioned before, line endings differ from one platform to another. On Windows, it is typically a combination of carriage return and the newline character and referred as DOS style line endings. Since `GNU awk` allows multicharacter `RS`, it is easy to handle. See [stackoverflow: Why does my tool output overwrite itself and how do I fix it?](https://stackoverflow.com/q/45772525/4082052) for a detailed discussion and various mitigation methods.

::: tabs

@tab:active Case 1

no issue with Unix style line ending

```sh
printf 'mat dog\n123 789\n' | awk '{print $2, $1}'
# dog mat
# 789 123
```

@tab Case 2

DOS style line ending causes trouble

```sh
printf 'mat dog\r\n123 789\r\n' | awk '{print $2, $1}'
# mat
# 123
printf 'mat dog\r\n123 789\r\n' | awk '{sub(/$/, ".")} 1'
# .at dog
# .23 789
```

@tab Case 3

use `\r?\n` if you want to handle both Unix and DOS style with the same command and use `ORS=RT` to preserve the line ending style

```sh
printf 'mat dog\r\n123 789\r\n' | awk -v RS='\r\n' '{print $2, $1}'
# dog mat
# 789 123
printf 'mat dog\r\n123 789\r\n' | awk -v RS='\r\n' '{sub(/$/, ".")} 1'
# mat dog.
# 123 789.
```

:::

## Behavior of `^` and `$` when string contains newline

In some regular expression implementations, `^` matches the start of a line and `$` matches the end of a line (with newline as the line separator). In `awk`, these anchors always match the start of the entire string and end of the entire string respectively. This comes into play when `RS` is other than the newline character, or if you have a string value containing newline characters.

::: tabs

@tab:active Case 1

`'apple\n'` doesn't match as there's a newline character

```sh
printf 'apple\n,mustard,grape,\nmango' | awk -v RS=, '/e$/'
# grape
```

@tab Case 2

`'\nmango'` doesn't match as there's a newline character

```sh
printf 'apple\n,mustard,grape,\nmango' | awk -v RS=, '/^m/'
# mustard
```

:::

---

## Word boundary differences

The word boundary `\y` matches both the start and end of word locations. Whereas, `\<` and `\>` will match exactly the start and end of word locations respectively. This leads to cases where you have to choose which of these word boundaries to use depending on the results desired. Consider `I have 12, he has 2!` as a sample text, shown below as an image with vertical bars marking the word boundaries. The last character `!` doesn't have the end of word boundary marker as it is not a word character.

![word boundary](https://learnbyexample.github.io/learn_gnuawk/images/word_boundary.png)

::: tabs

@tab:active Case 1

`\y` matches both the start and end of word boundaries.

The first match here used starting boundary of '`I`' and '`have`'

```sh
echo 'I have 12, he has 2!' | awk '{gsub(/\y..\y/, "[&]")} 1'
# [I ]have [12][, ][he] has[ 2]!
```

@tab Case 2

`\<` and `\>` only matches the start and end word boundaries respectively

```sh
echo 'I have 12, he has 2!' | awk '{gsub(/\<..\>/, "[&]")} 1'
# I have [12], [he] has 2!
```

:::

Here's another example to show the difference between the two types of word boundaries.

::: tabs

@tab:active Case 1

add something to both the start/end of word

```sh
echo 'hi log_42 12b' | awk '{gsub(/\y/, ":")} 1'
# :hi: :log_42: :12b:
```

@tab Case 2

add something only at the start of word

```sh
echo 'hi log_42 12b' | awk '{gsub(/\</, ":")} 1'
# :hi :log_42 :12b
```

@tab Case 3

add something only at the end of word

```sh
echo 'hi log_42 12b' | awk '{gsub(/\>/, ":")} 1'
# hi: log_42: 12b:
```

:::

---

## Relying on the default initial value

Uninitialized variables are useful, but sometimes they don't translate well if you are converting a command from single file input to multiple files. You have to workout which ones would need a reset at the beginning of each file being processed.

::: tabs

@tab:active Case 1

step 1: works for single file

```sh
awk '{sum += $NF} END{print sum}' table.txt
# 38.14
```

@tab Case 2

step 2: prepare code to work for multiple file

```sh
awk '{sum += $NF} ENDFILE{print FILENAME ":" sum}' table.txt
# table.txt:38.14
```

@tab Case 3

step 3: check with multiple file input

> oops, default numerical value '0' for sum works only once

```sh
awk '{sum += $NF} ENDFILE{print FILENAME ":" sum}' table.txt marks.txt
# table.txt:38.14
# marks.txt:530.14
```

@tab Case 4

step 4: correctly initialize variables

```sh
awk '{sum += $NF} ENDFILE{print FILENAME ":" sum; sum=0}' table.txt marks.txt
# table.txt:38.14
# marks.txt:492
```

:::

---

## Code in the replacement section

The replacement section in the substitution functions can accept any expression, which are converted to string whenever necessary. What happens if the regexp doesn't match the input string but the expression can change the value of a variable, such as increment/decrement operators? Well, the expression is still executed, which may or may not be what you need.

::: tabs

@tab:active Case 1

no match for the second line, but '`c`' was still modified

```sh
awk '{sub(/^(br|ye)/, ++c ") &")} 1' table.txt
# 1) brown bread mat hair 42
# blue cake mug shirt -7
# 3) yellow banana window shoes 3.14
```

@tab Case 2

Check for a match before applying the substitution.
This may also help to simplify the regexp for substitution or, you could save the regexp in a variable to avoid duplication.

> can also use: `awk '/^(br|ye)/{$0 = ++c ") " $0} 1' table.txt`

```sh
awk '/^(br|ye)/{sub(/^/, ++c ") ")} 1' table.txt
# 1) brown bread mat hair 42
# blue cake mug shirt -7
# 2) yellow banana window shoes 3.14
```

:::

Another important point to note is that the expression is executed only once per function call, not for every match.


::: tabs

@tab:active Case 1

the first line has two matches but '`c`' is modified only once

```sh
awk '{gsub(/\<b/, ++c ") &")} 1' table.txt
# 1) brown 1) bread mat hair 42
# 2) blue cake mug shirt -7
# yellow 3) banana window shoes 3.14
```

:::

## Forcing numeric context

You can use the unary operator `+` to force numeric conversion. A variable might have numeric operations but still not get assigned a number if there's no input to read. So, when printing a variable that should be a number, use unary `+` to ensure it prints 0 instead of an empty string.

::: tabs

@tab:active Case 1

numbers present in the last column, so no issues

```sh
awk '{sum += $NF} END{print sum}' table.txt
# 38.14
```

@tab Case 2

strings in the first column, gets treated as 0

```sh
awk '{sum += $1} END{print sum}' table.txt
# 0
```

@tab Case 3

no input at all, an empty string is printed

```sh
awk '{sum += $1} END{print sum}' /dev/null
```

@tab Case 4

forced conversion to number, 0 is printed

```sh
awk '{sum += $1} END{print +sum}' /dev/null
# 0
```

:::

---

## Locale based numbers

The `-N` option (or `--use-lc-numeric`) is useful to work with floating-point numbers based on the current locale.


::: tabs

@tab:active Case 1

my locale uses `.` for the decimal point

```sh
echo '3.14' | awk '{$0++} 1'
# 4.14
```

@tab Case 2

```sh
echo '3,14' | awk '{$0++} 1'
# 4
echo '3,14' | LC_NUMERIC=de_DE awk -N '{$0++} 1'
# 4,14
```

---

## Forcing string context

Concatenate an empty string to force string comparison.

::: tabs

@tab:active Case 1

- parentheses around the first argument to print used for clarity
- fields get compared as numbers here

```sh
echo '5 5.0' | awk '{print ($1==$2 ? "same" : "different"), "number"}'
# same number
```

@tab Case 2

fields get compared as strings here

```sh
echo '5 5.0' | awk '{print ($1""==$2 ? "same" : "different"), "string"}'
# different string
```

:::

---

## Negative `NF`

Manipulating `NF` sometimes leads to a negative value. Fortunately, `awk` throws an error instead of failing silently.


```sh
cat varying.txt
# parrot
# good cool awesome
# blue sky
# 12 34 56 78 90
```

::: tabs

@tab:active Case 1

delete the last two fields

```sh
awk '{NF -= 2} 1' varying.txt
# awk: cmd. line:1: (FILENAME=varying.txt FNR=1) fatal: NF set to negative value
```

@tab Case 2

add a condition to check the number of fields
assumes that lines with less than 3 fields shouldn't be modified

```sh
awk 'NF>2{NF -= 2} 1' varying.txt
# parrot
# good
# blue sky
# 12 34 56
```

:::

Here's another example. Goal is to access the third field from the end.


::: tabs

@tab:active Case 1

```sh
awk '{print $(NF-2)}' varying.txt
# awk: cmd. line:1: (FILENAME=varying.txt FNR=1) fatal: attempt to access field -1
```

@tab Case 2

print only if there are minimum 3 fields

```sh
awk 'NF>2{print $(NF-2)}' varying.txt
# good
# 56
```

:::

---

## Faster execution

Changing the locale to ASCII (assuming that the default is not ASCII) can give a significant speed boost. Using `mawk` is another way to speed up the execution, provided you are not using GNU `awk` specific features. There are many feature differences, for example, `mawk` doesn't support the `{}` form of quantifiers (see [unix.stackexchange: How to specify regex quantifiers with `mawk`?](https://unix.stackexchange.com/q/506119/109046) for details). See also [wikipedia: `awk` Versions and implementations](https://en.wikipedia.org/wiki/AWK_programming_language#Versions_and_implementations).

::: tabs

@tab:active Case 1

time shown is the best result from multiple runs
speed benefit will vary depending on computing resources, input, etc
<FontIcon icon="iconfont icon-file"/> `words.txt` contains dictionary words, one word per line

```sh
time awk '/^([a-d][r-z]){3}$/' words.txt > f1
# real    0m0.029s

time LC_ALL=C awk '/^([a-d][r-z]){3}$/' words.txt > f2
# real    0m0.017s

time mawk '/^[a-d][r-z][a-d][r-z][a-d][r-z]$/' words.txt > f3
# real    0m0.009s
```

@tab Case 2

check that the results are the same

```sh
diff -s f1 f2
# Files f1 and f2 are identical
diff -s f2 f3
# Files f2 and f3 are identical
# clean up temporary files
rm f[123]
```

:::

Here's another example.


::: tabs

@tab:active Case 1

count words containing exactly 3 lowercase '`a`' characters

```sh
time awk -F'a' 'NF==4{cnt++} END{print +cnt}' words.txt
# 1019
# real    0m0.032s
time LC_ALL=C awk -F'a' 'NF==4{cnt++} END{print +cnt}' words.txt
# 1019
# real    0m0.021s
time mawk -F'a' 'NF==4{cnt++} END{print +cnt}' words.txt
# 1019
# real    0m0.014s
```

:::

::: info 

See also [<FontIcon icon="iconfont icon-github"/> ezrosent/frawk](https://github.com/ezrosent/frawk), an efficient awk-like language implemented in Rust. And [<FontIcon icon="iconfont icon-github"/> koraa/huniq](https://github.com/koraa/huniq), a faster alternative for removing line based duplicates.

:::

---

<TagLinks/>