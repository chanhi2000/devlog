---
lang: ko-KR
title: 🔮Snippets
description: 🐘Gradle > 🔮Snippets
category:
  - 🐘Gradle
  - 🔮Snippets
tag: 
  - gradle
  - groovy
  - idea
  - intellij-idea
  - intellij
  - war
  - plugin-war
  - plugin-java
  - executable-jar
  - jar
---

# {{ $frontmatter.title }} 관련

> {{ $frontmatter.description }}

[[toc]]

---

## 모듈명 지정

| title | description |
| ---: | :---------- |
| 목적 | 특정 모듈명을 사용하기 위한 작업 |
| 적업대상 `gradle` 파일 | `./settings.gradle` |


```groovy
rootProject.name = "onnaramobile"

include ":ws-BmsSifSchViewService"

// 최종 아티팩트명 지정
project(":ws-BmsSifSchViewService").name = "BmsSifSchViewService" 
```
최종 모듈명은 `BmsSifSchViewService`으로 변경


---
## `fatJar` Task

| title | description |
| ---: | :---------- |
| 목적 | executable jar를 만들기 위한 task |
| 적업대상 `gradle` 파일 | `./<모듈>/build.gradle` |


```groovy
task fatJar(type: Jar) {
    exclude "META-INF/*.SF", "META-INF/*.DSA", "META-INF/*.MF"
    manifest {
        attributes "Implementation-Version": "$version"
        archivesBaseName = "<원하는 아티팩트 명>"
    }
    archiveFileName = "<원하는 아티팩트 명>-${version}.jar"
    from { configurations.runtimeClasspath.collect { it.isDirectory() ? it : zipTree(it) } }
    with jar
}
tasks.compileJava.dependsOn clean
```


실행 시

```sh
gradlew <모듈명>:fatJar
```

---

## `openBrowser` task

| title | description |
| ---: | :---------- |
| 목적 | 웹브라우저로 페이지를 열기 위한 task |
| 적업대상 `gradle` 파일 | `./<모듈>/build.gradle` |

::: tabs

@tab:active Groovy

```groovy
task openBrowser {
    description = "open browser to the running application"
    doLast {
        String port = 8080
        String contextName = "contextName"
        String URL = "http://localhost:" + port + "/" + contextName + "/"
        java.awt.Desktop.desktop.browse URL.toURI()
    }   
}
```

@tab Kotlin

```kts
import java.awt.Desktop
import java.net.URL

// ... 생략 ...

task("openBrowser") {
    description = "open browser to the running application"
    doLast {
        val port: Int = 8080
        val contextName = "contextName"
        val url: URL = URL("http://localhost:$port/$contextName/")
        Desktop.getDesktop().browse(url.toURI())
    }
}
```

:::

---

## `exploreOutput` task

| title | description |
| ---: | :---------- |
| 목적 | 빌드 후 빌드된 결과물을 보기 위한 task |
| 적업대상 `gradle` 파일 | `./<모듈>/build.gradle` |

::: tabs

@tab:active Groovy

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

@tab Kotlin

```kts
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
## `war` Plugin

| title | description |
| ---: | :---------- |
| 목적 | 최종 war로 묶어줄 때 타 module에서 compile된 class파일들을 package경로 밑으로 풀어줘서 빌드 되도록 구성 |
| 적업대상 `gradle` 파일 | `./<war으로 묶어 줄 모듈>/build.gradle` |

::: tabs

@tab:active Groovy

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

@tab Kotlin

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

실행 시

```sh
gradlew <war으로 묶어 줄 모듈>:war
```

## `java` Plugin 

| title | description |
| :---: | :---- |
| 목적 | Java로 컴파일 시 구성해야 할 항목 정의 |
| 적업대상 `gradle` 파일 | `./<모듈>/build.gradle` |

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

---

<TagLinks />