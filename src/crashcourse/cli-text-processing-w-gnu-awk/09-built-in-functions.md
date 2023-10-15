---
lang: ko-KR
title: 9. Built-in functions
description: 🐚Text Processing with GNU awk > 9. Built-in functions
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 9. Built-in functions
    content: 9. Built-in functions
  - property: og:title
    content: 9. Built-in functions
  - property: og:description
    content: 🐚Text Processing with GNU awk > 9. Built-in functions
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/09-built-in-functions.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 9. Built-in functions
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/built-in-functions.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

You've already seen some built-in functions in detail, such as the `sub`, `gsub` and `gensub` functions. This chapter will discuss many more built-ins that are often used in one-liners. You'll also see more examples with arrays.

::: info

See [gawk manual: Functions](https://www.gnu.org/software/gawk/manual/gawk.html#Functions) for details about all the built-in functions as well as how to define your own functions.

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::


---

## `length`

The `length` function returns the number of characters for the given string argument. By default, it acts on the `$0` variable. Numeric arguments will be automatically converted to strings.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{print length("road"); print length(123456)}'
# 4
# 6
```

@tab Case 2

recall that the record separator isn't part of `$0` so, line ending won't be counted here

```sh
printf 'fox\ntiger\n' | awk '{print length()}'
# 3
# 5
```

@tab Case 3

```sh
awk 'length($1) < 6' table.txt
# brown bread mat hair 42
# blue cake mug shirt -7
```

:::

The `-b` command line option is handy if you need the number of bytes, instead of the number of characters. Locale also plays a role.

::: tabs

@tab:active Case 1

```sh
echo 'αλεπού' | awk '{print length()}'
# 6
```

@tab Case 2

```sh
echo 'αλεπού' | awk -b '{print length()}'
# 12
```

@tab Case 3

```sh
echo 'αλεπού' | LC_ALL=C awk '{print length()}'
# 12
```

::: 

::: info 

For the above illustration, you can also use `match($0, /$/)-1` to get the byte count, irrespective of the locale or the use of the `-b` option. This solution was suggested in [<FontIcon icon="iconfont icon-github"/> this issue](https://github.com/learnbyexample/learn_gnuawk/issues/5).

:::

---

## Array sorting

By default, array looping with the `for(key in array)` format gives you elements in random order. By setting a special value to `PROCINFO["sorted_in"]`, you can control the order in which you wish to retrieve the elements. See [gawk manual: Using Predefined Array Scanning Orders](https://www.gnu.org/software/gawk/manual/gawk.html#Controlling-Scanning) for other options and details.

::: tabs

@tab:active Case 1

by default, array is traversed in random order

```sh
awk 'BEGIN{a["z"]=1; a["x"]=12; a["b"]=42; for(i in a) print i, a[i]}'
# x 12
# z 1
# b 42
```

@tab Case 2

index (_i.e._ keys) sorted in ascending order as strings

```sh
awk 'BEGIN{PROCINFO["sorted_in"] = "@ind_str_asc";
     a["z"]=1; a["x"]=12; a["b"]=42; for(i in a) print i, a[i]}'
# b 42
# x 12
# z 1
```

@tab Case 3

value sorted in ascending order as numbers

```sh
awk 'BEGIN{PROCINFO["sorted_in"] = "@val_num_asc";
     a["z"]=1; a["x"]=12; a["b"]=42; for(i in a) print i, a[i]}'
# z 1
# x 12
# b 42
```

:::

Here's an example of sorting input lines in ascending order based on the second column, treating the data as strings.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{PROCINFO["sorted_in"] = "@ind_str_asc"}
     {a[$2]=$0} END{for(k in a) print a[k]}' table.txt
# yellow banana window shoes 3.14
# brown bread mat hair 42
# blue cake mug shirt -7
```

:::

---

## `split`

The `split` function provides the same features as the record splitting done using `FS`. This is helpful when you need the results as an array for some reason, for example to use array sorting features. Or, when you need to further split a field content. `split` accepts four arguments, the last two being optional:

