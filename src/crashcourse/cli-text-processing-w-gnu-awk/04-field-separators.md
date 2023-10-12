---
lang: ko-KR
title: 4. Field separators
description: 🐚Text Processing with GNU awk > 4. Field separators
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 4. Field separators
    content: 4. Field separators
  - property: og:title
    content: 4. Field separators
  - property: og:description
    content: 🐚Text Processing with GNU awk > 4. Field separators
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/04-field-separators.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 4. Field separators
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/field-separators.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

Now that you are familiar with basic `awk` syntax and regular expressions, this chapter will dive deep into field processing. You'll learn how to set input and output field separators, how to use regexps for defining fields and how to work with fixed length fields.

::: info 

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in the examples.

:::


---

## Default field separation

As seen earlier, `awk` automatically splits input into fields which are accessible using `$N` where `N` is the field number you need. You can also pass an expression instead of a numeric literal to specify the field required.

```sh
cat table.txt
# brown bread mat hair 42
# blue cake mug shirt -7
# yellow banana window shoes 3.14
```

::: tabs

@tab:active Case 1

print the fourth field if the first field starts with '`b`'

```sh
awk '$1 ~ /^b/{print $4}' table.txt
# hair
# shirt
```

@tab Case 2

print the field as specified by the value stored in the '`f`' variable

```sh
awk -v f=3 '{print $f}' table.txt
# mat
# mug
# window
```

:::

The `NF` special variable will give you the number of fields for each input line. This is useful when you don't know how many fields are present in the input and you need to process fields from the end.

::: tabs

@tab:active Case 1

print the last field of each input line

```sh
awk '{print $NF}' table.txt
# 42
# -7
# 3.14
```

@tab Case 2

print the last but one field

```sh
awk '{print $(NF-1)}' table.txt
# hair
# shirt
# shoes
```
@tab Case 3

don't forget the parentheses!
this will subtract 1 from the last field and print it

```sh
awk '{print $NF-1}' table.txt
# 41
# -8
# 2.14
```

:::

By default, `awk` does more than split the input on spaces. It splits based on one or more sequence of __space__ or __tab__ or __newline__ characters. In addition, any of these three characters at the start or end of input gets trimmed and won't be part of the field contents. Input containing newline characters will be covered in the [Record separators](05-record-separators.md) chapter.

::: tabs

@tab:active Case 1

```sh
echo '   a   b   c   ' | awk '{print NF}'
# 3
```

@tab Case 2

note that the leading spaces aren't part of the field content

```sh
echo '   a   b   c   ' | awk '{print $1}'
# a
```

@tab Case 3

note that the trailing spaces aren't part of the field content

```sh
echo '   a   b   c   ' | awk '{print $NF "."}'
# c.
```

@tab Case 4

here's another example with tab characters thrown in

```sh
printf '     one \t two\t\t\tthree  ' | awk '{print NF}'
# 3
printf '     one \t two\t\t\tthree  ' | awk '{print $2 "."}'
# two.
```

:::

::: warning 

When passing an expression for field number, floating-point result is acceptable too. The fractional portion is ignored. However, as precision is limited, it could result in rounding instead of truncation.

::: tabs

@tab:active Case 1

```sh
awk 'BEGIN{printf "%.16f\n", 2.999999999999999}'
# 2.9999999999999991
awk 'BEGIN{printf "%.16f\n", 2.9999999999999999}'
# 3.0000000000000000
```

@tab Case 2

> same as: `awk '{print $2}' table.txt`

```sh 
awk '{print $2.999999999999999}' table.txt
# bread
# cake
# banana
```

@tab Case 3

> same as: `awk '{print $3}' table.txt`

```sh
awk '{print $2.9999999999999999}' table.txt
# mat
# mug
# window
```

:::

---

## Input field separator

The most common way to change the default field separator is to use the `-F` command line option. The value passed to the option will be treated as a string literal and then converted to a regexp. For now, here are some examples without any special regexp characters.

::: tabs

@tab:active Case 1

