---
lang: ko-KR
title: Useful Snippets
description: Useful Snippets
---

# {{ $frontmatter.title }} 관련

[[toc]]

---
## 모듈명 지정

- 목적: 특정 모듈명을 사용하기 위한 작업
- 작업 gradle파일: `settings.gradle`

```gradle
rootProject.name = "onnaramobile"

include ":ws-BmsSifSchViewService"

// 최종 아티팩트명 지정
project(":ws-BmsSifSchViewService").name = "BmsSifSchViewService" 
```
최종 모듈명은 `BmsSifSchViewService`으로 변경


---
## `fatJar` Task

- 목적: executable jar를 만들기 위한 task
- 작업 gradle파일: `<모듈>/build.gradle`


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

```shgra
gradlew <모듈명>:fatJar
```





