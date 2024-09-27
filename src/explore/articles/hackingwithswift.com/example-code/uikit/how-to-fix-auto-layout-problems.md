---
lang: ko-KR
title: "How to fix Auto Layout problems"
description: "Article(s) > How to fix Auto Layout problems"
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
      content: "Article(s) > How to fix Auto Layout problems"
    - property: og:description
      content: "How to fix Auto Layout problems"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-fix-auto-layout-problems.html
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
  "title": "How to fix Auto Layout problems | UIKit - free Swift example code",
  "desc": "How to fix Auto Layout problems",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-fix-auto-layout-problems",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
If your Auto Layout code isn’t behaving the way you want, there’s a good chance you’re seeing Xcode spew errors into its log while your user interface is thoroughly broken. There are a few steps you can take that might help, and I want to walk through each of them here.

First, customize the `identifier` property of each of your constraints. This is a free-text string that can be whatever you want, so use it to give your identifiers meaningful name “Image View aligns its right edge to the title label” for example. When Xcode spits out Auto Layout errors in the future, this identifier will be included so you get a better idea of what’s causing the problem.

Second, try calling the `exerciseAmbiguityInLayout()` method of the view that’s causing problems. This is a method specifically designed to debugging, and causes a view to randomly shift between all layouts that are possible given the constraints you’ve applied. If you run this a few times then it should be clear what’s causing the issue: if two views vary in their widths, it means your current constraints don’t make it clear which is the correct layout.

Third, try creating your constraints in Interface Builder. You don’t need to keep them there if you prefer doing things in code, but if you try to create them in IB you’ll be able to see visually where the problem is – IB will flag up a warning or error depending on your mistake.

Finally, try pasting Xcode’s Auto Layout errors into <a href="http://www.wtfautolayout.com/">http://www.wtfautolayout.com/</a>. This is a web service that reads Xcode Auto Layout errors and converts them into a graphical representation of what’s happened. It won’t direct you to the solution, but it might at least help make it clearer.

-->

::: details Similar solutions…

<!--
/quick-start/concurrency/what-is-actor-hopping-and-how-can-it-cause-problems">What is actor hopping and how can it cause problems? 
/example-code/uikit/how-to-activate-multiple-auto-layout-constraints-using-activate">How to activate multiple Auto Layout constraints using activate() 
/example-code/uikit/how-to-stop-auto-layout-and-autoresizing-masks-conflicting-translatesautoresizingmaskintoconstraints">How to stop Auto Layout and autoresizing masks conflicting: translatesAutoresizingMaskIntoConstraints 
/example-code/uikit/how-to-create-auto-layout-constraints-in-code-constraintswithvisualformat">How to create Auto Layout constraints in code: constraints(withVisualFormat:) 
/example-code/uikit/how-to-identify-your-auto-layout-constraints">How to identify your Auto Layout constraints</a><div class="col-lg-9" style="text-align: left;">
-->

:::

---

<TagLinks />