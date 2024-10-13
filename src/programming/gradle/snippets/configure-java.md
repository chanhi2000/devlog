---
lang: ko-KR
title: Java 환경 구성
description: Snippets > Java 환경 구성
icon: fa-brands fa-java
category:
  - Gradle
  - Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
  - java
head:
  - - meta:
    - property: og:title
      content: Snippets > Java 환경 구성
    - property: og:description
      content: Java 환경 구성
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/configure-java.html
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

Java로 컴파일 시 구성해야 할 항목 정의

> .<FontIcon icon="fas fa-folder-open"/>`./<모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <FontIcon icon="iconfont icon-gradle"/>build.gradle

```groovy
compileJava {
    sourceCompatibility = JavaVersion.VERSION_1_7
    targetCompatibility = JavaVersion.VERSION_1_7
    options.incremental = true
    options.failOnError = false
}

tasks.withType(JavaCompile) {
    options.encoding = "UTF-8"
    options.compileArgs << "-Xlint:deprecation" << "-Xlint:unchecked"
}
```

@tab <FontIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin
// TODO: 작성
```

:::

---

<TagLinks />