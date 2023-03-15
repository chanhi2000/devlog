---
lang: ko-KR
title: Intro
description: 🗂️Catalogs
tags: ["schedule", "gantt", "markdown", "mermaidjs", "todo"]
---

# {{ $frontmatter.title }} 관련

::: tip NOTE
{{ $frontmatter.title }} 관련 정리내용입니다.
:::

{{ $frontmatter.title }} 관련 정리내용

[[toc]]

---
## 🗓️2023년 목표 정의

```mermaidjs
gantt
dateFormat  YYYY-MM-DD
title 2023년 목표 정의
excludes weekdays 2023-01-10

section A 2022년 자료준비
북마크 기록                    :done,  desA1, 2022-12-07, 2022-12-09
github profile 변경           :done,  desA2, 2022-12-08, 2022-12-09
22년안에 처리해야 할 기타 작업  :done, descA3, 2022-12-14, 2022-12-31
section B 2023년 Career Developing
교육 관리                      :active, descB1, 2023-01-01, 1y
SwiftUI by Example 실습       :active, descB2, 2023-01-01, 20w
oVirt 관련 내용 정리          :active,  desA4, 2023-03-15, 70w
```

### A. 2022년 자료준비

#### A1. 북마크 기록

- [x] 크롬 브라우저에 동기화 되어 있는 북마크 중, 개발관련 내용은 전부 여기로 이동

#### A2. github profile 변경

- [x] I'm currently working on 문구 바꾸기
- [x] shields 목록 갱신

#### A3. 22년안에 처리해야 할 기타 작업

- [x] vuepress markdown syntax highlighting 처리 (`bat`)
- [x] [vuepressbook](https://vuepressbook.com/introduction.html) 읽어보기
- [x] YouTube > Watch Later 목록 정리

#### A4. oVirt 관련 내용 정리

### B. 2023년 Career Developing

#### B1. 교육 관리

- [ ] 한해 동안 관리 할 교육자료 및 스케줄 기록

#### B2. SwiftUI by Example 실습 

- [사이트참고](https://www.hackingwithswift.com/quick-start/swiftui)
- [ ] 기본 Github Repo구성
- [ ] info-banks내용 기록

<TagLinks />