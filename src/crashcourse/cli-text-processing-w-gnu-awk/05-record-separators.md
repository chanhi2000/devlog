---
lang: ko-KR
title: 5. Record separators
description: 🐚Text Processing with GNU awk > 5. Record separators
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 5. Record separators
    content: 5. Record separators
  - property: og:title
    content: 5. Record separators
  - property: og:description
    content: 🐚Text Processing with GNU awk > 5. Record separators
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/05-record-separators.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 5. Record separators
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/record-separators.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

So far, you've seen examples where `awk` automatically splits input line by line based on the newline character. Just like you can control how those lines are further split into fields using `FS` and other features, `awk` provides a way to control what constitutes a line in the first place. In `awk` parlance, the term __record__ is used to describe the contents that gets placed in the `$0` variable. And similar to `OFS`, you can control the string that gets added at the end for the `print` function. This chapter will also discuss how you can use special variables that have information related to record (line) numbers.

::: info 

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::

---

## Input record separator

The `RS` special variable is used to control how the input content is split into records. The default is the newline character, as evident from the examples used in the previous chapters. The special variable `NR` keeps track of the current record number.

::: tabs

@tab:active Case 1

change the input record separator to a comma character
note the content of the 2nd record where newline is just another character

```sh
printf 'this,is\na,sample,text' | awk -v RS=, '{print NR ")", $0}'
# 1) this
# 2) is
# a
# 3) sample
# 4) text
```

:::

Recall that default `FS` will split input record based on spaces, tabs and newlines. Now that you've seen how `RS` can be something other than `\n`, here's an example to show the full effect of the default record splitting.

```sh
s='   a\t\tb:1000\n\n\t \n\n123 7777:x  y \n \n z  :apple banana cherry'
printf '%b' "$s" | awk -v RS=: -v OFS=, '{$1=$1} 1'
# a,b
# 1000,123,7777
# x,y,z
# apple,banana,cherry
```

Similar to `FS`, the `RS` value is treated as a string literal and then converted to a regexp. For now, consider an example with multiple characters for `RS` but without needing regexp metacharacters.

::: tabs

@tab:active Case 1

```sh
cat report.log
# blah blah Error: second record starts
# something went wrong
# some more details Error: third record
# details about what went wrong
```

@tab Case 2

use 'Error:' as the input record separator
print all the records that contains 'something'

```sh
awk -v RS='Error:' '/something/' report.log
# second record starts
# something went wrong
# some more details 
```

:::

If `IGNORECASE` is set, it will affect record separation as well. Except when the record separator is a single character, which can be worked around by using a character class.

::: tabs

@tab:active Case 1

```sh
awk -v IGNORECASE=1 -v RS='error:' 'NR==1' report.log
# blah blah 
```

@tab Case 2

when `RS` is a single character

```sh
awk -v IGNORECASE=1 -v RS='e' 'NR==1' report.log
# blah blah Error: s
awk -v IGNORECASE=1 -v RS='[e]' 'NR==1' report.log
# blah blah 
```

:::

::: warning 

The default line ending for text files varies between different platforms. For example, a text file downloaded from the internet or a file originating from Windows OS would typically have lines ending with carriage return and line feed characters. So, you'll have to use `RS='\r\n'` for such files. See also [stackoverflow: Why does my tool output overwrite itself and how do I fix it?](https://stackoverflow.com/q/45772525/4082052) for a detailed discussion and mitigation methods.

:::

---

## Output record separator

The `ORS` special variable is used to customize the output record separator. `ORS` is the string that gets added to the end of every call to the `print` function. The default value for `ORS` is a single newline character, just like `RS`.

::: tabs

@tab:active Case 1

change NUL record separator to dot and newline

```sh
printf 'apple\0banana\0cherry\0' | awk -v RS='\0' -v ORS='.\n' '1'
# apple.
# banana.
# cherry.
```

@tab Case 2

```sh
cat msg.txt
# Hello there.
# It will rain to-
# day. Have a safe
# and pleasant jou-
# rney.
```

@tab Case 3

here `ORS` is an empty string

```sh
awk -v RS='-\n' -v ORS= '1' msg.txt
# Hello there.
# It will rain today. Have a safe
# and pleasant journey.
```

:::

::: info 

Note that the `$0` variable is assigned after removing trailing characters matched by `RS`. Thus, you cannot directly manipulate those characters. With tools that don't automatically strip record separator, such as `perl`, the previous example can be solved as `perl -pe 's/-\n//' msg.txt`.

:::

Many a times, you need to change `ORS` depending upon contents of input record or some other condition. The `cond ? expr1 : expr2` ternary operator is often used in such scenarios. The below example assumes that input is evenly divisible, you'll have to add more logic if that is not the case.

::: tabs

@tab:active Case 1

can also use `RS` instead of "`\n`" here

```sh
seq 6 | awk '{ORS = NR%3 ? "-" : "\n"} 1'
# 1-2-3
# 4-5-6
```

:::

::: info 

If the last line of input didn't end with the input record separator, it might get added in the output if `print` is used, as `ORS` gets appended.

:::

::: tabs

@tab:active Case 1

here last line of the input doesn't end with a newline character
but gets added via `ORS` when 'print' is used

```sh
printf '1\n2' | awk '1; END{print 3}'
# 1
# 2
# 3
```

:::

---

## Regexp RS and RT

As mentioned before, the value passed to `RS` is treated as a string literal and then converted to a regexp. Here are some examples.

::: tabs

@tab:active Case 1

set input record separator as one or more digit characters
print records containing both '`i`' and '`t`'

```sh
printf 'Sample123string42with777numbers' | awk -v RS='[0-9]+' '/i/ && /t/'
# string
# with
```

@tab Case 2

similar to `FS`, the value passed to RS is treated as a string
which is then converted to a regexp, so need `\\` instead of `\` here


```sh
printf 'load;err_msg--ant,r2..not' | awk -v RS='\\W+' '/an/'
# ant
```

:::

First record will be empty if `RS` matches from the start of input file. However, if `RS` matches until the very last character of the input file, there won't be an empty record as the last record. This is different from how `FS` behaves if it matches until the last character.

::: tabs

@tab:active Case 1

first record is empty and the last record is a newline character
change '`echo`' command to '`printf`' and see what changes

```sh
$ echo '123string42with777' | awk -v RS='[0-9]+' '{print NR ") [" $0 "]"}'
# 1) []
# 2) [string]
# 3) [with]
# 4) [
# ]
```

@tab Case 2

difference between `FS` and `RS` when they match till the end of the input

```sh
printf '123string42with777' | awk -v FS='[0-9]+' '{print NF}'
# 4
printf '123string42with777' | awk -v RS='[0-9]+' 'END{print NR}'
# 3
```

:::

The `RT` special variable contains the text that was matched by `RS`. This variable gets updated for every input record.

::: tabs

@tab:active Case 1

print record number and the value of `RT` for that record
last record has empty `RT` because it didn't end with digits

```sh
echo 'Sample123string42with777numbers' | awk -v RS='[0-9]+' '{print NR, RT}'
# 1 123
# 2 42
# 3 777
# 4 
```

:::

<TagLinks/>