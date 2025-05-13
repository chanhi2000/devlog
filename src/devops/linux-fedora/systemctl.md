---
lang: ko-KR
title: systemctl
description: Linux - Fedora > systemctl
icon: iconfont icon-shell
category:
  - DevOps
  - Linux
  - Fedora
  - systemctl
tag: 
  - linux
  - redhat
  - centos
  - cli
  - shell
  - systemctl
head:
  - - meta:
    - property: og:title
      content: Linux - Fedora > systemctl
    - property: og:description
      content: systemctl
    - property: og:url
      content: https://chanhi2000.github.io/devops/linux-fedora/systemctl.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 기본

```sh
systemctl list-unit-files --type=service | grep enabled # List all enabled services

systemctl disable <SERVICE_NAME> # Disable unnecessary services.
```

---

<TagLinks />