use '`:`' as the input field separator

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: '{print $1}'
# goal
echo 'goal:amazing:whistle:kwality' | awk -F: '{print $NF}'
# kwality
```

@tab Case 2

use quotes to avoid clashes with shell special characters

```sh
echo 'one;two;three;four' | awk -F';' '{print $3}'
# three
```

@tab Case 3

first and last fields will have empty string as their values

```sh
echo '=a=b=c=' | awk -F= '{print $1 "[" $NF "]"}'
# []
```

@tab Case 4

difference between empty lines and lines without field separator

```sh
printf '\nhello\napple,banana\n' | awk -F, '{print NF}'
# 0
# 1
# 2
```

:::

You can also directly set the special `FS` variable to change the input field separator. This can be done from the command line using `-v` option or within the code blocks.

::: tabs

@tab:active Case 1

```sh
echo 'goal:amazing:whistle:kwality' | awk -v FS=: '{print $2}'
# amazing
```

@tab Case 2

field separator can be multiple characters too

```sh
echo '1e4SPT2k6SPT3a5SPT4z0' | awk 'BEGIN{FS="SPT"} {print $3}'
# 3a5
```

:::

If you wish to split the input as individual characters, use an empty string as the field separator.

::: tabs

@tab:active Case 1

note that the space between `-F` and `''` is necessary here

```sh
echo 'apple' | awk -F '' '{print $1}'
# a
echo 'apple' | awk -v FS= '{print $NF}'
# e
```

@tab Case 2

depending upon the locale, you can work with multibyte characters too

```sh
echo 'αλεπού' | awk -v FS= '{print $3}'
# ε
```

:::

Here are some examples with regexp based field separators. The value passed to `-F` or `FS` is treated as a string and then converted to a regexp. So, you'll need `\\` instead of `\` to mean a backslash character. The good news is that for single characters that are also regexp metacharacters, they'll be treated literally and you do not need to escape them.

::: tabs

@tab:active Case 1

```sh
echo 'Sample123string42with777numbers' | awk -F'[0-9]+' '{print $2}'
# string
echo 'Sample123string42with777numbers' | awk -F'[a-zA-Z]+' '{print $2}'
# 123
```

@tab Case 2

note the use of `\\W` to indicate `\W`

```sh
echo 'load;err_msg--\ant,r2..not' | awk -F'\\W+' '{print $3}'
# ant
```

@tab Case 3

> same as: `awk -F'\\.' '{print $2}'`

```sh
echo 'hi.bye.hello' | awk -F. '{print $2}'
# bye
```

@tab Case 4

count the number of vowels for each input line
note that empty lines will give `s` in the output

```sh
printf 'cool\nnice car\n' | awk -F'[aeiou]' '{print NF-1}'
# 2
# 3
```

:::

::: warning 

The default value of `FS` is a single space character. So, if you set the input field separator to a single space, then it will be the same as if you are using the default split discussed in the previous section. If you want to override this behavior, you can use space inside a character class.


::: tabs

@tab:active Case 1

> same as: `awk '{print NF}'`

```sh
echo '   a   b   c   ' | awk -F' ' '{print NF}'
# 3
```

@tab Case 2

there are 12 space characters, thus 13 fields

```sh
echo '   a   b   c   ' | awk -F'[ ]' '{print NF}'
# 13
```

:::


If `IGNORECASE` is set, it will affect field separation as well. Except when the field separator is a single character, which can be worked around by using a character class.

::: tabs

@tab:active Case 1

```sh
echo 'RECONSTRUCTED' | awk -F'[aeiou]+' -v IGNORECASE=1 '{print $NF}'
# D
```

@tab Case 2

when `FS` is a single character

```sh
echo 'RECONSTRUCTED' | awk -F'e' -v IGNORECASE=1 '{print $1}'
# RECONSTRUCTED
echo 'RECONSTRUCTED' | awk -F'[e]' -v IGNORECASE=1 '{print $1}'
# R
```

:::

---

## Output field separator

The `OFS` special variable controls the output field separator. `OFS` is used as the string between multiple arguments passed to the `print` function. It is also used whenever `$0` has to be reconstructed as a result of field contents being modified. The default value for `OFS` is a single space character, just like `FS`. There is no equivalent command line option though, you'll have to change `OFS` directly.

::: tabs

@tab:active Case 1

print the first and third fields, `OFS` is used to join these values
note the use of `,` to separate print arguments

```sh
awk '{print $1, $3}' table.txt
# brown mat
# blue mug
# yellow window
```

@tab Case 2

> same `FS` and `OFS`

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=: '{print $2, $NF}'
# amazing:kwality
echo 'goal:amazing:whistle:kwality' | awk 'BEGIN{FS=OFS=":"} {print $2, $NF}'
# amazing:kwality
```

