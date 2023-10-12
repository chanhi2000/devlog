---
lang: ko-KR
title: 3. Regular Expressions
description: 🐚Text Processing with GNU awk > 3. Regular Expressions
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk", "regex"]
meta:
  - name: 🐚Text Processing with GNU awk > 3. Regular Expressions
    content: 3. Regular Expressions
  - property: og:title
    content: 3. Regular Expressions
  - property: og:description
    content: 🐚Text Processing with GNU awk > 3. Regular Expressions
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

:::

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

lines made up of letters 'o' and 'n', line length at least 2 <FontIcon icon="iconfont icon-file"/>`words.txt` contains dictionary words, one word per line

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

## Named character sets

A named character set is defined by a name enclosed between `[:` and `:]` and has to be used within a `character class` `[]`, along with other characters as needed.

| Named set |	Description |
| :---: | :--- |
| `[:digit:]` |	`[0-9]` |
| `[:lower:]` |	`[a-z]` |
| `[:upper:]` |	`[A-Z]` |
| `[:alpha:]` |	`[a-zA-Z]` |
| `[:alnum:]` |	`[0-9a-zA-Z]` |
| `[:xdigit:]` |	`[0-9a-fA-F]` |
| `[:cntrl:]` |	control characters — first 32 ASCII characters and 127th (DEL) |
| `[:punct:]` |	all the punctuation characters |
| `[:graph:]` |	`[:alnum:]` and` [:punct:]` |
| `[:print:]` |	`[:alnum:]`, `[:punct:]` and space |
| `[:blank:]` |	space and tab characters |
| `[:space:]` |	whitespace characters, same as `\s` |

Here are some examples:

```sh
s='err_msg xerox ant m_2 P2 load1 eel'
```
::: tabs

@tab:active Case 1

```sh
echo "$s" | awk '{gsub(/\<[[:lower:]]+\>/, "X")} 1'
# err_msg X X m_2 P2 load1 X
```

@tab Case 2

```sh
echo "$s" | awk '{gsub(/\<[[:lower:]_]+\>/, "X")} 1'
# X X X m_2 P2 load1 X
```

@tab Case 3

```sh
echo "$s" | awk '{gsub(/\<[[:alnum:]]+\>/, "X")} 1'
# err_msg X X m_2 X X X
```

@tab Case 4

retain only punctuation characters

```sh
echo ',pie tie#ink-eat_42' | awk '{gsub(/[^[:punct:]]+/, "")} 1'
# ,#-_
```

:::

---

## Matching `character class` metacharacters literally

