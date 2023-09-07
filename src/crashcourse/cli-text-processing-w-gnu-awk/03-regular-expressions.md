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
echo 'cats dog bee parrot foxed' | awk '{gsub(/cat|dog|fox/, "--")} 1'
# --s -- bee parrot --ed
```

:::

---

## Alternation precedence

There are some tricky corner cases when using alternation. If it is used for filtering a line, there is no ambiguity. However, for use cases like substitution, it depends on a few factors. Say, you want to replace `are` or `spared` — which one should get precedence? The bigger word `spared` or the substring `are` inside it or based on something else?

The alternative which matches earliest in the input gets precedence.

```sh
# here, the output will be the same irrespective of alternation order
# note that 'sub' is used here, so only the first match gets replaced
echo 'cats dog bee parrot foxed' | awk '{sub(/bee|parrot|at/, "--")} 1'
# c--s dog bee parrot foxed
echo 'cats dog bee parrot foxed' | awk '{sub(/parrot|at|bee/, "--")} 1'
# c--s dog bee parrot foxed
```

In case of matches starting from the same location, for example `spar` and `spared`, the longest matching portion gets precedence. Unlike other regular expression implementations, left-to-right priority for alternation comes into play only if the length of the matches are the same. See [Longest match wins](#longest-match-wins) and [Backreferences](#backreferences) sections for more examples. See [regular-expressions: alternation](https://www.regular-expressions.info/alternation.html) for more information on this topic.

```sh
echo 'spared party parent' | awk '{sub(/spa|spared/, "**")} 1'
# ** party parent
echo 'spared party parent' | awk '{sub(/spared|spa/, "**")} 1'
# ** party parent

# other regexp flavors like Perl have left-to-right priority
echo 'spared party parent' | perl -pe 's/spa|spared/**/'
# **red party parent
```

---

## Grouping

Often, there are some common things among the regular expression alternatives. It could be common characters or qualifiers like the anchors. In such cases, you can group them using a pair of parentheses metacharacters. Similar to `a(b+c)d = abd+acd` in maths, you get `a(b|c)d = abd|acd` in regular expressions.

::: tabs

@tab:active without grouping

```sh  
printf 'red\nreform\nread\narrest\n' | awk '/reform|rest/'
# reform
# arrest
```

@tab with grouping

```sh
printf 'red\nreform\nread\narrest\n' | awk '/re(form|st)/'
# reform
# arrest
```

:::

::: tabs

@tab:active without grouping

```sh
awk '/\<par\>|\<part\>/' anchors.txt
# sub par
# cart part tart mart
```

@tab taking out common anchors

```sh
awk '/\<(par|part)\>/' anchors.txt
# sub par
# cart part tart mart
```

@tab taking out common characters as well

> you'll later learn a better technique instead of using empty alternate

```sh
awk '/\<par(|t)\>/' anchors.txt
# sub par
# cart part tart mart
```

:::

---

## Matching the metacharacters

You have already seen a few metacharacters and escape sequences that help compose a regular expression. To match the metacharacters literally, i.e. to remove their special meaning, prefix those characters with a `\` character. To indicate a literal `\` character, use `\\`.

Unlike `grep` and `sed`, the string anchors have to be always escaped to match them literally as there is no BRE mode in `awk`. They do not lose their special meaning even when not used in their customary positions.

```sh
# awk '/b^2/' will not work even though ^ isn't being used as anchor
# b^2 will work for both grep and sed if you use BRE syntax
printf 'a^2 + b^2 - C*3\nd = c^2' | awk '/b\^2/'
# a^2 + b^2 - C*3

# note that ')' doesn't need to be escaped
echo '(a*b) + c' | awk '{gsub(/\(|)/, "")} 1'
# a*b + c

