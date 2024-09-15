---
lang: ko-KR
title: "How to group user notifications using threadIdentifier and summaryArgument"
description: "Article(s) > How to group user notifications using threadIdentifier and summaryArgument"
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
  - ios-12.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to group user notifications using threadIdentifier and summaryArgument"
    - property: og:description
      content: "How to group user notifications using threadIdentifier and summaryArgument"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-group-user-notifications-using-threadidentifier-and-summaryargument.html
date: 2019-11-01
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "System - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/system/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to group user notifications using threadIdentifier and summaryArgument | System - free Swift example code",
  "desc": "How to group user notifications using threadIdentifier and summaryArgument",
  "link": "https://hackingwithswift.com/example-code/how-to-group-user-notifications-using-threadidentifier-and-summaryargument",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 12.0

<!-- TODO: 작성 -->

<!-- 
<p>If your app shows notifications that can be split into sensible groups –&nbsp;such as messages from a person, updates for a news story, scores from a sports match, and so on on – you can have iOS group them together using the <code>threadIdentifier</code> and <code>summaryArgument</code> properties of <code>UNMutableNotificationContent</code>. iOS will then show those messages together, rather than in a long chain mixed up with other messages.</p>
<p>For example, you might write code like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token class-name">UNMutableNotificationContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
content<span class="token punctuation">.</span>title <span class="token operator">=</span> reminder<span class="token punctuation">.</span>title
content<span class="token punctuation">.</span>threadIdentifier <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"F39-C521-A7A"</span></span></code></pre>
<p>The “F39-C521-A7A” part is a free text string – it won’t be shown to users, but it’s what allows iOS to group things together so it should be unique enough that you don’t get message crossover. If you were building a messaging app you might use the user’s unique identifier for your notification rather than their name, to avoid two messages from different people called Andrew being grouped together.</p>
<p>If you want to customize this further, you can also set the <code>summaryArgument</code> property of your notification content. This is a string that <em>is</em> shown to users, so you might write something like this:</p>
<pre class=" language-swift"><code class=" language-swift">content<span class="token punctuation">.</span>summaryArgument <span class="token operator">=</span> messageSender<span class="token punctuation">.</span>name</code></pre>
<p>That will make iOS write something “5 more alerts from Andrew” in small text underneath the alert, which helps make it clear to users which reminder group that alert belongs to.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/example-code/games/how-to-create-a-random-terrain-tile-map-using-sktilemapnode-and-gkperlinnoisesource">How to create a random terrain tile map using SKTileMapNode and GKPerlinNoiseSource</a></li></ul>
-->

:::

---

<TagLinks />