Specific placement is needed to match `character class` metacharacters literally. Or, they can be escaped by prefixing `\` to avoid having to remember the different rules. As `\` is special inside character class, use `\\` to represent it literally.

`-` should be the first or the last character.

::: tabs

@tab:active Case 1

```sh
echo 'ab-cd gh-c 12-423' | awk '{gsub(/[a-z-]{2,}/, "X")} 1'
# X X 12-423
```

@tab Case 2

```sh
# or escaped with \
echo 'ab-cd gh-c 12-423' | awk '{gsub(/[a-z\-0-9]{2,}/, "X")} 1'
# X X X
```

:::

`]` should be the first character.

::: tabs 

@tab:active Case 1

no match

```sh
printf 'int a[5]\nfig\n1+1=2\n' | awk '/[=]]/'
```

@tab Case 2

correct usage

```sh
printf 'int a[5]\nfig\n1+1=2\n' | awk '/[]=]/'
# int a[5]
# 1+1=2
```

:::

`[` can be used anywhere in the character set. Using `[][]` will match both `[` and `]`.

::: tabs

@tab:active Case 1

```sh
echo 'int a[5].y' | awk '{gsub(/[x[y.]/, "")} 1'
# int a5]
```

@tab Csee 2

```sh
printf 'int a[5]\nfig\n1+1=2\nwho]' | awk '/[][]/'
# int a[5]
# who]
```

:::

`^` should be other than the first character.

```sh
echo 'f*(a^b) - 3*(a+b)/(a-b)' | awk '{gsub(/a[+^]b/, "c")} 1'
# f*(c) - 3*(c)/(a-b)
```


::: warning 

Combinations like `[.` or `[:` cannot be used together to mean two individual characters, as they have special meaning within `[]`. See [gawk manual: Using Bracket Expressions](https://www.gnu.org/software/gawk/manual/gawk.html#Bracket-Expressions) for more details.

```sh
echo 'int a[5]' | awk '/[x[.y]/'
# awk: cmd. line:1: error: Unmatched [, [^, [:, [., or [=: /[x[.y]/
 echo 'int a[5]' | awk '/[x[y.]/'
# int a[5]
```

:::

---

## Escape sequences

Certain ASCII characters like tab `\t`, carriage return `\r`, newline `\n`, etc have escape sequences to represent them. Additionally, any character can be represented using their ASCII value in octal `\NNN` or hexadecimal `\xNN` formats. Unlike character set escape sequences like `\w`, these can be used inside character classes.

::: tabs

@tab:active Case 1

`\t` represents the tab character

```sh
printf 'apple\tbanana\tcherry\n' | awk '{gsub(/\t/, " ")} 1'
# apple banana cherry
```

@tab Case 2

these escape sequences work inside character class too

```sh
printf 'a\t\r\fb\vc\n' | awk '{gsub(/[\t\v\f\r]+/, ":")} 1'
# a:b:c
```

@tab Case 3

representing single quotes

> use `\047` for octal format

```sh 
echo "universe: '42'" | awk '{gsub(/\x27/, "")} 1'
# universe: 42
```

:::

If a metacharacter is specified using the ASCII value format, it will still act as the metacharacter.

::: tabs

@tab:active Case 1

`\x5e` is `^` character, acts as line anchor here

```sh
printf 'acorn\ncot\ncat\ncoat\n' | awk '/\x5eco/'
# cot
# coat
```

@tab Case 2

`&` metacharacter in replacement will be discussed in a later section

it represents the entire matched portion

```sh
echo 'hello world' | awk '{sub(/.*/, "[&]")} 1'
# [hello world]
```

@tab Case 3

`\x26` in hexadecimal is the `&` character

```sh
echo 'hello world' | awk '{sub(/.*/, "[\x26]")} 1'
# [hello world]
```

:::

Undefined sequences will result in a warning and treated as the character it escapes.

```sh
echo 'read' | awk '{sub(/\d/, "l")} 1'
# awk: cmd. line:1: warning: regexp escape sequence
#                   '\d' is not a known regexp operator
# real
```

::: info 

See [gawk manual: Escape Sequences](https://www.gnu.org/software/gawk/manual/gawk.html#Escape-Sequences) for full list and other details.

:::

---

## Replace specific occurrence

The third substitution function is gensub which can be used instead of both the `sub` and `gsub` functions. Syntax wise, `gensub` needs minimum three arguments. The third argument is used to indicate whether you want to replace all occurrences with `"g"` or a specific occurrence by passing a number. Another difference is that `gensub` returns a string value (irrespective of the substitution operation succeeding) instead of modifying the input.

```sh
s='apple:banana:cherry:fig:mango'
```

::: tabs

@tab:active Case 1

> same as: `sed 's/:/-/2'`
- replace only the second occurrence of '`:`' with '`-`'
- note that the output of gensub is passed to print here

```sh
echo "$s" | awk '{print gensub(/:/, "-", 2)}'
# apple:banana-cherry:fig:mango
```

@tab Case 2

> same as: `sed -E 's/[^:]+/X/3'`
- replace only the third field with '123'

```sh
echo "$s" | awk '{print gensub(/[^:]+/, "123", 3)}'
# apple:banana:123:fig:mango
```

:::

The fourth argument for the `gensub` function allows you to specify a string or a variable on which the substitution has to be performed. Default is `$0`, as seen in the previous examples.

> same as: `awk '{gsub(/[aeiou]/, "X", $4)} 1'`

```sh
echo '1 good 2 apples' | awk '{$4 = gensub(/[aeiou]/, "X", "g", $4)} 1'
# 1 good 2 XpplXs
```

---

## Backreferences

The grouping metacharacters `()` are also known as capture groups. Similar to variables in programming languages, the portion captured by `()` can be referred later using backreferences. The syntax is `\N` where `N` is the capture group you want. Leftmost `(` in the regular expression is `\1`, next one is `\2` and so on up to `\9`. The `&` metacharacter represents entire matched string. As `\` is already special inside double quotes, you'll have to use `"\\1"` to represent `\1`.

::: info 

Backreferences of the form `\N` can only be used with the `gensub` function. `&` can be used with `sub`, `gsub` and `gensub` functions. `\0` can also be used instead of `&` with the `gensub` function.

:::

```sh
```

::: tabs

@tab:active Case 1

reduce `\\` to single `\` and delete if it is a single `\`

```sh
s='\[\] and \\w and \[a-zA-Z0-9\_\]'
echo "$s" | awk '{print gensub(/(\\?)\\/, "\\1", "g")}'
# [] and \w and [a-zA-Z0-9_]
```

@tab Case 2

duplicate the first column value and add it as the final column

```sh
echo 'one,2,3.14,42' | awk '{print gensub(/^([^,]+).*/, "&,\\1", 1)}'
# one,2,3.14,42,one
```

@tab Case 3

add something at the start and end of string, gensub isn't needed here

```sh
echo 'hello world' | awk '{sub(/.*/, "Hi. &. Have a nice day")} 1'
# Hi. hello world. Have a nice day
```

@tab Case 4

here `{N}` refers to the last but Nth occurrence

```sh
s='car,art,pot,tap,urn,ray,ear'
echo "$s" | awk '{print gensub(/(.*),((.*,){2})/, "\\1[]\\2", 1)}'
# car,art,pot,tap[]urn,ray,ear
```

:::

::: warning 

See [unix.stackexchange: Why doesn't this sed command replace the 3rd-to-last "and"?](https://unix.stackexchange.com/q/579889/109046) for a bug related to the use of word anchors in the `((pat){N})` generic case.

:::

::: warning 

Unlike other regular expression implementations, like `grep` or `sed` or `perl`, backreferences cannot be used in the search section in `awk`. See also [unix.stackexchange: backreference in awk](https://unix.stackexchange.com/q/361427/109046).

```sh
s='effort flee facade oddball rat tool'

# no change
echo "$s" | awk '{gsub(/\w*(\w)\1\w*/, "X")} 1'
# effort flee facade oddball rat tool

#whole words that have at least one consecutive repeated character
echo "$s" | sed -E 's/\w*(\w)\1\w*/X/g'
# X X facade X rat X
```

:::

If a quantifier is applied on a pattern grouped inside `()` metacharacters, you'll need an outer `()` group to capture the matching portion. Other flavors like Perl provide non-capturing groups to handle such cases. In `awk` you'll have to consider the extra capture groups.

> note the numbers used in the replacement section

```sh
s='one,2,3.14,42'
echo "$s" | awk '{$0=gensub(/^(([^,]+,){2})([^,]+)/, "[\\1](\\3)", 1)} 1'
# [one,2,](3.14),42
```


Here's an example where alternation order matters when the matching portions have the same length. Aim is to delete all whole words unless it starts with `g` or `p` and contains `y`.


```sh
s='tryst,fun,glyph,pity,why,group'
```

::: tabs

@tab:active Case 1

all words get deleted because `\<\w+\>` gets priority here

```sh
echo "$s" | awk '{print gensub(/\<\w+\>|(\<[gp]\w*y\w*\>)/, "\\1", "g")}'
# ,,,,,
```

@tab Case 2

capture group gets priority here, so words in the capture group are retained

```sh
echo "$s" | awk '{print gensub(/(\<[gp]\w*y\w*\>)|\<\w+\>/, "\\1", "g")}'
# ,,glyph,pity,,
```

:::

As `\` and `&` are special characters in the replacement section, you'll need to escape them for literal representation.

::: tabs

@tab:active Case 1

```sh
echo 'apple and fig' | awk '{sub(/and/, "[&]")} 1'
# apple [and] fig
```

@tab Case 2

```sh
echo 'apple and fig' | awk '{sub(/and/, "[\\&]")} 1'
# apple [&] fig
```

@tab Case 3

```sh
echo 'apple and fig' | awk '{sub(/and/, "\\")} 1'
# apple \ fig
```

:::

---

## Case insensitive matching

Unlike `sed` or `perl`, regular expressions in `awk` do not directly support the use of flags to change certain behaviors. For example, there is no flag to force the regexp to ignore case while matching.

The `IGNORECASE` special variable controls case sensitivity, which is `0` by default. By changing it to some other value (which would mean `true` in a conditional expression), you can match case insensitively. The `-v` command line option allows you to assign a variable before input is read. The `BEGIN` block is also often used to change such settings.

::: tabs

@tab:active Case 1

```sh
printf 'Cat\ncOnCaT\nscatter\ncot\n' | awk -v IGNORECASE=1 '/cat/'
# Cat
# cOnCaT
# scatter
```

@tab Case 2

for small enough string, you can also use character class

```sh
printf 'Cat\ncOnCaT\nscatter\ncot\n' | awk '{gsub(/[cC][aA][tT]/, "(&)")} 1'
# (Cat)
# cOn(CaT)
# s(cat)ter
# cot
```

:::

Another way is to use built-in string function `tolower` to change the input to lowercase first.

```sh
printf 'Cat\ncOnCaT\nscatter\ncot\n' | awk 'tolower($0) ~ /cat/'
# Cat
# cOnCaT
# scatter
```

---

## Dynamic regexp

As seen earlier, string literals can be used instead of a regexp to specify the pattern to be matched. Which implies that you can use any expression or a variable as well. This is helpful if you need to compute the regexp based on some conditions or if you are getting the pattern externally, such as user input passed via the `-v` option from a `bash` variable.

::: tabs

@tab:active Case 1

```sh
r='cat.*dog|dog.*cat'
echo 'two cats and a dog' | awk -v ip="$r" '{gsub(ip, "pets")} 1'
# two pets
```

@tab Case 2

```sh
awk -v s='ow' '$0 ~ s' table.txt
# brown bread mat hair 42
# yellow banana window shoes 3.14
```

@tab Case 3

you'll have to make sure to use `\\` instead of `\`

```sh
r='\\<[12][0-9]\\>'
echo '23 154 12 26 34' | awk -v ip="$r" '{gsub(ip, "X")} 1'
# X 154 X X 34
```

:::

::: info 

See [Using shell variables](07-using-shell-variables.md#using-shell-variables) chapter for a way to avoid having to escape backslashes.

:::

Sometimes, user input has to be treated literally instead of as a regexp pattern. In such cases, you'll need to escape all the regexp metacharacters. Below example shows how to do it for the search section. For the replace section, you only have to escape the `\` and `&` characters.

::: tabs

@tab:active Case 1

```sh
awk -v s='(a.b)^{c}|d' 'BEGIN{gsub(/[{[(^$*?+.|\\]/, "\\\\&", s); print s}'
# \(a\.b)\^\{c}\|d
```

@tab Case 2

```sh
echo 'f*(a^b) - 3*(a^b)' |
     awk -v s='(a^b)' '{gsub(/[{[(^$*?+.|\\]/, "\\\\&", s); gsub(s, "c")} 1'
# f*c - 3*c
```

@tab Case 3

match given input string literally, but only at the end of string

```sh
echo 'f*(a^b) - 3*(a^b)' |
     awk -v s='(a^b)' '{gsub(/[{[(^$*?+.|\\]/, "\\\\&", s); gsub(s "$", "c")} 1'
# f*(a^b) - 3*c
```

:::

::: info 

See [my blog post](https://learnbyexample.github.io/escaping-madness-awk-literal-field-separator/) for more details about escaping metacharacters.

If you need to just match literally instead of substitution, you can use the index function. See the [index](09-built-in-functions.md#index) section for details.

:::

---

## Summary

Regular expressions is a feature that you'll encounter in multiple command line programs and programming languages. It is a versatile tool for text processing. Although the features in `awk` are less compared to those found in programming languages, they are sufficient for most of the tasks you'll need for command line usage. It takes a lot of time to get used to syntax and features of regular expressions, so I'll encourage you to practice a lot and maintain notes. It'd also help to consider it as a mini-programming language in itself for its flexibility and complexity.

---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, display all lines that start with `den` or end with `ly`.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 2 lonely
# dent
# lovely
```

@tab Answer

```sh
awk '/^den|ly$/' patterns.txt
# 2 lonely
# dent
# lovely
```

:::

### Exercise 2 

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, replace all occurrences of 42 with `[42]` unless it is at the edge of a word. Display only the modified lines.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Hi[42]Bye nice1[42]3 bad42
# eqn2 = pressure*3+42/5-1[42]56
# cool_[42]a 42fake
# _[42]_
```

@tab Answer

```sh
awk 'gsub(/\B42\B/, "[&]")' patterns.txt
# Hi[42]Bye nice1[42]3 bad42
# eqn2 = pressure*3+42/5-1[42]56
# cool_[42]a 42fake
# _[42]_
```

:::

### Exercise 3

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, add `[]` around words starting with `s` and containing `e` and `t` in any order. Display only the modified lines.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# [sets] tests Sauerkraut
# [site] cite kite bite [store_2]
# [subtle] sequoia
# a [set]
```

@tab Answer

```sh
awk 'gsub(/\<s\w*(e\w*t|t\w*e)\w*/, "[&]")' patterns.txt
# [sets] tests Sauerkraut
# [site] cite kite bite [store_2]
# [subtle] sequoia
# a [set]
```

:::

### Exercise 4 

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, replace the space character that occurs after a word ending with `a` or `r` with a newline character, only if the line also contains an uppercase letter. Display only the modified lines. For example, `A car park` should get converted to `A car` and `park` separated by a newline. But `car` `far` `tar` shouldn't be matched as there's no uppercase letter in this line.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# par
# car
# tar
# far
# Cart
# Not a
# pip DOWN
```

@tab Answer

```sh
awk '/[A-Z]/ && /[ar]\> /{print gensub(/([ar])\> /, "\\1\n", "g")}' patterns.txt
# par
# car
# tar
# far
# Cart
# Not a
# pip DOWN
```

:::

### Exercise 5

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, replace all occurrences of `*[5]` with `2`. Display only the modified lines.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# s(9-2)2
```

@tab Answer

```sh
awk 'gsub(/\*\[5]/, "2")' patterns.txt
# (9-2)2
```

:::

### Exercise 6

`awk '/\<[a-z](on|no)[a-z]\>/'` is same as `awk '/\<[a-z][on]{2}[a-z]\>/'`. True or False? Sample input shown below might help to understand the differences, if any.

::: tabs 

@tab:active Question

```sh
printf 'known\nmood\nknow\npony\ninns\n'
# known
# mood
# know
# pony
# inns
```

@tab Answer

```sh
printf 'known\nmood\nknow\npony\ninns\n'
# known
# mood
# know
# pony
# inns
```

:::

### Exercise 7

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, display all lines starting with `hand` and ending immediately with `s` or `y` or `le` or no further characters. For example, `handed` shouldn't be matched even though it starts with `hand`.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# handle
# handy
# hands
# hand
```

@tab Answer

```sh
awk '/^hand([sy]|le)?$/' patterns.txt
# handle
# handy
# hands
# hand
```

:::

### Exercise 8

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, replace `42//5` or `42/5` with `8`. Display only the modified lines.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# eqn3 = r*42-5/3+42///5-83+a
# eqn1 = a+8-c
# eqn2 = pressure*3+8-14256
```

@tab Answer

```sh
awk 'gsub("42//?5", "8")' patterns.txt
# eqn3 = r*42-5/3+42///5-83+a
# eqn1 = a+8-c
# eqn2 = pressure*3+8-14256
```

:::

### Exercise 9

For the given quantifiers, what would be the equivalent form using the `{m,n}` representation?

- `?` is same as 
  - `{,1}`
- `*` is same as 
  - `{0,}`
- `+` is same as 
  - `{1,}`

### Exercise 10

True or False? `(a*|b*)` is same as `(a|b)*`

> False. Because `(a*|b*)` will match only sequences like `a`, `aaa`, `bb`, `bbbbbbbb`. But `(a|b)*` can match a mixed sequence like `ababbba` too.

### Exercise 11

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, construct two different regexps to get the outputs as shown below. Display only the modified lines.

::: tabs 

@tab:active Question

```sh
# delete from '(' till the next ')'
awk ##### add your solution here
# a/b + c%d
# *[5]
# def factorial
# 12- *4)
# Hi there. Nice day

# delete from '(' till the next ')' but not if there is '(' in between
awk ##### add your solution here
# a/b + c%d
# *[5]
# def factorial
# 12- (e+*4)
# Hi there. Nice day(a
```

@tab Answer

```sh
# delete from '(' till the next ')'
awk 'gsub(/\([^)]*)/, "")' patterns.txt
# a/b + c%d
# *[5]
# def factorial
# 12- *4)
# Hi there. Nice day

# delete from '(' till the next ')' but not if there is '(' in between
awk 'gsub(/\([^()]*)/, "")' patterns.txt
# a/b + c%d
# *[5]
# def factorial
# 12- (e+*4)
# Hi there. Nice day(a
```

:::

### Exercise 12

For the input file <FontIcon icon="iconfont icon-file"/>`anchors.txt`, convert markdown anchors to corresponding hyperlinks as shown below.

```sh
cat anchors.txt
# <a name="regular-expressions"></a>Regular Expressions
## <a name="subexpression-calls"></a>Subexpression calls
## <a name="the-dot-meta-character"></a>The dot meta character
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# [Regular Expressions](#regular-expressions)
# [Subexpression calls](#subexpression-calls)
# [The dot meta character](#the-dot-meta-character)
```

@tab Answer

```sh
awk '{print gensub(/#+ <a name="([^"]+)"><\/a>(.+)/, "[\\2](#\\1)", 1)}' anchors.txt
# [Regular Expressions](#regular-expressions)
# [Subexpression calls](#subexpression-calls)
# [The dot meta character](#the-dot-meta-character)
```

:::

### Exercise 13

Display lines from <FontIcon icon="iconfont icon-file"/>`sample.txt` that satisfy both of these conditions:


- `to` or `he` matched irrespective of case
- `World` or `No` matched case sensitively

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Hello World
# No doubt you like it too
```

@tab Answer

```sh
awk 'tolower($0) ~ /to|he/ && /World|No/' sample.txt
# Hello World
# No doubt you like it too
```

:::

### Exercise 14

Given sample strings have fields separated by `,` and field values cannot be empty. Replace the third field with `42`.

::: tabs 

@tab:active Question

```sh
echo 'lion,ant,road,neon' | awk ##### add your solution here
# lion,ant,42,neon

echo '_;3%,.,=-=,:' | awk ##### add your solution here
# _;3%,.,42,:
```

@tab Answer

```sh
echo 'lion,ant,road,neon' | awk '{print gensub(/[^,]+/, "42", 3)}'
# lion,ant,42,neon

echo '_;3%,.,=-=,:' | awk '{print gensub(/[^,]+/, "42", 3)}'
# _;3%,.,42,:
```

:::

### Exercise 15

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, filter lines containing three or more occurrences of `ar` and replace the last but second `ar` with `X`.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# par car tX far Cart
# pXt cart mart
```

@tab Answer

```sh
awk 'BEGIN{r = @/(.*)ar((.*ar){2})/} $0~r{print gensub(r, "\\1X\\2", 1)}' patterns.txt
# par car tX far Cart
# pXt cart mart
```

:::

### Exercise 16

Surround all whole words with `()`. Additionally, if the whole word is `imp` or `ant`, delete them.

::: tabs 

@tab:active Question

```sh
words='tiger imp goat eagle ant important'
echo "$words" | awk ##### add your solution here
# (tiger) () (goat) (eagle) () (important)
```

@tab Answer

```sh
words='tiger imp goat eagle ant important'
echo "$words" | awk '{print gensub(/\<(imp|ant|(\w+))\>/, "(\\2)", "g")}'
# (tiger) () (goat) (eagle) () (important)
```

:::

### Exercise 17

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, display lines containing car but not as a whole word. For example, `scared-cat` and `car care` should match but not `far` `car` `park`.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# scar
# care
# a huge discarded pile of books
# scare
# part cart mart
```

@tab Answer

```sh
awk '/\Bcar|car\B/' patterns.txt
# scar
# care
# a huge discarded pile of books
# scare
# part cart mart
```

:::

### Exercise 18

Will the pattern` ^a\w+([0-9]+:fig)?` match the same characters for the input `apple42:banana314` and `apple42:fig100`? If not, why not?

::: details Answer

```sh
echo 'apple42:banana314' | awk '{sub(/^a\w+([0-9]+:fig)?/, "[&]")} 1'
# [apple42]:banana314

echo 'apple42:fig100' | awk '{sub(/^a\w+([0-9]+:fig)?/, "[&]")} 1'
# [apple42:fig]100
```

For patterns matching from the same starting location, longest match wins in ERE. So, `\w+` will give up characters to allow `([0-9]+:fig)?` to also match in the second case. In other flavors like PCRE, `apple42` will be matched for both the cases.

:::


### Exercise 19

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, display lines starting with `4` or `-` or `u` or `sub` or `care`.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# care
# 4*5]
# -handy
# subtle sequoia
# unhand
```

@tab Answer

```sh
awk '/^([4u-]|sub|care)/' patterns.txt
# care
# 4*5]
# -handy
# subtle sequoia
# unhand
```

:::

### Exercise 20

Replace sequences made up of words separated by `:` or `.` by the first word of the sequence. Such sequences will end when `:` or `.` is not followed by a word character.

::: tabs 

@tab:active Question

```sh
ip='wow:Good:2_two.five: hi-2 bye kite.777:water.'
echo "$ip" | awk ##### add your solution here
# wow hi-2 bye kite
```

@tab Answer

```sh
ip='wow:Good:2_two.five: hi-2 bye kite.777:water.'
echo "$ip" | awk '{gsub(/([:.]\w*)+/, "")} 1'
# wow hi-2 bye kite
```

:::

### Exercise 21

Replace sequences made up of words separated by `:` or `.` by the last word of the sequence. Such sequences will end when `:` or `.` is not followed by a word character.

::: tabs 

@tab:active Question

```sh
ip='wow:Good:2_two.five: hi-2 bye kite.777:water.'
echo "$ip" | awk ##### add your solution here
# five hi-2 bye water
```

@tab Answer

```sh
ip='wow:Good:2_two.five: hi-2 bye kite.777:water.'
echo "$ip" | awk '{print gensub(/((\w+)[:.])+/, "\\2", "g")}'
# five hi-2 bye water
```

:::

### Exercise 22

Replace all whole words with `X` unless it is preceded by a `(` character.

::: tabs 

@tab:active Question

```sh
s='guava (apple) berry) apple (mango) (grape'
echo "$s" | awk ##### add your solution here
# X (apple) X) X (mango) (grape
```

@tab Answer

```sh
s='guava (apple) berry) apple (mango) (grape'
echo "$s" | awk '{print gensub(/(^|[^(])\<\w+/, "\\1X", "g")}'
# X (apple) X) X (mango) (grape
```

:::

### Exercise 23

Surround whole words with `[]` only if they are followed by `:` or `,` or `-`.

::: tabs 

@tab:active Question

```sh
ip='Poke,on=-=so_good:ink.to/is(vast)ever2-sit'
echo "$ip" | awk ##### add your solution here
# [Poke],on=-=[so_good]:ink.to/is(vast)[ever2]-sit
```

@tab Answer

```sh
ip='Poke,on=-=so_good:ink.to/is(vast)ever2-sit'
echo "$ip" | awk '{print gensub(/(\w+)([:,-])/, "[\\1]\\2", "g")}'
# [Poke],on=-=[so_good]:ink.to/is(vast)[ever2]-sit
```

:::

### Exercise 24

The <FontIcon icon="iconfont icon-file"/>`fields.txt` file has fields separated by the `:` character. Delete `:` and the last field if there is a digit character anywhere before the last field.

```sh
cat fields.txt
# 42:cat
# twelve:a2b
# we:be:he:0:a:b:bother
# apple:banana-42:cherry:
# dragon:unicorn:centaur
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 42
# twelve:a2b
# we:be:he:0:a:b
# apple:banana-42:cherry
# dragon:unicorn:centaur
```

@tab Answer

> can also use: `awk '/[0-9].*:/{sub(/:[^:]*$/, "")} 1' fields.txt`

```sh
awk '{print gensub(/([0-9].*):.*/, "\\1", 1)}' fields.txt
# 42
# twelve:a2b
# we:be:he:0:a:b
# apple:banana-42:cherry
# dragon:unicorn:centaur
```

:::

### Exercise 25

Can you use a character other than `/` as the regexp delimiter? If not, are there ways to construct a regexp that do not require the `/` character to be escaped for literal matching?

::: details Answer

A regexp literal can use only the `/` character as the regexp delimiter. You can also pass a string literal for regexp matching, which doesn't require the `/` character to be escaped for literal matching. However, you'll have to use `\\` to represent a single `\` character, which will affect the use of escape sequences like `\<` and `\w`.

```sh
# using a string literal for regexp matching, no need to escape the / character
printf '/home/joe/1\n/home/john/1\n' | awk '$0 ~ "/home/joe/"'
# /home/joe/1

# however, you'll need \\ to represent a single \
echo '\learn\by\example' | awk '{gsub("\\\\", "/")} 1'
# /learn/by/example
```

:::

### Exercise 26

For the input file <FontIcon icon="iconfont icon-file"/>`patterns.txt`, surround all hexadecimal sequences with a minimum of four characters with `[]`. Match `0x` as an optional prefix, but shouldn't be counted for determining the length. Match the characters case insensitively, and the sequences shouldn't be surrounded by other word characters. Display only the modified lines.


::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# "should not match [0XdeadBEEF]"
# Hi42Bye nice1423 [bad42]
# took 0xbad 22 [0x0ff1ce]
# eqn2 = pressure*3+42/5-[14256]
```

@tab Answer

> can also use: `awk 'gsub(/\<(0[xX])?[[:xdigit:]]{4,}\>/, "[&]")' patterns.txt`

```sh

awk -v IGNORECASE=1 'gsub(/\<(0x)?[0-9a-f]{4,}\>/, "[&]")' patterns.txt
# "should not match [0XdeadBEEF]"
# Hi42Bye nice1423 [bad42]
# took 0xbad 22 [0x0ff1ce]
# eqn2 = pressure*3+42/5-[14256]
```

:::

---


<TagLinks/>