---
lang: ko-KR
title: Bash > ๐ฉบTroubleshooting
description: Bash > ๐ฉบTroubleshooting
tags: ["bash", "linux", "macos", "terminal", "sed"]
---

# {{ $frontmatter.description }} ๊ด๋ จ

[[toc]]

---
## ์คํฌ๋ฆฝํธ ์คํ์ค๋ฅ

### `/bin/sh^M`: bad interpreter: ๊ทธ๋ฐ ํ์ผ์ด๋ ๋๋ ํฐ๋ฆฌ๊ฐ ์์ต๋๋ค.

- ๐ฅ์ ๋์ค ๊ฐํ๋ฌธ์์ ์๋์ฐ ๊ฐํ๋ฌธ์๊ฐ ์์ฌ์์ ๊ฒฝ์ฐ ๋ฐ์
- ๐์คํํ๋ ค๋ ์คํฌ๋ฆฝํธ์ ๋ํ์ฌ ์๋์ ๊ฐ์ด ์คํ

```shell
sed -i -e 's/\r$//' <์คํฌ๋ฆฝํธ.sh>
```

<TagLinks />