@tab Case 3

different values for `FS` and `OFS`

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=- '{print $2, $NF}'
# amazing-kwality
```

:::

Here are some examples for changing field contents and then printing `$0`.

::: tabs

@tab:active Case 1

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=: '{$2 = 42} 1'
# goal:42:whistle:kwality
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=, '{$2 = 42} 1'
# goal,42,whistle,kwality
```

@tab Case 2

recall that spaces at the start/end gets trimmed for default F`S

```sh
echo '   a   b   c   ' | awk '{$NF = "last"} 1'
# a b last
```

:::

Sometimes you want to print the contents of `$0` with the new `OFS` value but field contents aren't being changed. In such cases, you can assign a field value to itself to force the reconstruction of `$0`.

::: tabs

@tab:active Case 1

no change because there was no trigger to rebuild `$0`

```sh
echo 'Sample123string42with777numbers' | awk -F'[0-9]+' -v OFS=, '1'
# Sample123string42with777numbers
```

@tab Case 2

assign a field to itself in such cases

```sh
echo 'Sample123string42with777numbers' | awk -F'[0-9]+' -v OFS=, '{$1=$1} 1'
# Sample,string,with,numbers
```

:::

::: info 

If you need to set the same input and output field separator, you can write a more concise one-liner using brace expansion. Here are some examples:

::: tabs

@tab:active Case 1

```sh
echo -v{,O}FS=:
# -vFS=: -vOFS=:
```

@tab Case 2

```sh
echo 'goal:amazing:whistle:kwality' | awk -v{,O}FS=: '{$2 = 42} 1'
# goal:42:whistle:kwality
```

@tab Case 3

```sh
echo 'goal:amazing:whistle:kwality' | awk '{$2 = 42} 1' {,O}FS=:
# goal:42:whistle:kwality
```

:::

However, this is not commonly used and doesn't save too many characters to be preferred over explicit assignment.

---

## Manipulating `NF`

Changing the value of `NF` will rebuild `$0` as well. Here are some examples:

::: tabs

@tab:active Case 1

reducing fields

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=, '{NF=2} 1'
# goal,amazing
```

@tab Case 2

increasing fields

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=: '{$(NF+1)="sea"} 1'
# goal:amazing:whistle:kwality:sea
```

@tab Case 3

empty fields will be created as needed

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=: '{$8="go"} 1'
# goal:amazing:whistle:kwality::::go
```

:::

::: warning 

Assigning `NF` to `0` will delete all the fields. However, a negative value will result in an error.

```sh
echo 'goal:amazing:whistle:kwality' | awk -F: -v OFS=: '{NF=-1} 1'
# awk: cmd. line:1: (FILENAME=- FNR=1) fatal: NF set to negative value
```

::: 

---

## FPAT

The FS variable allows you to define the input field separator. In contrast, FPAT (field pattern) allows you to define what should the fields be made up of.

```sh
```

::: tabs

@tab:active Case 1

one or more consecutive digits

```sh
s='Sample123string42with777numbers'
echo "$s" | awk -v FPAT='[0-9]+' '{print $2}'
# 42
```

@tab Case 2

whole words made up of lowercase alphabets and digits only

```sh
s='coat Bin food tar12 best Apple fig_42'
echo "$s" | awk -v FPAT='\\<[a-z0-9]+\\>' -v OFS=, '{$1=$1} 1'
# coat,food,tar12,best
```

@tab Case 3

get the first double quoted item

```sh
s='items: "apple" and "mango"'
echo "$s" | awk -v FPAT='"[^"]+"' '{print $1}'
# "apple"
```

:::

