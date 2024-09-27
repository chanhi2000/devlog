---
lang: ko-KR
title: "What is content compression resistance?"
description: "Article(s) > What is content compression resistance?"
category:
  - Swift
  - iOS
  - Article(s)
tag: 
  - blog
  - hackingwithswift.com
  - crashcourse
  - swift
  - swift-5.10
  - ios
  - ios-9.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What is content compression resistance?"
    - property: og:description
      content: "What is content compression resistance?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/what-is-content-compression-resistance.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "UIKit - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/uikit/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What is content compression resistance? | UIKit - free Swift example code",
  "desc": "What is content compression resistance?",
  "link": "https://hackingwithswift.com/example-code/uikit/what-is-content-compression-resistance",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
When Auto Layout has determined there isn't enough space to accommodate all your views at their natural size, it has to make a decision: one or more of those views needs to be squashed to make space for the others, but which one? That's where content compression resistance comes in: it's a value from 1 to 1000 that determines how happy you are for the view to be squashed if needed.

If you set a view's content compression resistance to be 1, it will be first in line to be squashed. If you set it to be 1000, it won't ever be squashed. The value is 750 by default, which means "I'd really prefer this not be squashed", but you might find you need to set it to be 751 or 749 on occasion, which means "I'd still really prefer this not to be squashed, but if there's no other choice…"
-->

::: details Similar solutions…

<!--
/example-code/uikit/what-is-a-views-intrinsic-content-size">What is a view’s intrinsic content size? 
/example-code/uikit/how-to-adjust-image-content-mode-using-aspect-fill-aspect-fit-and-scaling">How to adjust image content mode using aspect fill, aspect fit and scaling 
/example-code/uikit/how-to-share-content-with-uiactivityviewcontroller">How to share content with UIActivityViewController 
/quick-start/swiftui/how-to-indent-the-content-or-scroll-indicators-in-a-scrollview">How to indent the content or scroll indicators in a ScrollView 
/quick-start/swiftui/how-to-inset-the-safe-area-with-custom-content">How to inset the safe area with custom content</a>
-->

:::

---

<TagLinks />