echo '\learn\by\example' | awk '{gsub(/\\/, "/")} 1'
# /learn/by/example
```

::: info 

Handling the replacement section metacharacters will be discussed in the [Backreferences](#backreferences) section.

:::

---

## Using string literal as a regexp

The first argument to the `sub` and `gsub` functions can be a string as well, which will then be converted to a regexp. This is handy in a few cases. For example, if you have many `/` characters in the search pattern, it might become easier to use a string literal instead of a regexp.

```sh
p='/home/learnbyexample/reports'
echo "$p" | awk '{sub(/\/home\/learnbyexample\//, "~/")} 1'
# ~/reports
echo "$p" | awk '{sub("/home/learnbyexample/", "~/")} 1'
# ~/reports

# filtering example
printf '/home/joe/1\n/home/john/1\n' | awk '/\/home\/joe\//'
# /home/joe/1
printf '/home/joe/1\n/home/john/1\n' | awk '$0 ~ "/home/joe/"'
# /home/joe/1
```

In the above examples, the string literal was supplied directly. But any other expression or variable can be used as well, examples for which will be shown later in this chapter. The reason why string isn't always used to represent regexp is that the special meaning for the `\` character will clash. For example:

```sh
awk 'gsub("\<par\>", "X")' anchors.txt
# awk: cmd. line:1: warning: escape sequence `\<' treated as plain `<'
# awk: cmd. line:1: warning: escape sequence `\>' treated as plain `>'

# you'll need \\ to represent a single \
awk 'gsub("\\<par\\>", "X")' anchors.txt
# sub X
# regexp literal is better suited in these cases
awk 'gsub(/\<par\>/, "X")' anchors.txt
# sub X

# another example
echo '\learn\by\example' | awk '{gsub("\\\\", "/")} 1'
# /learn/by/example
echo '\learn\by\example' | awk '{gsub(/\\/, "/")} 1'
# /learn/by/example
```

::: info 

See [gawk manual: Gory details](https://www.gnu.org/software/gawk/manual/gawk.html#Gory-Details) for more information than you'd want to know.

:::

---

## The dot meta character

The dot metacharacter serves as a placeholder to match any character (including the newline character). Later you'll learn how to define your own custom placeholder for a limited set of characters.

```sh
# 3 character sequence starting with 'c' and ending with 't'
echo 'tac tin cot abc:tyz excited' | awk '{gsub(/c.t/, "-")} 1'
# ta-in - ab-yz ex-ed

# any character followed by 3 and again any character
printf '42\t3500\n' | awk '{gsub(/.3./, ":")} 1'
# 42:00

