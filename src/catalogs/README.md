---
lang: ko-KR
title: Intro
description: ๐๏ธCatalogs
tags: ["schedule", "gantt", "markdown", "mermaidjs", "todo"]
---

# {{ $frontmatter.title }} ๊ด๋ จ

::: tip NOTE
{{ $frontmatter.title }} ๊ด๋ จ ์ ๋ฆฌ๋ด์ฉ์๋๋ค.
:::

{{ $frontmatter.title }} ๊ด๋ จ ์ ๋ฆฌ๋ด์ฉ

[[toc]]

---
## ๐๏ธ2023๋ ๋ชฉํ ์ ์

```mermaidjs
gantt
dateFormat  YYYY-MM-DD
title 2023๋ ๋ชฉํ ์ ์
excludes weekdays 2023-01-10

section A 2022๋ ์๋ฃ์ค๋น
๋ถ๋งํฌ ๊ธฐ๋ก                    :active,  desA1, 2022-12-07, 2022-12-09
github profile ๋ณ๊ฒฝ           :active,  desA2, 2022-12-08, 2022-12-09
22๋์์ ์ฒ๋ฆฌํด์ผ ํ  ๊ธฐํ ์์  :active, descA3, 2022-12-14, 2022-12-31
Active task                  :active,  desA4, 2023-01-09, 3d
Future task                  :         desA5, after desA2, 5d
Future task2                 :         desA6, after desA3, 5d
```

### A. 2022๋ ์๋ฃ์ค๋น 
#### A1. ๋ถ๋งํฌ ๊ธฐ๋ก
- [x] ํฌ๋กฌ ๋ธ๋ผ์ฐ์ ์ ๋๊ธฐํ ๋์ด ์๋ ๋ถ๋งํฌ ์ค, ๊ฐ๋ฐ๊ด๋ จ ๋ด์ฉ์ ์ ๋ถ ์ฌ๊ธฐ๋ก ์ด๋

#### A2. github profile ๋ณ๊ฒฝ
- [x] I'm currently working on ๋ฌธ๊ตฌ ๋ฐ๊พธ๊ธฐ
- [x] shields ๋ชฉ๋ก ๊ฐฑ์ 

#### A3. 22๋์์ ์ฒ๋ฆฌํด์ผ ํ  ๊ธฐํ ์์
- [x] vuepress markdown syntax highlighting ์ฒ๋ฆฌ (`bat`)
- [ ] [vuepressbook](https://vuepressbook.com/introduction.html) ์ฝ์ด๋ณด๊ธฐ
- [ ] [YouTube > Watch Later ๋ชฉ๋ก ์ ๋ฆฌ]()

<TagLinks />