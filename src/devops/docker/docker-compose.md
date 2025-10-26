---
lang: ko-KR
title: Docker Compose
description: Docker > Docker Compose
category:
  - DevOps
  - Docker
  - Container
  - Docker Compose
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
head:
  - - meta:
    - property: og:title
      content: Docker > Docker Compose
    - property: og:description
      content: Docker Compose
    - property: og:url
      content: https://chanhi2000.github.io/devops/docker/docker-compose.html
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

## 기본 명령어

### 기동/중지

| 명령어 | 설명 |
| :--- | :--- |
| `docker-compose up -d` | (`docker-compose.yml` 파일이 기본) docker-compose로 기동 |
| `docker-compose down` | (`docker-compose.yml` 파일이 기본) docker-compose로 구성한 모든 컨테이너 중지 |

---

## 자주쓰는 docker-compose

### 구성요소

<ShieldsGroup logos="gitea,jenkins"/>

### `docker-compose.yml`


```yml
version: "3"

networks:
  node-network:
    driver: bridge
  nexus:
    external: false
  t2_proxy:
    external: false

services:
  gitea:
    image: gitea/gitea:latest
    container_name: gitea
    environment:
      - USER_UID=1000
      - USER_GID=1000
    restart: always
    networks:
      - node-network
    volumes:
      - ./gitea:/data # persistent gitea database (sqlite3)
    ports:
      - "3000:3000" 


  jenkins:
    container_name: jenkins
    image: jenkins/jenkins:2.348-alpine-jdk8
    restart: always
    networks:
      - node-network
    privileged: true
    user: root
    ports: 
      - "8947:8080"
      - "50000:50000"
    volumes:
      - ./jenkins:/var/jenkins_home


  verdaccio:
    container_name: verdaccio
    image: verdaccio/verdaccio:latest
    restart: always
    networks:
      - node-network
    environment:
      VERDACCIO_PORT: 4873
      NODE_ENV: production
    ports:
      - "4873:4873"
    volumes:
      - ./verdaccio/config:/verdaccio/conf 
      - ./verdaccio/storage:/verdaccio/storage
      - ./verdaccio/plugins:/verdaccio/plugins


  nexus:
    container_name: nexus
    image: sonatype/nexus3:latest
    restart: always
    networks:
      - nexus
    ports:
      - "8081:8081"
    volumes:
      - ./nexus/data:/nexus-data
```

---

<TagLinks />