- First argument is the string to be split
- Second argument is the array variable that saves the results
- Third argument is the separator, whose default is `FS`

The return value of the `split` function is number of fields, similar to the `NF` variable. The array gets indexed starting from `1` for the first element, `2` for the second element and so on. If the array already had some value, it gets overwritten with the new result.


::: tabs

@tab:active Case 1

> same as: `awk '{print $2}'`

```sh
printf '     one \t two\t\t\tthree  ' | awk '{split($0, a); print a[2]}'
# two
```

@tab Case 2

example with both `FS` and `split` in action

```sh
s='Joe,1996-10-25,64,78'
echo "$s" | awk -F, '{split($2, d, "-"); print $1 " was born in " d[1]}'
# Joe was born in 1996
```

@tab Case 3

single row to multiple rows based on splitting the last field

```sh
s='air,water,12:42:3'
echo "$s" | awk -F, '{n=split($NF, a, ":");
                     for(i=1; i<=n; i++) print $1, $2, a[i]}'
# air water 12
# air water 42
# air water 3
```

:::

Similar to `FS`, you can use a regular expression as the separator.


::: tabs

@tab:active Case 1

```sh
s='Sample123string42with777numbers'
echo "$s" | awk '{split($0, s, /[0-9]+/); print s[2], s[4]}'
# string numbers
```

:::

The fourth argument provides a feature not present with `FS` splitting. It allows you to save the portions matched by the separator in an array.

::: tabs

@tab:active Case 1

```sh
s='Sample123string42with777numbers'
echo "$s" | awk '{n=split($0, s, /[0-9]+/, seps);
                 for(i=1; i<n; i++) print seps[i]}'
# 123
# 42
# 777
```

:::

::: info 

