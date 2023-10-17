---
lang: ko-KR
title: 13. Dealing with duplicates
description: 🐚Text Processing with GNU awk > 13. Dealing with duplicates
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 13. Dealing with duplicates
    content: 13. Dealing with duplicates
  - property: og:title
    content: 13. Dealing with duplicates
  - property: og:description
    content: 🐚Text Processing with GNU awk > 13. Dealing with duplicates
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/13-dealing-with-duplicates.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 13. Dealing with duplicates
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/dealing-with-duplicates.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

Often, you need to eliminate duplicates from an input file. This could be based on the entire line content or based on certain fields. These are typically solved with the `sort` and `uniq` commands. Advantages with `awk` include regexp based field and record separators, input doesn't have to be sorted, and in general more flexibility because it is a programming language.

::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in 
the examples.

:::

---

## Whole line duplicates

`awk '!a[$0]++'` is one of the most famous `awk` one-liners. It eliminates line based duplicates while retaining the input order. The following example shows it in action along with an illustration of how the logic works.

```sh
cat purchases.txt
# coffee
# tea
# washing powder
# coffee
# toothpaste
# tea
# soap
# tea
```

::: tabs

@tab:active Case 1

```sh
awk '{print +a[$0] "\t" $0; a[$0]++}' purchases.txt
# 0       coffee
# 0       tea
# 0       washing powder
# 1       coffee
# 0       toothpaste
# 1       tea
# 0       soap
# 2       tea
```

@tab Case 2


only those entries with zero in first column will be retained

```sh
awk '!a[$0]++' purchases.txt
# coffee
# tea
# washing powder
# toothpaste
# soap
```

:::

::: info 

