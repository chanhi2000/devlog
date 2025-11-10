---
lang: ko-KR
title: CLI
description: MySQL > CLI
icon: fas fa-terminal
category:
  - Data Science
  - MySQL
  - CLI
tag:
  - data-science
  - db
  - mysql
  - mysql5
  - sh
  - cli
  - basics
head:
  - - meta:
    - property: og:title
      content: MySQL > CLI
    - property: og:description
      content: CLI
    - property: og:url
      content: https://chanhi2000.github.io/data-science/mysql/cli.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 기본 명령어

::: code-tabs#sh

@tab:active 기동/중지

```sh
## 리눅스 서비스로 등록되지 않은 경우
/etc/init.d/mysql start     # 기동
/etc/init.d/mysql stop      # 중지

## 리눅스 서비스로 등록된 경우
service mysqld start        # 기동
service mysqld stop         # 중지
```

:::

---

<TagLinks />