# example to show that . matches \n as well
# 'c' followed by any character followed by 'x'
awk 'BEGIN{s="abc\nxyz"; sub(/c.x/, " ", s); print s}'
# ab yz
```

---

## Quantifiers

Alternation helps you match one among multiple patterns. Combining the dot metacharacter with quantifiers (and alternation if needed) paves a way to perform logical AND between patterns. For example, to check if a string matches two patterns with any number of characters in between. Quantifiers can be applied to characters, groupings and some more constructs that'll be discussed later. Apart from the ability to specify exact quantity and bounded range, these can also match unbounded varying quantities.

First up, the `?` metacharacter which quantifies a character or group to match `0` or `1` times. This helps to define optional patterns and build terser patterns.

::: tabs

@tab:active Case 1

> same as: `awk '{gsub(/\<(fe.d|fed)\>/, "X")} 1'`

```sh
echo 'fed fold fe:d feeder' | awk '{gsub(/\<fe.?d\>/, "X")} 1'
# X fold X feeder
```

@tab Case 2

> same as: `awk '/\<par(|t)\>/'`

```sh
awk '/\<part?\>/' anchors.txt
# sub par
# cart part tart mart
```

@tab Case 3

> same as: `awk '{gsub(/part|parrot/, "X")} 1'`

```sh
echo 'par part parrot parent' | awk '{gsub(/par(ro)?t/, "X")} 1'
# par X X parent
```

@tab Case 4

> same as: `awk '{gsub(/part|parrot|parent/, "X")} 1'`
```sh
echo 'par part parrot parent' | awk '{gsub(/par(en|ro)?t/, "X")} 1'
# par X X X
```

@tab Case 5

>  matches '`<`' or '`\<`' and they are both replaced with '`\<`'

```sh
echo 'apple \< fig ice < apple cream <' | awk '{gsub(/\\?</, "\\<")} 1'
# apple \< fig ice \< apple cream \<
```

::: 

The `*` metacharacter quantifies a character or group to match `0` or more times.

::: tabs 

@tab:active Case 1

> 'f' followed by zero or more of 'e' followed by 'd'

```sh
echo 'fd fed fod fe:d feeeeder' | awk '{gsub(/fe*d/, "X")} 1'
# X X fod fe:d Xer
```

@tab Case 2 

> zero or more of '1' followed by '2'

```sh
echo '3111111111125111142' | awk '{gsub(/1*2/, "-")} 1'
## 3-511114-
```

:::

The `+` metacharacter quantifies a character or group to match `1` or more times.

::: tabs

@tab:active Case 1

> 'f' followed by one or more of 'e' followed by 'd'

```sh
echo 'fd fed fod fe:d feeeeder' | awk '{gsub(/fe+d/, "X")} 1'
# fd X fod fe:d Xer
```

@tab Case 2

> one or more of '1' followed by optional '4' and then '2'

```sh
echo '3111111111125111142' | awk '{gsub(/1+4?2/, "-")} 1'
# 3-5-
```

:::

You can specify a range of integer numbers, both bounded and unbounded, using `{}` metacharacters. There are four ways to use this quantifier as listed below:

| Quantifeir | Description |
| :--- | :--- |
| `{m,n}` | match `m` to `n` times |
| `{m,}` | match at least `m` times |
| `{,n}` | match up to `n` times (including `0` times) |
| `{n}` | match exactly `n` times |

> note that stray characters like space are not allowed anywhere within `{}`

```sh
echo 'ac abc abbc abbbc abbbbbbbbc' | awk '{gsub(/ab{1,4}c/, "X")} 1'
# ac X X X abbbbbbbbc

echo 'ac abc abbc abbbc abbbbbbbbc' | awk '{gsub(/ab{3,}c/, "X")} 1'
# ac abc abbc X X

echo 'ac abc abbc abbbc abbbbbbbbc' | awk '{gsub(/ab{,2}c/, "X")} 1'
# X X X abbbc abbbbbbbbc

