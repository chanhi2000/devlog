---
lang: ko-KR
title: 14. awk scripts
description: 🐚Text Processing with GNU awk > 14. awk scripts
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 14. awk scripts
    content: 14. awk scripts
  - property: og:title
    content: 14. awk scripts
  - property: og:description
    content: 🐚Text Processing with GNU awk > 14. awk scripts
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/14-awk-scripts.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 14. awk scripts
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/awk-scripts.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

So far, you've only seen how to provide `awk` scripts directly on the command line. In this chapter, you'll see basic examples for executing scripts saved in files.


::: info

The [<FontIcon icon="iconfont icon-github"/> example_files](https://github.com/learnbyexample/learn_gnuawk/tree/master/example_files) directory has all the files used in 
the examples.

:::

---

## `-f` option
The `-f` command line option allows you to pass the `awk` script via files instead of writing everything on the command line. Here's an one-liner seen earlier that's been converted to a multiline script. Note that `;` is no longer necessary to separate the commands, newline will do that too.

```sh
cat buf.awk
# /error/{
#     f = 1
#     buf = $0
#     next
# }
# 
# f{
#     buf = buf ORS $0
# }
# 
# /state/{
#     if(f)
#         print buf
#     f = 0
# }
```

::: tabs

@tab:active Case 1

```sh
awk -f buf.awk broken.txt
# error 2
# 1234
# 6789
# state 1
# error 4
# abcd
# state 3
```

:::

Another advantage is that single quotes can be freely used.

```sh
echo 'cue us on this example' | awk -v q="'" '{gsub(/\w+/, q "&" q)} 1'
# 'cue' 'us' 'on' 'this' 'example'
```

::: tabs

@tab:active Case 1

the above solution is simpler to write as a script

```sh
cat quotes.awk
# {
#     gsub(/\w+/, "'&'")
# }
# 
# 1
echo 'cue us on this example' | awk -f quotes.awk
# 'cue' 'us' 'on' 'this' 'example'
```

:::

---

## `-o` option

If the code has been first tried out on the command line, you can use the `-o` option to get a pretty printed version. Output filename can be passed along as an argument to this option. By default, `awkprof.out` will be used as the filename.

::: tabs

@tab:active Case 1

adding `-o` after the one-liner has been tested 
input filenames and `-v` would be simply ignored

```sh
awk -o -v OFS='\t' 'NR==FNR{r[$1]=$2; next}
       {$(NF+1) = FNR==1 ? "Role" : r[$2]} 1' role.txt marks.txt
# pretty printed version
cat awkprof.out
# NR == FNR {
#         r[$1] = $2
#         next
# }
# 
# {
#         $(NF + 1) = FNR == 1 ? "Role" : r[$2]
# }
# 
# 1 {
#         print
# }
```

calling the script. 
note that other command line options have to be provided as usual

```sh
awk -v OFS='\t' -f awkprof.out role.txt marks.txt
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

## Summary

So, now you know how to write program files for `awk` instead of just the one-liners. And about the `-o` option, which helps to convert complicated one-liners to pretty printed program files.

Next chapter will discuss a few gotchas and tricks.

---

## Exercises


::: info 

The [<FontIcon icon="iconfont icon-github"/> exercises](https://github.com/learnbyexample/learn_gnuawk/tree/master/exercises) directory has all the files used in this section.

:::

### Exercise 1

Before explaining the problem statement, here's an example of markdown headers and their converted link version. Note the use of `-1` for the second occurrence of the `Summary` header. Also note that this sample doesn't illustrate every rule explained below.

```md
# Field separators
## Summary
# Gotchas and Tips
## Summary

* [Field separators](#field-separators)
    * [Summary](#summary)
* [Gotchas and Tips](#gotchas-and-tips)
    * [Summary](#summary-1)
```

For the input file <FontIcon icon="iconfont icon-file"/> `gawk.md`, construct a Table of Content section as per the details described below:

- Identify all header lines
  - there are two types of header lines, one starting with `#` and the other starting with `##`
  - lines starting with `#` inside code blocks defined by \`\`\`bash and \`\`\` markers should be ignored
- The headers lines should then be converted as per the following rules:
  - content is defined as the portion of the header ignoring the initial `#` or `##` characters and the space character
  - `##` should be replaced with four spaces and a `*` character
  - else, `#` should be replaced with `*` character
  - create a copy of the content, change it to all lowercase, replace all space characters with the - character and then enclose it within `(#` and `)`
    - if there are multiple headers with the same content, append `-1`, `-2`, etc respectively for the second header, third header, etc
  - surround the original content with `[]` and then append the string obtained from the previous step
- Note that the output should have only the converted headers, all other input lines should not be present

The script file should be named as <FontIcon icon="iconfont icon-file"/> `toc.awk` and save the output in <FontIcon icon="iconfont icon-file"/> `out.md`.

::: tabs

@tab:active Question

```sh
awk -f toc.awk gawk.md > out.md
diff -sq out.md toc_expected.md
# Files out.md and toc_expected.md are identical
```

@tab Solution

```sh
cat toc.awk 
/^```bash$/ {
    f = 1
}

/^```$/ {
    f = 0
}

!f && /^#+ / {
    m = tolower($0)
    a[m]++ && m = m "-" (a[m]-1)
    sub(/^#+ /, "", m)
    gsub(/ /, "-", m)

    /^# / ? sub(/^# /, "* ") : sub(/^## /, "    * ")
    print gensub(/* (.+)/, "* [\\1](#" m ")", 1)
}

awk -f toc.awk gawk.md > out.md
diff -sq out.md toc_expected.md
# Files out.md and toc_expected.md are identical
```

:::

### Exercise 2

For the input file <FontIcon icon="iconfont icon-file"/> `odd.txt`, surround the first two whole words of each line with `{}` that start and end with the same word character. Assume that the input file will not require case insensitive comparison. This is a contrived exercise that needs around 10 instructions and makes you use various features presented in this book.

::: tabs

@tab:active Question

```sh
cat odd.txt
# -oreo-not:a _a2_ roar<=>took%22
# RoaR to wow-

awk -f same.awk odd.txt
# -{oreo}-not:{a} _a2_ roar<=>took%22
# {RoaR} to {wow}-
```

@tab Solution

```sh
cat odd.txt
# -oreo-not:a _a2_ roar<=>took%22
# RoaR to wow-

cat same.awk 
{
    c = 0
    n = split($0, a, /\W+/, seps)
    for (i = 1; i <= n; i++) {
        len = length(a[i])
        if (len && substr(a[i], 1, 1) == substr(a[i], len) && c++ < 2) {
            a[i] = "{" a[i] "}"
        }
        printf "%s%s", a[i], seps[i]
    }
    print ""
}

awk -f same.awk odd.txt
# -{oreo}-not:{a} _a2_ roar<=>took%22
# {RoaR} to {wow}-
```

:::

<TagLinks/>