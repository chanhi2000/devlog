---
lang: ko-KR
title: fatJar 생성
description: Snippets > fatJar 생성
icon: fas fa-screwdriver-wrench
category:
  - Gradle
  - Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
  - executable-jar
  - jar
head:
  - - meta:
    - property: og:title
      content: Snippets > fatJar 생성
    - property: og:description
      content: fatJar 생성
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/create-fatjar.html
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

executable jar를 생성

> .<FontIcon icon="fas fa-folder-open"/>`./<모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <FontIcon icon="iconfont icon-gradle"/>build.gradle

```groovy
task fatJar(type: Jar) {
    exclude "META-INF/*.SF", "META-INF/*.DSA", "META-INF/*.MF"
    manifest {
        attributes(
            "Implementation-Title": "${project.name}",
            "Implementation-Version": "${project.version}",
            "Encoding": "UTF-8",
        )
        archivesBaseName = "<원하는 아티팩트 명>"
    }
    archiveFileName = "<원하는 아티팩트 명>-${version}.jar"
    duplicatesStrategy = DuplicatesStrategy.EXCLUDE
    from { configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
}
tasks.compileJava.dependsOn clean
```

@tab <FontIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin
// TODO: 작성
```

:::

.<FontIcon icon="iconfont icon-shell"/>실행 시

```sh
gradlew <모듈명>:fatJar
```

---

<TagLinks />