---
lang: ko-KR
title: "How to add a UITextField to a UIAlertController"
description: "Article(s) > How to add a UITextField to a UIAlertController"
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
      content: "Article(s) > How to add a UITextField to a UIAlertController"
    - property: og:description
      content: "How to add a UITextField to a UIAlertController"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-add-a-uitextfield-to-a-uialertcontroller.html
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
  "title": "How to add a UITextField to a UIAlertController | UIKit - free Swift example code",
  "desc": "How to add a UITextField to a UIAlertController",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-add-a-uitextfield-to-a-uialertcontroller",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 8.0

<!-- TODO: 작성 -->

<!--
<p>The <code>UIAlertController</code> class from iOS 8.0 lets you add as many text fields as you need, and you can read the value of those text fields when the user taps a button.</p>
<p>The example below creates an alert controller with one button and a text field. When the button is tapped, the text of the text field is pulled out, at which point it's down to you to do something interesting with it:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">promptForAnswer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> ac <span class="token operator">=</span> <span class="token class-name">UIAlertController</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Enter answer"</span></span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token nil constant">nil</span><span class="token punctuation">,</span> preferredStyle<span class="token punctuation">:</span> <span class="token punctuation">.</span>alert<span class="token punctuation">)</span>
    ac<span class="token punctuation">.</span><span class="token function">addTextField</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">let</span> submitAction <span class="token operator">=</span> <span class="token class-name">UIAlertAction</span><span class="token punctuation">(</span>title<span class="token punctuation">:</span> <span class="token string-literal"><span class="token string">"Submit"</span></span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token keyword">default</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span><span class="token keyword">unowned</span> ac<span class="token punctuation">]</span> <span class="token omit keyword">_</span> <span class="token keyword">in</span>
        <span class="token keyword">let</span> answer <span class="token operator">=</span> ac<span class="token punctuation">.</span>textFields<span class="token operator">!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        <span class="token comment">// do something interesting with "answer" here</span>
    <span class="token punctuation">}</span>

    ac<span class="token punctuation">.</span><span class="token function">addAction</span><span class="token punctuation">(</span>submitAction<span class="token punctuation">)</span>

    <span class="token function">present</span><span class="token punctuation">(</span>ac<span class="token punctuation">,</span> animated<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span></code></pre>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview">How to limit the number of characters in a UITextField or UITextView</a></li><li><a href="/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return</a></li><li><a href="/example-code/uikit/how-to-hide-passwords-in-a-uitextfield">How to hide passwords in a UITextField</a></li><li><a href="/example-code/uikit/how-to-add-a-bar-button-to-a-navigation-bar">How to add a bar button to a navigation bar</a></li><li><a href="/example-code/uikit/how-to-add-a-uiapplicationshortcutitem-quick-action-for-3d-touch">How to add a UIApplicationShortcutItem quick action for 3D Touch</a></li></ul>
-->

:::

---

<TagLinks />