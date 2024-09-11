---
lang: ko-KR
title: "How to use storyboard references to simplify your storyboards"
description: "Article(s) > How to use storyboard references to simplify your storyboards"
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
      content: "Article(s) > How to use storyboard references to simplify your storyboards"
    - property: og:description
      content: "How to use storyboard references to simplify your storyboards"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/xcode/how-to-use-storyboard-references-to-simplify-your-storyboards.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Xcode - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/xcode/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to use storyboard references to simplify your storyboards | Xcode - free Swift example code",
  "desc": "How to use storyboard references to simplify your storyboards",
  "link": "https://hackingwithswift.com/example-code/xcode/how-to-use-storyboard-references-to-simplify-your-storyboards",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>Storyboards deliver useful features, such as being able to see a lot of your user interface side-by-side and being able to design static cell designs for your table and collection views. However, they can also cause havoc with teams, because two developers attempting to modify the storyboard at the same time will immediately hit source control problems.</p>
<p>Fortunately, Interface Builder comes with a simple solution in the form of storyboard references: links that connect one storyboard to another, using any identifier or presentation segue you want. They let you break up one huge storyboard into several smaller ones, and in doing so also allow you to re-use scenes more easily.</p>
<p>Storyboard references are easy to use, but don’t get a lot of use because they were introduced four years(!) after storyboards –&nbsp;a lot of folks either decided they didn’t like the initial storyboard implementation and haven’t checked back since, or still use the same approach they learned back in iOS 5.</p>
<p>Using storyboard references takes three steps:</p>
<ol>
<li>Create a new storyboard in your app, e.g. Subscribe.storyboard. Inside there create a view controller however you need, and give it a storyboard identifier.</li>
<li>In Main.storyboard, drag out a storyboard reference object. In the attributes inspector select your new storyboard from the Storyboard dropdown, then enter your target storyboard identifier in the Referenced ID box.</li>
<li>That storyboard reference can now be treated like a regular view controller, so you can make connections to it such as a Show segue.</li>
</ol>
<p>Xcode will check your configuration at build time, so if you try to reference a storyboard identifier that doesn’t exist your project will refuse to build.</p>
<p>While storyboard references do solve the problem of storyboards becoming unwieldy and tricky with source control, they <em>don’t</em> solve the problem of storyboards forcing your app to flow in a certain direction. For that you should consider something like the <a href="/articles/71/how-to-use-the-coordinator-pattern-in-ios-apps">coordinator pattern</a> instead.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/what-is-a-storyboard">What is a storyboard?</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/quick-start/swiftui/swiftui-vs-interface-builder-and-storyboards">SwiftUI vs Interface Builder and storyboards</a></li><li><a href="/example-code/uikit/how-to-add-a-button-to-a-navigation-bar-using-storyboards">How to add a button to a navigation bar using storyboards</a></li><li><a href="/example-code/uikit/how-to-use-dependency-injection-with-storyboards">How to use dependency injection with storyboards</a></li></ul>
-->

:::

---

<TagLinks />