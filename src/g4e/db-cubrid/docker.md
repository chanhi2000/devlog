---
lang: ko-KR
title: Docker
description: Cubrid > Docker
icon: fa-brands fa-docker
category:
  - Cubrid
  - Docker
tag: 
  - sh
  - bash
  - cli
  - docker
  - docker-desktop
  - yml
  - yaml
  - docker-container
  - vm
  - docker-compose
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## Docker Compose

```yml
version: "3"

networks:
  node-network:
    driver: bridge

services:
  cubrid:
  
```

---

<TagLinks />
