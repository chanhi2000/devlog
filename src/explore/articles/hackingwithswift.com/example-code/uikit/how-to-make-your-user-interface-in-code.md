---
lang: ko-KR
title: "How to make your user interface in code"
description: "Article(s) > How to make your user interface in code"
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
      content: "Article(s) > How to make your user interface in code"
    - property: og:description
      content: "How to make your user interface in code"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-make-your-user-interface-in-code.html
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
  "title": "How to make your user interface in code | UIKit - free Swift example code",
  "desc": "How to make your user interface in code",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-make-your-user-interface-in-code",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 9.0

<!-- TODO: 작성 -->

<!--
<p>Creating your user interface in code gives you the flexibility to build things conditionally, to step through problems in a debugger, to re-use components more easily, and to monitor changes more closely in source control. On the flip side, you lose features like easy segues, static cell design in table views, the ability to preview on multiple devices simultaneously, and more.</p>
<p>However, I’m going to assume you’ve already decided you want to make your UI in code, so let’s take a look at how it’s done:</p>
<p>Often you’ll see code like this inside the <code>viewDidLoad()</code> method of a view controller:</p>
<pre class=" language-swift"><code class=" language-swift">backgroundColor <span class="token operator">=</span> <span class="token class-name">UIColor</span><span class="token punctuation">(</span>white<span class="token punctuation">:</span> <span class="token number">0.9</span><span class="token punctuation">,</span> alpha<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> stackView <span class="token operator">=</span> <span class="token class-name">UIStackView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
stackView<span class="token punctuation">.</span>translatesAutoresizingMaskIntoConstraints <span class="token operator">=</span> <span class="token boolean">false</span>
stackView<span class="token punctuation">.</span>spacing <span class="token operator">=</span> <span class="token number">10</span>
view<span class="token punctuation">.</span><span class="token function">addSubview</span><span class="token punctuation">(</span>stackView<span class="token punctuation">)</span>

stackView<span class="token punctuation">.</span>topAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>topAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
stackView<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>leadingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
stackView<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">.</span><span class="token function">constraint</span><span class="token punctuation">(</span>equalTo<span class="token punctuation">:</span> view<span class="token punctuation">.</span>safeAreaLayoutGuide<span class="token punctuation">.</span>trailingAnchor<span class="token punctuation">)</span><span class="token punctuation">.</span>isActive <span class="token operator">=</span> <span class="token boolean">true</span>
stackView<span class="token punctuation">.</span>axis <span class="token operator">=</span> <span class="token punctuation">.</span>vertical

<span class="token keyword">let</span> notice <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
notice<span class="token punctuation">.</span>numberOfLines <span class="token operator">=</span> <span class="token number">0</span>
notice<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"Your child has attempted to share the following photo from the camera:"</span></span>
stackView<span class="token punctuation">.</span><span class="token function">addArrangedSubview</span><span class="token punctuation">(</span>notice<span class="token punctuation">)</span>

<span class="token keyword">let</span> imageView <span class="token operator">=</span> <span class="token class-name">UIImageView</span><span class="token punctuation">(</span>image<span class="token punctuation">:</span> shareImage<span class="token punctuation">)</span>
stackView<span class="token punctuation">.</span><span class="token function">addArrangedSubview</span><span class="token punctuation">(</span>imageView<span class="token punctuation">)</span>

<span class="token keyword">let</span> prompt <span class="token operator">=</span> <span class="token class-name">UILabel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
prompt<span class="token punctuation">.</span>numberOfLines <span class="token operator">=</span> <span class="token number">0</span>
prompt<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"What do you want to do?"</span></span>
stackView<span class="token punctuation">.</span><span class="token function">addArrangedSubview</span><span class="token punctuation">(</span>prompt<span class="token punctuation">)</span>

<span class="token keyword">for</span> option <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">"Always Allow"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Allow Once"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Deny"</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">"Manage Settings"</span></span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> button <span class="token operator">=</span> <span class="token class-name">UIButton</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token punctuation">.</span>system<span class="token punctuation">)</span>
    button<span class="token punctuation">.</span><span class="token function">setTitle</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span> <span class="token keyword">for</span><span class="token punctuation">:</span> <span class="token punctuation">.</span>normal<span class="token punctuation">)</span>
    stackView<span class="token punctuation">.</span><span class="token function">addArrangedSubview</span><span class="token punctuation">(</span>button<span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
<p>That’s a complex user interface, but if you’re writing that sort of thing inside your <code>viewDidLoad()</code> method you’re making a terrible mistake. In fact, if you write that kind of code and you aren’t just prototyping or learning something, then you lose all rights to complain that your view controllers are massive later on.</p>
<p>All the code above –&nbsp;literally all of it – is <em>view</em> code, and needs to be treated as such. It is not controller code, and even with Apple’s muddied definition of MVC it is not <em>view controller</em> code either. It’s view code, and belongs in a subclass of <code>UIView</code>.</p>
<p>This change is trivial to make: you copy all that code, paste it into a new subclass of <code>UIView</code> called <code>SharePromptView</code>, then change the class of your view controller to your new subclass. </p>
<p>The final <code>SharePromptView</code> class should look something like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">SharePromptView</span><span class="token punctuation">:</span> <span class="token class-name">UIView</span> <span class="token punctuation">{</span>
    <span class="token keyword">override</span> <span class="token keyword">init</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>frame<span class="token punctuation">:</span> frame<span class="token punctuation">)</span>
        <span class="token function">createSubviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">required</span> <span class="token keyword">init</span><span class="token operator">?</span><span class="token punctuation">(</span>coder aDecoder<span class="token punctuation">:</span> <span class="token class-name">NSCoder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token keyword">init</span><span class="token punctuation">(</span>coder<span class="token punctuation">:</span> aDecoder<span class="token punctuation">)</span>
        <span class="token function">createSubviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">createSubviews</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// all the layout code from above</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>All <code>UIView</code> subclasses must implement <code>init(coder:)</code>, but as you’re creating your UI in code you will also need to add <code>init(frame:)</code>. The <code>createSubviews()</code> method is there to support both.</p>
<p>Thanks to that custom <code>UIView</code> subclass you can now take a huge amount of code out of your view controller:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">ViewController</span><span class="token punctuation">:</span> <span class="token class-name">UIViewController</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> shareView <span class="token operator">=</span> <span class="token class-name">SharePromptView</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">loadView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        view <span class="token operator">=</span> shareView
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">viewDidLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>Having a dedicated <code>shareView</code> property allows you to access any properties you declare inside <code>SharePromptView</code> without having to keep casting <code>view</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/system/how-to-run-code-when-your-app-is-terminated">How to run code when your app is terminated</a></li><li><a href="/example-code/uikit/how-to-create-live-playgrounds-in-xcode">How to create live playgrounds in Xcode</a></li><li><a href="/quick-start/swiftui/how-to-use-instruments-to-profile-your-swiftui-code-and-identify-slow-layouts">How to use Instruments to profile your SwiftUI code and identify slow layouts</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/example-code/uikit/how-to-localize-your-ios-app">How to localize your iOS app</a></li></ul>
-->

:::

---

<TagLinks />