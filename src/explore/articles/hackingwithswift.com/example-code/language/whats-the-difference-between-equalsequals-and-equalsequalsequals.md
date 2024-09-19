---
lang: ko-KR
title: "What’s the difference between == and ===?"
description: "Article(s) > What’s the difference between == and ===?"
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
  - ios-8.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > What’s the difference between == and ===?"
    - property: og:description
      content: "What’s the difference between == and ===?"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/whats-the-difference-between-equalsequals-and-equalsequalsequals.html
date: 2019-06-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Language - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/language/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "What’s the difference between == and ===? | Language - free Swift example code",
  "desc": "What’s the difference between == and ===?",
  "link": "https://hackingwithswift.com/example-code/language/whats-the-difference-between-equalsequals-and-equalsequalsequals",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Swift gives us two equality operators, <code>==</code> and <code>===</code>, that do slightly different things. You will almost certainly need to use both of them so it’s worth taking the time to learn them.</p>
<p>First, <code>==</code> is the equality operator, which tests that two things are equal for whatever definition of “equal” those things use. For example, <code>5 == 5</code> is true because there <code>==</code> means an integer comparison, and the same is true for other built-in value types such as strings, booleans, and doubles.</p>
<p>Things get more complicated when <code>==</code> is used with a struct you built, because by default they cannot be compared –&nbsp;you need to make them conform to the <code>Equatable</code> protocol.</p>
<p>In comparison, <code>===</code> is the <em>identity operator</em>, which checks whether two instances of a class point to the same memory. This is different from equality, because two objects that were created independently using the same values will be considered equal using <code>==</code> but not <code>===</code> because they are different objects.</p>
<p>The <code>===</code> operator is available only when using classes because structs are designed so they are always uniquely referenced.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li></ul>
-->

:::

---

<TagLinks />