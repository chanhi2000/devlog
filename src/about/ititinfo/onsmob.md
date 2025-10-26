---
lang: ko-KR
title: 모바일 온나라 (1.0, 2.0)
description: (2022-2024) 정부업무관리시스템(온나라) 및 정부전자문서유통지원센터 유지관리 사업
icon: https://gis.ndms.go.kr/gpkisecureweb/image/install/favicon.ico
category: 
  - About
  - Portfolio
  - Project
  - Mobile
  - "아이티정보기술(주)"
  - "유알피 컨소시움"
  - Android
  - Java
  - Kotlin
  - DevOps
  - OpenShift
tag:
  - notion
  - portfolio
  - project
  - "project-2022"
  - "project-2023"
  - "project-2024"
  - ititinfo
  - urp
  - klid
  - mois
  - android
  - java
  - kotlin
  - jboss
  - jboss-wildfly
  - devops
  - openshift
head:
  - - meta:
    - property: og:title
      content: 모바일 온나라 (1.0/2.0)
    - property: og:description
      content: (2022-2024) 정부업무관리시스템(온나라) 및 정부전자문서유통지원센터 유지관리 사업
    - property: og:url
      content: https://chanhi2000.github.io/about/ititinfo/onsmob.html
isOriginal: true
author: Chan Hee Lee
date: 2022-04-01
cover: /images/about/ititinfo/onsmob-ref1.jpg
---

# {{ $frontmatter.description }} 관련

[[toc]]

---

## 개요

::: important 행정안전부 모바일온나라 플랫폼 관리

