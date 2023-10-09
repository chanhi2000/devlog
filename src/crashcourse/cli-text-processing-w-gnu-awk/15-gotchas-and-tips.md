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

<TagLinks/>