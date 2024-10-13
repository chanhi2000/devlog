---
lang: ko-KR
title: 임의의 모듈명 지정
description: Snippets > 임의의 모듈명 지정
icon: fas fa-square-pen
category:
  - Gradle
  - Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
head:
  - - meta:
    - property: og:title
      content: Snippets > 임의의 모듈명 지정
    - property: og:description
      content: 임의의 모듈명 지정
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/rename-subproject.html
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

[[toc]]

특정 모듈명을 사용하기 위한 작업

> .<FontIcon icon="fas fa-folder-open"/>`./`<FontIcon icon="iconfont icon-gradle"/>`settings.gradle`

::: tabs

@tab:active <FontIcon icon="iconfont icon-gradle"/>build.gradle

```groovy
rootProject.name = "onnaramobile"

include ":ws-BmsSifSchViewService"

// 최종 모듈명은 `BmsSifSchViewService`으로 변경
project(":ws-BmsSifSchViewService").name = "BmsSifSchViewService" 
```

@tab <FontIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin
// TODO: 작성
```

:::

---


<TagLinks />