Quoting from [gawk manual: split()](https://www.gnu.org/software/gawk/manual/gawk.html#index-split_0028_0029-function-1):

> If `fieldsep` is a single space, then any leading whitespace goes into `seps[0]` and any trailing whitespace goes into `seps[n]`, where `n` is the return value of `split()` _(i.e._, the number of elements in `array`). 

:::

--- 

Here's an example where `split` helps to initialize an array using an empty separator. Unlike `$N` syntax where an expression resulting in a floating-point number is acceptable, array index has to be an integer only. Hence, the `int` function is used to convert the floating-point result to an integer in the example below.

::: tabs

@tab:active Case 1

adds a new grade column based on marks in the third column

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

awk 'BEGIN{OFS="\t"; split("DCBAS", g, //)}
     {$(NF+1) = NR==1 ? "Grade" : g[int($NF/10)-4]} 1' marks.txt
# Dept    Name    Marks   Grade
# ECE     Raj     53      D
# ECE     Joel    72      B
# EEE     Moi     68      C
# CSE     Surya   81      A
# EEE     Tia     59      D
# ECE     Om      92      S
# CSE     Amy     67      C
```

:::

---

## `patsplit`

The `patsplit` function will give you the features provided by `FPAT`. The argument order and optional arguments is same as the `split` function, with `FPAT` as the default separator. The return value is number of fields obtained from the split.

::: tabs

@tab:active Case 1

```sh
s='eagle,"fox,42",bee,frog'
echo "$s" | awk '{patsplit($0, a, /"[^"]*"|[^,]*/); print a[2]}'
# "fox,42"
```

:::

---

## `substr`

The `substr` function helps to extract a specified number of characters from an input string based on indexing. The argument order is:

- First argument is the input string
- Second argument is the starting position
- Third argument is the number of characters to extract

The index starts from `1`. If the third argument is not specified, by default all characters until the end of the string is extracted. If the second argument is greater than the length of the string or if the third argument is less than or equal to `0`, then an empty string is returned. The second argument will be converted `1` if a number less than one is specified.

::: tabs

@tab:active Case 1

```sh
echo 'abcdefghij' | awk '{print substr($0, 1, 5)}'
# abcde
echo 'abcdefghij' | awk '{print substr($0, 4, 3)}'
# def
```

@tab Case 2

```sh
echo 'abcdefghij' | awk '{print substr($0, 6)}'
# fghij
```

@tab Case 3

```sh
echo 'abcdefghij' | awk -v OFS=: '{print substr($0, 2, 3), substr($0, 6, 3)}'
# bcd:fgh
```

:::

If only a few characters are needed from the input record, you can also use empty `FS`.


::: tabs

@tab:active Case 1

```sh
echo 'abcdefghij' | awk -v FS= '{print $3}'
# c
echo 'abcdefghij' | awk -v FS= '{print $3, $5}'
# c e
```

:::

---

## `match`

The `match` function is useful to extract portion of an input string matched by a regexp. There are two ways to get the matched portion:

- by using the `substr` function along with special variables `RSTART` (starting position of the match) and `RLENGTH` (length of the match)
- by passing a third argument to `match` so that the results are available from an array

The first argument to `match` is the input string and the second one is the regexp. If the match fails, then `RSTART` gets `0` and `RLENGTH` gets `-1`. Return value is same as `RSTART`.

```sh
s='051 035 154 12 26 98234 3'
```

::: tabs

@tab:active Case 1

using `substr` and `RSTART`/`RLENGTH`
match a number with `>= 4` digits

```sh
echo "$s" | awk 'match($0, /[0-9]{4,}/){print substr($0, RSTART, RLENGTH)}'
# 98234
```

@tab Case 2

using array, note that index `0` is used here, not `1`
match a `number >= 100` (with optional leading zeros)

```sh
echo "$s" | awk 'match($0, /0*[1-9][0-9]{2,}/, m){print m[0]}'
# 154
```

:::

Both the above examples can also be easily solved using `FPAT` or `patsplit`. match has an advantage when it comes to getting portions matched only within capture groups. The first element of the array will still have the entire match. The second element will contain the portion matched by the first group, the third one will contain the portion matched by the second group and so on. See also [stackoverflow: arithmetic replacement in a text file](https://stackoverflow.com/q/62241101/4082052).


::: tabs

@tab:active Case 1

entire matched portion

```sh
echo 'apple=42, fig=314' | awk 'match($0, /fig=([0-9]+)/, m){print m[0]}'
# fig=314
```

@tab Case 2

matched portion of the first capture group

```sh
echo 'apple=42, fig=314' | awk 'match($0, /fig=([0-9]+)/, m){print m[1]}'
# 314
```

:::

If you need to get matching portions for all the matches instead of just the first match, you can use a loop and adjust the input string every iteration.


::: tabs

@tab:active Case 1

extract numbers only if it is followed by a comma

```sh
s='42 apple-5, fig3; x-83, y-20: f12'
echo "$s" | awk '{ while( match($0, /([0-9]+),/, m) ){print m[1];
                 $0=substr($0, RSTART+RLENGTH)} }'
