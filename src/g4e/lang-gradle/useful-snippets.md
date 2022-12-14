---
lang: ko-KR
title: Useful Snippets
description: Useful Snippets
tags: ["gradle", "groovy", "idea", "intellij-idea", "intellij", "war", "plugin-war", "plugin-java", "executable-jar", "jar"]
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## 모듈명 지정

| title | description |
| ---: | :---------- |
| 목적 | 특정 모듈명을 사용하기 위한 작업 |
| 적업대상 `gradle` 파일 | `./settings.gradle` |


```gradle
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


```gradle
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

```shell
gradlew <모듈명>:fatJar
```


---
## `war` Plugin

| title | description |
| ---: | :---------- |
| 목적 | 최종 war로 묶어줄 때 타 module에서 compile된 class파일들을 package경로 밑으로 풀어줘서 빌드 되도록 구성 |
| 적업대상 `gradle` 파일 | `./<war으로 묶어 줄 모듈>/build.gradle` |


```gradle
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

실행 시

```shell
gradlew <war으로 묶어 줄 모듈>:war
```

## `java` Plugin 

| title | description |
| ---: | :---------- |
| 목적 | Java로 컴파일 시 구성해야 할 항목 정의 |
| 적업대상 `gradle` 파일 | `./<모듈>/build.gradle` |

```gradle
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