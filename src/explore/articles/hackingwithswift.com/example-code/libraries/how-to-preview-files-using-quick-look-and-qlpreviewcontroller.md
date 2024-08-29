---
lang: ko-KR
title: "How to preview files using Quick Look and QLPreviewController"
description: "Article(s) > How to preview files using Quick Look and QLPreviewController"
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
  - ios-4.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to preview files using Quick Look and QLPreviewController"
    - property: og:description
      content: "How to preview files using Quick Look and QLPreviewController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller.html
date: 2019-03-28
isOriginal: false
---

# {{ $frontmatter.title }} 관련

```component VPCard
{
  "title": "Libraries - free Swift example code",
  "desc": "Learn Swift coding for iOS with these free tutorials – learn Swift, iOS, and Xcode",
  "link": "/explore/articles/hackingwithswift.com/example-code/libraries/README.md",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

[[toc]]

---

```component VPCard
{
  "title": "How to preview files using Quick Look and QLPreviewController | Libraries - free Swift example code",
  "desc": "How to preview files using Quick Look and QLPreviewController",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-preview-files-using-quick-look-and-qlpreviewcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 4.0

<!-- TODO: 작성 -->

<!-- 
<p>Apple’s Quick Look framework lets you embed previewing for a huge range of file types, including iWork documents, Microsoft Office documents, PDFs, images, and more, all without writing much code. </p>
<p>First, import the QuickLook framework, then make your view controller conform to the <code>QLPreviewControllerDataSource</code> protocol. This protocol lets you provide items to Quick Look, which should be URLs pointing to whatever documents you’re trying to preview.</p>
<p>Now go ahead and create and present an instance of <code>QLPreviewController</code>, setting your view controller to be its data source:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> previewController <span class="token operator">=</span> <span class="token class-name">QLPreviewController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
previewController<span class="token punctuation">.</span>dataSource <span class="token operator">=</span> <span class="token keyword">self</span>
<span class="token function">present</span><span class="token punctuation">(</span>previewController<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>There are two methods you need to implement: how many items your Quick Look controller should show, and the URL for each item. The first of those is just a matter of returning an integer from <code>numberOfPreviewItems()</code>:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">numberOfPreviewItems</span><span class="token punctuation">(</span><span class="token keyword">in</span> controller<span class="token punctuation">:</span> <span class="token class-name">QLPreviewController</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Int</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">3</span>
<span class="token punctuation">}</span></code></pre>
<p>Now for the important part: Quick Look will call a <code>previewItemAt</code> method for each item you want to preview, and you need to pass back a <code>QLPreviewItem</code> pointing at it.</p>
<p>For this example I added three PDF files –&nbsp;0.pdf, 1.pdf, and 2.pdf – to my project, so I’m going to pass back URLs to each of them. <code>URL</code> conforms to <code>QLPreviewItem</code> already, so we can just do an <code>as</code> typecast to make this work:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">previewController</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> controller<span class="token punctuation">:</span> <span class="token class-name">QLPreviewController</span><span class="token punctuation">,</span> previewItemAt index<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">QLPreviewItem</span> <span class="token punctuation">{</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token class-name">Bundle</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token function">url</span><span class="token punctuation">(</span>forResource<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">,</span> withExtension<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"pdf"</span></span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">fatalError</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Could not load </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">index</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">.pdf"</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> url <span class="token keyword">as</span> <span class="token class-name">QLPreviewItem</span>
<span class="token punctuation">}</span></code></pre>
<p>When that runs you’ll be able to swipe horizontally through Quick Look items, or swipe up and down through pages in your PDFs.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/example-code/language/how-to-create-quick-look-debug-previews-for-your-custom-types">How to create Quick Look debug previews for your custom types</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/example-code/libraries/how-to-make-empty-uitableviews-look-more-attractive-using-dznemptydataset">How to make empty UITableViews look more attractive using DZNEmptyDataSet</a></li></ul>
-->

:::

---

<TagLinks />