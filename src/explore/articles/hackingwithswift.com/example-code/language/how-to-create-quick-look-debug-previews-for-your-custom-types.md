---
lang: ko-KR
title: "How to create Quick Look debug previews for your custom types"
description: "Article(s) > How to create Quick Look debug previews for your custom types"
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
      content: "Article(s) > How to create Quick Look debug previews for your custom types"
    - property: og:description
      content: "How to create Quick Look debug previews for your custom types"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types.html
date: 2019-03-28
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
  "title": "How to create Quick Look debug previews for your custom types | Language - free Swift example code",
  "desc": "How to create Quick Look debug previews for your custom types",
  "link": "https://hackingwithswift.com/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!-- 
<p>Xcode’s Quick Look debugging allows us to visually preview the value of our types, and is capable of showing numbers, strings, attributed strings, colors, images, PDFs, Bezier paths, and more.</p>
<p>By default your custom types don’t have a Quick Look preview, so you won’t see anything useful. But if you add the <code>debugQuickLookObject()</code> method to your type then you can return something you want from there to have it show up in Xcode:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Duane Dibbley"</span></span>
    <span class="token keyword">var</span> age <span class="token operator">=</span> <span class="token number">28</span>

    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">debugQuickLookObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token keyword">Any</span><span class="token operator">?</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string-literal"><span class="token string">"My name is </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">name</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string"> and I'm </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">age</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">."</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That will show a string inside Xcode, but you could also format the string with attributes, create an image of your game board, and so on.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-use-state-inside-swiftui-previews-using-previewable">How to use @State inside SwiftUI previews using @Previewable</a></li><li><a href="/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller">How to preview files using Quick Look and QLPreviewController</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet</a></li><li><a href="/example-code/location/how-to-look-up-a-location-with-mklocalsearchrequest">How to look up a location with MKLocalSearch.Request</a></li></ul>
-->

:::

---

<TagLinks />