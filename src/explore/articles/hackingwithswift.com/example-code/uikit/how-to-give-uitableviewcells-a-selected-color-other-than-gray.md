---
lang: ko-KR
title: "How to give UITableViewCells a selected color other than gray"
description: "Article(s) > How to give UITableViewCells a selected color other than gray"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to give UITableViewCells a selected color other than gray"
    - property: og:description
      content: "How to give UITableViewCells a selected color other than gray"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray.html
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
  "title": "How to give UITableViewCells a selected color other than gray | UIKit - free Swift example code",
  "desc": "How to give UITableViewCells a selected color other than gray",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-give-uitableviewcells-a-selected-color-other-than-gray",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>Ever since iOS 7.0, table view cells have been gray when tapped, even when you specifically told Interface Builder you wanted them to be blue. Don't worry, though: it's an easy thing to change, as long as you don't mind writing three lines of code. Specifically, you need to add something like this to your <code>cellForRowAt</code> method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> backgroundView <span class="token operator">=</span> <span class="token class-name">UIView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
backgroundView<span class="token punctuation">.</span>backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">.</span>red
cell<span class="token punctuation">.</span>selectedBackgroundView <span class="token operator">=</span> backgroundView</code></pre>
<p>You can customize the view as much as you want to, but remember to keep the overall amount of work low to avoid hurting scroll performance.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-give-a-uistackview-a-background-color">How to give a UIStackView a background color</a></li><li><a href="/example-code/uikit/how-to-make-uitableviewcells-auto-resize-to-their-content">How to make UITableViewCells auto resize to their content</a></li><li><a href="/example-code/uikit/how-to-swipe-to-delete-uitableviewcells">How to swipe to delete UITableViewCells</a></li><li><a href="/quick-start/swiftui/how-to-give-a-view-a-custom-frame">How to give a view a custom frame</a></li><li><a href="/example-code/uikit/how-to-give-a-uinavigationbar-a-background-image-setbackgroundimage">How to give a UINavigationBar a background image: setBackgroundImage()</a></li></ul>
-->

:::

---

<TagLinks />