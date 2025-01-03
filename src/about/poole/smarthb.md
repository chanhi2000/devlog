---
lang: ko-KR
title: "스마트해법 앱북"
description: "(2021-2022) 앱북: 스마트해법 초중등생 PDF기반 수학문제집 뷰어 및 문제풀이기능 연동"
icon: /images/about/poole/smarthb/ico-appbook.png
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
  - smarthb
  - android
  - java
head:
  - - meta:
    - property: og:title
      content: "스마트해법 앱북"
    - property: og:description
      content: "(2021-2022) 스마트해법 초중등생 PDF기반 수학문제집 뷰어 및 문제풀이기능 연동"
    - property: og:url
      content: https://chanhi2000.github.io/about/poole/smarthb.html
isOriginal: true
author: Chan Hee Lee
date: 2021-07-01
cover: /images/about/poole/smarthb/appbook-m-1.webp
---

# {{ $frontmatter.description }} 관련

[[toc]]

---

## 개요

::: important MyScript SDK 수식필기변환 기반 PDF 뷰어앱

[![(2021-2022) 스마트해법 초중등생 PDF기반 수학문제집 뷰어 및 문제풀이기능 연동](/images/about/poole/smarthb/appbook-m-1.webp)](http://editor-v1.poolemath.com)

사용 스택: <ShieldsGroup logos="openjdk,kotlin,intellijidea,gradle,android,androidstudio,git,firebase,bitbucket,jira,confluence,docker,nodedotjs,mysql,express,amazons3"/>

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
  - 기타 모듈 (API호출, 필기, 기타)

**소스코드 관리**

- UI 개선 (Material UI)
- <FontIcon icon="fa-brands fa-bitbucket"/>Bitbucket / <FontIcon icon="fa-brands fa-jira"/>Jira / <FontIcon icon="fa-brands fa-confluence"/>Confluence 를 이용한 협업 및 목표관리

**APK 배포**

- 자동배포 구성 (<FontIcon icon="fa-brands fa-bitbucket"/>Bitbucket Pipeline, <FontIcon icon="iconfont icon-firebase"/>Firebase App Distribution)

:::

## ![앱 야아콘](/images/about/poole/smarthb/ico-appbook-launcher.png =x24) 앱북런처

::: info <FontIcon icon="fa-brands fa-android"/> Android

<ImageGallery paths="
  /images/about/poole/smarthb/appbook-launcher-m-1.webp
"/>

> <FontIcon icon="fas fa-code-branch"/> v16.x

- 공통 UI 적용 및 개선 (Material UI)
- 리펙토링 (UI / API / 파일관리 / DB)
- 책 이름 목록 검색기능 추가개발
- Android 30 SAF (Storage Access Framework) 구성 (일괄 PDF 파일 로컬 다운로드 기능개발)

:::

::: info <FontIcon icon="iconfont icon-expressjs"/>백엔드 Express.js

<ImageGallery paths="
  /images/about/poole/smarthb/appbook-launcher-b-1.webp
  /images/about/poole/smarthb/appbook-launcher-b-2.webp
"/>

> <FontIcon icon="fas fa-code-branch"/> v16.x

- <FontIcon icon="fa-brands fa-aws"/>AWS EC2 인스턴스 관리
- 소스 복구 및 개발 환경 재구성
- <FontIcon icon="fa-brands fa-docker"/>Docker 환경 구성 및 배포 관리
- 자동배포 구성 (<FontIcon icon="fa-brands fa-bitbucket"/>Bitbucket Pipeline)

:::

---

## ![앱 야아콘](/images/about/poole/smarthb/ico-appbook.png =x24) 앱북

::: info <FontIcon icon="fa-brands fa-android"/>Android

<ImageGallery paths="
  /images/about/poole/smarthb/appbook-m-1.webp
  /images/about/poole/smarthb/appbook-m-2.webp
  /images/about/poole/smarthb/appbook-m-3.webp
  /images/about/poole/smarthb/appbook-m-4.webp
  /images/about/poole/smarthb/appbook-m-5.webp
"/>

- 공통 UI 적용 및 개선 (Material UI)
- 리펙토링 (UI / API / 파일관리 / DB)

:::
