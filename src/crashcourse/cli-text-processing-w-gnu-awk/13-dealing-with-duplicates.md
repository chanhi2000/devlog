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

<TagLinks/>