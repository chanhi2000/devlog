---
lang: ko-KR
title: 비동기 서버에서 이벤트 루프를 블록하면 안 되는 이유 1부 - 멀티플렉싱 기반의 다중 접속 서버로 가기까지
description: Article(s) > 비동기 서버에서 이벤트 루프를 블록하면 안 되는 이유 1부 - 멀티플렉싱 기반의 다중 접속 서버로 가기까지
icon: iconfont icon-spring
category: 
  - Java
  - Kotlin
  - Spring
  - C
  - Article(s)
tag: 
  - blog
  - engineering.linecorp.com
  - java
  - kotlin
  - spring
  - c
head:
  - - meta:
    - property: og:title
      content: Article(s) > 비동기 서버에서 이벤트 루프를 블록하면 안 되는 이유 1부 - 멀티플렉싱 기반의 다중 접속 서버로 가기까지
    - property: og:description
      content: 비동기 서버에서 이벤트 루프를 블록하면 안 되는 이유 1부 - 멀티플렉싱 기반의 다중 접속 서버로 가기까지
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/engineering.linecorp.com/do-not-block-the-event-loop-part1.html
prev: /programming/java-spring/articles/README.md
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Spring > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java-spring/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

```component VPCard
{
  "title": "C > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/c/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "비동기 서버에서 이벤트 루프를 블록하면 안 되는 이유 1부 - 멀티플렉싱 기반의 다중 접속 서버로 가기까지",
  "desc": "안녕하세요. MSE2(Messaging Server Engineering 2)에서 인증 도메인을 개발하고 있는 김종민입니다. LINE에서는 서버 개발에 비동기 서버사이드 프레임워크인 Armeria를 적극 사용하고 있습니다. Armeria와 같은 비동기 서버를 ...",
  "link": "https://engineering.linecorp.com/ko/blog/do-not-block-the-event-loop-part1",
  "logo": "https://engineering.linecorp.com/favicon-32x32.png?v=6d6085f233d02c34273fa8a8849b502a",
  "background": "rgba(31,31,31,0.2)"
}
```

> 2022.09.23

<!-- TODO: 작성 -->

---

<TagLinks />