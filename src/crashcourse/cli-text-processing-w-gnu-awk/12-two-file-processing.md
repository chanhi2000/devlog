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


<TagLinks/>