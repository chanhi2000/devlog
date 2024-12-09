---
lang: ko-KR
title: 풀이수학 플랫폼
description: (2021-2022) 수학문제집 관리 앱
icon: /images/about/poole/poolemath/poolemath-launcher.png
category: 
  - About
  - Portfolio
  - Project
  - Mobile
  - "풀이러닝(주)"
  - Android
  - Java
  - Kotlin
tag:
  - notion
  - portfolio
  - project
  - "project-2021"
  - "project-2022"
  - poole
  - poole-learning
  - android
  - java
head:
  - - meta:
    - property: og:title
      content: About > Portfolio(3)
    - property: og:description
      content: Portfolio(3)
    - property: og:url
      content: https://chanhi2000.github.io/about/poole/poolemath.html
isOriginal: true
author: Chan Hee Lee
date: 2021-09-01
cover: /images/about/poole/poolemath/poolemath-logo.gif
---

# {{ $frontmatter.description }} 관련

[[toc]]

---

## 개요

::: info MyScript SDK 수식필기변환 기반 앱

[![(2021-2022) 풀이수학: 수학문제집 관리 앱](/images/about/poole/poolemath/poolemath-logo.gif)](https://poolemath.com)

사용 스택: <ShieldsGroup logos="openjdk,intellijidea,gradle,android,androidstudio,git,firebase,jetpackcompose,bitbucket,jira,confluence"/>

:::

::: details <FontIcon icon="fas fa-person-chalkboard"/> 주요 처리내용

**협헙 환경**

- <FontIcon icon="fa-brands fa-bitbucket"/>Bitbucket / <FontIcon icon="fa-brands fa-jira"/>Jira / <FontIcon icon="fa-brands fa-confluence"/>Confluence 를 이용한 협업 및 목표관리
  - <FontIcon icon="fa-brands fa-jira"/>Smart Commits를 이용한 Project 진행현황 관리
  - <FontIcon icon="fa-brands fa-bitbucket"/> 코드 관리 및 자동 배포 `bitbucket-pipeline.yml` 스크립트 구성
  - <FontIcon icon="fa-brands fa-confluence"/>프로젝트 관련 문서 관리

**SDK 및 라이브러리 최신화**

- 프로젝트 언어 최신화 (<FontIcon icon="fa-brands fa-java"/>Java → <FontIcon icon="iconfont icon-kotlin"/>Kotlin)
- API 관리 개선 → Retrofit/OkHttp
- <FontIcon icon="iconfont icon-gradle"/>Gradle 6.x → <FontIcon icon="iconfont icon-kotlin"/>GradleKts 7.1
- <FontIcon icon="fa-brands fa-java"/>Java SDK 1.8 → 11

**Multiplatform 프로젝트 변환**

- 구 개발소스 병합 & 공통모듈 구성 및 관리
  - Android 앱 (수식입력기, 풀이수학, etc.)
  - 기타 모듈 (UI / API / 파일관리 / DB)
  - 코어 모듈 세분화 (필기 / 녹화재생)

**APK 배포**

- 자동배포 구성 (<FontIcon icon="fa-brands fa-bitbucket"/>Bitbucket Pipeline, <FontIcon icon="iconfont icon-firebase"/>Firebase App Distribution)

:::

---

## 프론트엔드

### <FontIcon icon="fa-brands fa-android"/>Android - 메인 문제지

![mobile:1](/images/about/poole/poolemath/poolemath-m-1.webp =x200) ![mobile:2](/images/about/poole/poolemath/poolemath-m-2.webp =x200)

![mobile:3](/images/about/poole/poolemath/poolemath-m-3.webp =x200) ![mobile:4](/images/about/poole/poolemath/poolemath-m-4.webp =x200)

![mobile:5](/images/about/poole/poolemath/poolemath-m-5.webp =x200) ![mobile:6](/images/about/poole/poolemath/poolemath-m-6.webp =x200)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

- 공통 UI 적용 및 개선 (Material UI)
- <FontIcon icon="fa-brands fa-android"/>Android SDK: 28 → 30
- <FontIcon icon="iconfont icon-jetpack-compose"/>Jetpack Compose 사용을 위한 대비
- <FontIcon icon="iconfont icon-firebase"/>Firebase 신규구성 (Message, Crashlytics, App Distribution)
- MyScript 연동 (필기 인식) → <FontIcon icon="iconfont icon-tex"/>LaTeX 수식변환 관련 처리
- <FontIcon icon="iconfont icon-tex"/>KaTeX기반 수식 출력용 커스텀 웹뷰 적용 (결과물의 폰트, 정렬, etc.)

:::

### <FontIcon icon="fa-brands fa-android"/>Android - 수식입력기 (자사직원용)

![mobile:1](/images/about/poole/poolemath/latex-m-1.webp =x125) ![mobile:2](/images/about/poole/poolemath/latex-m-2.webp =x125) ![mobile:3](/images/about/poole/poolemath/latex-m-3.webp =x125)

![mobile:4](/images/about/poole/poolemath/latex-m-4.webp)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

**<FontIcon icon="fas fa-code-branch"/> v2.1.0**

- 공통 UI 적용 및 개선 (Material UI)
- [Jadx (<FontIcon icon="iconfont icon-github"/>`skylot/jadx`)](https://github.com/skylot/jadx)를 사용하여 apk decompile 후 소스 복구 (전임자 관리 미흡)
- <FontIcon icon="iconfont icon-tex"/>KaTeX기반 수식 출력용 커스텀 웹뷰 적용 (결과물의 폰트, 정렬, etc.)

:::

### <FontIcon icon="fa-brands fa-android"/>Android - 어드민

![mobile:1](/images/about/poole/poolemath/admin-m-1.webp =x200) ![mobile:2](/images/about/poole/poolemath/admin-m-2.webp =x200)
![mobile:3](/images/about/poole/poolemath/admin-m-3.webp)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

**<FontIcon icon="fas fa-code-branch"/> v0.0.1**

- 공통 UI 적용 및 개선 (Material UI)
- <FontIcon icon="iconfont icon-tex"/>KaTeX기반 수식 출력용 커스텀 웹뷰 적용 (결과물의 폰트, 정렬, etc.)

:::
