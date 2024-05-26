---
lang: ko-KR
title: 파일경로 탐색
description: Snippets > 파일경로 탐색
icon: fas fa-folder-open
category:
  - Gradle
  - Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
  - link
  - browser
head:
  - - meta:
    - property: og:title
      content: Snippets > 파일경로 탐색
    - property: og:description
      content: 파일경로 탐색
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/explore-directory.html
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

(빌드 후) 빌드된 결과물을 자동으로 보기위해 사용

> ./<FontIcon icon="fas fa-folder-open"/>`./<모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <FontIcon icon="iconfont icon-gradle"/>Groovy

```groovy
task exploreOutput {
    description = "find artifact(s) in the project directory"
    doLast {
       java.awt.Desktop.desktop.open(layout.buildDirectory.dir("libs").get().asFile)
    }   
}
// "<모듈명>/build/libs" 밑에 결과물이 존재할 경우 ...
tasks.war.finalizedBy exploreOutput
```

@tab <FontIcon icon="iconfont icon-kotlin"/>Kotlin

```kotlin
import java.awt.Desktop

// ... 생략 ...

task("exploreOutput") {
    description = "find artifact(s) in the project directory"
    doLast {
        Desktop.getDesktop().open(url.toURI())
    }
}
// "<모듈명>/build/libs" 밑에 결과물이 존재할 경우 ...
tasks.war { finalizedBy(tasks.named("exploreOutput")) }
```

:::

---

<TagLinks />