---
lang: ko-KR
title: "How to limit the number of characters in a UITextField or UITextView"
description: "Article(s) > How to limit the number of characters in a UITextField or UITextView"
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
  - ios-7.0
  - xcode
  - appstore
head:
  - - meta:
    - property: og:title
      content: "Article(s) > How to limit the number of characters in a UITextField or UITextView"
    - property: og:description
      content: "How to limit the number of characters in a UITextField or UITextView"
    - property: og:url
      content: https://chanhi2000.github.io/explore/articles/hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview.html
date: 2019-09-19
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
  "title": "How to limit the number of characters in a UITextField or UITextView | UIKit - free Swift example code",
  "desc": "How to limit the number of characters in a UITextField or UITextView",
  "link": "https://hackingwithswift.com/example-code/uikit/how-to-limit-the-number-of-characters-in-a-uitextfield-or-uitextview",
  "logo": "https://hackingwithswift.com/favicon.svg",
  "background": "rgba(174,10,10,0.2)"
}
```

> Available from iOS 7.0

<!-- TODO: 작성 -->

<!--
<p>If you have a <code>UITextField</code> or <code>UITextView</code> and want to stop users typing in more than a certain number of letters, you need to set yourself as the delegate for the control then implement either <code>shouldChangeCharactersIn</code> (for text fields) or <code>shouldChangeTextIn</code> (for text views).</p>
<p>Next, add one of these two methods, depending on whether you are working with text fields (single line) or text views (multiple lines):</p>
<pre class=" language-swift"><code class=" language-swift"><span class="token comment">// Use this if you have a UITextField</span>
<span class="token keyword">func</span> <span class="token function-definition function">textField</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> textField<span class="token punctuation">:</span> <span class="token class-name">UITextField</span><span class="token punctuation">,</span> shouldChangeCharactersIn range<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">,</span> replacementString string<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// get the current text, or use an empty string if that failed</span>
    <span class="token keyword">let</span> currentText <span class="token operator">=</span> textField<span class="token punctuation">.</span>text <span class="token operator">??</span> <span class="token string-literal"><span class="token string">""</span></span>

    <span class="token comment">// attempt to read the range they are trying to change, or exit if we can't</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> stringRange <span class="token operator">=</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>range<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> currentText<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>

    <span class="token comment">// add their new text to the existing text</span>
    <span class="token keyword">let</span> updatedText <span class="token operator">=</span> currentText<span class="token punctuation">.</span><span class="token function">replacingCharacters</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> stringRange<span class="token punctuation">,</span> with<span class="token punctuation">:</span> string<span class="token punctuation">)</span>

    <span class="token comment">// make sure the result is under 16 characters</span>
    <span class="token keyword">return</span> updatedText<span class="token punctuation">.</span>count <span class="token operator">&lt;=</span> <span class="token number">16</span>
<span class="token punctuation">}</span>

<span class="token comment">// Use this if you have a UITextView</span>
<span class="token keyword">func</span> <span class="token function-definition function">textView</span><span class="token punctuation">(</span><span class="token omit keyword">_</span> textView<span class="token punctuation">:</span> <span class="token class-name">UITextView</span><span class="token punctuation">,</span> shouldChangeTextIn range<span class="token punctuation">:</span> <span class="token class-name">NSRange</span><span class="token punctuation">,</span> replacementText text<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">Bool</span> <span class="token punctuation">{</span>
    <span class="token comment">// get the current text, or use an empty string if that failed</span>
    <span class="token keyword">let</span> currentText <span class="token operator">=</span> textView<span class="token punctuation">.</span>text <span class="token operator">??</span> <span class="token string-literal"><span class="token string">""</span></span>

    <span class="token comment">// attempt to read the range they are trying to change, or exit if we can't</span>
    <span class="token keyword">guard</span> <span class="token keyword">let</span> stringRange <span class="token operator">=</span> <span class="token class-name">Range</span><span class="token punctuation">(</span>range<span class="token punctuation">,</span> <span class="token keyword">in</span><span class="token punctuation">:</span> currentText<span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>

    <span class="token comment">// add their new text to the existing text</span>
    <span class="token keyword">let</span> updatedText <span class="token operator">=</span> currentText<span class="token punctuation">.</span><span class="token function">replacingCharacters</span><span class="token punctuation">(</span><span class="token keyword">in</span><span class="token punctuation">:</span> stringRange<span class="token punctuation">,</span> with<span class="token punctuation">:</span> text<span class="token punctuation">)</span>

    <span class="token comment">// make sure the result is under 16 characters</span>
    <span class="token keyword">return</span> updatedText<span class="token punctuation">.</span>count <span class="token operator">&lt;=</span> <span class="token number">16</span>
<span class="token punctuation">}</span></code></pre>
<p>I've specified 16 as the maximum number of characters, but just change that to whatever you need.</p>
-->

::: details Similar solutions…

<!--
<ul><li><a href="/quick-start/swiftui/how-to-limit-the-number-of-items-in-a-fetch-request">How to limit the number of items in a fetch request</a></li><li><a href="/quick-start/swiftui/how-to-make-voiceover-read-characters-individually">How to make VoiceOver read characters individually</a></li><li><a href="/example-code/uikit/how-to-pad-a-uitextview-by-setting-its-text-container-inset">How to pad a UITextView by setting its text container inset</a></li><li><a href="/example-code/uikit/how-to-move-to-the-next-uitextfield-when-the-user-presses-return">How to move to the next UITextField when the user presses return</a></li><li><a href="/example-code/uikit/how-to-hide-passwords-in-a-uitextfield">How to hide passwords in a UITextField</a></li></ul>
-->

:::

---

<TagLinks />