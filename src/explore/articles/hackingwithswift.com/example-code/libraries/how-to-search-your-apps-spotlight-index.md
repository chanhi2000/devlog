---
lang: ko-KR
title: "How to search your app’s Spotlight index"
description: "Article(s) > How to search your app’s Spotlight index"
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
  - ios-10.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to search your app’s Spotlight index"
    - property: og:description
      content: "How to search your app’s Spotlight index"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/libraries/how-to-search-your-apps-spotlight-index.html
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
  "title": "How to search your app’s Spotlight index | Libraries - free Swift example code",
  "desc": "How to search your app’s Spotlight index",
  "link": "https://hackingwithswift.com/example-code/libraries/how-to-search-your-apps-spotlight-index",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 10.0

<!-- TODO: 작성 -->

<!-- 
<p>If you choose to index your app’s content using Spotlight (and you should), you can then use more Core Spotlight code to search your own index from inside your app.</p>
<p>All the work is done using the <code>CSSearchQuery</code> class, which works asynchronously. You need to give it two closures to work with: one to call when it finds a matching item (which should append the item to a results array), and one to call when the search finishes, at which point you should update your UI with the search results.</p>
<p><code>CSSearchQuery</code> works similarly to Core Data – it even has the same approach to specifying search criteria. In this example we’re going to search for <code>"contentDescription == \"*\(text)*\"c"</code>, which means “find things that have a <code>contentDescription</code> value equal to any text, followed by our search text, then any text, using case-insensitive matching.</p>
<p>There are a few more things you need to know before I show you the code:</p>
<ol>
<li>Running a <code>CSSearchQuery</code> returns <code>CSSearchableItem</code> items, so we need to an array to store that data type.</li>
<li>We’ll be taking advantage of closure capturing to share that array between the “found items” closure and the “search is finished” handler.</li>
<li>Your closures can be called on any thread, so as you usually manipulate the UI when the search finishes you should push that work to the main thread.</li>
<li>You need to explicitly call <code>start()</code> on the search to make it begin.</li>
<li>In case a user types really fast, we want to a way to cancel the existing search before starting a new one. To make that happen, it’s a good idea to store the <code>CSSearchQuery</code> object as a property in the class, then call <code>cancel()</code> on it before searching.</li>
</ol>
<p>To try out the code below, add <code>import CoreSpotlight</code> to a view controller’s class, then give it a <code>CSSearchQuery?</code> property called <code>searchQuery</code>.</p>
<p>Now add this method:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">runSearch</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> allItems <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token class-name">CSSearchableItem</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    searchQuery<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> queryString <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"contentDescription == \"*</span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">text</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">*\"c"</span></span>
    searchQuery <span class="token operator">=</span> <span class="token class-name">CSSearchQuery</span><span class="token punctuation">(</span>queryString<span class="token punctuation">:</span> queryString<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>

    searchQuery<span class="token operator">?</span><span class="token punctuation">.</span>foundItemsHandler <span class="token operator">=</span> <span class="token punctuation">{</span> items <span class="token keyword">in</span>
        allItems<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>contentsOf<span class="token punctuation">:</span> items<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    searchQuery<span class="token operator">?</span><span class="token punctuation">.</span>completionHandler <span class="token operator">=</span> <span class="token punctuation">{</span> error <span class="token keyword">in</span>
        <span class="token class-name">DispatchQueue</span><span class="token punctuation">.</span>main<span class="token punctuation">.</span><span class="token keyword">async</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> <span class="token keyword">self</span><span class="token punctuation">]</span> <span class="token keyword">in</span>
            <span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">updateUI</span><span class="token punctuation">(</span>matches<span class="token punctuation">:</span> allItems<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    searchQuery<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>You’ll need to implement <code>updateUI()</code> to do something with your search results, such as updating a table view.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-use-core-spotlight-to-index-content-in-your-app">How to use Core Spotlight to index content in your app</a></li><li><a href="/quick-start/swiftui/how-to-add-search-tokens-to-a-search-field">How to add search tokens to a search field</a></li><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words">How to use UISearchController to let users enter search words</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />