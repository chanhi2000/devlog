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

---

## Paragraph mode

As a special case, when `RS` is set to an empty string, one or more consecutive empty lines is used as the input record separator. Consider the below sample file:

```sh
cat para.txt
# Hello World
# 
# Hi there
# How are you
# 
# Just do-it
# Believe it
# 
# banana
# papaya
# mango
# 
# Much ado about nothing
# He he he
# Adios amigo
```

Here's an example of processing input paragraph wise:

::: tabs

@tab:active Case 1

print all paragraphs containing '`do`'
note that there'll be an empty line after the last record

```sh
awk -v RS= -v ORS='\n\n' '/do/' para.txt
# Just do-it
# Believe it
# 
# Much ado about nothing
# He he he
# Adios amigo
```

:::

The empty line at the end is a common problem when dealing with custom record separators. You could either process the output further to remove it or add logic to handle the issue in `awk` itself. Here's one possible workaround for the previous example:

::: tabs

@tab:active Case 1

here ORS is left as the default newline character
uninitialized variable 's' will be empty for the first match
afterwards, 's' will provide the empty line separation

```sh
awk -v RS= '/do/{print s $0; s="\n"}' para.txt
# Just do-it
# Believe it
# 
# Much ado about nothing
# He he he
# Adios amigo
```

:::

