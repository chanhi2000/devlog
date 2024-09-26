---
lang: ko-KR
title: "How to create custom menus using UIMenuController"
description: "Article(s) > How to create custom menus using UIMenuController"
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
  - ios-3.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create custom menus using UIMenuController"
    - property: og:description
      content: "How to create custom menus using UIMenuController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-custom-menus-using-uimenucontroller.html
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
  "title": "How to create custom menus using UIMenuController | UIKit - free Swift example code",
  "desc": "How to create custom menus using UIMenuController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-custom-menus-using-uimenucontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.0

<!-- TODO: 작성 -->

<!--
<p>iOS has a built-in menu system that, while <em>useful</em>, doesn't actually get much <em>use</em> – because users don't expect to see it, developers don't use it, thus making it even less likely that users expect to see it.</p>
<p>Anyway, if you want to attach multiple actions to elements in your UI –&nbsp;pieces of text in a text view or web view, table view rows, and so on – you might find iOS menus are for you, so you need to turn to <code>UIMenuController</code>. This has extremely simple API: you just create a <code>UIMenuItem</code> object for every action you want, then register them all and wait for the user to do something.</p>
<p>Below is a complete example for a view controller that has a web view inside it – you'll need to create that in your storyboard. The code sets up a new menu item named "Grok" that runs the <code>runGrok()</code> method when tapped. I've made it do something real: when the user selects some text, they tap Grok to have that printed out to the Xcode console.</p>
<p>Here's the code:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span><span class="token punctuation">,</span> <span class="token class-name">UITextViewDelegate</span> <span class="token punctuation">{</span>
    <span class="token attribute atrule">@IBOutlet</span> <span class="token keyword">var</span> webView<span class="token punctuation">:</span> <span class="token class-name">UIWebView</span><span class="token operator">!</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

        webView<span class="token punctuation">.</span><span class="token function">loadHTMLString</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">"&lt;p&gt;Hello, world!&lt;/p&gt;"</span></span><span class="token punctuation">,</span> baseURL<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">)</span>
        <span class="token function">enableCustomMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">enableCustomMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> lookup <span class="token operator">=</span> <span class="token class-name">UIMenuItem</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Grok"</span></span><span class="token punctuation">,</span> action<span class="token punctuation">:</span> <span class="token other-directive property">#selector</span><span class="token punctuation">(</span>runGrok<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token class-name">UIMenuController</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>menuItems <span class="token operator">=</span> <span class="token punctuation">[</span>lookup<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">disableCustomMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UIMenuController</span><span class="token punctuation">.</span>shared<span class="token punctuation">.</span>menuItems <span class="token operator">=</span> <span class="token nil constant">nil</span>
    <span class="token punctuation">}</span>

    <span class="token attribute atrule">@objc</span> <span class="token keyword">func</span> <span class="token function-definition function">runGrok</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> text <span class="token operator">=</span> webView<span class="token punctuation">.</span><span class="token function">stringByEvaluatingJavaScript</span><span class="token punctuation">(</span>from<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"window.getSelection().toString();"</span></span><span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-create-popover-menus-using-uipopoverpresentationcontroller">How to create popover menus using UIPopoverPresentationController</a></li><li><a href="/quick-start/swiftui/how-to-create-multi-column-lists-using-table">How to create multi-column lists using Table</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/concurrency/how-to-use-mainactor-to-run-code-on-the-main-queue">How to use @MainActor to run code on the main queue</a></li><li><a href="/quick-start/swiftui/all-swiftui-property-wrappers-explained-and-compared">All SwiftUI property wrappers explained and compared</a></li></ul>
-->

:::

---

<TagLinks />