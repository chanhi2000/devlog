---
lang: ko-KR
title: browser로 URL 열기
description: Snippets > browser로 URL 열기
icon: fas fa-link
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
      content: Snippets > browser로 URL 열기
    - property: og:description
      content: browser로 URL 열기
    - property: og:url
      content: https://chanhi2000.github.io/programming/gradle/snippets/open-url-in-browser.html
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

웹브라우저로 페이지를 열기 위한 task

> ./<FontIcon icon="fas fa-folder-open"/>`./<모듈>/`<FontIcon icon="iconfont icon-gradle"/>`build.gradle`

::: tabs

@tab:active <FontIcon icon="iconfont icon-gradle"/>Groovy

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

@tab <FontIcon icon="iconfont icon-kotlin"/>Kotlin

```kotlin
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

<TagLinks />