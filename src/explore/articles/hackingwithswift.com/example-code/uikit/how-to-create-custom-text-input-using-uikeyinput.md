---
lang: ko-KR
title: "How to create custom text input using UIKeyInput"
description: "Article(s) > How to create custom text input using UIKeyInput"
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
  - ios-3.2
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to create custom text input using UIKeyInput"
    - property: og:description
      content: "How to create custom text input using UIKeyInput"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput.html
date: 2020-04-23
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
  "title": "How to create custom text input using UIKeyInput | UIKit - free Swift example code",
  "desc": "How to create custom text input using UIKeyInput",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-create-custom-text-input-using-uikeyinput",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 3.2

<!-- TODO: 작성 -->

<!--
<p>Although we can use <code>pressesBegan()</code> and <code>pressesEnded()</code> to read keypresses, they won’t show the on-screen keyboard and so won’t let you provide custom text input for users without a hardware keyboard. If you need that keyboard to be shown, you should create a class that adopts the <code>UIKeyInput</code> protocol instead, which has just three requirements:</p>
<ul>
<li>What to do when text is inserted.</li>
<li>What to do when text is deleted.</li>
<li>Whether your custom text input currently has text or not.</li>
</ul>
<p>The only other thing you need to know is that your custom input control will show the keyboard when it becomes first responder. So, you should override the <code>canBecomeFirstResponder</code> property of your subclass, setting it to true rather than the default of false.</p>
<p>To demonstrate this, we could create a simple <code>UIView</code> subclass that draws text to the screen as it’s typed, like this:</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token keyword">class</span> <span class="token class-name">TextRenderingView</span><span class="token punctuation">:</span> <span class="token class-name">UIView</span><span class="token punctuation">,</span> <span class="token class-name">UIKeyInput</span> <span class="token punctuation">{</span>
    <span class="token comment">// the string we'll be drawing</span>
    <span class="token keyword">var</span> input <span class="token operator">=</span> <span class="token string-literal"><span class="token string">""</span></span>

    <span class="token keyword">override</span> <span class="token keyword">var</span> canBecomeFirstResponder<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        <span class="token boolean">true</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> hasText<span class="token punctuation">:</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
        input<span class="token punctuation">.</span>isEmpty <span class="token operator">==</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">insertText</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> text<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        input <span class="token operator">+=</span> text
        <span class="token function">setNeedsDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">func</span> <span class="token function-definition function">deleteBackward</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token omit keyword">_</span> <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">popLast</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">setNeedsDisplay</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">override</span> <span class="token keyword">func</span> <span class="token function-definition function">draw</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> rect<span class="token punctuation">:</span> <span class="token class-name">CGRect</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> attrs<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token class-name">NSAttributedString</span><span class="token punctuation">.</span><span class="token class-name">Key</span><span class="token punctuation">:</span> <span class="token keyword">Any</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">.</span>font<span class="token punctuation">:</span> <span class="token class-name">UIFont</span><span class="token punctuation">.</span><span class="token function">systemFont</span><span class="token punctuation">(</span>ofSize<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
        <span class="token keyword">let</span> attributedString <span class="token operator">=</span> <span class="token class-name">NSAttributedString</span><span class="token punctuation">(</span>string<span class="token punctuation">:</span> input<span class="token punctuation">,</span> attributes<span class="token punctuation">:</span> attrs<span class="token punctuation">)</span>
        attributedString<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> rect<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
<p>If you want to handle more complex user input, such as selecting ranges of text or drawing the caret, you should use the more advanced <code>UITextInput</code> protocol instead.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/example-code/uikit/how-to-detect-keyboard-input-using-pressesbegan-and-pressesended">How to detect keyboard input using pressesBegan() and pressesEnded()</a></li><li><a href="/example-code/language/how-to-check-for-valid-method-input-using-the-guard-keyword">How to check for valid method input using the guard keyword</a></li><li><a href="/quick-start/swiftui/swiftui-tips-and-tricks">SwiftUI tips and tricks</a></li><li><a href="/quick-start/swiftui/how-to-create-custom-text-effects-and-animations">How to create custom text effects and animations</a></li><li><a href="/quick-start/swiftui/how-to-add-advanced-text-styling-using-attributedstring">How to add advanced text styling using AttributedString</a></li></ul>
-->

:::

---

<TagLinks />