---
lang: ko-KR
title: 아티팩트를 저장소로 배포
description: Snippets > 아티팩트를 저장소로 배포
icon: fas fa-upload
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
  - repository
  - maven-repository
  - upload
head:
  - - meta:
    - property: og:title
      content: Snippets > 아티팩트를 저장소로 배포
    - property: og:description
      content: 아티팩트를 저장소로 배포
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/publish-to-repository.html
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

최종 war를 Maven 저장소로 배포

> .<VPIcon icon="fas fa-folder-open"/>`./<war으로 묶어 줄 모듈>/`<VPIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <VPIcon icon="iconfont icon-gradle"/>Groovy

```groovy
plugins {
    id "java"
    id "war"
    id "maven-publish"
}

// ... 
dependencies {
    // ...
}

publishing {
    publications {
        maven(MavenPublication) {
            groupId = "<그룹ID>"
            artifactId = rootProject.name // 또는 최총 아티펙트명
            version = "버전명"
            from components.web

            pom {
                name = rootProject.name
                description = "..."
                url = "..."
                licenses {
                    license {
                        name = "..."
                    }
                }
                scm {
                    connection = "..."
                }
            }
        }
    }

    repositories {
        maven {
            url = repo.releaseUrl
            credentials {
                username = project.nexusUsername // gradle.properties에서 지정
                password = project.nexusPassword // gradle.properties에서 지정
            }
        }
    }
}

publish.dependsOn war
```

@tab <VPIcon icon="iconfont icon-kotlin"/>Kotlin

```kotlin
// TODO: 작성
```

:::

> .<VPIcon icon="fas fa-folder-open"/>`./`<VPIcon icon="fas fa-file-lines"/>`gradle.properties`

```properties
# nexus
#
# 아래 내용은 배포할 서버마다 다르므로 값 부여 방법만 참고
nexusUsername=admin
nexusPassword=admin123
```

.<VPIcon icon="iconfont icon-shell"/>실행 시

```sh
gradlew <모듈명>:publish
```

---

<TagLinks />