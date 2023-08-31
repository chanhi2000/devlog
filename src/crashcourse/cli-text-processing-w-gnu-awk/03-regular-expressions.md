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

## String Anchors

In the examples seen so far, the regexp was a simple string value without any special characters. Also, the regexp pattern evaluated to `true` if it was found anywhere in the string. Instead of matching anywhere in the string, restrictions can be specified. These restrictions are made possible by assigning special meaning to certain characters and escape sequences. The characters with special meaning are known as __metacharacters__ in regular expressions parlance. In case you need to match those characters literally, you need to escape them with a `\` character (discussed in the [Matching the metacharacters](#matching-the-metacharacters) section).

There are two string anchors:

- `^` metacharacter restricts the matching to the start of the string
- `$` metacharacter restricts the matching to the end of the string

By default, `awk` processes input line by line, using a newline character as the separator. This separator won't be part of the contents in `$0` but you get back the newline when printing because the default output record separator is also a newline character. Thus, these string anchors can be considered as _line_ anchors when you are processing input content line by line.

```sh
cat anchors.txt
# sub par
# spar
# apparent effort
# two spare computers
# cart part tart mart
```

::: tabs

@tab:active lines starting with 'sp'

```sh 
awk '/^sp/' anchors.txt
# spar
```

@tab lines ending with 'ar'

```sh
awk '/ar$/' anchors.txt
# sub par
# spar
```

:::

By combining these two anchors, you can restrict the matching to only whole lines. Here's an example:

```sh
# change only whole line 'spar'
# can also use: awk '/^spar$/{$0 = 123} 1'
# can also use: awk '$0=="spar"{$0 = 123} 1'
printf 'spared no one\npar\nspar\n' | awk '{sub(/^spar$/, "123")} 1'
# spared no one
# par
# 123
```

The anchors can be used by themselves as a pattern too. Helps to insert text at the start/end of a string, emulating string concatenation operations. These might not feel like useful capability, but combined with other features they become quite a handy tool.

::: tabs

@tab:active add '* ' at the start of every input line 

```sh
printf 'spared no one\ngrasped\nspar\n' | awk '{gsub(/^/, "* ")} 1'
# * spared no one
# * grasped
# * spar
```

@tab append '.' only if a line doesn't contain space characters

```sh
printf 'spared no one\ngrasped\nspar\n' | awk '!/ /{gsub(/$/, ".")} 1'
# spared no one
# grasped.
# spar.
```

:::

::: info 

See also the [Behavior of ^ and $ when string contains newline](#behavior-of--and--when-string-contains-newline) section.

:::

---

## Word Anchors

The second type of restriction is word anchors. A word character is any alphabet (irrespective of case), digit and the underscore character. You might wonder why there are digits and underscores as well, why not only alphabets? This comes from variable and function naming conventions — typically alphabets, digits and underscores are allowed. So, the definition is more programming oriented than natural language.

Use `\<` to indicate the start of word anchor and` \>` to indicate the end of word anchor. As an alternate, you can use `\y` to indicate both the start and end of word anchors.

```sh
cat anchors.txt
# sub par
# spar
# apparent effort
# two spare computers
# cart part tart mart
```

::: tabs

@tab:active words starting with 'par'

```sh
awk '/\<par/' anchors.txt
# sub par
# cart part tart mart
```

@tab words ending with 'par'

```sh
awk '/par\>/' anchors.txt
# sub par
# spar
```

@tab replace only whole word 'par'

```sh
# note that only lines where the substitution succeeded will be printed
# as the return value of sub/gsub is number of substitutions made
awk 'gsub(/\<par\>/, "***")' anchors.txt
# sub ***
```

:::

::: info 

Typically `\b` is used to represent the word anchor (for example, in `grep`, `sed`, `perl`, etc), but in `awk` the escape sequence `\b` refers to the backspace character. See also the [Word boundary differences](#word-boundary-differences) section.

:::

---

## Opposite Word Anchor

The `\y` escape sequence has an opposite anchor too. `\B` matches wherever `\y` doesn't match. This duality will be seen later with some other escape sequences too.

::: tabs

@tab:active match 'par' if it is surrounded by word characters

```sh
awk '/\Bpar\B/' anchors.txt
# apparent effort
# two spare computers
```

@tab match 'par' but not at the start of a word

```sh
awk '/\Bpar/' anchors.txt
# spar
# apparent effort
# two spare computers
```

@tab match 'par' but not at the end of a word

```sh
awk '/par\B/' anchors.txt
# apparent effort
# two spare computers
# cart part tart mart
```

:::

Here are some examples for using word boundaries by themselves as a pattern:

```sh
echo 'copper' | awk '{gsub(/\y/, ":")} 1'
# :copper:

echo 'copper' | awk '{gsub(/\B/, ":")} 1'
# c:o:p:p:e:r
```
::: warning 

Negative logic is handy in many text processing situations. But use it with care, you might end up matching things you didn't intend.

:::

---

## Combining conditions

Before seeing the next regexp feature, it is good to note that sometimes using logical operators is easier to read and maintain compared to doing everything with regexp.

::: tabs

@tab:active lines starting with 'b' and not containing 'at'

```sh
awk '/^b/ && !/at/' table.txt
# blue cake mug shirt -7
```

@tab first field contains 'low' or, the last field value is less than 0

```sh
awk '$1 ~ /low/ || $NF<0' table.txt
# blue cake mug shirt -7
# yellow banana window shoes 3.14
```

:::

---

## Alternation

Many a times, you'd want to search for multiple terms. In a conditional expression, you can use the logical operators to combine multiple conditions (see the previous section for examples). With regular expressions, the `|` metacharacter is similar to logical OR. The regular expression will match if any of the patterns separated by `|` is satisfied.

Alternation is similar to using the `||` operator between two regexps. Having a single regexp helps to write terser code and `||` cannot be used when substitution is required.

::: tabs

@tab:active match whole word 'par' or string ending with 's'

> same as: `awk '/\<par\>/ || /s$/'`

```sh
awk '/\<par\>|s$/' anchors.txt
# sub par
# two spare computers
```

@tab replace 'cat' or 'dog' or 'fox' with '--'

> note the use of gsub for multiple replacements

```sh
$ echo 'cats dog bee parrot foxed' | awk '{gsub(/cat|dog|fox/, "--")} 1'
# --s -- bee parrot --ed
```

:::

---

<TagLinks/>