# 5
# 83
```

:::

---

## index

The `index` function is useful when you need to match a string literally. This is similar to the `grep -F` functionality of matching fixed strings. The first argument to this function is the input string and the second one is the string to be matched literally. The return value is the index of the matching location and `0` if there is no match.

```sh
cat eqns.txt
# a=b,a-b=c,c*d
# a+b,pi=3.14,5e12
# i*(t+9-g)/8,4-a+b
```

::: tabs

@tab:active Case 1

no output because the metacharacters aren't escaped

```sh
awk '/i*(t+9-g)/' eqns.txt
#
```

@tab Case 2

> same as: `grep -F 'i*(t+9-g)' eqns.txt`

```sh
awk 'index($0, "i*(t+9-g)")' eqns.txt
# i*(t+9-g)/8,4-a+b
```

@tab Case 3

check only the last field

```sh
awk -F, 'index($NF, "a+b")' eqns.txt
# i*(t+9-g)/8,4-a+b
```

@tab Case 4

index not needed if the entire field/line is being compared

```sh
$ awk -F, '$1=="a+b"' eqns.txt
a+b,pi=3.14,5e12
```

:::

The return value is useful to ensure that the match is found at specific positions only. For example, the start or end of the string.

::: tabs

@tab:active Case 1

start of string

```sh
awk 'index($0, "a+b")==1' eqns.txt
# a+b,pi=3.14,5e12
```

@tab Case 2
end of string

```sh
awk -v s="a+b" 'index($0, s)==length()-length(s)+1' eqns.txt
# i*(t+9-g)/8,4-a+b
```

:::

Recall that the `-v` option gets parsed by `awk`'s string processing rules. So, if you need to pass a literal string without falling in backslash hell, use `ENVIRON` instead.

::: tabs

@tab:active Case 1

```sh
echo 'a\b\c\d' | awk -v s='a\b' 'index($0, s)'
echo 'a\b\c\d' | awk -v s='a\\b' 'index($0, s)'
# a\b\c\d
```

@tab Case 2

```sh
echo 'a\b\c\d' | s='a\b' awk 'index($0, ENVIRON["s"])'
# a\b\c\d
```

:::

---

## `system`

External commands can be issued using the `system` function. Any output generated by the external command would be as usual on `stdout` unless redirected while calling the command.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{system("echo Hello World")}'
# Hello World
```

@tab Case 2

```sh
wc table.txt
# 3 15 79 table.txt
awk 'BEGIN{system("wc table.txt")}'
# 3 15 79 table.txt
```

@tab Case 3

```sh
awk 'BEGIN{system("seq 10 | paste -sd, > out.txt")}'
cat out.txt
# 1,2,3,4,5,6,7,8,9,10
```

@tab Case 4

```sh
cat t2.txt
# I bought two balls and 3 bats
echo 'f1,t2,f3' | awk -F, '{system("cat " $2 ".txt")}'
# I bought two balls and 3 bats
```

:::