See also [<FontIcon icon="iconfont icon-github"/> koraa/huniq](https://github.com/koraa/huniq), a faster alternative for removing line based duplicates.

:::

---

## Column wise duplicates

Removing field based duplicates is simple for a single field comparison. Just change $0 to the required field number after setting the appropriate field separator.

```sh
cat duplicates.txt
# brown,toy,bread,42
# dark red,ruby,rose,111
# blue,ruby,water,333
# dark red,sky,rose,555
# yellow,toy,flower,333
# white,sky,bread,111
# light red,purse,rose,333
```


::: tabs

@tab:active Case 1

based on the last field

```sh
awk -F, '!seen[$NF]++' duplicates.txt
# brown,toy,bread,42
# dark red,ruby,rose,111
# blue,ruby,water,333
# dark red,sky,rose,555
```

:::

For multiple fields comparison, separate the fields with `,` so that `SUBSEP` is used to combine the field values to generate the key. As mentioned before, `SUBSEP` has a default value of `\034` non-printing character, which is typically not used in text files.


::: tabs

@tab:active Case 1

based on the first and third fields

```sh
awk -F, '!seen[$1,$3]++' duplicates.txt
# brown,toy,bread,42
# dark red,ruby,rose,111
# blue,ruby,water,333
# yellow,toy,flower,333
# white,sky,bread,111
# light red,purse,rose,333
```

:::

---

## Duplicate count

In this section, how many times a duplicate record is found plays a role in determining the output.

First up, printing only a specific numbered duplicate.

::: tabs

@tab:active Case 1

print only the second occurrence of duplicates based on the second field

```sh
awk -F, '++seen[$2]==2' duplicates.txt
# blue,ruby,water,333
# yellow,toy,flower,333
# white,sky,bread,111
```

@tab Case 2

print only the third occurrence of duplicates based on the last field

```sh
awk -F, '++seen[$NF]==3' duplicates.txt
# light red,purse,rose,333
```

:::


Next, printing only the last copy of duplicates. Since the count isn't known, the `tac` command comes in handy again.

::: tabs 

@tab:active Case 1

reverse the input line-wise, retain first copy and then reverse again

```sh
tac duplicates.txt | awk -F, '!seen[$NF]++' | tac
# brown,toy,bread,42
# dark red,sky,rose,555
# white,sky,bread,111
# light red,purse,rose,333
```

:::

To get all the records based on a duplicate count, you can pass the input file twice. Then use the two file processing trick to make decisions.

::: tabs

@tab:active Case 1

all duplicates based on the last column

```sh
awk -F, 'NR==FNR{a[$NF]++; next} a[$NF]>1' duplicates.txt duplicates.txt
# dark red,ruby,rose,111
# blue,ruby,water,333
# yellow,toy,flower,333
# white,sky,bread,111
# light red,purse,rose,333
```

@tab Case 2

all duplicates based on the last column, minimum 3 duplicates

```sh
awk -F, 'NR==FNR{a[$NF]++; next} a[$NF]>2' duplicates.txt duplicates.txt
# blue,ruby,water,333
# yellow,toy,flower,333
# light red,purse,rose,333
```

@tab Case 3

only unique lines based on the third column

```sh
awk -F, 'NR==FNR{a[$3]++; next} a[$3]==1' duplicates.txt duplicates.txt
# blue,ruby,water,333
# yellow,toy,flower,333
```

:::

---

## Summary

This chapter showed how to work with duplicate contents for records and fields. If you don't need regexp based separators and if your input is too big to handle, then specialized command line tools like `sort` and `uniq` will be better suited compared to `awk`.

Next chapter will show how to write `awk` scripts instead of the usual one-liners.


---

## Exercises

::: info

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

Retain only the first copy of a line for the input file <FontIcon icon="iconfont icon-file"/> `lines.txt`. Case should be ignored while comparing the lines. For example, `hi there` and `HI TheRE` should be considered as duplicates.

```sh
cat lines.txt
# Go There
# come on
# go there
# ---
# 2 apples and 5 mangoes
# come on!
# ---
# 2 Apples
# COME ON
```

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
Go There
come on
---
2 apples and 5 mangoes
come on!
2 Apples
```

@tab Solution

```sh
awk '!seen[tolower($0)]++' lines.txt
# Go There
# come on
# ---
# 2 apples and 5 mangoes
# come on!
# 2 Apples
```

:::

### Exercise 2

Retain only the first copy of a line for the input file <FontIcon icon="iconfont icon-file"/> `twos.txt`. Assume space as the field separator with exactly two fields per line. Compare the lines irrespective of the order of the fields. For example, `hehe haha` and `haha hehe` should be considered as duplicates.

```sh
cat twos.txt
# hehe haha
# door floor
# haha hehe
# 6;8 3-4
# true blue
# hehe bebe
# floor door
# 3-4 6;8
# tru eblue
# haha hehe
```

::: tabs

@tab:active Question

```sh
awk ##### add your solution here
# hehe haha
# door floor
# 6;8 3-4
# true blue
# hehe bebe
# tru eblue
```

@tab Solution

```sh
awk '!($1,$2) in seen && !($2,$1) in seen; {seen[$1,$2]}' twos.txt
# hehe haha
# door floor
# 6;8 3-4
# true blue
# hehe bebe
# tru eblue
```

:::

### Exercise 3

For the input file <FontIcon icon="iconfont icon-file"/> `twos.txt`, create a file <FontIcon icon="iconfont icon-file"/> `uniq.txt` with all the unique lines and <FontIcon icon="iconfont icon-file"/> `dupl.txt` with all the duplicate lines. Assume space as the field separator with exactly two fields per line. Compare the lines irrespective of the order of the fields. For example, `hehe haha` and `haha hehe` should be considered as duplicates.


::: tabs

@tab:active Question

```sh
awk ##### add your solution here

cat uniq.txt 
# true blue
# hehe bebe
# tru eblue

cat dupl.txt 
# hehe haha
# door floor
# haha hehe
# 6;8 3-4
# floor door
# 3-4 6;8
# haha hehe
```

@tab Solution

```sh
awk 'NR==FNR{c[$1,$2]++; next} {if((c[$1,$2] + c[$2,$1]) == 1) print > "uniq.txt";
     else print > "dupl.txt"}' twos.txt twos.txt

cat uniq.txt 
# true blue
# hehe bebe
# tru eblue

cat dupl.txt 
# hehe haha
# door floor
# haha hehe
# 6;8 3-4
# floor door
# 3-4 6;8
# haha hehe
```

:::

<TagLinks/>