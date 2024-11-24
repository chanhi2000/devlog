---
lang: ko-KR
title: 긴급보수 현장지원
description: (2018-2019) 서울 포장도로 관리 시스템 모바일부분 유지보수 용역
icon: /images/about/ginno/spms/spms-ico.png
category: 
  - About
  - Portfolio
  - Project
  - Mobile
  - "지노시스템(주)"
  - iOS
  - Swift
  - Android
  - Spring
  - Java
  - Kotlin
tag:
  - about
  - portfolio
  - "project-2018"
  - "project-2019"
  - ginno
  - ios
  - swift
  - android
  - spring
  - java
head:
  - - meta:
    - property: og:title
      content: (2018-2019) 서울 포장도로 관리 시스템 모바일부분 유지보수 용역
    - property: og:description
      content: 긴급보수 현장지원
    - property: og:url
      content: https://chanhi2000.github.io/about/ginno/spms.html
isOriginal: true
author: Chan Hee Lee
date: 2018-01-01
cover: /images/about/ginno/spms/spms-bg.jpg
---

# {{ $frontmatter.description }} 관련

[[toc]]

---

## 개요

[![(2018-2019) 서울 포장도로 관리 시스템 모바일부분 유지보수 용역<br/><출처: 서울특별시 pave.eseoul.go.kr>](/images/about/ginno/spms/spms-jumbo.jpg =250x)](https://pave.eseoul.go.kr/)

[![iOS 설치파일 다운르도](https://img.shields.io/badge/For%20iOS-999999?logo=apple&logoColor=white&style=flat-square)][ios-download]

[![Android 설치파일 다운로드](https://img.shields.io/badge/For%20Android-3DDC84?logo=android&logoColor=white&style=flat-square)][aos-download]

> <ShieldsGroup logos="openjdk,swift,kotlin,oracle,eclipseide,postman,intellijidea,apple,xcode,cocoapods,spring,gradle,apachemaven,android,androidstudio,git,gitea"/>

긴급보수 현장지원 앱 서비스 관리 (Daum 맵 위치정보 기반 멀티플랫폼 프로젝트)

::: details <FontIcon icon="fas fa-person-chalkboard"/> 주요 처리내용

**<FontIcon icon="iconfont icon-api"/>API 지원종료로 인한 API 호출 기능 최신화**

- **<FontIcon icon="fas fa-paper-plane"/>푸시메시지**:
  - <FontIcon icon="iconfont icon-gcp"/>GCM  → <FontIcon icon="iconfont icon-firebase"/>FCM (<FontIcon icon="iconfont icon-ios"/>iOS,<FontIcon icon="fa-brands fa-android"/>Android,<FontIcon icon="iconfont icon-spring"/>Spring)
- **<FontIcon icon="fas fa-map-pin"/>공간정보**:
  - Daum REST API → <FontIcon icon="iconfont icon-kakao"/>Kakao REST API (<FontIcon icon="iconfont icon-ios"/>iOS,<FontIcon icon="fa-brands fa-android"/>Android)
- **<FontIcon icon="fas fa-map-location-dot"/>지도**:
  - Daum Map Framework

**<FontIcon icon="iconfont icon-gradle"/>Multiplatform 프로젝트 최초 도입**

- 개발소스 병합 & 공통기능 모듈 공유
- **구성**:
  - <FontIcon icon="fa-brands fa-android"/>Android/<FontIcon icon="iconfont icon-ios"/>iOS
  - <FontIcon icon="fa-brands fa-java"/>TornadoFx
  - <FontIcon icon="iconfont icon-spring"/>Spring API서버
  - <FontIcon icon="fa-brands fa-java"/>배치실행파일, etc.

**<FontIcon icon="fas fa-network-wired"/>사내 형상관리 시스템 구축 및 변경**

- <FontIcon icon="iconfont icon-svn"/>SVN → <FontIcon icon="fa-brands fa-git-alt"/>Git

:::

---

## 프론트앤드

### <FontIcon icon="fa-brands fa-android"/> Android

![Android:1](/images/about/ginno/spms/after-aos-1.webp =x270)
![Android:2](/images/about/ginno/spms/after-aos-2.webp =x270)
![Android:3](/images/about/ginno/spms/after-aos-3.webp =x270)
![Android:4](/images/about/ginno/spms/after-aos-4.webp =x270)

![Android:5](/images/about/ginno/spms/after-aos-5.webp =x270)
![Android:6](/images/about/ginno/spms/after-aos-6.webp =x270)
![Android:7](/images/about/ginno/spms/after-aos-7.webp =x270)
![Android:8](/images/about/ginno/spms/after-aos-8.webp =x270)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

- 프로젝트 언어 최신화 (<FontIcon icon="fa-brands fa-java"/>Java → <FontIcon icon="iconfont icon-kotlin"/>Kotlin)
- SDK 최신화 및 소스코드 리펙토링
  - <FontIcon icon="iconfont icon-api"/>API 호출 프로세스 일괄변경 (Apache HTTP Connection → Retrofit)
  - **IDE**: <FontIcon icon="iconfont icon-eclipse"/>Eclipse → <FontIcon icon="iconfont icon-intellijidea"/>Intellij-Idea
  - **Build**: <FontIcon icon="iconfont icon-maven"/>Maven → <FontIcon icon="iconfont icon-gradle"/>Gradle
- APK 배포 프로세스 구성

:::

### <FontIcon icon="iconfont icon-ios"/> iOS

![iOS:1](/images/about/ginno/spms/after-ios-1.webp =x270)
![iOS:2](/images/about/ginno/spms/after-ios-2.webp =x270)
![iOS:3](/images/about/ginno/spms/after-ios-3.webp =x270)
![iOS:4](/images/about/ginno/spms/after-ios-4.webp =x270)

![iOS:5](/images/about/ginno/spms/after-ios-5.webp =x270)
![iOS:6](/images/about/ginno/spms/after-ios-6.webp =x270)
![iOS:7](/images/about/ginno/spms/after-ios-7.webp =x270)
![iOS:8](/images/about/ginno/spms/after-ios-8.webp =x270)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

**<FontIcon icon="fas fa-code-branch"/> v1.07 ~ 2.01**

- <FontIcon icon="fa-brands fa-swift"/>Swift 최신화 (3 → 4)
- SDK 최신화 및 소스코드 리펙토링
  - 의존라이브러리 관리 시작: <FontIcon icon="iconfont icon-cocoapods"/>CocoaPod 최초도입
  - <FontIcon icon="fas fa-wrench"/>~변경~ SideMenu: 메뉴 구성용 라이브러리 (전: *SWRevealViewController*)
  - <FontIcon icon="fas fa-puzzle-piece"/>~추가~ KingFisher:  이미지 사진 캐싱 및 비동기식 다운로드
  - <FontIcon icon="fas fa-wrench"/>~변경~ Firebase: GCM 지원종료로 인해 Firebase Messaging 신규구성
- UI & Library 현행화
- 정적 리소스 최소화
  - 텍스트 이미지 버튼 → 텍스트 버튼으로 변경
  - 반복적으로 표현되는 View의 재활용
- 신고위치 POI 위 말풍선 뷰 UI개선
- Daum Map Framework 업데이트
- 사내 <FontIcon icon="fa-brands fa-apple"/>Apple Developer Program (Enterprise) 관리
- IPA 배포 프로세스 구성

**Code Refactoring**

- 네트워크 / View / Logic 분리
  - Kakao API: 위치 정보 호출
  - SPMS API: 본 서버 내 업무 프로세스 관련 정보 호출

:::

<FontIcon icon="fa-brands fa-java"/> JavaFX

> TornadoFX 기반 JavaFX 클라이언트 프로그램

![화면](/images/about/ginno/spms/spms-javafx.png =450x)

::: details <FontIcon icon="fas fa-circle-info"/> 상세정보

- 계정 상태 복구를 위한 사무용 데스크탑 앱 개발
- 계정 및 전화번호 암호화 & 복호화

:::

---

## 백앤드

#### <FontIcon icon="iconfont icon-spring"/> Spring

> 오라클 DB 기반 스프링 레거시 서버

- 서울시 민원 응답소 (타 시스템) 연계 API 최신화
- 운영 서버 관리운영 (WebtoB 4.1 / Jeus 7)

---

## 참조

::: details <FontIcon icon="fas fa-images"/> 개선 전 (Before)

![1](/images/about/ginno/spms/before-1.png =x270)
![2](/images/about/ginno/spms/before-2.png =x270)
![3](/images/about/ginno/spms/before-3.png =x270)
![4](/images/about/ginno/spms/before-4.png =x270)

![5](/images/about/ginno/spms/before-5.png =x270)
![6](/images/about/ginno/spms/before-6.png =x270)
![7](/images/about/ginno/spms/before-7.png =x270)
![8](/images/about/ginno/spms/before-8.png =x270)

:::

---

<TagLinks />

[ios-download]: https://pavepot.eseoul.go.kr:8443/ios.do
[aos-download]: http://115.84.164.38:8080/apk/SPMS.apk