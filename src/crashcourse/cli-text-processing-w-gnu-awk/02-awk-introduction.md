---
lang: ko-KR
title: 2. awk Introduction
description: 🐚Text Processing with GNU awk > 2. awk Introduction
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 2. awk Introduction
    content: 2. awk Introduction
  - property: og:title
    content: 2. awk Introduction
  - property: og:description
    content: 🐚Text Processing with GNU awk > 2. awk Introduction
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/02-awk-introduction.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 2. awk Introduction
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/awk-introduction.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

This chapter will give an overview of awk syntax and some examples to show what kind of problems you could solve using awk. These features will be covered in depth in later, but you shouldn't skip this chapter.

---

## Filtering

`awk` provides filtering capabilities like those supported by the `grep` and `sed` commands. As a programming language, there are additional nifty features as well. Similar to many command line utilities, `awk` can accept input from both stdin and files.


::: tabs 

@tab:active sample stdin data

```sh
printf 'gate\napple\nwhat\nkite\n'
# gate
# apple
# what
# kite
```

@tab filter lines containing 'at'

> same as: `grep 'at'` and `sed -n '/at/p'`

```sh
printf 'gate\napple\nwhat\nkite\n' | awk '/at/'
# gate
# what
```

@tab filter lines NOT containing 'e'

> same as: `grep -v 'e'` and `sed -n '/e/!p'`

```sh
printf 'gate\napple\nwhat\nkite\n' | awk '!/e/'
# what
```

:::

By default, `awk` automatically loops over the input content line by line. You can then use programming instructions to process those lines. As `awk` is often used from the command line, many shortcuts are available to reduce the amount of typing needed.

In the above examples, a regular expression (defined by the pattern between a pair of forward slashes) has been used to filter the input. Regular expressions (regexp) will be covered in detail in the [next chapter](03-regular-expressions.md). String values without any special regexp characters are used in this chapter. The full syntax is `string ~ /regexp/` to check if the given string matches the regexp and `string !~ /regexp/` to check if doesn't match. When the string isn't specified, the test is performed against a special variable $0, which has the contents of the input line. The correct term would be input record, but that's a discussion for a [later chapter](05-record-separators.md).

Also, in the above examples, only the filtering condition was given. By default, when the condition evaluates to `true`, the contents of `$0` is printed. Thus:

- `awk '/regexp/'` is a shortcut for `awk '$0 ~ /regexp/{print $0}'`
- `awk '!/regexp/'` is a shortcut for `awk '$0 !~ /regexp/{print $0}'`

::: tabs

@tab Example 1

> same as: `awk '/at/'`

```sh
printf 'gate\napple\nwhat\nkite\n' | awk '$0 ~ /at/{print $0}'
# gate
# what
```

@tab Example 2

> same as: `awk '!/e/'`

```sh
printf 'gate\napple\nwhat\nkite\n' | awk '$0 !~ /e/{print $0}'
# what
```

:::

In the above examples, `{}` is used to specify a block of code to be executed when the condition that precedes the block evaluates to `true`. One or more statements can be given separated by the `;` character. You'll see such examples and learn more about `awk` syntax later.

---

## Idiomatic use of 1

In a conditional expression, non-zero numeric values and non-empty string values are evaluated as true. Idiomatically, 1 is used to denote a true condition in one-liners as a shortcut to print the contents of $0.

> same as: `printf 'gate\napple\nwhat\nkite\n' | cat`
>
> same as: `awk '{print $0}'`

```sh
printf 'gate\napple\nwhat\nkite\n' | awk '1'
# gate
# apple
# what
# kite
```

---

## Substitution

`awk` has three functions to cover search and replace requirements. Two of them are shown below. The sub function replaces only the first match, whereas the gsub function replaces all the matching occurrences. By default, these functions operate on $0 when the input string isn't provided. Both sub and gsub modifies the input source on successful substitution.

::: tabs

@tab:active for each input line, change only the first ':' to '-'

> same as: `sed 's/:/-/'`

```sh
printf '1:2:3:4\na:b:c:d\n' | awk '{sub(/:/, "-")} 1'
# 1-2:3:4
# a-b:c:d
```