Paragraph mode is not the same as using `RS='\n\n+'` because awk does a few more operations when `RS` is empty. See [gawk manual: multiline records](https://www.gnu.org/software/gawk/manual/html_node/Multiple-Line.html#Multiple-Line) for details. Important points are quoted below and illustrated with examples.

::: info

However, there is an important difference between `RS = ""` and `RS = "\n\n+"`. In the first case, leading newlines in the input data file are ignored

:::

```sh
s='\n\n\na\nb\n\n12\n34\n\nhi\nhello\n'
```

::: tabs 

paragraph mode

@tab:active Case 1

```sh
printf '%b' "$s" | awk -v RS= -v ORS='\n---\n' 'NR<=2'
# a
# b
# ---
# 12
# 34
# ---
```

@tab Case 2

`RS` is `'\n\n+'` instead of paragraph mode

```sh
printf '%b' "$s" | awk -v RS='\n\n+' -v ORS='\n---\n' 'NR<=2'
# 
# ---
# a
# b
# ---
```

:::

::: info

and if a file ends without extra blank lines after the last record, the final newline is removed from the record. In the second case, this special processing is not done.

:::

```sh
s='\n\n\na\nb\n\n12\n34\n\nhi\nhello\n'
```

::: tabs

@tab:active Case 1

paragraph mode

```sh
printf '%b' "$s" | awk -v RS= -v ORS='\n---\n' 'END{print}'
# hi
# hello
# ---
```

@tab Case 2

`RS` is `'\n\n+'` instead of paragraph mode

```sh
printf '%b' "$s" | awk -v RS='\n\n+' -v ORS='\n---\n' 'END{print}'
# hi
# hello
# 
# ---
```

:::

::: info

When `RS` is set to the empty string and `FS` is set to a single character, the newline character always acts as a field separator. This is in addition to whatever field separations result from `FS`. When `FS` is the null string (`""`) or a regexp, this special feature of `RS` does not apply. It does apply to the default field separator of a single space: `FS = " "`

:::


```sh
s='a:b\nc:d\n\n1\n2\n3'
```

::: tabs

@tab:active Case 1

`FS` is a single character in paragraph mode

```sh
printf '%b' "$s" | awk -F: -v RS= -v ORS='\n---\n' '{$1=$1} 1'
# a b c d
# ---
# 1 2 3
# ---
```

@tab Case 2

`FS` is a regexp in paragraph mode

```sh
printf '%b' "$s" | awk -F'[:]' -v RS= -v ORS='\n---\n' '{$1=$1} 1'
# a b
# c d
# ---
# 1
# 2
# 3
# ---
```

@tab Case 3

`FS` is a single character and `RS` is `'\n\n+'` instead of paragraph mode

```sh
printf '%b' "$s" | awk -F: -v RS='\n\n+' -v ORS='\n---\n' '{$1=$1} 1'
# a b
# c d
# ---
# 1
# 2
# 3
# ---
```

:::

---

## NR vs FNR

There are two special variables related to record numbering. You've seen NR earlier in the chapter, but here are some more examples.

::: tabs

@tab:active Case 1

> same as: `head -n2`

```sh
seq 5 | awk 'NR<=2'
# 1
# 2
```

@tab Case 2

> same as: `tail -n1`

```sh
awk 'END{print}' table.txt
# yellow banana window shoes 3.14
```

@tab Case 3

change the first field content only for the second line

```sh
awk 'NR==2{$1="green"} 1' table.txt
# brown bread mat hair 42
# green cake mug shirt -7
# yellow banana window shoes 3.14
```

:::

All the examples with `NR` so far has been with a single file input. If there are multiple file inputs, then you can choose between `NR` and the second special variable `FNR`. The difference is that `NR` contains total records read so far whereas `FNR` contains record number of only the current file being processed. Here are some examples to show them in action. You'll see more examples in later chapters as well.

::: tabs

@tab:active Case 1

```sh
awk -v OFS='\t' 'BEGIN{print "NR", "FNR", "Content"}
                   {print NR, FNR, $0}' report.log table.txt
# NR      FNR     Content
# 1       1       blah blah Error: second record starts
# 2       2       something went wrong
# 3       3       some more details Error: third record
# 4       4       details about what went wrong
# 5       1       brown bread mat hair 42
# 6       2       blue cake mug shirt -7
# 7       3       yellow banana window shoes 3.14
```

@tab Case 2

> same as: `head -q -n1`

```sh
awk 'FNR==1' report.log table.txt
# blah blah Error: second record starts
# brown bread mat hair 42
```

:::

For large input files, use `exit` to avoid unnecessary record processing.

::: tabs

@tab:active Case 1

```sh
seq 3542 4623452 | awk 'NR==2452{print; exit}'
# 5993
seq 3542 4623452 | awk 'NR==250; NR==2452{print; exit}'
# 3791
# 5993
```

@tab Case 2

here is a sample time comparison

```sh
time seq 3542 4623452 | awk 'NR==2452{print; exit}' > f1
# real    0m0.004s
time seq 3542 4623452 | awk 'NR==2452' > f2
# real    0m0.395s
```

:::

---

## Summary

This chapter showed you how to change the way input content is split into records and how to set the string to be appended when `print` is used. The paragraph mode is useful for processing multiline records separated by empty lines. You also learned two special variables related to record numbers and when to use them.

So far, you've used `awk` to manipulate file content without modifying the source file. The next chapter will discuss how to write back the changes to the original input files.

---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1


The input file <FontIcon icon="iconfont icon-file"/>`jumbled.txt` consists of words separated by various delimiters. Display all words that contain `an` or `at` or `in` or `it`, one per line.


```sh
cat jumbled.txt
# overcoats;furrowing-typeface%pewter##hobby
# wavering:concession/woof\retailer
# joint[]seer{intuition}titanic
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# overcoats
# furrowing
# wavering
# joint
# intuition
# titanic
```

@tab Answer

```sh
awk -v RS='\\W+' '/[ai][nt]/' jumbled.txt
# overcoats
# furrowing
# wavering
# joint
# intuition
# titanic
```

:::

### Exercise 2

Emulate `paste -sd`, with `awk`.

```sh
paste -sd, addr.txt
# Hello World,How are you,This game is good,Today is sunny,12345,You are funny
```

::: tabs

@tab:active Question

this command joins all input lines with the '`,`' character

make sure there's no '`,`' at end of the line and that there's a newline character at the end of the line

```sh
awk ##### add your solution here
# Hello World,How are you,This game is good,Today is sunny,12345,You are funny
```

@tab Answer

```sh
awk -v ORS= 'NR>1{print ","} 1; END{print "\n"}' addr.txt 
# Hello World,How are you,This game is good,Today is sunny,12345,You are funny
```

:::

::: tabs 

@tab:active Question

if there's only one line in input, again make sure there's no trailing '`,`'

```sh 
printf 'fig' | paste -sd,
# fig
printf 'fig' | awk ##### add your solution here
# fig
```

@tab Answer

```sh
printf 'fig' | paste -sd,
# fig
printf 'fig' | awk -v ORS= 'NR>1{print ","} 1; END{print "\n"}'
# fig
```

:::

### Exercise 3

For the input file <FontIcon icon="iconfont icon-file"/> `scores.csv`, add another column named __GP__ which is calculated out of 100 by giving 50% weightage to Maths and 25% each for Physics and Chemistry.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# Name,Maths,Physics,Chemistry,GP
# Blue,67,46,99,69.75
# Lin,78,83,80,79.75
# Er,56,79,92,70.75
# Cy,97,98,95,96.75
# Ort,68,72,66,68.5
# Ith,100,100,100,100
```

@tab Answer

```sh
awk -F, -v OFS=, '{$(NF+1) = NR==1 ? "GP" : ($2/2 + ($3+$4)/4)} 1' scores.csv
# Name,Maths,Physics,Chemistry,GP
# Blue,67,46,99,69.75
# Lin,78,83,80,79.75
# Er,56,79,92,70.75
# Cy,97,98,95,96.75
# Ort,68,72,66,68.5
# Ith,100,100,100,100
```

:::

### Exercise 4

For the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`, extract paragraphs containing `do` and exactly two lines.

```sh
cat sample.txt
# Hello World
# 
# Good day
# How are you
# 
# Just do-it
# Believe it
# 
# Today is sunny
# Not a bit funny
# No doubt you like it too
# 
# Much ado about nothing
# He he he
```

::: tabs 

@tab:active Question

note that there's no extra empty line at the end of the output

```sh
awk ##### add your solution here
# Just do-it
# Believe it
# 
# Much ado about nothing
# He he he
```

@tab Answer

```sh
awk -F'\n' -v RS= 'NF==2 && /do/{print s $0; s="\n"}' sample.txt
# Just do-it
# Believe it
# 
# Much ado about nothing
# He he he
```

:::

### Exercise 5

For the input file <FontIcon icon="iconfont icon-file"/> `sample.txt`, change each paragraph to a single line by joining lines using `.` and a space character as the separator. Also, add a final `.` to each paragraph.

::: tabs 

@tab:active Question

note that there's no extra empty line at the end of the output

```sh
awk ##### add your solution here
# Hello World.
# 
# Good day. How are you.
# 
# Just do-it. Believe it.
# 
# Today is sunny. Not a bit funny. No doubt you like it too.
# 
# Much ado about nothing. He he he.
```

@tab Answer

```sh
awk 'BEGIN{FS="\n"; OFS=". "; RS=""} {$NF=$NF "."; print s $0; s="\n"}' sample.txt
# Hello World.
# 
# Good day. How are you.
# 
# Just do-it. Believe it.
# 
# Today is sunny. Not a bit funny. No doubt you like it too.
# 
# Much ado about nothing. He he he.
```

:::

### Exercise 6

The various input/output separators can be changed dynamically and comes into effect during the next input/output operation. For the input file <FontIcon icon="iconfont icon-file"/> `mixed_fs.txt`, retain only the first two fields from each input line. The field separators should be space for the first two lines and `,` for the rest of the lines.

```sh
cat mixed_fs.txt
# rose lily jasmine tulip
# pink blue white yellow
# car,mat,ball,basket
# green,brown,black,purple
# apple,banana,cherry
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# rose lily
# pink blue
# car,mat
# green,brown
# apple,banana
```

@tab Answer

```sh
awk 'NF=2; NR==2{FS=OFS=","}' mixed_fs.txt
# rose lily
# pink blue
# car,mat
# green,brown
# apple,banana
```

:::

### Exercise 7

For the input file <FontIcon icon="iconfont icon-file"/> `table.txt`, print other than the second line.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# brown bread mat hair 42
# yellow banana window shoes 3.14
```

@tab Answer

```sh
awk 'NR!=2' table.txt
# brown bread mat hair 42
# yellow banana window shoes 3.14
```

:::

### Exercise 8

For the <FontIcon icon="iconfont icon-file"/> `table.txt` file, print only the line number for lines containing `air` or `win`.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 1
# 3
```

@tab Answer

```sh
awk '/air|win/{print NR}' table.txt
# 1
# 3
```

:::

### Exercise 9

For the input file <FontIcon icon="iconfont icon-file"/> `table.txt`, calculate the sum of numbers in the last column, excluding the second line.


::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# 45.14
```

@tab Answer

```sh
awk 'NR!=2{sum += $NF} END{print sum}' table.txt
# 45.14
```

:::

### Exercise 10

Print the second and fourth line for every block of five lines.


::: tabs 

@tab:active Question

```sh
seq 15 | awk ##### add your solution here
# 2
# 4
# 7
# 9
# 12
# 14
```

@tab Answer

> can also use: `seq 15 | awk 'BEGIN{a[2]; a[4]} (NR%5) in a'`

```sh
seq 15 | awk 'NR%5 == 2 || NR%5 == 4'
# 2
# 4
# 7
# 9
# 12
# 14
```

:::

### Exercise 11

For the input file <FontIcon icon="iconfont icon-file"/> `odd.txt`, surround all whole words with `{}` that start and end with the same word character. This is a contrived exercise to make you use the `RT` variable (`sed -E 's/\b(\w)(\w*\1)?\b/{&}/g' odd.txt` would be a simpler solution).

```sh
cat odd.txt
# -oreo-not:a _a2_ roar<=>took%22
# RoaR to wow-
```

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# -{oreo}-not:{a} {_a2_} {roar}<=>took%{22}
# {RoaR} to {wow}-
```

@tab Answer

```sh
awk -F '' -v RS='\\W+' -v ORS= '$0 && $1==$NF{$0 = "{" $0 "}"} {print $0 RT}' odd.txt
# -{oreo}-not:{a} {_a2_} {roar}<=>took%{22}
# {RoaR} to {wow}-
```

:::

### Exercise 12

Print only the second field of the third line, if any, from these input files: <FontIcon icon="iconfont icon-file"/> `addr.txt`, <FontIcon icon="iconfont icon-file"/> `sample.txt` and <FontIcon icon="iconfont icon-file"/> `copyright.txt`. Consider space as the field separator.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# game
# day
# bla
```

@tab Answer

```sh
awk 'FNR==3{print $2}' addr.txt sample.txt copyright.txt
# game
# day
# bla
```

:::

### Exercise 13

The input file <FontIcon icon="iconfont icon-file"/> `ip.txt` has varying amount of empty lines between the records, change them to be always two empty lines. Also, remove the empty lines at the start and end of the file.

::: tabs 

@tab:active Question

```sh
awk ##### add your solution here
# hello
# 
# 
# world
# 
# 
# apple
# banana
# cherry
# 
# 
# tea coffee
# chocolate
```

@tab Answer

```sh
awk -v RS= '{print s $0; s="\n\n"}' ip.txt
# hello
# 
# 
# world
# 
# 
# apple
# banana
# cherry
# 
# 
# tea coffee
# chocolate
```

:::

### Exercise 14

The sample string shown below uses `cat` as the record separator (irrespective of case). Display only the even numbered records separated by a single empty line.

::: tabs 

@tab:active Question

```sh
s='applecatfigCaT12345cAtbananaCATguava:caT:mangocat3'
echo "$s" | awk ##### add your solution here
# fig
# 
# banana
# 
# :mango
```

@tab Answer

```sh
s='applecatfigCaT12345cAtbananaCATguava:caT:mangocat3'
echo "$s" | awk -v RS='cat' -v IGNORECASE=1 'NR%2==0{print s $0; s="\n"}'
# fig
# 
# banana
# 
# :mango
```

:::

### Exercise 15

Input has the ASCII NUL character as the record separator. Change it to dot and newline characters as shown below.

::: tabs 

@tab:active Question

```sh
printf 'apple\npie\0banana\ncherry\0' | awk ##### add your solution here
# apple
# pie.
# banana
# cherry.
```

@tab Answer

```sh
printf 'apple\npie\0banana\ncherry\0' | awk -v RS='\0' -v ORS='.\n' '1'
# apple
# pie.
# banana
# cherry.
```

:::

<TagLinks/>