---
lang: ko-KR
title: (멀티모듈 프로젝트에서) Docker 빌드 때 캐시 활용
description: Snippets > (멀티모듈 프로젝트에서) Docker 빌드 때 캐시 활용
icon: fas fa-upload
category:
  - Gradle
  - DevOps
  - Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
  - devops
  - docker
head:
  - - meta:
    - property: og:title
      content: Snippets >  (멀티모듈 프로젝트에서) Docker 빌드 때 캐시 활용
    - property: og:description
      content:  (멀티모듈 프로젝트에서) Docker 빌드 때 캐시 활용
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/docker-build-cache-multimodule.html
prev: /programming/gradle/snippets/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Gradle > Snippets",
  "desc": "Snippets",
  "link": "/programming/gradle/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "Docker > Snippets",
  "desc": "Snippets",
  "link": "/devops/docker/snippets/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

> Java 11, Gradle 7.4.2 환경에서 동작 **정상**

## <VPIcon icon="fa-brands fa-docker"/>`Dockerfile`

```dockerfile{5-6} title="Dockerfile"
FROM gradle:7.4.2-jdk11-focal AS build
WORKDIR /home/gradle/project
# ...
# 최증 빌드 명령어에서
RUN --mount=type=cache,target=/home/gradle/.gradle \
    gradle rutil-vm-api:bootJar -Pprofile=prd --no-daemon --parallel
# ...
```

## <VPIcon icon="fas fa-file-lines"/>`gradle.properties`

```properties{1-2} title="gradle.properties"
org.gradle.configureondemand=true
org.gradle.caching=true
```

---

<TagLinks />