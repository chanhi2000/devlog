---
lang: ko-KR
title: "How to pass data between two view controllers"
description: "Article(s) > How to pass data between two view controllers"
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
  - ios-2.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to pass data between two view controllers"
    - property: og:description
      content: "How to pass data between two view controllers"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/how-to-pass-data-between-two-view-controllers.html
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
  "title": "How to pass data between two view controllers | System - free Swift example code",
  "desc": "How to pass data between two view controllers",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "link": "https://hackingwithswift.com/example-code/how-to-pass-data-between-two-view-controllers",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!-- 
<p>If you have a value in one view controller and want to pass it to another, there are two approaches: for passing data forward you should communicate using properties, and for passing data backwards you can either use a delegate or a block.</p>
<p>Passing data forward is used when you want to show some information in a detail view controller. For example, view controller A might contain a list of names that the user can select, and view controller B might show some detailed information on a single name that the user selected. In this case, you would create a property on B like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewControllerB</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> selectedName<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span>
<span class="token punctuation">}</span></code></pre>
<p>How you set that property depends on how are you showing the detail view controller. For example, if you're using a <code>UINavigationController</code> and want to push the new view controller onto the stack, you would write this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> viewControllerB <span class="token operator">=</span> <span class="token class-name">ViewControllerB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
viewControllerB<span class="token punctuation">.</span>selectedName <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
navigationController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>viewControllerB<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>If you're using segues, you'll want to use code like this instead:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">prepare</span><span class="token punctuation">(</span><span class="token keyword">for</span> segue<span class="token punctuation">:</span> <span class="token class-name">UIStoryboardSegue</span><span class="token punctuation">,</span> sender<span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> segue<span class="token punctuation">.</span>identifier <span class="token operator">==</span> <span class="token string-literal"><span class="token string">"showDetail"</span></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token keyword">let</span> indexPath <span class="token operator">=</span> <span class="token keyword">self</span><span class="token punctuation">.</span>tableView<span class="token punctuation">.</span>indexPathForSelectedRow <span class="token punctuation">{</span>
            <span class="token keyword">let</span> controller <span class="token operator">=</span> segue<span class="token punctuation">.</span>destination <span class="token keyword">as</span><span class="token operator">!</span> <span class="token class-name">ViewControllerB</span>
            controller<span class="token punctuation">.</span>selectedName <span class="token operator">=</span> objects<span class="token punctuation">[</span>indexPath<span class="token punctuation">.</span>row<span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>To pass data back, the most common approach is to create a delegate property in your detail view controller, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewControllerB</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> selectedName<span class="token punctuation">:</span> <span class="token class-name">String</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Anonymous"</span></span>
    <span class="token keyword">weak</span> <span class="token keyword">var</span> delegate<span class="token punctuation">:</span> <span class="token class-name">ViewControllerA</span><span class="token operator">!</span>
<span class="token punctuation">}</span></code></pre>
<p>When creating your detail view controller, make sure you set up its <code>delegate</code> property, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">let</span> viewControllerB <span class="token operator">=</span> <span class="token class-name">ViewControllerB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
viewControllerB<span class="token punctuation">.</span>selectedName <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Taylor Swift"</span></span>
viewControllerB<span class="token punctuation">.</span>delegate <span class="token operator">=</span> <span class="token keyword">self</span>
navigationController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">pushViewController</span><span class="token punctuation">(</span>viewControllerB<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span></code></pre>
<p>With this set up complete, you can now create a method in your master view controller that should be called by the detail view controller. For example, you might have something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">updatedSelectedName</span><span class="token punctuation">(</span>newName<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something with newName</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/language/how-to-pass-the-fizz-buzz-test">How to pass the Fizz Buzz test</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-disable-interactive-swipe-to-dismiss-for-view-controllers">How to disable interactive swipe to dismiss for view controllers</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li><li><a href="/quick-start/swiftui/whats-the-difference-between-observedobject-state-and-environmentobject">What’s the difference between @ObservedObject, @State, and @EnvironmentObject?</a></li></ul>
-->

:::

---

<TagLinks />