@tab for each input line, change all ':' to '-'

> same as: `sed 's/:/-/g'`

```sh
printf '1:2:3:4\na:b:c:d\n' | awk '{gsub(/:/, "-")} 1'
# 1-2-3-4
# a-b-c-d
```

:::

The first argument to the `sub` and `gsub` functions is the regexp to be matched against the input content. The second argument is the replacement string. String literals are specified within double quotes. In the above examples, `sub` and `gsub` are used inside a block as they aren't intended to be used as a conditional expression. The `1` after the block is treated as a conditional expression as it is used outside a block. You can also use the variations presented below to get the same results:

- `awk '{sub(/:/, "-")} 1'` is same as `awk '{sub(/:/, "-"); print $0}'`
- You can also just use `print` instead of `print $0` as `$0` is the default string

::: info

You might wonder why to use or learn `grep` and `sed` when you can achieve the same results with `awk`. It depends on the problem you are trying to solve. A simple line filtering will be faster with `grep` compared to `sed` or `awk` because grep is optimized for such cases. Similarly, sed will be faster than `awk` for substitution cases. Also, not all features easily translate among these tools. For example, `grep -o` requires lot more steps to code with `sed` or `awk`. Only `grep` offers recursive search. And so on. See also [unix.stackexchange: When to use `grep`, `sed`, `awk`, `perl`, etc](https://unix.stackexchange.com/q/303044/109046).

:::

---

## Field processing

As mentioned before, `awk` is primarily used for field based processing. Consider the sample input file shown below with fields separated by a single space character.

::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::

```sh
cat table.txt
# brown bread mat hair 42
# blue cake mug shirt -7
# yellow banana window shoes 3.14
```

Here are some examples that are based on a specific field rather than the entire line. By default, `awk` splits the input line based on spaces and the field contents can be accessed using `$N` where `N` is the field number required. A special variable `NF` is updated with the total number of fields for each input line. There are many more details and nuances to cover regarding the default field splitting, but for now this is enough to proceed.

::: tabs

@tab:active print the second field of each input line

```sh
awk '{print $2}' table.txt
# bread
# cake
# banana
```
@tab print lines only if the last field is a negative number

> recall that the default action is to print the contents of `$0`

```sh
awk '$NF<0' table.txt
# blue cake mug shirt -7
```

@tab change 'b' to 'B' only for the first field

```sh
awk '{gsub(/b/, "B", $1)} 1' table.txt
# Brown bread mat hair 42
# Blue cake mug shirt -7
# yellow banana window shoes 3.14
```

:::

---

## awk one-liner structure

The examples in the previous sections have used a few different ways to construct a typical `awk` one-liner. If you haven't yet grasped the syntax, this generic structure might help:

```sh
awk 'cond1{action1} cond2{action2} ... condN{actionN}'
```

When a condition isn't provided, the action is always executed. Within a block, you can provide multiple statements separated by the semicolon character. If an action isn't provided, then by default, contents of `$0` variable is printed if the condition evaluates to `true`. When action isn't present, you can use a semicolon to terminate a condition and start another `condX{actionX}` snippet.

Note that multiple blocks are just a syntactical sugar. It helps to avoid explicit use of `if` control structure for most one-liners. The below snippet shows the same code with and without `if` structure.

```sh
awk '{
       if($NF < 0){
          print $0
       }
     }' table.txt
# blue cake mug shirt -7

awk '$NF<0' table.txt
# blue cake mug shirt -7
```

You can use a `BEGIN{}` block when you need to execute something before the input is read and an `END{}` block to execute something after all of the input has been processed.

```sh
seq 2 | awk 'BEGIN{print "---"} 1; END{print "%%%"}'
# ---
# 1
# 2
# %%%
```

There are some more types of blocks that can be used, you'll see them in coming chapters. See [gawk manual: Operators](https://www.gnu.org/software/gawk/manual/gawk.html#All-Operators) for details about operators and [gawk manual: Truth Values and Conditions](https://www.gnu.org/software/gawk/manual/gawk.html#Truth-Values-and-Conditions) for conditional expressions.

---

## Strings and Numbers

Some examples so far have already used string and numeric literals. As mentioned earlier, `awk` tries to provide a concise way to construct a solution from the command line. The data type of a value is determined based on the syntax used. String literals are represented inside double quotes. Numbers can be integers or floating-point. Scientific notation is allowed as well. See [gawk manual: Constant Expressions](https://www.gnu.org/software/gawk/manual/gawk.html#Constants) for more details.


```sh
# BEGIN{} is also useful to write an awk program without any external input
awk 'BEGIN{print "hi"}'
# hi

awk 'BEGIN{print 42}'
# 42

awk 'BEGIN{print 3.14}'
# 3.14

awk 'BEGIN{print 34.23e4}'
# 342300
```

You can also save these literals in variables for later use. Some variables are predefined, `NF` for example.

```sh
awk 'BEGIN{a=5; b=2.5; print a+b}'
# 7.5

# strings placed next to each other are concatenated
awk 'BEGIN{s1="con"; s2="cat"; print s1 s2}'
# concat
```

If an uninitialized variable is used, it will act as an empty string in string context and `0` in numeric context. You can force a string to behave as a number by simply using it in an expression with numeric values. You can also use unary `+` or `-` operators. If the string doesn't start with a valid number (ignoring any starting whitespaces), it will be treated as `0`. Similarly, concatenating a string to a number will automatically change the number to string. See [gawk manual: How awk Converts Between Strings and Numbers](https://www.gnu.org/software/gawk/manual/gawk.html#Strings-And-Numbers) for more details.


```sh
# same as: `awk 'BEGIN{sum=0} {sum += $NF} END{print sum}'`
awk '{sum += $NF} END{print sum}' table.txt
# 38.14

awk 'BEGIN{n1="5.0"; n2=5; if(n1==n2) print "equal"}'

awk 'BEGIN{n1="5.0"; n2=5; if(+n1==n2) print "equal"}'
# equal

awk 'BEGIN{n1="5.0"; n2=5; if(n1==n2".0") print "equal"}'
# equal

awk 'BEGIN{print 5 + "abc 2 xyz"}'
# 5

awk 'BEGIN{print 5 + " \t 2 xyz"}'
# 7
```

## Arrays

Arrays in `awk` are associative, meaning they are key-value pairs. The keys can be numbers or strings, but numbers get converted to strings internally. They can be multi-dimensional as well. There will be plenty of array examples in later chapters in relevant context. See [gawk manual: Arrays](https://www.gnu.org/software/gawk/manual/gawk.html#Arrays) for complete details and gotchas.

::: tabs

@tab:active assigning an array and accessing an element based on string keys
```sh
awk 'BEGIN{student["id"] = 101; student["name"] = "Joe";
       print student["name"]}'
# Joe
```

@tab checking if a key exists

```sh
awk 'BEGIN{student["id"] = 101; student["name"] = "Joe";
       if("id" in student) print "Key found"}'
# Key found
```

:::

---

## Summary

In my early days of getting used to the Linux command line, I was intimidated by `sed` and `awk` examples and didn't even try to learn them. Hopefully, this gentler introduction works for you and the various syntactical magic has been explained adequately. Try to experiment with the given examples, for example change field numbers to something other than the number used. Be curious, like what happens if a field number is negative or a floating-point number. Read the manual. Practice a lot. And so on.

The next chapter is dedicated solely for regular expressions. The features introduced in this chapter would be used in the examples, so make sure you are comfortable with `awk` syntax before proceeding. Solving the exercises to follow will help test your understanding.

---

## Interactive exercises

I wrote a TUI app to help you solve some of the exercises from this book interactively. See [<FontIcon icon="iconfont icon-github"/> AwkExercises](https://github.com/learnbyexample/TUI-apps/tree/main/AwkExercises) repo for installation steps and [<FontIcon icon="iconfont icon-file"/> app_guide.md](https://github.com/learnbyexample/TUI-apps/blob/main/AwkExercises/app_guide.md) for instructions on using this app.

Here's a sample screenshot:

![AwkExercises example](https://learnbyexample.github.io/learn_gnuawk/images/awk_exercises.png)

## Exercises

::: info

All the exercises are also collated together in one place at [<FontIcon icon="iconfont icon-file"/> Exercises.md](https://github.com/learnbyexample/learn_gnuawk/blob/master/exercises/Exercises.md). For solutions, see [<FontIcon icon="iconfont icon-file"/> Exercise_solutions.md](https://github.com/learnbyexample/learn_gnuawk/blob/master/exercises/Exercise_solutions.md).

The exercises directory has all the files used in this section.

:::

```sh
cat addr.txt
# Hello World
# How are you
# This game is good
# Today is sunny
# 12345
# You are funny

cat table.txt
# brown bread mat hair 42
# blue cake mug shirt -7
# yellow banana window shoes 3.14

cat hex.txt
# start address: 0xA0, func1 address: 0xA0
# end address: 0xFF, func2 address: 0xB0
```

### Exercise 1

For the input file `addr.txt`, display all lines containing `is`.

::: tabs 

@tab:active Question

```sh
awk #### add your solution here ####
# This game is good
# Today is sunny
```

@tab Answer

```sh
awk '/is/' addr.txt
# This game is good
# Today is sunn
```

:::


### Exercise 2

For the input file <FontIcon icon="iconfont icon-file"/> `addr.txt`, display the first field of lines not containing `y`. Consider space as the field separator for this file.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here ####
# Hello
# This
# 12345
```

@tab Answer

```sh
awk '!/y/{print $1}' addr.txt
# Hello
# This
# 12345
```

:::

### Exercise 3

For the input file <FontIcon icon="iconfont icon-file"/> `addr.txt`, display all lines containing no more than 2 fields.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Hello World
# 12345
```

@tab Answer

```sh
awk 'NF<3' addr.txt
# Hello World
# 12345
```

:::

### Exercise 4

For the input file <FontIcon icon="iconfont icon-file"/> `addr.txt`, display all lines containing is in the second field.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Today is sunny
```

@tab Answer

```sh
awk '$2 ~ /is/' addr.txt
# Today is sunny
```

:::

### Exercise 5

For each line of the input file <FontIcon icon="iconfont icon-file"/> `addr.txt`, replace the first occurrence of o with 0.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Hell0 World
# H0w are you
# This game is g0od
# T0day is sunny
# 12345
# Y0u are funny
```

@tab Answer

```sh
awk '{sub(/o/, "0")} 1' addr.txt
# Hell0 World
# H0w are you
# This game is g0od
# T0day is sunny
# 12345
# Y0u are funny
```

:::

### Exercise 6

For the input file <FontIcon icon="iconfont icon-file"/> `table.txt`, calculate and display the product of numbers in the last field of each line. Consider space as the field separator for this file.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# -923.16
```

@tab Answer

```sh
awk 'BEGIN{p = 1} {p *= $NF} END{print p}' table.txt
# -923.16
```

:::

### Exercise 7

Append `.` to all the input lines for the given stdin data.

::: tabs 

@tab:active Question

```sh
printf 'last\nappend\nstop\ntail\n' | awk ##### add your solution here
# last.
# append.
# stop.
# tail.
```

@tab Answer

> can also use: `awk '{$0 = $0 "."} 1'`
```sh
printf 'last\nappend\nstop\ntail\n' | awk '{print $0 "."}'
# last.
# append.
# stop.
# tail.
```

:::


### Exercise 8

Replace all occurrences of `0xA0` with `0x50` and `0xFF` with `0x7F` for the given input file (<FontIcon icon="iconfont icon-file"/> `hex.txt`).

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# start address: 0x50, func1 address: 0x50
# end address: 0x7F, func2 address: 0xB0
```

@tab Answer

```sh
awk '{gsub(/0xA0/, "0x50"); gsub(/0xFF/, "0x7F")} 1' hex.txt
# start address: 0x50, func1 address: 0x50
# end address: 0x7F, func2 address: 0xB0
```

:::

---

<TagLinks/>