`FPAT` is often used for CSV input where fields can contain embedded delimiter characters. For example, a field content `"fox,42"` when `s` is the delimiter.

> simply using `,` as separator isn't sufficient

```sh
s='eagle,"fox,42",bee,frog'
echo "$s" | awk -F, '{print $2}'
# "fox
```

For such simpler CSV input, FPAT helps to define fields as starting and ending with double quotes or containing non-comma characters.

> `*` is used instead of `+` to allow empty fields

```sh
echo "$s" | awk -v FPAT='"[^"]*"|[^,]*' '{print $2}'
# "fox,42"
```

::: warning 

The above will not work for all kinds of CSV files, for example if fields contain escaped double quotes, newline characters, etc. See [stackoverflow: What's the most robust way to efficiently parse CSV using awk?](https://stackoverflow.com/q/45420535/4082052) and [<FontIcon icon="iconfont icon-github"/> dbro/csvquote](https://github.com/dbro/csvquote) for such cases. You could also use other programming languages such as Perl, Python, Ruby, etc which come with standard CSV parsing libraries or have easy access to third party solutions. There are also specialized command line tools such as [<FontIcon icon="iconfont icon-github"/> BurntSushi/xsv](https://github.com/BurntSushi/xsv).

:::

::: info 

A proper CSV support is planned for a future version. You can also check out [<FontIcon icon="iconfont icon-github"/> ezrosent/frawk](https://github.com/ezrosent/frawk), which is mostly similar to the `awk` command but also supports CSV parsing. [<FontIcon icon="iconfont icon-github"/> benhoyt/goawk](https://github.com/benhoyt/goawk) is another implementation with CSV support.

:::

If `IGNORECASE` is set, it will affect field matching as well. Unlike `FS`, there is no different behavior for a single character pattern.

> count number of 'e' in the input string

```sh
echo 'Read Eat Sleep' | awk -v FPAT='e' '{print NF}'
# 3
echo 'Read Eat Sleep' | awk -v IGNORECASE=1 -v FPAT='e' '{print NF}'
# 4
echo 'Read Eat Sleep' | awk -v IGNORECASE=1 -v FPAT='[e]' '{print NF}'
# 4
```

---

## FIELDWIDTHS

`FIELDWIDTHS` is another feature where you get to define field contents. As indicated by the name, you have to specify the number of characters for each field. This method is useful to process fixed width data.

```sh
cat items.txt
# apple   fig banana
# 50      10  200
```

::: tabs

@tab:active Case 1

here field widths have been assigned such that
extra spaces are placed at the end of each field

```sh
awk -v FIELDWIDTHS='8 4 6' '{print $2}' items.txt
# fig 
# 10  
```

@tab Case 2

note that the field contents will include the spaces as well

```sh
awk -v FIELDWIDTHS='8 4 6' '{print "[" $2 "]"}' items.txt
# [fig ]
# [10  ]
```

:::

You can optionally prefix a field width with number of characters to be ignored.

first field is 5 characters
then 3 characters are ignored and 3 characters for the second field
then 1 character is ignored and 6 characters for the third field

::: tabs

@tab:active Case 1

```sh
awk -v FIELDWIDTHS='5 3:3 1:6' '{print "[" $1 "]"}' items.txt
# [apple]
# [50   ]
```

@tab Case 2

```sh
awk -v FIELDWIDTHS='5 3:3 1:6' '{print "[" $2 "]"}' items.txt
# [fig]
# [10 ]
```

:::

If an input line length exceeds the total width specified, the extra characters will simply be ignored. If you wish to access those characters, you can use `*` to represent the last field. See [gawk manual: FIELDWIDTHS](https://www.gnu.org/software/gawk/manual/gawk.html#Fields-with-fixed-data) for more such corner cases.

::: tabs

@tab:active Case 1

```sh
awk -v FIELDWIDTHS='5 *' '{print "[" $1 "]"}' items.txt
# [apple]
# [50   ]
```

@tab Case 2

```sh
awk -v FIELDWIDTHS='5 *' '{print "[" $2 "]"}' items.txt
# [   fig banana]
# [   10  200]
```

:::

---

## Summary

Working with fields is the most popular feature of `awk`. This chapter discussed various ways in which you can split the input into fields and manipulate them. There are many more examples to be discussed related to fields in the coming chapters. I'd highly suggest to also read through [gawk manual: Fields](https://www.gnu.org/software/gawk/manual/gawk.html#Fields) for more details regarding field processing.

Next chapter will discuss various ways to use record separators and related special variables.

---


## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

For the input file <FontIcon icon="iconfont icon-file"/>`brackets.txt`, extract only the contents between `()` or `)(` from each input line. Assume that `()` characters will be present only once every line.

```sh
cat brackets.txt
# foo blah blah(ice) 123 xyz$ 
# (almond-pista) choco
# yo )yoyo( yo
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# ice
# almond-pista
# yoyo
```

@tab Answer

```sh
awk -F'[()]' '{print $2}' brackets.txt
# ice
# almond-pista
# yoyo
```

:::

### Exercise 2

For the input file <FontIcon icon="iconfont icon-file"/>`scores.csv`, extract Name and Physics fields in the format shown below.

```sh
cat scores.csv
# Name,Maths,Physics,Chemistry
# Blue,67,46,99
# Lin,78,83,80
# Er,56,79,92
# Cy,97,98,95
# Ort,68,72,66
# Ith,100,100,100
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Name:Physics
# Blue:46
# Lin:83
# Er:79
# Cy:98
# Ort:72
# Ith:100
```

@tab Answer

> can also use: `awk -F, '{print $1 ":" $3}' scores.csv`

```sh
awk -F, -v OFS=: '{print $1, $3}' scores.csv
# Name:Physics
# Blue:46
# Lin:83
# Er:79
# Cy:98
# Ort:72
# Ith:100
```

:::

### Exercise 3

For the input file <FontIcon icon="iconfont icon-file"/>`scores.csv`, display names of those who've scored above 70 in Maths.

```sh
cat scores.csv
# Name,Maths,Physics,Chemistry
# Blue,67,46,99
# Lin,78,83,80
# Er,56,79,92
# Cy,97,98,95
# Ort,68,72,66
# Ith,100,100,100
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Lin
# Cy
# Ith
```

@tab Answer

```sh
awk -F, '+$2>70{print $1}' scores.csv
# Lin
# Cy
# Ith
```

:::


### Exercise 4

Display the number of word characters for the given inputs. Word definition here is same as used in regular expressions. Can you construct a solution with gsub and one without substitution functions?

::: tabs 

@tab:active Question

```sh
echo 'hi there' | awk ##### add your solution here
# 7

echo 'u-no;co%."(do_12:as' | awk ##### add your solution here
# 12
```

@tab Answer

```sh
echo 'hi there' | awk '{print gsub(/\w/, "")}'
# 7

echo 'u-no;co%."(do_12:as' | awk -F'\\w' '{print NF-1}'
# 12
```

__Note__ that the first solution will print `0` for lines not containing any word character, while the second one will print `-1`. You can use `print NF ? NF-1 : 0` to cover such corner cases.

:::

### Exercise 5

For the input file <FontIcon icon="iconfont icon-file"/>`quoted.txt`, extract the first and third sequence of characters surrounded by double quotes and display them in the format shown below. Solution shouldn't use substitution functions.

```sh
cat quoted.txt
# 1 "grape" and "mango" and "guava"
# ("a 1""b""c-2""d")
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# "grape","guava"
# "a 1","c-2"
```

@tab Answer

```sh
awk -v FPAT='"[^"]+"' -v OFS=, '{print $1, $3}' quoted.txt
# "grape","guava"
# "a 1","c-2"
```

:::

### Exercise 6

For the input file <FontIcon icon="iconfont icon-file"/>`varying_fields.txt`, construct a solution to get the output shown below. Solution shouldn't use substitution functions.

```sh
cat varying_fields.txt
# hi,bye,there,was,here,to
# 1,2,3,4,5
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# hi,bye,to
# 1,2,5
```

@tab Answer

```sh
awk -F, -v OFS=, '{$3=$NF; NF=3} 1' varying_fields.txt
# hi,bye,to
# 1,2,5
```

:::

### Exercise 7

Transform the given input file <FontIcon icon="iconfont icon-file"/>`fw.txt` to get the output as shown below. If a field is empty (_i.e._ contains only space characters), replace it with NA.

```sh
cat fw.txt
# 1.3  rs   90  0.134563
# 3.8           6
# 5.2  ye       8.2387
# 4.2  kt   32  45.1
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 1.3,rs,0.134563
# 3.8,NA,6
# 5.2,ye,8.2387
# 4.2,kt,45.1
```

@tab Answer

```sh
awk -v FIELDWIDTHS='3 2:2 3:2 2:*' -v OFS=, '$2=="  "{$2="NA"} {print $1, $2, $4}' fw.txt
1.3,rs,0.134563
3.8,NA,6
5.2,ye,8.2387
4.2,kt,45.1
```

:::

### Exercise 8

Display only the third and fifth characters from each input line as shown below.

::: tabs 

@tab:active Question

```sh
printf 'restore\ncat one\ncricket' | awk ##### add your solution here
# so
# to
# ik
```

@tab Answer

> can also use: `awk '{print substr($0, 3, 1) substr($0, 5, 1)}'`

```sh
printf 'restore\ncat one\ncricket' | awk -F '' -v OFS= '{print $3, $5}'
# so
# to
# ik
```

:::

### Exercise 9

The <FontIcon icon="iconfont icon-file"/>`fields.txt` file has fields separated by the `:` character. Delete `:` and the last field if there is a digit character anywhere before the last field. Solution shouldn't use substitution functions.

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

```sh
awk -F: -v OFS=: '/[0-9].*:/{NF--} 1' fields.txt
# 42
# twelve:a2b
# we:be:he:0:a:b
# apple:banana-42:cherry
# dragon:unicorn:centaur
```

:::

### Exercise 10

Retain only the first three fields for the given sample string that uses `^` as the input field separator. Use `,` as the output field separator.

::: tabs 

@tab:active Question

```sh
echo 'sit^eat^very^eerie^near' | awk ##### add your solution here
# sit,eat,very
```

@tab Answer

```sh
echo 'sit^eat^very^eerie^near' | awk -F'^' -v OFS=, '{NF=3} 1'
# sit,eat,very
```

:::

### Exercise 11

The sample string shown below uses cat as the field separator (irrespective of case). Use space as the output field separator and add `42` as the last field.

::: tabs 

@tab:active Question

```sh
s='applecatfigCaT12345cAtbanana'
echo "$s" | awk ##### add your solution here
# apple fig 12345 banana 42
```

@tab Answer

```sh
s='applecatfigCaT12345cAtbanana'
echo "$s" | awk -F'cat' -v IGNORECASE=1 '{$(NF+1)=42} 1'
# apple fig 12345 banana 42
```

:::

### Exercise 12

For the input file <FontIcon icon="iconfont icon-file"/>`sample.txt`, filter lines containing 6 or more lowercase vowels.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# No doubt you like it too
# Much ado about nothing
```

@tab Answer

```sh
awk -F'[aeiou]' 'NF>6' sample.txt
# No doubt you like it too
# Much ado about nothing
```

:::

### Exercise 13

The input file <FontIcon icon="iconfont icon-file"/>`concat.txt` has contents of various files preceded by a line starting with `###`. Replace such sequence of characters with an incrementing integer value (starting with `1`) in the format shown below.


::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 1) addr.txt
# How are you
# This game is good
# Today is sunny
# 2) broken.txt
# top
# 1234567890
# bottom
# 3) sample.txt
# Just do-it
# Believe it
# 4) mixed_fs.txt
# pink blue white yellow
# car,mat,ball,basket
```

@tab Answer

```sh
awk '$1=="###"{$1 = ++c ")"} 1' concat.txt
# 1) addr.txt
# How are you
# This game is good
# Today is sunny
# 2) broken.txt
# top
# 1234567890
# bottom
# 3) sample.txt
# Just do-it
# Believe it
# 4) mixed_fs.txt
# pink blue white yellow
# car,mat,ball,basket
```

:::