[![(2022-2024) 모바일 온나라: 정부업무관리시스템 모바일 부분<br/><이미지 출처: [<VPIcon icon="fas fa-newspaper"/>남동뉴스](https://namdongnews.co.kr/news/articleView.html?idxno=29753)>](/images/about/ititinfo/onsmob-ref1.jpg)](https://ko.wikipedia.org/wiki/%EC%98%A8%EB%82%98%EB%9D%BC_%EC%84%9C%EB%B9%84%EC%8A%A4)

사용 스택: <ShieldsGroup logos="openjdk,kotlin,intellijidea,gradle,apachemaven,android,androidstudio,git,gitlab,docker,mysql,redhatopenshift,apachetomcat,postman"/>

:::

::: details <VPIcon icon="fas fa-person-chalkboard"/> 주요 처리내용

**<VPIcon icon="fas fa-network-wired"/>프로젝트 관리법 개선**

- 프로젝트 네이밍 규칙 일관화
- <VPIcon icon="fa-brands fa-gitlab"/>위키작성 (배포이력, 빌드방법, etc.)
- <VPIcon icon="fas fa-bug"/>이슈관리 시작 (이슈처리이력 기록목적)
- <VPIcon icon="fas fa-code-branch"/>버젼관리 시작
- 전 프로젝트 빌드/실행 방식 일관화: <VPIcon icon="iconfont icon-maven"/>Maven → <VPIcon icon="iconfont icon-gradle"/>Gradle

**<VPIcon icon="fa-brands fa-android"/>안드로이드: Multi-module 프로젝트 관리 개편**

- 프로젝트 언어 최신화 (<VPIcon icon="fa-brands fa-java"/>Java → <VPIcon icon="iconfont icon-kotlin"/>Kotlin)
- 모듈 분리를 통한 온나라 앱 버젼별 재활용성 개선
- 앱 검증 및 최종본 apk 생성에 맞는 flavor별 gradle task 최초구성
- (행정안전부 및 정부산하 공공기관) 요구 기능 개발

**<VPIcon icon="iconfont icon-spring"/>스프링기반 프로젝트 관리**

- (중계/결재) 프로젝트 빌드/실행 방식 일관화: <VPIcon icon="iconfont icon-maven"/>Maven → <VPIcon icon="iconfont icon-gradle"/>Gradle
- SOAP / REST 요청 API 연계 구성
- <VPIcon icon="fa-brands fa-redhat"/>JBoss Wildfly + OpenShift 프로젝트 배포프로세스 정의 및 운영관리
- (행정안전부 및 정부산하 공공기관) 요구 기능 개발

:::

---

## ![앱 아이콘](/images/about/ititinfo/onsmob-v2/icon.png =x24) 모바일온나라 2.0

::: info <VPIcon icon="fa-brands fa-android"/>/<VPIcon icon="iconfont icon-spring"/>

<ImageGallery paths="
  /images/about/ititinfo/onsmob-v2/m-1.png
  /images/about/ititinfo/onsmob-v2/m-2.png
  /images/about/ititinfo/onsmob-v2/m-3.png
  /images/about/ititinfo/onsmob-v2/m-4.png
  /images/about/ititinfo/onsmob-v2/m-5.png
  /images/about/ititinfo/onsmob-v2/m-6.png
" isOneRow="true"/>

<VPIcon icon="fas fa-timeline"/>**2022**

- <VPIcon icon="fas fa-palette"/>사용자 편의성을 위한 UI 재개편

<VPIcon icon="fas fa-timeline"/>**2023**

- <VPIcon icon="fas fa-lightbulb"/>문서결재처리 유형추가 (검토, 병렬검토)
- <VPIcon icon="fas fa-network-wired"/>멀티모듈 프로젝트 구성
- <VPIcon icon="fas fa-gears"/>온모바일 VMI 서비스[^1] 출범에 따른 개발환경 구성 및 배포 프로세스 안정화

<VPIcon icon="fas fa-timeline"/>**2024**

- <VPIcon icon="fas fa-lightbulb"/>행정정보연계 문서에 대한 모바일 결재 프로세스 안정화 (한컴 문서변환 SDK활용)
- <VPIcon icon="fas fa-lightbulb"/>문서결재처리 유형추가 (협조, 병렬협조)
- <VPIcon icon="fas fa-lightbulb"/>사용자 권한에 따른 메뉴 은닉처리 (임시사용자, 서무관리, etc.)
- <VPIcon icon="fas fa-lightbulb"/>문서등록대장 문서 권한에 맞는 접수문서 열람
- [<VPIcon icon="fas fa-newspaper"/>국방부 2.0 모바일 온나라 자체구축](https://m.ddaily.co.kr/page/view/2024030814553161270) 기술 자문답변 및 업무협조

<SiteInfo
  name="국방부도 클라우드 전환 가속…온나라 2.0 통합구축 사업발주"
  desc="국방부가 클라우드 전환 프로젝트를 본격화한다. 국방부 온나라시스템의 클라우드 기반 통합구축 사업을 추진하는 것이 골자다. 공공 분야 중 가장 보수적인 국방 분야에서의 클라우드 확산 계기가 될지 주목된다."
  url="https://m.ddaily.co.kr//page/view/2024030814553161270/"
  logo="https://ddaily.co.kr/upload/2023/05/03/5c4e980c462bf0af09ed4969708f3836.ico"
  preview="https://ddaily.co.kr/2024/02/28/2024022814062658807_l.jpg"/>

:::

## ![앱 아이콘](/images/about/ititinfo/onsmob-v1/icon.png =x24) 모바일온나라 1.0

::: info <VPIcon icon="fa-brands fa-android"/>/<VPIcon icon="iconfont icon-spring"/>

<ImageGallery paths="
  /images/about/ititinfo/onsmob-v1/m-1.png
  /images/about/ititinfo/onsmob-v1/m-2.png
  /images/about/ititinfo/onsmob-v1/m-3.png
  /images/about/ititinfo/onsmob-v1/m-4.png
  /images/about/ititinfo/onsmob-v1/m-5.png
  /images/about/ititinfo/onsmob-v1/m-6.png
" isOneRow="true"/>

<VPIcon icon="fas fa-timeline"/>**2023**

- <VPIcon icon="fas fa-network-wired"/>멀티모듈 프로젝트 구성
- <VPIcon icon="fas fa-gears"/>온모바일 VMI 서비스[^1] 출범에 따른 개발환경 구성 및 배포 프로세스 안정화
- [<VPIcon icon="fas fa-newspaper"/>경찰청 1.0 폐쇄망 모바일 온나라 (a.k.a. 모바일오피스) 자체구축](https://v.daum.net/v/20220214101102798/) 기술 자문답변 및 업무협조

<VPIcon icon="fas fa-timeline"/>**2024**

- <VPIcon icon="fas fa-lightbulb"/>사용자 권한에 따른 메뉴 은닉처리 (임시사용자)
- [<VPIcon icon="fas fa-newspaper"/>경찰청 1.0 폐쇄망 모바일 온나라 (a.k.a. 모바일오피스) 자체구축](https://v.daum.net/v/20220214101102798/) 기술 자문답변 및 업무협조

<SiteInfo
  name="[단독] 경찰, '모바일 오피스' 사업 착수..언택트 근무환경 본격 구축"
  desc="[헤럴드경제=강승연 기자] 경찰이 언제 어디서나 스마트폰으로 업무를 볼 수 있는 ‘모바일 오피스’ 사업에 본격 착수한 것으로 확인됐다. 오미크론 변이발(發) 신종 코로나바이러스 감염증(코로나19) 확산세 등으로 기존 근무환경을 보완할 수 있는 비대면 근무 기반이 필요하다는 판단에서다. 14일 헤럴드경제 취재에 따르면 경찰청은 2022년부터 2024년까지 3"
  url="https://v.daum.net/v/20220214101102798/"
  logo="https://t1.daumcdn.net/top/favicon.ico"
  preview="https://img1.daumcdn.net/thumb/S1200x630/?fname=https://t1.daumcdn.net/news/202202/14/ned/20220214101103893qgtf.jpg"/>
:::

[^1]: [<VPIcon icon="fas fa-globe"/>온모바일][onmobile]: 공무뭔의 공공업무를 위한 가상화 환경의 내부행정망 모바일 서비스 (행정안전부 모바일전자정부지원센터)

<SiteInfo
  name="온모바일: 모바일전자정부 내부행정"
  desc="모바일전자정부 내부행정 서비스를 위한 페이지 입니다. 아래 설치파일을 다운로드 바랍니다."
  url="https://m.mobile.go.kr/"
  logo="https://gis.ndms.go.kr/gpkisecureweb/image/install/favicon.ico"
  preview="https://m.mobile.go.kr/images/realBadMain.jpg"/>

[onmobile]: https://m.mobile.go.kr