The return value of `system` depends on the exit status of the executed command. See [gawk manual: Input/Output Functions](https://www.gnu.org/software/gawk/manual/html_node/I_002fO-Functions.html) for details.

::: tabs 

@tab:active Case 1

```sh
ls xyz.txt
# ls: cannot access 'xyz.txt': No such file or directory
echo $?
# 2
```

@tab Case 2

```sh
awk 'BEGIN{s=system("ls xyz.txt"); print "Exit status: " s}'
# ls: cannot access 'xyz.txt': No such file or directory
# Exit status: 2
```

:::

---

## `printf` and `sprintf`

The `printf` function is useful over the print function when you need to format the data before printing. Another difference is that `OFS` and `ORS` do not affect the `printf` function. The formatting features are similar to those found in the `C` programming language and the `printf` shell built-in command.

::: tabs

@tab:active Case 1

OFMT controls the formatting for numbers displayed with the print function

```sh
awk 'BEGIN{print OFMT}'
# %.6g
awk 'BEGIN{sum = 3.1428 + 100; print sum}'
# 103.143
awk 'BEGIN{OFMT="%.5f"; sum = 3.1428 + 100; print sum}'
# 103.14280
```

@tab Case 2

using `printf` function
note the use of `\n` as `ORS` isn't appended unlike print

```sh
awk 'BEGIN{sum = 3.1428 + 10; printf "%f\n", sum}'
# 13.142800
awk 'BEGIN{sum = 3.1428 + 10; printf "%.3f\n", sum}'
# 13.143
```

:::

Here are some more formatting examples for floating-point numbers.

::: tabs

@tab:active Case 1

total length is 10, filled with space if needed
`[` and `]` are used here for visualization purposes

```sh
awk 'BEGIN{pi = 3.14159; printf "[%10.3f]\n", pi}'
# [     3.142]
awk 'BEGIN{pi = 3.14159; printf "[%-10.3f]\n", pi}'
# [3.142     ]
```

@tab Case 2

zero filled

```sh
awk 'BEGIN{pi = 3.14159; printf "%010.3f\n", pi}'
# 000003.142
```

@tab Case 3

scientific notation

```sh
awk 'BEGIN{pi = 3.14159; printf "%e\n", pi}'
# 3.141590e+00
```

:::

Here are some formatting examples for integers.

::: tabs

@tab:active Case 1

note that there is no rounding

```sh
awk 'BEGIN{printf "%d\n", 1.99}'
# 1
```

@tab Case 2

ensure there's always a sign prefixed for integers

```sh
awk 'BEGIN{printf "%+d\n", 100}'
# +100
awk 'BEGIN{printf "%+d\n", -100}'
# -100
```

:::

Here are some formatting examples for strings.

::: tabs

@tab:active Case 1

prefix remaining width with spaces

```sh
awk 'BEGIN{printf "|%10s|\n", "mango"}'
# |     mango|
```

@tab Case 2

suffix remaining width with spaces

```sh
awk 'BEGIN{printf "|%-10s|\n", "mango"}'
# |mango     |
```

@tab Case 3
truncate

```sh
awk '{printf "%.4s\n", $0}' table.txt
# brow
# blue
# yell
```

:::

You can also refer to an argument using `N$` format, where N` is the positional number of argument. One advantage with this method is that you can reuse an argument any number of times. You cannot mix this format with the normal way.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{printf "%1$d + %2$d * %1$d = %3$d\n", 3, 4, 15}'
# 3 + 4 * 3 = 15
```

@tab Case 2

remove `#` if you do not need the prefix

```sh
awk 'BEGIN{printf "hex=%1$#x\noct=%1$#o\ndec=%1$d\n", 15}'
# hex=0xf
# oct=017
# dec=15
```

:::

You can pass variables by specifying a `*` instead of a number in the formatting string.

::: tabs

@tab:active Case 1

> same as: `awk 'BEGIN{pi = 3.14159; printf "%010.3f\n",  pi}'`

```sh
awk 'BEGIN{d=10; p=3; pi = 3.14159; printf "%0*.*f\n", d, p, pi}'
# 000003.142
```

::: warning Warning 

Passing a variable directly to `printf` without using a format specifier can result in an error depending upon the contents of the variable.

```sh
awk 'BEGIN{s="solve: 5 % x = 1"; printf s}'
# awk: cmd. line:1: fatal: not enough arguments to satisfy format string
#         `solve: 5 % x = 1'
#                    ^ ran out for this one
```

:::

So, as a good practice, always use variables with an appropriate format instead of passing it directly to `printf`.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{s="solve: 5 % x = 1"; printf "%s\n", s}'
# solve: 5 % x = 1
```

:::

If `%` has to be used literally inside the format specifier, use `%%`. This is similar to using `\\` in regexps to represent `\` literally.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{printf "n%%d gives the remainder\n"}'
# n%d gives the remainder
```

:::

To save the results of the formatting in a variable instead of printing, use the `sprintf` function. Unlike `printf`, parentheses are always required to use this function.


::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{pi = 3.14159; s = sprintf("%010.3f", pi); print s}'
# 000003.142
```

:::

::: info 

See [gawk manual: printf](https://www.gnu.org/software/gawk/manual/html_node/Printf.html) for complete list of formatting options and other details.

:::

---

## Redirecting print output

The results from the `print` and `printf` functions can be redirected to a shell command or a file instead of `stdout`. There's nothing special about it, you could have done it using shell redirections as well. The use case arises when you need to redirect only a specific portion or if you need multiple redirections within the same `awk` command. Here are some examples of redirecting to multiple files.

::: tabs

@tab:active Case 1

```sh
seq 6 | awk 'NR%2{print > "odd.txt"; next} {print > "even.txt"}'
cat odd.txt
# 1
# 3
# 5
```

@tab Case 2

```sh
cat even.txt
# 2
# 4
# 6
```

@tab Case 3

dynamically creating filenames

```sh
awk -v OFS='\t' 'NR>1{print $2, $3 > $1".txt"}' marks.txt
cat ECE.txt
# Raj     53
# Joel    72
# Om      92
```

:::

Note that the use of `>` doesn't mean that the file will get overwritten everytime. That happens only once if the file already existed prior to executing the `awk` command. Use `>>` if you wish to append to already existing files.

As seen in the above examples, the filenames are passed as string expressions. To redirect to a shell command, again you need to pass a string expression after the `|` pipe symbol. Here's an example:

::: tabs

@tab:active Case 1

```sh
awk '{print $2 | "paste -sd,"}' table.txt
# bread,cake,banana
```

:::

And here are some examples with multiple redirections.

::: tabs

@tab:active Case 1

```sh
awk '{print $2 | "sort | paste -sd,"}' table.txt
# banana,bread,cake
```

@tab Case 2

sort the output before writing to files

```sh
awk -v OFS='\t' 'NR>1{print $2, $3 | "sort > "$1".txt"}' marks.txt
cat ECE.txt
# Joel    72
# Om      92
# Raj     53
```

:::

::: info 

See g[awk manual: Redirecting Output of `print` and `printf`](https://www.gnu.org/software/gawk/manual/gawk.html#Redirection) for more details and operators on redirections. And see [gawk manual: Closing Input and Output Redirections](https://www.gnu.org/software/gawk/manual/gawk.html#Close-Files-And-Pipes) if you have too many redirections.

:::

---

## Summary

This chapter covered some of the built-in functions provided by `awk`. Do check the manual for more of them, for example math and time related functions.

Next chapter will cover features related to processing multiple files passed as input to `awk`.

---

## Exercises

::: info 

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

Exercises will also include functions and features not discussed in this chapter. Refer to [gawk manual: Functions](https://www.gnu.org/software/gawk/manual/gawk.html#Functions) for details.

:::

### Exercise 1 

For the input file <FontIcon icon="iconfont icon-file"/> `scores.csv`, sort the rows in descending order based on the values in the Physics column. Header should be retained as the first line in the output.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Name,Maths,Physics,Chemistry
# Ith,100,100,100
# Cy,97,98,95
# Lin,78,83,80
# Er,56,79,92
# Ort,68,72,66
# Blue,67,46,99
```

@tab Solution

```sh
awk -F, 'NR==1{PROCINFO["sorted_in"] = "@ind_num_desc"; print; next}
        {a[$3]=$0} END{for(k in a) print a[k]}' scores.csv
# Name,Maths,Physics,Chemistry
# Ith,100,100,100
# Cy,97,98,95
# Lin,78,83,80
# Er,56,79,92
# Ort,68,72,66
# Blue,67,46,99
```

:::

### Exercise 2

For the input file <FontIcon icon="iconfont icon-file"/> `nums3.txt`, calculate the square root of numbers and display the results in two different formats as shown below. First, with four digits after the fractional point and then in the scientific notation, again with four digits after the fractional point. Assume that the input has only a single column of positive numbers.

```sh
cat nums3.txt 
# 3.14
# 4201
# 777
# 0323012
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 1.7720
# 64.8151
# 27.8747
# 568.3414

awk ##### add your solution here
# 1.7720e+00
# 6.4815e+01
# 2.7875e+01
# 5.6834e+02
```

@tab Solution

```sh
awk '{printf "%.4f\n", sqrt($0)}' nums3.txt
# 1.7720
# 64.8151
# 27.8747
# 568.3414

awk '{printf "%.4e\n", sqrt($0)}' nums3.txt
# 1.7720e+00
# 6.4815e+01
# 2.7875e+01
# 5.6834e+02
```

:::

### Exercise 3

For the input file `items.txt`, assume space as the field separator. From the second field, remove the second `:` character and the number that follows. Modify the last field by multiplying it by the number that was deleted from the second field.

```sh
cat items.txt
# apple rxg:12:-425 og 6.2
# fig zwt:3.64:12.89e2 ljg 5
# banana ysl:42:3.14 vle 45
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# apple rxg:12 og -2635
# fig zwt:3.64 ljg 6445
# banana ysl:42 vle 141.3
```

@tab Solution

```sh
awk '{split($2, a, /:/); $2=a[1] ":" a[2]; $NF *= a[3]} 1' items.txt
# apple rxg:12 og -2635
# fig zwt:3.64 ljg 6445
# banana ysl:42 vle 141.3
```

:::

### Exercise 4

For the input file `sum.txt`, assume space as the field separator. Replace the second field with the sum of the two numbers embedded in it. The numbers can be positive/negative integers or floating-point numbers but not scientific notation.

```sh
cat sum.txt
# f2:z3 kt//-42\\3.14//tw 5y6
# t5:x7 qr;wq<=>+10{-8764.124}yb u9
# apple:fig 100:32 9j4
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# f2:z3 -38.86 5y6
# t5:x7 -8754.12 u9
# apple:fig 132 9j4
```

@tab Solution

```sh
awk '{patsplit($2, a, /-?[0-9]+(\.[0-9]+)?/); $2=a[1] + a[2]} 1' sum.txt
# f2:z3 -38.86 5y6
# t5:x7 -8754.12 u9
# apple:fig 132 9j4
```

:::

### Exercise 5

For the given input strings, extract portion of the line starting from the matching location specified by the shell variable s till the end of the line. If there is no match, do not print that line. The contents of s should be matched literally.

::: tabs 

@tab:active Question

```sh
s='(a^b)'
echo '3*f + (a^b) - 45' | ##### add your solution here
# (a^b) - 45

s='\&/'
echo 'f\&z\&2.14' | ##### add your solution here
echo 'f\&z\&/2.14' | ##### add your solution here
# \&/2.14
```

@tab Solution

```sh
s='(a^b)'
echo '3*f + (a^b) - 45' | s="$s" awk 'n=index($0, ENVIRON["s"]){print substr($0, n)}'
# (a^b) - 45

s='\&/'
echo 'f\&z\&2.14' | s="$s" awk 'n=index($0, ENVIRON["s"]){print substr($0, n)}' # should be no output for this input
echo 'f\&z\&/2.14' | s="$s" awk 'n=index($0, ENVIRON["s"]){print substr($0, n)}' # but this one has a match
# \&/2.14
```

:::

### Exercise 6

Extract all positive integers preceded by `-` and followed by `:` or `;`. Display the matching portions separated by a newline character.

::: tabs 

@tab:active Question

```sh
s='42 apple-5; fig3; x-83, y-20:-34; f12'
echo "$s" | awk ##### add your solution here
# 5
# 20
# 34
```

@tab Solution

> can also use: `awk -v RS='-[0-9]+[;:]' 'RT{print substr(RT, 2, length(RT)-2)}'`

```sh
echo "$s" | awk '{ while( match($0, /-([0-9]+)[;:]/, m) ){print m[1];
                $0=substr($0, RSTART+RLENGTH)} }'
# 5
# 20
# 34
```

:::

### Exercise 7

For the input file <FontIcon icon="iconfont icon-file"/> `scores.csv`, calculate the average score for each row. Those with average greater than or equal to `80` should be saved in <FontIcon icon="iconfont icon-file"/> `pass.csv` and the rest in <FontIcon icon="iconfont icon-file"/> `fail.csv`. The output files should have the names followed by a tab character, and finally the average score (two decimal points).

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here

cat fail.csv
# Blue    70.67
# Er      75.67
# Ort     68.67
cat pass.csv
# Lin     80.33
# Cy      96.67
# Ith     100.00
```

@tab Solution

```sh
awk -F, 'NR>1{t = ($2+$3+$4)/3; op = sprintf("%s\t%.2f", $1, t);
         if(+t>=80) print op > "pass.csv"; else print op > "fail.csv"}' scores.csv
