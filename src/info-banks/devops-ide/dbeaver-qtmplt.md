---
lang: ko-KR
title: DBeaver > Query Template
description: DBeaver > Query Template
tags: ["dbeaver", "dbeaver-ce", "ide", "template", "query-template", "query"]
---

# {{ $frontmatter.description }} 관련

[[toc]]

---
## 설정 위치

`환경설정` > `편집기` > `SQL 편집기` > `탬플릿`

## 탬플릿 목록

| name | context | description |
| `swhere` | SQL | `select * from ${table} where 1=1 and ${column}=${value};` |
| `sob` | SQL | `select * from ${table} where 1=1 order by ${column}` |

<TagLinks />