echo 'ac abc abbc abbbc abbbbbbbbc' | awk '{gsub(/ab{3}c/, "X")} 1'
# ac abc abbc X abbbbbbbbc
```

::: info 

The `{}` metacharacters have to be escaped to match them literally. Similar to the `()` metacharacters, escaping `{` alone is enough. If it doesn't conform strictly to any of the four forms listed above, escaping is not needed at all.

```sh
echo 'a{5} = 10' | awk '{sub(/a\{5}/, "x")} 1'
# x = 10
echo 'report_{a,b}.txt' | awk '{sub(/_{a,b}/, "_c")} 1'
# report_c.txt
```

:::

---

## Conditional AND

Next up, how to construct conditional AND using dot metacharacter and quantifiers.

> match 'Error' followed by zero or more characters followed by 'valid'

```sh
echo 'Error: not a valid input' | awk '/Error.*valid/'
# Error: not a valid input
```

To allow matching in any order, you'll have to bring in alternation as well.

> 'cat' followed by 'dog' or 'dog' followed by 'cat'

```sh
echo 'two cats and a dog' | awk '{gsub(/cat.*dog|dog.*cat/, "pets")} 1'
# two pets
echo 'two dogs and a cat' | awk '{gsub(/cat.*dog|dog.*cat/, "pets")} 1'
# two pets
```

---

## Longest match wins

You've already seen an example where the longest matching portion was chosen if the alternatives started from the same location. For example `spar|spared` will result in `spared` being chosen over `spar`. The same applies whenever there are two or more matching possibilities from the same starting location. For example, `f.?o` will match `foo` instead of `fo` if the input string to match is `foot`.

::: tabs

@tab:active Case 1

longest match among 'foo' and 'fo' wins here

```sh 
echo 'foot' | awk '{sub(/f.?o/, "X")} 1'
# Xt
```

@tab Case 2

everything will match here

```sh
echo 'car bat cod map scat dot abacus' | awk '{sub(/.*/, "X")} 1'
# X
```

@tab Case 3

longest match happens when `(1|2|3)+` matches up to '`1233`' only so that '12apple' can match as well

```sh
echo 'fig123312apple' | awk '{sub(/g(1|2|3)+(12apple)?/, "X")} 1'
# fiX
```

@tab Case 4

in other implementations like Perl, that is not the case precedence is left-to-right for greedy quantifiers

```sh
echo 'fig123312apple' | perl -pe 's/g(1|2|3)+(12apple)?/X/'
# fiXapple
```

While determining the longest match, the overall regular expression matching is also considered. That's how the `Error.*valid` example worked. If `.*` had consumed everything after `Error`, there wouldn't be any more characters to try to match `valid`. So, among the varying quantity of characters to match for `.*`, the longest portion that satisfies the overall regular expression is chosen. Something like `a.*b` will match from the first `a` in the input string to the last `b`. In other implementations, like Perl, this is achieved through a process called __backtracking__. These approaches have their own advantages and disadvantages and have cases where the pattern can result in exponential time consumption.

::: tabs

@tab:active Case 1

> from the start of line to the last 'b' in the line

```sh 
echo 'car bat cod map scat dot abacus' | awk '{sub(/.*b/, "-")} 1'
# -acus
```

@tab Case 2

from the first 'b' to the last 't' in the line

```sh
echo 'car bat cod map scat dot abacus' | awk '{sub(/b.*t/, "-")} 1'
# car - abacus
```

@tab Case 3

from the first 'b' to the last 'at' in the line

```sh
echo 'car bat cod map scat dot abacus' | awk '{sub(/b.*at/, "-")} 1'
# car - dot abacus
```

@tab Case 4

here 'm*' will match 'm' zero times as that gives the longest match

```sh
echo 'car bat cod map scat dot abacus' | awk '{sub(/a.*m*/, "-")} 1'
# c-
```

:::

---

## Character classes

To create a custom placeholder for limited set of characters, enclose them inside `[]` metacharacters. It is similar to using single character alternations inside a grouping, but with added flexibility and features. Character classes have their own versions of metacharacters and provide special predefined sets for common use cases. Quantifiers are also applicable to character classes.

::: tabs

@tab:active Case 1 

> same as: `awk '/cot|cut/' and awk '/c(o|u)t/'`

```sh
printf 'cute\ncat\ncot\ncoat\ncost\nscuttle\n' | awk '/c[ou]t/'
# cute
# cot
# scuttle
```

@tab Case 2


> same as: `awk '/.(a|e|o)t/'`

```sh
printf 'meeting\ncute\nboat\nat\nfoot\n' | awk '/.[aeo]t/'
# meeting
# boat
# foot
```

@tab Case 3

> same as: `awk '{gsub(/\<(s|o|t)(o|n)\>/, "X")} 1'`

```sh
echo 'no so in to do on' | awk '{gsub(/\<[sot][on]\>/, "X")} 1'
# no X in X do X
```

@tab Case 4

lines made up of letters 'o' and 'n', line length at least 2 `words.txt` contains dictionary words, one word per line

```sh
awk '/^[on]{2,}$/' words.txt
# no
# non
# noon
# on
```

:::

---

## Character class metacharacters

Character classes have their own metacharacters to help define the sets succinctly. Metacharacters outside of character classes like `^`, `$`, `()` etc either don't have special meaning or have a completely different one inside the character classes.

First up, the `-` metacharacter that helps to define a range of characters instead of having to specify them all individually.

::: tabs

@tab:active Case 1

> same as: `awk '{gsub(/[0123456789]+/, "-")} 1'`

```sh
echo 'Sample123string42with777numbers' | awk '{gsub(/[0-9]+/, "-")} 1'
# Sample-string-with-numbers
```

@tab Case 2

> whole words made up of lowercase alphabets and digits only

```sh
echo 'coat Bin food tar12 best' | awk '{gsub(/\<[a-z0-9]+\>/, "X")} 1'
# X Bin X X X
```

@tab Case 3

> whole words made up of lowercase alphabets, starting with 'p' to 'z'

```sh
echo 'road i post grip read eat pit' | awk '{gsub(/\<[p-z][a-z]*\>/, "X")} 1'
# X i X grip X eat X
```

:::

Character classes can also be used to construct numeric ranges. However, it is easy to miss corner cases and some ranges are complicated to design.

::: tabs

@tab:active Case 1

> numbers between 10 to 29

```sh
echo '23 154 12 26 34' | awk '{gsub(/\<[12][0-9]\>/, "X")} 1'
# X 154 X X 34
```

@tab Case 2

> numbers >= 100 with optional leading zeros

```sh
echo '0501 035 154 12 26 98234' | awk '{gsub(/\<0*[1-9][0-9]{2,}\>/, "X")} 1'
# X 035 X 12 26 X
```

:::

Next metacharacter is `^` which has to be specified as the first character of the character class. It negates the set of characters, so all characters other than those specified will be matched. As highlighted earlier, handle negative logic with care, you might end up matching more than you wanted.

::: tabs

@tab:active Case 1

replace all non-digit characters

```sh
echo 'Sample123string42with777numbers' | awk '{gsub(/[^0-9]+/, "-")} 1'
# -123-42-777-
```

@tab Case 2

delete last two columns

```sh
echo 'apple:123:banana:cherry' | awk '{sub(/(:[^:]+){2}$/, "")} 1'
# apple:123
```

@tab Case 3

sequence of characters surrounded by a unique character

```sh
echo 'I like "mango" and "guava"' | awk '{gsub(/"[^"]+"/, "X")} 1'
# I like X and X
```

@tab Case 4

sometimes it is simpler to positively define a set than negation

> same as: `awk '/^[^aeiou]*$/'`

```sh
printf 'tryst\nfun\nglyph\npity\nwhy\n' | awk '!/[aeiou]/'
# tryst
# glyph
# why
```

:::

Some commonly used character sets have predefined escape sequences:

- `\w` matches all __word__ characters `[a-zA-Z0-9_]` (recall the description for word boundaries)
- `\W` matches all non-word characters (recall duality seen earlier, like `\y` and `\B`)
- `\s` matches all __whitespace__ characters: tab, newline, vertical tab, form feed, carriage return and space
- `\S` matches all non-whitespace characters

These escape sequences cannot be used inside character classes. Also, as mentioned earlier, these definitions assume ASCII input.

::: tabs

@tab:active Case 1

match all non-word characters

```sh
echo 'load;err_msg--\/ant,r2..not' | awk '{gsub(/\W+/, "|")} 1'
# load|err_msg|ant|r2|not
```

@tab Case 2

replace all sequences of whitespaces with a single space

```sh
printf 'hi  \v\f  there.\thave   \ra nice\t\tday\n' | awk '{gsub(/\s+/, " ")} 1'
# hi there. have a nice day
```

@tab Case 3

`\w` would simply match `w` inside character classes

```sh
echo 'w=y\x+9*3' | awk '{gsub(/[\w=]/, "")} 1'
# y\x+9*3
```

:::

::: warning 

`awk` doesn't support `\d` and `\D`, commonly featured in other implementations as a shortcut for all the digits and non-digits.

::: tabs

@tab:active Case 1

`\d` will match just the 'd' character and produces a warning as well

```sh
echo '42\d123' | awk '{gsub(/\d+/, "-")} 1'
# awk: cmd. line:1: warning: regexp escape sequence
#                   '\d' is not a known regexp operator
# 42\-123
```

@tab Case 2

`\d` here matches all digit characters

```sh
echo '42\d123' | perl -pe 's/\d+/-/g'
# -\d-
```

:::

---

<TagLinks/>