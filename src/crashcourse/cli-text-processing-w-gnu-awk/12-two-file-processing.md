---
lang: ko-KR
title: 12. Two file processing
description: 🐚Text Processing with GNU awk > 12. Two file processing
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 12. Two file processing
    content: 12. Two file processing
  - property: og:title
    content: 12. Two file processing
  - property: og:description
    content: 🐚Text Processing with GNU awk > 12. Two file processing
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/12-two-file-processing.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 12. Two file processing
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/two-file-processing.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

This chapter focuses on solving problems which depend upon the contents of two or more files. These are usually based on comparing records and fields. Sometimes, record number plays a role too. You'll also learn about the `getline` built-in function.

::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in 
the examples.

:::

---

## Comparing records

Consider the following input files which will be compared line wise to get the common and unique lines.

```sh
cat colors_1.txt
# teal
# light blue
# green
# yellow
cat colors_2.txt
# light blue
# black
# dark green
# yellow
```

The _key_ features used in the solution below:

- For two files as input, `NR==FNR` will be `true` only when the first file is being processed
- `next` will skip rest of the script and fetch the next record
- `a[$0]` by itself is a valid statement. It will create an uninitialized element in array `a` with `$0` as the key (assuming the key doesn't exist yet)
- `$0` in a checks if the given string (`$0` here) exists as a key in the array `a`

::: tabs

@tab:active Case 1

common lines

> same as: `grep -Fxf colors_1.txt colors_2.txt`

```sh
awk 'NR==FNR{a[$0]; next} $0 in a' colors_1.txt colors_2.txt
# light blue
# yellow
```

@tab Case 2

lines from <FontIcon icon="iconfont icon-file"/> `colors_2.txt` not present in  <FontIcon icon="iconfont icon-file"/> `colors_1.txt`

> same as: `grep -vFxf colors_1.txt colors_2.txt`

```sh
awk 'NR==FNR{a[$0]; next} !($0 in a)' colors_1.txt colors_2.txt
# black
# dark green
```

@tab Case 3

reversing the order of input files gives lines from <FontIcon icon="iconfont icon-file"/> `colors_1.txt` not present in <FontIcon icon="iconfont icon-file"/> `colors_2.txt`

```sh
awk 'NR==FNR{a[$0]; next} !($0 in a)' colors_2.txt colors_1.txt
# teal
# green
```

:::

::: warning 

Note that the `NR==FNR` logic will fail if the first file is empty, since `NR` wouldn't get a chance to increment. You can set a flag after the first file has been processed to avoid this issue. See [this unix.stackexchange thread](https://unix.stackexchange.com/a/237110/109046) for more workarounds.

:::

::: tabs

@tab:active Case 1

no output

```sh
awk 'NR==FNR{a[$0]; next} !($0 in a)' /dev/null greeting.txt
```

@tab Case 2

gives the expected output

```sh
awk '!f{a[$0]; next} !($0 in a)' /dev/null f=1 greeting.txt
# Hi there
# Have a nice day
# Good bye
```

:::

---

## Comparing fields

In the previous section, you saw how to compare the contents of whole records between two files. This section will focus on comparing only specific fields. The below sample file will be one of the two file inputs for examples in this section.

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
```
To start with, here's a single field comparison. The problem statement is to fetch all records from <FontIcon icon="iconfont icon-file"/> `marks.txt` if the first field matches any of the departments listed in the <FontIcon icon="iconfont icon-file"/> `dept.txt` file.

```sh
cat dept.txt
# CSE
# ECE
```

::: tabs

@tab:active Case 1

note that <FontIcon icon="iconfont icon-file"/> `dept.txt` is used to build the array keys first

```sh
awk 'NR==FNR{a[$1]; next} $1 in a' dept.txt marks.txt
# ECE     Raj     53
# ECE     Joel    72
# CSE     Surya   81
# ECE     Om      92
# CSE     Amy     67
```

@tab Case 2

if the header is needed as well

```sh
awk 'NR==FNR{a[$1]; next} FNR==1 || $1 in a' dept.txt marks.txt
# Dept    Name    Marks
# ECE     Raj     53
# ECE     Joel    72
# CSE     Surya   81
# ECE     Om      92
# CSE     Amy     67
```

:::

For multiple field comparison, you need to construct the key robustly. Simply concatenating field values can lead to false matches. For example, field values `abc` and `123` will wrongly match `ab` and `c123`. To avoid this, you may introduce some string between the field values, say `"_"` (if you know the field themselves cannot have this character) or `FS` (safer option). You could also allow awk to bail you out. If you use the `,` symbol (not `","` as a string) between the field values, the value of the special variable `SUBSEP` is inserted. `SUBSEP` has a default value of the non-printing character `\034` which is usually not used as part of text files.

```sh
cat dept_name.txt
# EEE Moi
# CSE Amy
# ECE Raj
```

::: tabs

@tab:active Case 1

uses `SUBSEP` as a separator between the field values to construct the ke 
note the use of parentheses for key testing

```sh
awk 'NR==FNR{a[$1,$2]; next} ($1,$2) in a' dept_name.txt marks.txt
ECE     Raj     53
EEE     Moi     68
CSE     Amy     67
```

:::

In this example, one of the field is used for numerical comparison.

```sh
cat dept_mark.txt
ECE 70
EEE 65
CSE 80
```

::: tabs

@tab:active Case 1

match Dept and minimum marks specified in <FontIcon icon="iconfont icon-file"/> `dept_mark.txt`

```sh
awk 'NR==FNR{d[$1]=$2; next}
     $1 in d && $3 >= d[$1]' dept_mark.txt marks.txt
# ECE     Joel    72
# EEE     Moi     68
# CSE     Surya   81
# ECE     Om      92
```

:::

Here's an example of adding a new field.

```sh
cat role.txt
# Raj class_rep
# Amy sports_rep
# Tia placement_rep
```

::: tabs

@tab:active Case 1

```sh
awk -v OFS='\t' 'NR==FNR{r[$1]=$2; next}
       {$(NF+1) = FNR==1 ? "Role" : r[$2]} 1' role.txt marks.txt
# Dept    Name    Marks   Role
# ECE     Raj     53      class_rep
# ECE     Joel    72      
# EEE     Moi     68      
# CSE     Surya   81      
# EEE     Tia     59      placement_rep
# ECE     Om      92      
# CSE     Amy     67      sports_rep
```

:::

---

## `getline`

As the name indicates, the `getline` function allows you to read a line from a file on demand. This is easiest to use when you need something based on line numbers. The following example shows how you can replace the `m`th line from a file with the `n`th line from another file. There are many syntax variations with `getline`, here the line read is saved in a variable.

::: tabs

@tab:active Case 1

return value handling is not shown here, but should be done ideally

```sh
awk -v m=3 -v n=2 'BEGIN{while(n-- > 0) getline s < "greeting.txt"}
                   FNR==m{$0=s} 1' table.txt
# brown bread mat hair 42
# blue cake mug shirt -7
# Have a nice day
```

:::

Here's an example where two files are processed simultaneously. In this case, the return value of `getline` is also used. It will be `1` if the line was read successfully, `0` if there's no more input to be read as end of file has already been reached and `-1` if something went wrong. The `ERRNO` special variable will have the error details.

::: tabs

@tab:active Case 1

print line from <FontIcon icon="iconfont icon-file"/> `greeting.txt` if the last column of the corresponding line from <FontIcon icon="iconfont icon-file"/> `table.txt` is a positive number

```sh
awk -v file='table.txt' '(getline line < file)==1{n=split(line, a);
                         if(a[n]>0) print}' greeting.txt
