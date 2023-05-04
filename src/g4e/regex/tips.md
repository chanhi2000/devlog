---
lang: ko-KR
title: 💡Tips
description: Regex > 💡Tips
tags: ["regex", "regular-expression", "snippet", "tips"]
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Favorite RegEx

| regex | description |
| :---: | :--- |
| `^\d{7}` | 기관코드 필터<br/>기관코드는 7자리로 구성 된 숫자 |
| `([1][0-9]{6})|([a-zA-Z][0-9]{6})` | 기관코드 > 중앙행정기관<br/>B로 시작하는 기관코드도 포함하여 앞자리 1로 시작 되는 7자리로 구성된 숫자ㅣ
| `^[0-9]{3}[가-힇]*[0-9]{3}` | CN 사용자 필터<br/>한글이름 전/후에 3자리 숫자로 구성 된 문자열 |

<TagLinks />