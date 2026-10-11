---
lang: ko-KR
title: Environment Setup
description: Helm > Environment Setup
icon: fas fa-toolbox
category:
  - DevOps
  - Kubernetes
  - Helm
  - Environment Setup
tag: 
  - devops
  - k8s
  - kubernetes
  - helm
  - env
  - env-setup
head:
  - - meta:
    - property: og:title
      content: Helm > Environment Setup
    - property: og:description
      content: Environment Setup
    - property: og:url
      content: https://chanhi2000.github.io/devops/k8s-helm/env-setup.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 설치

```sh
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
# Verify
helm version
```

---

## <VPIcon icon="fas fa-book-atlas"/>참고

<SiteInfo
  name="Install Helm on Rocky Linux: Setup Guide | K8s Recipes"
  desc="Install Helm 3 on Rocky Linux and configure chart repositories. Covers package manager install, script install, and shell completion for Rocky Linux 8/9."
  url="https://kubernetes.recipes/recipes/helm/install-helm-rocky-linux/"
  logo="https://kubernetes.recipes/favicon-16x16.png"
  preview="https://kubernetes.recipes/opengraph.jpg"/>

---

<TagLinks />