# Hi there
# Good bye
```

:::

If a file is passed as an argument to the `awk` command that cannot be opened, you get an error. For example:

::: tabs 

@tab:active Case 1

```sh
awk '{print $2}' xyz.txt
# awk: fatal: cannot open file 'xyz.txt' for reading: No such file or directory
```

:::

It is recommended to always check for the return value when using `getline` or perhaps use techniques from the previous sections to avoid `getline` altogether.

::: tabs 

@tab:active Case 1

<FontIcon icon="iconfont icon-file"/> `xyz.txt` doesn't exist, but output doesn't show something went wrong

```sh
awk '{getline line < "xyz.txt"; print $NF, line}' table.txt
# 42 
# -7 
# 3.14 
```

@tab Case 2

```sh
awk -v file='xyz.txt' '{ e=(getline line < file);
                         if(e<0){print file ": " ERRNO; exit}
                         print $NF, line }' table.txt
# xyz.txt: No such file or directory
```

:::

::: info 

See [gawk manual: getline](https://www.gnu.org/software/gawk/manual/gawk.html#Getline) for details, especially about corner cases and errors. See also [awk.freeshell: getline caveats](http://awk.freeshell.org/AllAboutGetline).

:::

---

## Summary

This chapter discussed a few cases where you need to compare contents between two files. The `NR==FNR` trick is handy for such cases. You also saw a few examples with the `getline` function.

Next chapter will discuss how to handle duplicate contents.

---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

Use the contents of <FontIcon icon="iconfont icon-file"/> `match_words.txt` file to display matching lines from <FontIcon icon="iconfont icon-file"/> `jumbled.txt` and <FontIcon icon="iconfont icon-file"/> `sample.txt`. The matching criteria is that the second word of lines from these files should match the third word of lines from <FontIcon icon="iconfont icon-file"/> `match_words.txt`.

```sh
cat match_words.txt
# %whole(Hello)--{doubt}==ado==
# just,\joint*,concession<=nice
```


::: tabs

@tab:active Question

'concession' is one of the third words from <FontIcon icon="iconfont icon-file"/>'`match_words.txt`' and second word from <FontIcon icon="iconfont icon-file"/> '`jumbled.txt`'

```sh
awk ##### add your solution here
# wavering:concession/woof\retailer
# No doubt you like it too
```

@tab Solution

'concession' is one of the third words from <FontIcon icon="iconfont icon-file"/>'`match_words.txt`' and second word from <FontIcon icon="iconfont icon-file"/> '`jumbled.txt`'

```sh
awk -v FPAT='\\w+' 'NR==FNR{a[$3]; next} $2 in a' match_words.txt jumbled.txt sample.txt
# wavering:concession/woof\retailer
# No doubt you like it too
```

:::

### Exercise 2

Interleave the contents of <FontIcon icon="iconfont icon-file"/> `secrets.txt` with the contents of a file passed via the `-v` option as shown below.

::: tabs

@tab:active Question

```sh
awk -v f='table.txt' ##### add your solution here
# stag area row tick
# brown bread mat hair 42
# ---
# deaf chi rate tall glad
# blue cake mug shirt -7
# ---
# Bi tac toe - 42
# yellow banana window shoes 3.14
# ---
```

@tab Solution

```sh
awk -v f='table.txt' '{print; getline < f; print; print "---"}' secrets.txt
# stag area row tick
# brown bread mat hair 42
# ---
# deaf chi rate tall glad
# blue cake mug shirt -7
# ---
# Bi tac toe - 42
# yellow banana window shoes 3.14
# ---
```

:::

### Exercise 3

The file <FontIcon icon="iconfont icon-file"/> `search_terms.txt` contains one search string per line, and these terms have no regexp metacharacters. Construct an `awk` command that reads this file and displays the search terms (matched case insensitively) that were found in every file passed as the arguments after <FontIcon icon="iconfont icon-file"/> `search_terms.txt`. Note that these terms should be matched anywhere in the line (so, don't use word boundaries).

```sh
cat search_terms.txt
# hello
# row
# you
# is
# at
```

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
##file list## search_terms.txt jumbled.txt mixed_fs.txt secrets.txt table.txt
# at
# row

awk ##### add your solution here
##file list## search_terms.txt addr.txt sample.txt
# is
# you
# hello
```

