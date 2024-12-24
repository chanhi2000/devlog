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

::: warning <FontIcon icon="iconfont icon-github"/> Rancher Desktop

> [`rancher-sandbox/rancher-desktop`](https://github.com/rancher-sandbox/rancher-desktop/issues/7169)

Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?

```sh
sudo ln -s ~$USER/.rd/docker.sock /var/run/docker.sock
```

:::
