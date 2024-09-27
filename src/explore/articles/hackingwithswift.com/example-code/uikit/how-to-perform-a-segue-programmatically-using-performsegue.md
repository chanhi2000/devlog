---
lang: ko-KR
title: "How to perform a segue programmatically using performSegue()"
description: "Article(s) > How to perform a segue programmatically using performSegue()"
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
      content: "Article(s) > How to perform a segue programmatically using performSegue()"
    - property: og:description
      content: "How to perform a segue programmatically using performSegue()"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-perform-a-segue-programmatically-using-performsegue.html
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
  "title": "How to perform a segue programmatically using performSegue() | UIKit - free Swift example code",
  "desc": "How to perform a segue programmatically using performSegue()",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-perform-a-segue-programmatically-using-performsegue",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 5.0

<!-- TODO: 작성 -->

<!--
Segues are a visual way to connect various components on your storyboard, but sometimes it’s important to be able to trigger them programmatically as well as after a user interaction.

Fortunately, it only takes two steps. First, select a segue in your storyboard, then go to the attributes inspector and give it a name such as “showDetail”.

Now head to your Swift code, to the place where you want to trigger the segue you just named. The method you need to call is `performSegue()`, which exists on all view controllers: pass it a segue identifier as well as whatever object you want to send along, and you’re done:

```swift
performSegue(withIdentifier: "showDetail", sender: nil)
```

Technically the `sender` parameter is whatever triggered the segue, but you can put whatever you want in there.

-->

::: details Similar solutions…

<!--
/example-code/uikit/what-is-a-segue">What is a segue? 
/quick-start/swiftui/how-to-hide-and-show-the-sidebar-programmatically">How to hide and show the sidebar programmatically 
/example-code/system/how-to-run-code-after-a-delay-using-asyncafter-and-perform">How to run code after a delay using asyncAfter() and perform() 
/example-code/system/how-to-cancel-a-delayed-perform-call">How to cancel a delayed perform() call 
/example-code/naturallanguage/how-to-perform-sentiment-analysis-on-a-string-using-nltagger">How to perform sentiment analysis on a string using NLTagger</a>
-->

:::

---

<TagLinks />