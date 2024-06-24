---
lang: ko-KR
title: "Power Assert now in Kotlin!"
description: "Article(s) > Power Assert now in Kotlin!"
icon: iconfont icon-kotlin
category: 
  - Kotlin
  - Article(s)
tag: 
  - blog
  - kt.academy
  - java
  - kotlin
head:
  - - meta:
    - property: og:title
      content: "Article(s) > Power Assert now in Kotlin!"
    - property: og:description
      content: "Power Assert now in Kotlin!"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/kt.academy/power-assert.html
prev: /programming/java/articles/README.md
date: 2024-06-17
isOriginal: false
cover: https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fpower_assert_cover.png&w=750&q=75
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Java > Article(s)",
  "desc": "Article(s)",
  "link": "/programming/java/articles/README.md",
  "logo": "/images/ico-wind.svg",
  "background": "rgba(10,10,10,0.2)"
}
```

[[toc]]

---

<SiteInfo
  name="Power Assert now in Kotlin!"
  desc="What is Power Assert, how to use it, and how it works in Kotlin."
  url="https://kt.academy/article/power-assert"
  logo="https://kt.academy/logo.png"
  preview="https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fpower_assert_cover.png&w=750&q=75"/>

Even though it passed under most people's radar, to me, it is one of the most important announcements of Kotlin 2.0: We finally have Power Assert! Is it time to explain what it is and how it works.

The core idea of Power Assert is to provide information about failing assertions in tests, which is often the greatest source of information. Power assertions are one of the most beloved features in the Groovy Spock framework. Now they might be another beloved Kotlin feature

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fpower_assert_example_1.png&w=750&q=75)
<!-- TODO: transform to kotlin-playground -->

With Power Assert, we do not need libraries like AssertJ. We can just use raw assert and assertEquals, and in case of a failure, we will see complete information about values in each assertion.

To use Power Assert, you need to add plugin, and configure for what functions additional message should be added. It only works for functions that specify message on the last parameter. It can also work for require or check if you need it to.

::: tabs

@tab:active build.gradle.kts

```groovy
plugins {
  kotlin("jvm") version "2.0.0"
  kotlin("plugin-power-assert") version "2.0.0"
  application
}

powerAssert {
  functions = listOf("kotlin.assert", "kotlin.test.assertEquals")
}
```

@tab build.gradle

```groovy
plugins {
  kotlin("jvm") version "2.0.0"
  kotlin("plugin-power-assert") version "2.0.0"
  application
}

powerAssert {
  functions = ["kotlin.assert", "kotlin.test.assertEquals"]
}
```

:::

<!-- ![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fpower_assert_config.png&w=384&q=75) -->

<!-- TODO: transform to kotlin-playground -->

How how does it work? This feature is based on the backend compiler plugin IrGenerationExtension. I explained it in detail in the book Advanced Kotlin, but the short explanation is that it is a compiler plugin that transforms our code during compilation.

Power Assert uses IrGenerationExtension to transform functions, specifying their message. It transforms those functions that we specify in this plugin configuration. So what does it actually do?

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fpower_assert_example_2.png&w=384&q=75)
<!-- TODO: transform to kotlin-playground -->

It extracts each expression into a variable. This must be done so that those expressions are executed only once! Then, it uses those variables for assertions and constructing messages. If an assertion already has a message, it is appended.

![](https://kt.academy/_next/image?url=https%3A%2F%2Fmarcinmoskala.com%2Fkt-academy-articles%2Fimages%2Fpower_assert_example_2_under_the_hood.png&w=384&q=75)
<!-- TODO: transform to kotlin-playground -->

The tricky part is constructing a message that looks exactly like the original code and includes indents in the correct places. It was a titanic work by [<FontIcon icon="fa-brands fa-x-twitter"/>Brian Norman (`bnormcodes`)](https://x.com/bnormcodes), who spent over four years to make it work that well! Great kudos!

---

<TagLinks />