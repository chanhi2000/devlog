---
lang: ko-KR
title: "How to add scopes to a UISearchController"
description: "Article(s) > How to add scopes to a UISearchController"
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
      content: "Article(s) > How to add scopes to a UISearchController"
    - property: og:description
      content: "How to add scopes to a UISearchController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller.html
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
  "title": "How to add scopes to a UISearchController | UIKit - free Swift example code",
  "desc": "How to add scopes to a UISearchController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-scopes-to-a-uisearchcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>By default a <code>UISearchController</code> provides just a text input field, but with a few small changes you can make it add scopes buttons underneath to let the user control how their search happens.</p>
<p>First, make your view controller conform to <code>UISearchBarDelegate</code> as well as <code>UISearchResultsUpdating</code>.</p>
<p>You need to add two new lines where you create your search controller: one to add the scope button titles you want to use, and one to tell the search bar to report changes back to the view controller:</p>
<pre class=" language-swift"><code class=" language-swift">search<span class="token punctuation">.</span>searchBar<span class="token punctuation">.</span>scopeButtonTitles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Friends"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Everyone"</span></span><span class="token punctuation">]</span>
search<span class="token punctuation">.</span>searchBar<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span></code></pre>
<p>Finally, implement the <code>selectedScopeButtonIndexDidChange</code> method so you get notified when the user tapped a scope button:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">searchBar</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> searchBar<span class="token punctuation">:</span> <span class="token class-name">UISearchBar</span><span class="token punctuation">,</span> selectedScopeButtonIndexDidChange selectedScope<span class="token punctuation">:</span> <span class="token class-name">Int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"New scope index is now </span><span class="token interpolation-punctuation punctuation">\(</span><span class="token interpolation">selectedScope</span><span class="token interpolation-punctuation punctuation">)</span><span class="token string">"</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>You can read the selected index at any time by using the <code>searchController.searchBar.selectedScopeButtonIndex</code> property.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-use-uisearchcontroller-to-let-users-enter-search-words">How to use UISearchController to let users enter search words</a></li><li><a href="/example-code/uikit/how-to-stop-your-uisearchcontroller-bar-hiding-when-you-scroll">How to stop your UISearchController bar hiding when you scroll</a></li><li><a href="/quick-start/swiftui/how-to-add-a-search-bar-to-filter-your-data">How to add a search bar to filter your data</a></li><li><a href="/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a></li><li><a href="/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a></li></ul>
-->

:::

---

<TagLinks />