cat fail.csv
# Blue    70.67
# Er      75.67
# Ort     68.67
cat pass.csv
# Lin     80.33
# Cy      96.67
# Ith     100.00
```

:::

### Exercise 8

For the input file <FontIcon icon="iconfont icon-file"/> `files.txt`, replace lines starting with a space with the output of that line executed as a shell command.

```sh
cat files.txt
# sed -n '2p' addr.txt
# -----------
#  wc -w sample.txt
# ===========
#  awk '{print $1}' table.txt
# -----------
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# How are you
# -----------
# 31 sample.txt
# ===========
# brown
# blue
# yellow
# -----------
```

@tab Solution

```sh
awk '/^ /{system($0); next} 1' files.txt
# How are you
# -----------
# 31 sample.txt
# ===========
# brown
# blue
# yellow
# -----------
```

:::

### Exercise 9

For the input file <FontIcon icon="iconfont icon-file"/> `fw.txt`, format the last column in scientific notation with two digits after the decimal point.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 1.3  rs   90  1.35e-01
# 3.8           6.00e+00
# 5.2  ye       8.24e+00
# 4.2  kt   32  4.51e+01
```

@tab Solution

```sh
awk -v FIELDWIDTHS='14 *' '{printf "%s%.2e\n", $1, $2}' fw.txt
# 1.3  rs   90  1.35e-01
# 3.8           6.00e+00
# 5.2  ye       8.24e+00
# 4.2  kt   32  4.51e+01
```

