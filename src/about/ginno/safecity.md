---
lang: ko-KR
title: 서울안전
description: (2019-2020) 서울 스마트재난 시스템 유지보수 용역유지보수 용역
icon: /images/about/ginno/safecity/safecity-ico.png
category: 
  - About
  - Portfolio
  - Project
  - Mobile
  - "지노시스템(주)"
  - iOS
  - Objective-C
  - Android
  - Java
  - Kotlin
  - Node.js
  - Cordova
  - Spring
tag:
  - notion
  - portfolio
  - project
  - "project-2019"
  - "project-2020"
  - ginno
  - ios
  - objc
  - objective-c
  - android
  - spring
  - java
  - node
  - nodejs
  - node-js
  - cordova
head:
  - - meta:
    - property: og:title
      content: 서울안전
    - property: og:description
      content: (2019-2020) 서울 스마트재난 시스템 유지보수 용역유지보수 용역
    - property: og:url
      content: https://chanhi2000.github.io/about/ginno/safecity.html
isOriginal: true
author: Chan Hee Lee
date: 2019-01-01
cover: /images/about/ginno/safecity/safecity-banner.webp
---

# {{ $frontmatter.description }} 관련

[[toc]]

---

## 개요

::: info 서울안전 앱 서비스 관리 (Naver 맵 위치정보 기반 웹/모바일 하이브리드 플랫폼)

[![(2019-2020) 서울 스마트재난 시스템 유지보수 용역유지보수 용역<br/><출처: 서울특별시 safecity.seoul.go.kr><br/>[![](https://img.shields.io/badge/Available%20on%20App%20Store-000000?logo=apple&logoColor=white&style=flat-square)][ios-download] [![](https://img.shields.io/badge/Available%20on%20Google%20Play-414141?logo=google%20play&logoColor=white&style=flat-square)][aos-download]](/images/about/ginno/safecity/safecity-banner.webp =700x)](https://safecity.seoul.go.kr/)

사용 스택: <ShieldsGroup logos="openjdk,swift,oracle,intellijidea,apple,xcode,spring,apachemaven,gradle,android,androidstudio,git,gitea,nodedotjs,apachecordova,verdaccio,docker,windows,jenkins"/>

:::

::: details <FontIcon icon="fas fa-person-chalkboard"/> 주요 처리내용

**<FontIcon icon="iconfont icon-api"/>API 지원종료로 인한 API 호출 기능 최신화**

- **<FontIcon icon="fas fa-paper-plane"/>푸시메시지**:
  - <FontIcon icon="iconfont icon-gcp"/>GCM  → <FontIcon icon="iconfont icon-firebase"/>FCM (<FontIcon icon="iconfont icon-ios"/>iOS,<FontIcon icon="fa-brands fa-android"/>Android,<FontIcon icon="iconfont icon-spring"/>Spring)
- **<FontIcon icon="iconfont icon-kakao"/> Kakao 링크공유API** 갱신
- **<FontIcon icon="fas fa-map-location-dot"/>지도**:
  - <FontIcon icon="iconfont icon-naver"/>Naver Map → NCloud
- 기타 서울시 웹로그 API 적용상태 확인

**서울공공앱 개발용 계정 관리**

- <FontIcon icon="fa-brands fa-google-play"/>Google Play
- <FontIcon icon="fa-brands fa-app-store"/>App Store

:::

---

## 프론트엔드

### <FontIcon icon="iconfont icon-apachecordova"/> Cordova (<FontIcon icon="iconfont icon-ios"/>iOS/<FontIcon icon="fa-brands fa-android"/>Android)

<ImageGallery paths="
  /images/about/ginno/safecity/safecity-m-1.webp
  /images/about/ginno/safecity/safecity-m-2.webp
  /images/about/ginno/safecity/safecity-m-3.webp
  /images/about/ginno/safecity/safecity-m-4.webp
  /images/about/ginno/safecity/safecity-m-5.webp
  /images/about/ginno/safecity/safecity-m-6.webp
  /images/about/ginno/safecity/safecity-m-7.webp
  /images/about/ginno/safecity/safecity-m-8.webp
" isOneRow="true"/>

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

**<FontIcon icon="iconfont icon-apachecordova"/>Cordova Plugin 개발 및 관리**

- 소스 (<FontIcon icon="iconfont icon-objective-c"/>Objective-C / <FontIcon icon="fa-brands fa-java"/>Java) 자동 생성을 위한 <FontIcon icon="iconfont icon-apachecordova"/>Cordova 전용 스크립트 개발
- 필수 <FontIcon icon="iconfont icon-apachecordova"/>Cordova Plugin 현행화
  - <FontIcon icon="iconfont icon-verdaccio"/>Verdaccio[^1] 구축
- <FontIcon icon="fas fa-puzzle-piece"/>~추가~: 서울시 웹로그 API 적용상태 확인

:::

---

## 백앤드

<ImageGallery paths="
  /images/about/ginno/safecity/safecity-w-1.webp
  /images/about/ginno/safecity/safecity-w-2.webp
  /images/about/ginno/safecity/safecity-w-3.webp
  /images/about/ginno/safecity/safecity-w-4.webp
  /images/about/ginno/safecity/safecity-w-5.webp
" isOneRow="true"/>

### <FontIcon icon="iconfont icon-spring"/> Spring (JSP 웹)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

- 기능 안정화를 위한 버그 수정
- 소스코드 리펙토링 (가독성 부분)
- 운영서버 관리 (<FontIcon icon="iconfont icon-ibm"/>AIX / <FontIcon icon="fa-brands fa-windows"/>Windows Server 2016)
  - Jeus 6 / WebtoB 4.1
  - 장비 이관 작업
- 데이터 수집용 배치실행파일 관리
  - 공공데이터포털, 산림청, 한국홍수통제소, 서울열린데이터광장 등등
  - Decompile 후 소스화 작업
- 단위 테스트 코드 최초작성 (JUnit)

:::

#### 지도 엔진 솔루션 관리

> 지오게이트 (자사 지도엔진 벡엔드 솔루션)

- 공간정보 데이터 갱신
- 공간 데이터 관리용 SW 설치 및 현행화

---

## <FontIcon icon="fas fa-network-wired"/>DevOps

**<FontIcon icon="fa-brands fa-docker"/>Docker 의 `docker-compose`기능을 사용하여 최적화 된 DevOps 생태계 서버 관리법 구성**

- **<FontIcon icon="fa-brands fa-git-alt"/>Gogs**: Git에서 소스형상관리 할 수 있도록 사내 Git Repository 저장소 서버 구축
- **<FontIcon icon="iconfont icon-verdaccio"/>Verdaccio**:[^1] Cordova Plugin 버전 관리 할 수 있도록 사내 Registry 서버 구축
- **<FontIcon icon="fa-brands fa-jenkins"/>Jenkins**: Git Webhook을 이용하여 서버 자동배포 및 관리
- **Sonatype Nexus**: maven repository에 공개되지 않은 jar파일 관리
  - 사내 솔루션

[^1]: Docker를 활용하여 사내 node package registry 관리 서버 최초 구성

[ios-download]: https://apps.apple.com/kr/app/%EC%84%9C%EC%9A%B8%EC%95%88%EC%A0%84/id1331810063
[aos-download]: https://play.google.com/store/apps/details?id=kr.go.seoul.hybrid.SafeCity