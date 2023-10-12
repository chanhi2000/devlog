---
lang: ko-KR
title: 16. Further Reading
description: 🐚Text Processing with GNU awk > 16. Further Reading
tags: ["crashcourse", "cli", "sh", "shell", "gnu", "linux", "awk"]
meta:
  - name: 🐚Text Processing with GNU awk > 16. Further Reading
    content: 16. Further Reading
  - property: og:title
    content: 16. Further Reading
  - property: og:description
    content: 🐚Text Processing with GNU awk > 16. Further Reading
  - property: og:url
    content: https://chanhi2000.github.io/crashcourse/cli-text-processing-w-gnu-awk/16-further-reading.html
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

```card
title: 16. Further Reading
desc: CLI Text Processing with GNU awk
link: https://learnbyexample.github.io/learn_gnuawk/further-reading.html
logo: https://learnbyexample.github.io/favicon.svg
color: rgba(22, 25, 35, 0.2)
```

---

- `man awk` and `info awk` and [online manual](https://www.gnu.org/software/gawk/manual/gawk.html)
- Information about various implementations of `awk`
  - `awk` FAQ — great resource, but last modified _23 May 2002_
  - [grymoire: awk tutorial](https://www.grymoire.com/Unix/Awk.html) — covers information about different `awk` versions as well
  - [cheat sheet for awk/nawk/gawk](https://catonmat.net/ftp/awk.cheat.sheet.txt)
  - [list of freely available `awk` implementations](https://www.gnu.org/software/gawk/manual/html_node/Other-Versions.html)
- Q&A on stackoverflow/stackexchange are good source of learning material, good for practice exercises as well
  - [awk Q&A on unix.stackexchange](https://unix.stackexchange.com/questions/tagged/awk?sort=votes&pageSize=15)
  - [awk Q&A on stackoverflow](https://stackoverflow.com/questions/tagged/awk?sort=votes&pageSize=15)
- Learn Regular Expressions (has information on flavors other than POSIX too)
  - [regular-expressions](https://www.regular-expressions.info) — tutorials and tools
  - [rexegg](https://www.rexegg.com) — tutorials, tricks and more
  - [stackoverflow: What does this regex mean?](https://stackoverflow.com/q/22937618/4082052)
  - [online regex tester and debugger](https://regex101.com) — not fully suitable for CLI tools, but most of ERE syntax works
- Related tools
  - [GNU datamash](https://www.gnu.org/software/datamash)
  - [<FontIcon icon="iconfont icon-github"/> `lh3/bioawk`](https://github.com/lh3/bioawk)
  - [<FontIcon icon="iconfont icon-github"/> `ezrosent/frawk`](https://github.com/ezrosent/frawk) — an efficient awk-like language, implemented in Rust
  - [<FontIcon icon="iconfont icon-github"/> `benhoyt/goawk`](https://github.com/benhoyt/goawk) — POSIX-compliant awk interpreter written in Go, with CSV support
  - [<FontIcon icon="iconfont icon-github"/> `gelisam/hawk`](https://github.com/gelisam/hawk) — similar to `awk`, but using Haskell as the text-processing language
  - [<FontIcon icon="iconfont icon-github"/> `johnkerl/miller`](https://github.com/johnkerl/miller) — similar to `awk`/`sed`/`cut`/`join`/`sort` for name-indexed data such as CSV, TSV, and tabular JSON (see this [news.ycombinator discussion](https://news.ycombinator.com/item?id=10066742) for other tools like this)
- Miscellaneous
  - [unix.stackexchange: When to use `grep`, `sed`, `awk`, `perl`, etc](https://unix.stackexchange.com/q/303044/109046)
  - [<FontIcon icon="iconfont icon-github"/> `e36freak/awk-libs`](https://github.com/e36freak/awk-libs) — lots of useful functions
  - [<FontIcon icon="iconfont icon-github"/> `TheMozg/awk-raycaster`](https://github.com/TheMozg/awk-raycaster) — Pseudo-3D shooter written completely in awk
  - [awk REPL](https://awk.js.org) — live editor (browser app)
- ASCII reference and locale usage
  - [ASCII code table](https://ascii.cl)
  - [wiki.archlinux: locale](https://wiki.archlinux.org/title/locale)
  - [shellhacks: Define Locale and Language Settings](https://www.shellhacks.com/linux-define-locale-language-settings)
- Examples for some of the topics not covered in this book
  - [unix.stackexchange: rand/srand](https://unix.stackexchange.com/q/372816/109046)
  - [unix.stackexchange: strftime](https://unix.stackexchange.com/q/224969/109046)
  - [stackoverflow: arbitrary precision integer extension](https://stackoverflow.com/q/46904447/4082052)
  - [stackoverflow: recognizing hexadecimal numbers](https://stackoverflow.com/q/3683110/4082052)
  - [unix.stackexchange: sprintf and file closing](https://unix.stackexchange.com/q/223727/109046)
  - [unix.stackexchange: user defined functions and array passing](https://unix.stackexchange.com/q/72469/109046)
  - [unix.stackexchange: rename CSV files based on number of fields in header row](https://unix.stackexchange.com/q/408742/109046)

---

<TagLinks/>