@tab Solution

```sh
awk -v IGNORECASE=1 'NR==FNR{s[$0]; next} {for(k in s) if($0 ~ k) a[k]}
                     ENDFILE{for(k in a) s[k]++; delete a}
                     END{for(k in s) if(s[k]==(ARGC-2)) print k}
                    ' search_terms.txt jumbled.txt mixed_fs.txt secrets.txt table.txt
# at
# row

awk -v IGNORECASE=1 'NR==FNR{s[$0]; next} {for(k in s) if($0 ~ k) a[k]}
                     ENDFILE{for(k in a) s[k]++; delete a}
                     END{for(k in s) if(s[k]==(ARGC-2)) print k}
                    ' search_terms.txt addr.txt sample.txt
# is
# you
# hello
```

:::

### Exercise 4

Display lines from <FontIcon icon="iconfont icon-file"/> `scores.csv` by matching the first field based on a list of names from the <FontIcon icon="iconfont icon-file"/> `names.txt` file. Also, change the output field separator to a space character.

```sh
cat names.txt
# Lin
# Cy
# Ith
```

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# Lin 78 83 80
# Cy 97 98 95
# Ith 100 100 100
```

@tab Solution

```sh
awk -F, 'NR==FNR{a[$1]; next} $1 in a{$1=$1; print}' names.txt scores.csv
# Lin 78 83 80
# Cy 97 98 95
# Ith 100 100 100
```

:::

### Exercise 5 

What's the default value of the special variable `SUBSEP`? Where is it commonly used?

### Exercise 6

The <FontIcon icon="iconfont icon-file"/> `result.csv` file has three columns — name, subject and mark. The <FontIcon icon="iconfont icon-file"/> `criteria.txt` file has two columns — name and subject. Match lines from <FontIcon icon="iconfont icon-file"/> `result.csv` based on the two columns from <FontIcon icon="iconfont icon-file"/> `criteria.txt` provided the mark column is greater than 80.

```sh
cat result.csv
# Amy,maths,89
# Amy,physics,75
# Joe,maths,79
# John,chemistry,77
# John,physics,91
# Moe,maths,81
# Ravi,physics,84
# Ravi,chemistry,70
# Yui,maths,92

cat criteria.txt
# Amy maths
# John chemistry
# John physics
# Ravi chemistry
# Yui maths
```

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# Amy,maths,89
# John,physics,91
# Yui,maths,92
```

@tab Solution

```sh
awk 'NR==FNR{a[$1,$2]; next} ($1,$2) in a && $3 > 80' criteria.txt FS=, result.csv
# Amy,maths,89
# John,physics,91
# Yui,maths,92
```

:::


---

<TagLinks/>