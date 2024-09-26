---
lang: ko-KR
title: "How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”"
description: "Article(s) > How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”"
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
  - ios-5.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”"
    - property: og:description
      content: "How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile.html
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
  "title": "How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile” | UIKit - free Swift example code",
  "desc": "How to fix the error “Failed to instantiate the default view controller for UIMainStoryboardFile”",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-fix-the-error-failed-to-instantiate-the-default-view-controller-for-uimainstoryboardfile",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
<p>This error happens due to a simple mistake in your storyboard, and it’s easy to fix. When your app starts, iOS needs to know precisely which view controller needs to be shown first –&nbsp;known as your default view controller.</p>
<p>If you accidentally deleted that view controller, or otherwise made it not the default, then you’ll see the error “Failed to instantiate the default view controller for UIMainStoryboardFile 'Main' - perhaps the designated entry point is not set?” when your app launches, along with a plain black screen.</p>
<p>To fix the problem, open your Main.storyboard file and find whichever view controller you want to be shown when your app first runs. When it’s selected, go to the attributes inspector and check the box marked “Is Initial View Controller”. You should see a right-facing arrow appear to the left of that view controller, showing that it’s your storyboard’s entry point.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/xcode/how-to-fix-the-error-view-controller-is-unreachable-because-it-has-no-entry-points-and-no-identifier-for-runtime-access">How to fix the error “View controller is unreachable because it has no entry points and no identifier for runtime access”</a></li><li><a href="/example-code/uikit/fixing-failed-to-obtain-a-cell-from-its-datasource">Fixing "Failed to obtain a cell from its DataSource"</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-use-view-controller-containment">How to use view controller containment</a></li><li><a href="/quick-start/swiftui/how-to-fix-fatal-error-no-observableobject-of-type-sometype-found">How to fix “Fatal error: No ObservableObject of type SomeType found”</a></li></ul>
-->

:::

---

<TagLinks />