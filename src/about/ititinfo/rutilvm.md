---
lang: ko-KR
title: RutilVM, 서버 가상화 관리 시스템
description: (2025-2026) RutilVM, 서버 가상화 관리 시스템
icon: /images/about/ititinfo/logo.svg
category: 
  - About
  - Portfolio
  - Project
  - "아이티정보기술(주)"
  - Java
  - Kotlin
  - Spring
  - Spring Boot
  - Node.js
  - React.js
  - TanStack
  - Shadcn
  - CSS
  - Tailwind CSS
  - DevOps
  - Linux
  - oVirt
  - Fedora
  - Red Hat
  - Docker
  - Kubernetes
  - AI
  - LLM
  - Anthropic
  - Claude
tag:
  - notion
  - portfolio
  - project
  - "project-2025"
  - "project-2026"
  - ititinfo
  - java
  - kotlin
  - spring
  - springboot
  - node
  - nodejs
  - node-js
  - react
  - reactjs
  - react-js
  - tanstack
  - shadcn
  - css
  - tailwindcss
  - tailwind-css
  - devops
  - docker
  - k8s
  - kubernetes
  - ai
  - artificial-intelligence
  - llm
  - large-language-models
  - anthropic
  - claude
head:
  - - meta:
    - property: og:title
      content: RutilVM, 서버 가상화 관리 시스템
    - property: og:description
      content: (2025-2026) RutilVM, 서버 가상화 관리 시스템
    - property: og:url
      content: https://chanhi2000.github.io/about/ititinfo/rutilvm.html
isOriginal: true
author: Chan Hee Lee
date: 2026-02-03
cover: /images/about/ititinfo/rutilvm/hero-topology.webp
---

# {{ $frontmatter.description }} 관련

[[toc]]

---

## 개요

<SiteInfo
  name="RutilVM | Enterprise Virtualization Platform"
  desc="복잡한 가상화 인프라를 하나의 운영 경험으로 연결하는 엔터프라이즈 가상화 관리 플랫폼."
  url="http://rutilvm.com"
  logo="/images/about/ititinfo/logo.svg"
  preview="/images/about/ititinfo/rutilvm/hero-topology.webp"/>

::: important <VPIcon icon="iconfont icon-ovirt"/><VPIcon icon="fa-brands fa-redhat"/> 오픈소스 기반 가상머신 자원 관리 솔루션 개발

[![](/images/about/ititinfo/rutilvm/logo-rutilvm.svg)](http://rutilvm.com)

<ImageGallery paths="
  /images/about/ititinfo/rutilvm/00.png
  /images/about/ititinfo/rutilvm/01.png
  /images/about/ititinfo/rutilvm/02.png
  /images/about/ititinfo/rutilvm/02b.png
  /images/about/ititinfo/rutilvm/03.png
  /images/about/ititinfo/rutilvm/03b.png
  /images/about/ititinfo/rutilvm/04.png
  /images/about/ititinfo/rutilvm/05.png
  /images/about/ititinfo/rutilvm/06.png
"/>

사용 스택: <ShieldsGroup logos="openjdk,kotlin,intellijidea,gradle,spring,springboot,git,github,gitea,docker,kubernetes,nodedotjs,react,tanstack,tailwindcss,shadcnui,postgresql,redhat,notion,claudecode"/>

<SiteInfo
  name="VMware 대안 부상…아이티정보기술 'RutilVM', 기업 가상화 환경 구축"
  desc="브로드컴의 브이엠웨어 인수 이후 라이선스 정책 변화와 가격 인상 논란이 이어지면서 국내 기업과 공공기관을 중심으로 가상화 플랫폼 대체 수요가 확대되면서 국산 솔루션에 대한 관심이 커지고 있다. 아이티정보기술은 자체 "
  url="https://n.news.naver.com/article/030/0003407645"
  logo="https://ssl.pstatic.net/static.news/image/news/m/2023/08/21/favicon.ico"
  preview="https://imgnews.pstatic.net/image/030/2026/03/16/0003407645_001_20260316100014814.png?type=w800"/>

:::

::: details <VPIcon icon="fas fa-circle-info"/> 주요 처리내용

**<VPIcon icon="fas fa-users"/> 협업 환경 마련**

- <VPIcon icon="iconfont icon-notion"/>Notion을 활용한 팀원 협업 및 프로젝트 업무 공유 체계 마련
  - Wiki: 통한 도입가능 및 현재 사내에서 쓰고 있으며 필히 숙제해야 하는 기술에 대한 사용 및 Troubleshooting 방법 공유
  - 이슈기록일지: 반복적으로 발생할 수 있는 장애 중, 간단하게 설명이 어려운 내용에 대해 step-by-step으로 정애처리 내용을 정리한 기록일지 공유.
- 외주 디자이너와 협업을 통해 <VPIcon icon="fa-brands fa-figma"/>Figma에서 만든 디자인 도입

**<VPIcon icon="fas fa-computer"/> 기능개발 및 소스코드 관리**

- 시스템 내 전 도메인 운영 및 관리를 위한 필요기능 개발 (<VPIcon icon="iconfont icon-spring"/>백엔드,<VPIcon icon="fa-brands fa-react"/>프론트앤드, <VPIcon icon="iconfont icon-github"/>CI/CD 파이프라인 및 기타 배포 스크립트 등등)
  - 도메인 별 프로토콜 대비한 기능 개발 (SSH 명령어 실행, noVNC 쥅소켓 통신, SMTP, IPMI 서버장비 전원관리, 등등.)
- 사내 Synology NAS에서 <VPIcon icon="fa-brands fa-docker"/>Docker 서비스 운영
  - <VPIcon icon="iconfont icon-gitea"/>사내 Gitea 서비스를 통한 Github (실제 프로젝트) 저장소 미러링 기능 마련
  - Sonatype Nexus 서비스를 통한 Docker Registry 운영 및 관리
- AI 활용 기능 도입 시도
  - 사내 <VPIcon icon="iconfont icon-github-actions"/>Github Actions 트리거를 위한 <VPIcon icon="iconfont icon-k8s"/>Kubernetes 기반 Github Self-hosted Runners (ARC) 구성
  - <VPIcon icon="iconfont icon-claude"/>Claude Code 환경 초기 도입
- <VPIcon icon="iconfont icon-git"/><VPIcon icon="fas fa-code-branch"/>팀원 브랜치 생성 규칙 교육 및 관리

**<VPIcon icon="fas fa-timeline"/> 관련 외부 활동**

- (2026년 2월) TTA 인증 완료
- (2026년 6월) 서울시교통공사 납품 및 유지보수 계약 완료

:::

---

## 참조

::: note <VPIcon icon="fas fa-images"/> 개선 전 (Before)

<ImageGallery paths="
  /images/about/ititinfo/rutilvm/before00.png
  /images/about/ititinfo/rutilvm/before01.png
  /images/about/ititinfo/rutilvm/before02.png
  /images/about/ititinfo/rutilvm/before02b.png
  /images/about/ititinfo/rutilvm/before03.png
  /images/about/ititinfo/rutilvm/before03b.png
  /images/about/ititinfo/rutilvm/before04.png
  /images/about/ititinfo/rutilvm/before05.png
"/>

:::
