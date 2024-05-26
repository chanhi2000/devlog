---
lang: ko-KR
title: war 생성
description: Snippets > war 생성
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
      content: Snippets > war 생성
    - property: og:description
      content: war 생성
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/create-war.html
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

최종 war로 묶어줄 때 타 module에서 compile된 class파일들을 package경로 밑으로 풀어줘서 빌드 되도록 구성

> ./<FontIcon icon="fas fa-folder-open"/>`./<war으로 묶어 줄 모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <FontIcon icon="iconfont icon-gradle"/>Groovy

```groovy
plugins {
    id "java"
    id "war"
}

def defaultBuildClasspath = "build/classes/java/main" // 기타 모듈의 

// ...[생략]... 

dependencies {
    // ... 풀어서 compile 할 모듈 등록
    provideCompile project(":common") 
    provideCompile project(":common-ons") 
    provideCompile project(":common-ws") 
    // ...[생략]...
}

war {
    webXml = file("src/main/webapp/WEB-INF/web.xml") // web.xml 지정
    into("WEB-INF/classes") {
        // ... 풀어서 compile 할 모듈 나열
        from "../common/${defaultBuildClasspath}" 
        from "../common-ons/${defaultBuildClasspath}" 
        from "../common-ws/${defaultBuildClasspath}" 
        // ...[생략]...
    }
}
```

@tab <FontIcon icon="iconfont icon-kotlin"/>Kotlin

```kts
plugins {
    id "java"
    kotlin("jvm")
}

val defaultBuildClasspath = "build/classes/java/main" // 기타 모듈의 

// ...[생략]... 

dependencies {
    // ... 풀어서 compile 할 모듈 등록
    provideCompile(project(":common"))
    provideCompile(project(":common-ons"))
    provideCompile(project(":common-ws"))
    // ...[생략]...
}

tasks.war {
    webXml = file("src/main/webapp/WEB-INF/web.xml") // web.xml 지정
    into("WEB-INF/classes") {
        // ... 풀어서 compile 할 모듈 나열
        from "../common/${defaultBuildClasspath}" 
        from "../common-ons/${defaultBuildClasspath}" 
        from "../common-ws/${defaultBuildClasspath}" 
        // ...[생략]...
    }
}
```

:::

.<FontIcon icon="iconfont icon-shell"/>실행 시

```sh
gradlew <war으로 묶어 줄 모듈>:war
```

---

<TagLinks />