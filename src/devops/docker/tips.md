---
lang: ko-KR
title: Tips
description: Docker > Tips
icon: fas fa-lightbulb
category:
  - DevOps
  - Docker
  - Container
  - Tips
tag:
  - devops
  - docker
  - container
head:
  - - meta:
    - property: og:title
      content: Docker > Tips
    - property: og:description
      content: Tips
    - property: og:url
      content: https://chanhi2000.github.io/devops/docker/tips.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## Rancher Desktop

::: warning <VPIcon icon="iconfont icon-github"/> Rancher Desktop

> [`rancher-sandbox/rancher-desktop`](https://github.com/rancher-sandbox/rancher-desktop/issues/7169)

Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

```sh
sudo ln -s ~$USER/.rd/docker.sock /var/run/docker.sock
```

:::

---

## Windows에서 디스크 용량이 넘쳤을 때

<SiteInfo
  name="프로젝트 종료 후 사후 정리 도커(ssd와 ram 리소스 확보)+노트북 스펙업 메모"
  desc="6주 AI 헬스케어 프로젝트가 끝났다. 도커 컨테이너에 적재된 32K 의약품 데이터·571K RAG chunks 가 SSD를 점유하던 상태. 노트북 SSD 가 312 GB 라 빠듯해서 정리가 필요했고, 47.96 GB 를 회수했다. 그 과정에서 마주친 ”WSL2 vhd"
  url="https://velog.io/@yeoul98/프로젝트-종료-후-사후-정리-도커ssd와-ram-리소스-확보/"
  logo="https://static.velog.io/favicons/favicon-16x16.png"
  preview="https://velog.velcdn.com/images/yeoul98/post/3ce3fb01-5aca-4c2a-a7c7-46bb84070989/image.png"/>

<SiteInfo
  name="AdnanSattar/docker-desktop-wsl-shrink"
  desc="Shrink Docker Desktop WSL2 VHDX. One-click PowerShell toolkit for AI/ML developers"
  url="https://github.com/AdnanSattar/docker-desktop-wsl-shrink/"
  logo="https://github.githubassets.com/favicons/favicon-dark.svg"
  preview="https://opengraph.githubassets.com/385e60616d80cd2197ba153df18314fbc32ae3b3350a389a8eb0fc14019aae81/AdnanSattar/docker-desktop-wsl-shrink"/>


<TagLinks />
