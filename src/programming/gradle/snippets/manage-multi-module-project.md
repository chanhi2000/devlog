---
lang: ko-KR
title: Multi-module Project 관리
description: Snippets > Multi-module Project 관리
icon: fas fa-cubes
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
      content: Snippets > Multi-module Project 관리
    - property: og:description
      content: Multi-module Project 관리
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/manage-multi-module-project.html
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

목적이 동일한 submodule을 구성한 프로젝트 관리

> .<VPIcon icon="fas fa-folder-open"/>`./`<VPIcon icon="iconfont icon-gradle"/>`settings.gradle`

::: tabs

@tab:active <VPIcon icon="iconfont icon-gradle"/>settings.gradle

```groovy
rootProject.name = "multi-module-project"

include ":project-a"
include ":project-b"
include ":project-c"
include ":project-d"
include ":project-e"
//
// 더 추가 가능
```

@tab:active <VPIcon icon="iconfont icon-kotlin"/>settings.gradle.kts

```kotlin
// TODO: 작성
```

:::

> .<VPIcon icon="fas fa-folder-open"/>`./`<VPIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <VPIcon icon="iconfont icon-gradle"/>build.gradle

```groovy
subprojects {
  afterEvaluate { prj ->
    println("name: ${prj.name}\tversion: ${prj.version}\tdescription: ${prj.description}")

    task fatJar(type: Jar) {
      exclude "META-INF/*.SF", "META-INF/*.DSA", "META-INF/*.MF"
      manifest {
        attributes(
          "Implementation-Title": "${prj.name}",
          "Implementation-Version": "${prj.version}",
          "Implementation-Description": "${prj.description}",
        )
        archivesBaseName = "${prj.name}"
      }
      archiveFileName = "${prj.name}-${prj.version}"
      duplicatesStrategy = DuplicatesStrategy.EXCLUDE
      from { configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) } }
      from jar
    }
    task compileJava.dependsOn clean

    // ... 생략 ...
  }

  project(":project-a") {
    group = "my.example.group.a"
    version = "1.0.1"
    description = "서브프로젝트 A"
  }
  project(":project-b") {
    group = "my.example.group.b"
    version = "1.0.2"
    description = "서브프로젝트 B"
  }
  project(":project-c") {
    group = "my.example.group.c"
    version = "1.0.3"
    description = "서브프로젝트 C"
  }
  project(":project-d") {
    group = "my.example.group.d"
    version = "1.0.4"
    description = "서브프로젝트 D"
  }
  project(":project-e") {
    group = "my.example.group.e"
    version = "1.0.5"
    description = "서브프로젝트 E"
  }
}
```

@tab:active <VPIcon icon="iconfont icon-kotlin"/>build.gradle.kts

```kotlin
// TODO: 작성
```

:::

---

<TagLinks />