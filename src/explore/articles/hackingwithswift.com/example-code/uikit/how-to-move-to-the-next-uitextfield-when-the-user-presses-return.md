---
lang: ko-KR
title: "How to move to the next UITextField when the user presses return"
description: "Article(s) > How to move to the next UITextField when the user presses return"
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
      content: "Article(s) > How to move to the next UITextField when the user presses return"
    - property: og:description
      content: "How to move to the next UITextField when the user presses return"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return.html
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
  "title": "How to move to the next UITextField when the user presses return | UIKit - free Swift example code",
  "desc": "How to move to the next UITextField when the user presses return",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 2.0

<!-- TODO: 작성 -->

<!--
<p>If you’re in a situation where your iOS app has multiple <code>UITextField</code> instances lined up, users expect to be able to move between them by pressing Next/Return on their on-screen keyboard. There is no built-in way of making this happen, so we need to write code ourselves using one of several approaches.</p>
<p>The easiest approach is using view tags: give your text fields incrementing tag numbers, then make them all point to a common delegate – it might be your view controller, but it doesn’t need to be. </p>
<p>Once that’s done you can use the <code>becomeFirstResponder()</code> and <code>resignFirstResponder()</code> methods to manipulate which view is in control like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">func</span> <span class="token function-definition function">textFieldShouldReturn</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> textField<span class="token punctuation">:</span> <span class="token class-name">UITextField</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> nextTag <span class="token operator">=</span> textField<span class="token punctuation">.</span>tag <span class="token operator">+</span> <span class="token number">1</span>

    <span class="token keyword">if</span> <span class="token keyword">let</span> nextResponder <span class="token operator">=</span> textField<span class="token punctuation">.</span>superview<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">viewWithTag</span><span class="token punctuation">(</span>nextTag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        nextResponder<span class="token punctuation">.</span><span class="token function">becomeFirstResponder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        textField<span class="token punctuation">.</span><span class="token function">resignFirstResponder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span></code></pre>
<p>If you’re desperately opposed to using tags, the other solution is to place your labels in an array, find the position of the text field that triggered the event, then move one down in the array.</p>
<p><strong>Note:</strong> If you ever need to force the first responder to resign itself and aren’t sure which text field is in control, it’s easier to use <code>view.endEditing(true)</code>.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-detect-long-presses-using-uilongpressgesturerecognizer">How to detect long presses using UILongPressGestureRecognizer</a></li><li><a href="/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview">How to limit the number of characters in a UITextField or UITextView</a></li><li><a href="/example-code/uikit/how-to-hide-passwords-in-a-uitextfield">How to hide passwords in a UITextField</a></li><li><a href="/example-code/uikit/how-to-add-a-uitextfield-to-a-uialertcontroller">How to add a UITextField to a UIAlertController</a></li><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li></ul>
-->

:::

---

<TagLinks />