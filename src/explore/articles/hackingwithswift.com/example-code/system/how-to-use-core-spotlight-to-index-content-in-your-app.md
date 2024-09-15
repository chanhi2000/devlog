---
lang: ko-KR
title: "How to use Core Spotlight to index content in your app"
description: "Article(s) > How to use Core Spotlight to index content in your app"
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
      content: "Article(s) > How to use Core Spotlight to index content in your app"
    - property: og:description
      content: "How to use Core Spotlight to index content in your app"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-use-core-spotlight-to-index-content-in-your-app.html
date: 2018-03-28
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
  "title": "How to use Core Spotlight to index content in your app | System - free Swift example code",
  "desc": "How to use Core Spotlight to index content in your app",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-use-core-spotlight-to-index-content-in-your-app",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!-- 
<p>One particularly popular feature in iOS 9.0 is the ability to have your app's content appear inside the iOS Spotlight search so that users can search it alongside their other device content.</p>
<p>First up, add these two imports to your class:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">import</span> <span class="token class-name">CoreSpotlight</span>
<span class="token keyword">import</span> <span class="token class-name">MobileCoreServices</span></code></pre>
<p>Now I'm going to give you the code to handle indexing an item, and for this we'll create a method called <code>indxItem()</code> that takes three parameters: the title of the item, a description string for the item, plus a unique identifier. What that unique identifier is depends on you project, but it should be a string. Here's the method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">indexItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> desc<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span> identifier<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> attributeSet <span class="token operator">=</span> <span class="token class-name">CSSearchableItemAttributeSet</span><span class="token punctuation">(</span>itemContentType<span class="token punctuation">:</span> <span class="token constant">kUTTypeText</span> <span class="token keyword">as</span> <span class="token class-name">String</span><span class="token punctuation">)</span>
    attributeSet<span class="token punctuation">.</span>title <span class="token operator">=</span> title
    attributeSet<span class="token punctuation">.</span>contentDescription <span class="token operator">=</span> desc

    <span class="token keyword">let</span> item <span class="token operator">=</span> <span class="token class-name">CSSearchableItem</span><span class="token punctuation">(</span>uniqueIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">identifier</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">,</span> domainIdentifier<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"com.hackingwithswift"</span></span><span class="token punctuation">,</span> attributeSet<span class="token punctuation">:</span> attributeSet<span class="token punctuation">)</span>
    <span class="token class-name">CSSearchableIndex</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexSearchableItems</span><span class="token punctuation">(</span><span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> error <span class="token keyword">in</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Indexing error: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Search item successfully indexed!"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>That wraps the title and description up inside a <code>CSSearchableItemAttributeSet</code>, which in turn goes inside a <code>CSSearchableItem</code>, and from there to Spotlight to index. If you have several items to index you can have them processed all at once and it works faster.</p>
<p>Note that you should change <code>domainIdentifier</code> to your own domain, e.g. <code>com.yoursite</code>.</p>
<p>Now that your item is indexed, it will be available in Spotlight searches immediately. If a user finds one of your index items and taps it, your app will get launched and you should be able to pull out the unique identifier of the item that was tapped – this tells you what item was tapped so that you can take appropriate action.</p>
<p>Put this code inside your app delegate, along with an import for CoreSpotlight:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">application</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> application<span class="token punctuation">:</span> <span class="token class-name">UIApplication</span><span class="token punctuation">,</span> <span class="token keyword">continue</span><span class="token label important"> userActivity</span><span class="token punctuation">:</span> <span class="token class-name">NSUserActivity</span><span class="token punctuation">,</span> restorationHandler<span class="token punctuation">:</span> <span class="token attribute atrule">@escaping</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token class-name">UIUserActivityRestoring</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Void</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> userActivity<span class="token punctuation">.</span>activityType <span class="token operator">==</span> <span class="token class-name">CSSearchableItemActionType</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> uniqueIdentifier <span class="token operator">=</span> userActivity<span class="token punctuation">.</span>userInfo<span class="token operator">?</span><span class="token punctuation">[</span><span class="token class-name">CSSearchableItemActivityIdentifier</span><span class="token punctuation">]</span> <span class="token keyword">as</span><span class="token operator">?</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
            <span class="token function">doSomethingCoolWith</span><span class="token punctuation">(</span>uniqueIdentifier<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>That's it!</p>
<p>For the sake of completeness, here's how you remove an item from the Spotlight index:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">deindexItem</span><span class="token punctuation">(</span>identifier<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">CSSearchableIndex</span><span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deleteSearchableItems</span><span class="token punctuation">(</span>withIdentifiers<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">identifier</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> error <span class="token keyword">in</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> error <span class="token operator">=</span> error <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Deindexing error: </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">error<span class="token punctuation">.</span>localizedDescription</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"Search item successfully removed!"</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/libraries/how-to-search-your-apps-spotlight-index">How to search your app’s Spotlight index</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname">How to change your app icon dynamically with setAlternateIconName()</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li></ul>
-->

:::

---

<TagLinks />