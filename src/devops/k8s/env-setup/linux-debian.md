---
lang: ko-KR
title: Environment Setup - (Linux - Debian)
description: Kubernetes > Environment Setup - (Linux - Debian)
icon: fa-brands fa-debian
category:
  - DevOps
  - Kubernetes
  - Environment Setup
  - Linux
  - Debian
  - Ubuntu
tag:
  - devops
  - k8s
  - kubernetes
  - env
  - env-setup
  - linux
  - debian
  - ubuntu
head:
  - - meta:
    - property: og:title
      content: Kubernetes > Envi ronment Setup - (Linux - Debian)
    - property: og:description
      content: Environment Setup - (Linux - Debian)
    - property: og:url
      content: https://chanhi2000.github.io/devops/k8s/env-setup/linux-debian.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## <VPIcon icon="fas fa-book-atlas"/>참고

<SiteInfo
  name="쿠버네티스 (k8s) 워커노드 추가하기"
  desc="저번에 단일노드로 쿠버네티스를 설정했습니다. 그렇게 계속 사용할 순 없고 슬슬 노드를 추가해야겠지요...?그리하여!이번엔 사무실에 셋팅해놓은 추가적인 서버를 워커노드로 추가해보겠습니다. 추가하려는 노드들도 이전과 비슷한 작업을 우선 거쳐야 합니다. 모든 명령어는 워커노드에서 실행시켜주시면 됩니다..."
  url="https://dev-hahm.tistory.com/27"
  logo="https://dev-hahm.tistory.com/favicon.ico"
  preview="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fimages%2FopenGraph%2Fopengraph.png"/>

<SiteInfo
  name="[Kubernetes] Worker Node 추가 구성하기 : Join"
  desc="본 글은 여기에 이어서 진행한다. Vagrant를 통해 Worker Node로 사용할 1대의 VM을 구축한 뒤, k8s 관련 패키지들을 설치 및 설정하고 Control Plane과 Worker Node가 동시에(1대에) 구축되어 있던 기존의 VM에 새로 구축한 Worker Node를 join할 예정이다. 📌Index VM 생성하기 Docker 설치 및 설정하기 kubeadm, kubelet, kubectl 설치하기 K8s Cluster에 Join하기 ✔️ VM 생성하기 Vagrantfile을 사용하여 ubuntu VM을 생생하자. Vagrant.configure(”2”) do |config| # Control Plane과 Worker Node가 동시에 구축된 기존의 VM config.vm.define ”.."
  url="https://nayoungs.tistory.com/entry/Kubernetes-Worker-Node-%EC%B6%94%EA%B0%80-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0-Join/"
  logo="https://nayoungs.tistory.com/favicon.ico"
  preview="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Ftistory_admin%2Fstatic%2Fimages%2FopenGraph%2Fopengraph.png"/>

---

<TagLinks />