:::

### Exercise 10

For the input file <FontIcon icon="iconfont icon-file"/> `addr.txt`, display all lines containing e or u but not both.

::: info

Hint — [gawk manual: Bit-Manipulation Functions](https://www.gnu.org/software/gawk/manual/gawk.html#Bitwise-Functions).

:::

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Hello World
# This game is good
# Today is sunny
```

@tab Solution

> can also use: `awk '(/e/ && !/u/) || (!/e/ && /u/)'`

```sh
awk 'xor(/e/, /u/)' addr.txt
# Hello World
# This game is good
# Today is sunny
```

:::

### Exercise 11

For the input file <FontIcon icon="iconfont icon-file"/> `patterns.txt`, filter lines containing `[5]` at the start of a line. The search term should be matched literally.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# [5]*3
```

@tab Solution

```sh
awk 'index($0, "[5]")==1' patterns.txt
# [5]*3
```

:::

### Exercise 12

For the input file <FontIcon icon="iconfont icon-file"/> `table.txt`, uppercase the third field.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# brown bread MAT hair 42
# blue cake MUG shirt -7
# yellow banana WINDOW shoes 3.14
```

@tab Solution

```sh
awk '{$3 = toupper($3)} 1' table.txt
# brown bread MAT hair 42
# blue cake MUG shirt -7
# yellow banana WINDOW shoes 3.14
```

:::

### Exercise 13

For the input files <FontIcon icon="iconfont icon-file"/> `patterns.txt` and <FontIcon icon="iconfont icon-file"/> `sum.txt`, match lines containing the literal value stored in the `s` variable. Assume that the `s` variable has regexp metacharacters.


::: tabs 

@tab:active Question

```sh
s='[5]'
##### add your solution here
# (9-2)*[5]
# [5]*3

s='\\'
##### add your solution here
# f2:z3 kt//-42\\3.14//tw 5y6
```

@tab Solution

```sh
s='[5]'
s="$s" awk 'index($0, ENVIRON["s"])' patterns.txt sum.txt
# (9-2)*[5]
# [5]*3

s='\\'
s="$s" awk 'index($0, ENVIRON["s"])' patterns.txt sum.txt
# f2:z3 kt//-42\\3.14//tw 5y6
```

:::

<TagLinks/>